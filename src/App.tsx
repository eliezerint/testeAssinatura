import React, {useState, useEffect, useCallback} from 'react';
import {
  Input,
  Button,
  Box,
  extendTheme,
  NativeBaseProvider,
  KeyboardAvoidingView,
  Center,
  VStack,
  Heading,
  Text,
} from 'native-base';
import axios from 'axios';
import {CrossPki, PKCertificate, DigestAlgorithm} from 'react-native-cross-pki';
import forge from 'node-forge';

import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';

const theme = extendTheme({
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'dark',
  },
});

interface ICertificado extends PKCertificate {
  vencido: boolean;
  userInvalid: boolean;
}

export type ITheme = typeof theme;

export default function App() {
  const [certBase64, setCertBase64] = useState<string>('');

  const [loadingDownload, setLoadingDownload] = useState(false);

  const [cpf, setCpf] = React.useState('');

  async function downloadCertificate() {
    console.log('teste passou aki');
    try {
      const value =
        '1:42:+9rgw53O8Y+XOWlBKpsjaYpRcL9BVZ7ce0pe1BXFJgM=:d758f95f-b6ac-4c4d-9ba1-f13be13bf829';
      //'1:42:Vax+HyRKUZN/d4hJoWGnN/pcGRyz8jSn9ZBeAvUQKxw=:73bb313b-5a2b-40ab-ada4-13fcc5ac1978';

      console.log('teste : ' + JSON.stringify(value));
      const [, , key, uuidCert] = value.split(':');

      console.log(value.split(':'));
      const response = await axios.get(
        `https://webpkiapp.com/Api/Upload/${uuidCert}`,
      );
      const certEncrypted = response.data;
      console.log(response);

      console.log(response.data);

      const certDescriptedBase64 = descriptCertificate(certEncrypted, key);

      console.log(certDescriptedBase64);
      setCertBase64(certDescriptedBase64);
      setLoadingDownload(false);
    } catch (error: any) {
      setLoadingDownload(false);
      throw new Error(error);
    }
  }

  function descriptCertificate(encrypted: string, key: string) {
    var keyBytes = forge.util.decode64(key);

    var buffer = forge.util.createBuffer();
    buffer.putBytes(forge.util.decode64(encrypted));
    var iv = buffer.getBytes(16);
    var hmacCheck = buffer.getBytes(32);
    var ciphertext = buffer.bytes();

    var hmac = forge.hmac.create();
    hmac.start('sha256', keyBytes);
    hmac.update(ciphertext);
    var computedHmac = hmac.digest().bytes();

    if (computedHmac !== hmacCheck) {
      throw new Error(
        'Erro ao validar certificado, contate seu local de acerto. (integridade)',
      );
    }

    var decipher = forge.cipher.createDecipher('AES-CBC', keyBytes);
    decipher.start({iv: iv});
    decipher.update(buffer);
    var result = decipher.finish();

    if (!result) {
      throw new Error(
        'Erro ao validar certificado, contate seu local de acerto. (encrypt)',
      );
    }

    return forge.util.encode64(decipher.output.getBytes());
  }

  const [certificados, setCertificados] = useState<ICertificado[]>([]);

  const obterCertificados = useCallback(async () => {
    try {
      const certificates = await CrossPki.listCertificatesWithKey();
      console.log('consulta ' + JSON.stringify(certificates[0].encoded));

      const toSignData = ;

      // sign data with selected certificate
      let signature = await CrossPki.signData(
        certificates[0].thumbprint,
        DigestAlgorithm.sha256,
        toSignData,
      );

      console.log(signature);

      console.log(certificates);
      setCertificados(
        certificates.reduce((acc, item) => {
          const vencido =
            new Date(item.validityEnd).getTime() < new Date().getTime();
          const userInvalid = false;
          acc.push({...item, vencido, userInvalid});
          return acc;
        }, [] as ICertificado[]),
      );
    } catch (error) {
      throw new Error('CertificadosImportados');
    }
  }, []);

  async function handleSubmit() {
    try {
      const data = {senha: '102030'};
      const userApp = {cpf: '06136004950'};

      let allCerts = await CrossPki.listCertificatesWithKey();
      console.log('gravar ' + allCerts.encode);
      const allThumbBefore = allCerts.map(({thumbprint}) => thumbprint);
      await CrossPki.importPkcs12(certBase64, data.senha);
      const result = await CrossPki.listCertificatesWithKey();
      if (result.length === 0) {
        throw new Error(
          'Erro ao importar certificado, nenhum certificado válido encontrado',
        );
      }
      allCerts = await CrossPki.listCertificatesWithKey();
      const allThumbAfter: string[] = allCerts.map(
        ({thumbprint}) => thumbprint,
      );

      const thumbImported = allThumbAfter.find(
        val => !allThumbBefore.includes(val),
      );
      if (!thumbImported) {
        const toFindDuplicates = allThumbAfter.filter(
          (item, index) => allThumbAfter.indexOf(item) !== index,
        );
        if (toFindDuplicates.length > 0) {
          await CrossPki.removeCertificate(toFindDuplicates[0]);
        }
        throw new Error('Certificado já importado anteriormente');
      }

      const certImportado = allCerts.find(
        ({thumbprint}) => thumbprint === thumbImported,
      );
      if (!certImportado) {
        throw new Error('Certificado não encontrado');
      }

      if (certImportado?.pkiBrazil?.cpf !== userApp?.cpf) {
        await CrossPki.removeCertificate(certImportado.thumbprint);
        throw new Error(
          `O CPF do certificado não é o mesmo do usuário do App.\nCPF do Usuário: ${userApp?.cpf} CPF do certificado: ${certImportado.pkiBrazil.cpfFormatted}`,
        );
      }
    } catch (error: any) {
      if (error?.message?.includes('wrongPassword')) {
        throw new Error('Senha do certificado incorreta');
      }
    }
  }

  const [value, setValue] = React.useState('');
  const [valueCarregaCert, setValueCarregaCert] = React.useState('');

  const handleChange = text => setValue(text);

  const handleChangeCpf = text => setCpf(text);

  const handleChangeValidaCert = text => setValueCarregaCert(text);

  useEffect(() => {}, [value]);

  return (
    <NativeBaseProvider theme={theme}>
      <Box alignItems="center">
        <KeyboardAvoidingView>
          <Input
            value={cpf}
            onChangeText={handleChangeCpf}
            w="50%"
            py="0"
            h="20"
            placeholder="Password"
          />

          <Input
            value={value}
            onChangeText={handleChange}
            type={'text'}
            w="100%"
            h="20%"
            py="0"
            m="5"
            InputRightElement={
              <Button
                size="xs"
                rounded="none"
                w="50%"
                h="50%"
                mr="10"
                value={value}
                onPress={downloadCertificate}>
                {'Import'}
              </Button>
            }
            placeholder="testeImport"
          />

          <Button
            size="xs"
            rounded="none"
            w="100%"
            h="10%"
            mr="10"
            onPress={handleSubmit}>
            {'Grava'}
          </Button>

          <Input
            value={valueCarregaCert}
            onChangeText={handleChangeValidaCert}
            type={'text'}
            w="100%"
            h="20%"
            py="0"
            m="5"
            InputRightElement={
              <Button
                size="xs"
                rounded="none"
                w="50%"
                h="50%"
                mr="10"
                value={valueCarregaCert}
                onPress={obterCertificados}>
                {'consulta'}
              </Button>
            }
            placeholder="TesteConsulta"
          />
        </KeyboardAvoidingView>
      </Box>
    </NativeBaseProvider>
  );
  
          }
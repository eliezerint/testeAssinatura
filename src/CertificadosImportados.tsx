import React, {useState, useCallback, useEffect, Fragment} from 'react';
import {CrossPki, PKCertificate} from 'react-native-cross-pki';

interface ICertificado extends PKCertificate {
  vencido: boolean;
  userInvalid: boolean;
}

export default function CertificadosImportados() {
  const [certificados, setCertificados] = useState<ICertificado[]>([]);

  const obterCertificados = useCallback(async () => {
    try {
      const certificates = await CrossPki.listCertificatesWithKey();
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

  /*async function removerCertificado(thumbprint: string) {
    Dialog.show({
      type: 'none',
      title: 'Excluir certificado',
      message:
        'Deseja excluir por completo o certificado armazenado no smartphone?',
      actions: [
        {
          text: 'Sim, excluir',
          onPress: async () => {
            try {
              await CrossPki.removeCertificate(thumbprint);
              await obterCertificados();
            } catch (error) {
              throw new Error('removerCertificado');
            }
          },
          color: 'danger',
        },
        {
          text: 'Cancelar',
        },
      ],
    });
  }*/

  return <Fragment></Fragment>;
}

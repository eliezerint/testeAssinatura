import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {widthPercentageToDP} from './wp';

export interface ITextSize {
  normal: Array<number>;
  subTitle: Array<number>;
  title: Array<number>;
  input: Array<number>;
  button: Array<number>;
  boldText: Array<
    | 'bold'
    | 'normal'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
  >;
}

export const TextSize: ITextSize = {
  normal: [
    widthPercentageToDP(3),
    widthPercentageToDP(4),
    widthPercentageToDP(5),
    widthPercentageToDP(5),
  ],
  subTitle: [
    widthPercentageToDP(3.3),
    widthPercentageToDP(4.3),
    widthPercentageToDP(5),
  ],
  title: [
    widthPercentageToDP(5.5),
    widthPercentageToDP(6.5),
    widthPercentageToDP(7),
    widthPercentageToDP(8),
  ],
  input: [widthPercentageToDP(4)],
  button: [widthPercentageToDP(4)],
  boldText: ['bold'],
};

type NamedStyles<T> = {
  [P in keyof T]:
    | ViewStyle
    | TextStyle
    | ImageStyle
    | ((
        value?: any,
        value2?: any,
        value3?: any,
      ) => ViewStyle | TextStyle | ImageStyle | any);
};

export interface IParamStyle {
  pallete: IPalette;
  theme: IThemeColor;
  textSize: ITextSize;
  widthPercentageToDP: (value: number) => number;
  hp: (value: number) => number;
  boxShadow: (value: number) => Object;
}

interface IThemeColor {
  isDark: boolean;
  isLight: boolean;
}

interface IPalette {
  primary: string[];
  bottomNavBarColor: string;
  headerBarColor: string;
  headerBarTextColor: string;
  headerBarIconBackColor: string;
  refreshIndicatorColor: string;
  refreshIndicatorBackgroundColor: string;
  backgroundTransparent: string[];
  backgroundColor: string[];
  fontColor: string[];
  disabledFontColor: string[];
  disabledBackgroundColor: string[];
  progressColor: string[];
  skeletonColor: string[];
  positiveColor: string[];
  negativeColor: string[];
  warningColor: string[];
  borderColor: string[];
  buttonFontColor: string[];
  checkboxSelectedColor: string[];
  dashboard: {
    headerBarColor: string;
    backgroundCardColor: string[];
    backgroundCardDisabledColor: string[];
    fontCardColor: string[];
    fontTextoSuperiorMenu: string[];
    skeletonColor: string[];
    skeletonDisabledColor: string[];
    buttonMenu: string[];
  };
  view: {
    viewBackgroundColor: string[];
    cardBackgroundColor: string[];
    dividerColor: string[];
  };
  alternativeView: {
    viewBackgroundColor: string[];
    cardBackgroundColor: string[];
    dividerColor: string[];
  };
  tab: {
    indicadorActiveBackgroundColor: string[];
    indicadorActiveBorderColor: string[];
    indicadorBackgroundColor: string[];
    indicadorBorderColor: string[];
  };
  interactive: {
    fontColor: string[];
    disabledFontColor: string[];
    cardBackground: string[];
    dangerColor: string[];
  };
  card: {
    backgroundColor: string[];
    disabledBackgroundColor: string[];
    fontColor: string[];
    disabledFontColor: string[];
    dividerColor: string[];
  };
  login: {
    viewBackgroundColor: string;
    input: {
      backgroundColor: string;
    };
    dividerColor: string;
  };
  input: {
    fontColor: string[];
    backgroundColor: string[];
    iconColor: string[];
    errorColor: string[];
    placeholderColor: string[];
    containerColor: string[];
  };
  button: {
    alternativeBackgroundColor: string[];
    backgroundColor: string[];
    disabledBackgroundColor: string[];
    fontColor: string[];
    disabledFontColor: string[];
  };
  telaInicial: {
    fontColorSaudacao: string[];
  };
  fixacao: {
    badgeTipoValor: string[];
    fontBadgeTipoValor: string[];
    backgroundButtonContinuar: string[];
    fontButtonContinuar: string[];
    backgroundCard: string[];
    buttonShared: string[];
    buttonFontShared: string[];
  };
  modal: {
    background: string[];
    borderColor: string[];
    actionColor: string[];
  };
  fingerPrintColor: string[];
  badge: {
    background: string[];
    font: string[];
  };
  notification: {
    background: string[];
  };
  switch: {
    background: string[];
    indicator: string[];
  };
  player: {
    background: string[];
  };
  status: {
    intencao: string[];
    agendamentoRetirada: string[];
    prioridadeAgendamento: {
      normal: string;
      alta: string;
    };
    intencaoDolar: string[];
  };
  chart: {
    backgroundColor: string[];
    tooltip: {
      backgroundColor: string[];
      fontColor: string[];
    };
  };
  comunicacao: {
    player: {
      background: string[];
      command: string[];
      progress: string[];
      time: string[];
      font: string[];
      loading: string[];
    };
  };
}

const PaletteLight: IPalette = {
  primary: ['#1b492b'],
  bottomNavBarColor: '#FFFFFF',
  headerBarColor: '#1b492b',
  headerBarTextColor: '#FFF',
  headerBarIconBackColor: '#FFF',
  refreshIndicatorColor: '#1b492b',
  refreshIndicatorBackgroundColor: '#fff',
  backgroundTransparent: ['rgba(27, 73, 43, 0.2)'],
  backgroundColor: ['#FFF', '#efefef', '#FFF', '#1b492b', '#efefef', '#FFF'],
  buttonFontColor: ['#FFF'],
  fontColor: [
    '#0f0f0f',
    '#4A4A4A',
    '#6A6A6A',
    '#8A8A8A',
    '#AFAFAF',
    '#efefef',
    '#1b492b',
    '#444',
  ],
  disabledFontColor: ['#bfbfbf', '#f0f0f0', '#bfbfbf', '#dbdada'],
  disabledBackgroundColor: ['#fefefe'],
  progressColor: ['#1b492b'],
  positiveColor: ['#015900'],
  negativeColor: ['#B50000'],
  warningColor: ['#ff6e00'],
  skeletonColor: ['#F7F7F7', '#d4d4d4', '#F7F7F7', '#d4d4d4'],
  borderColor: ['#efefef', '#dfdfdf'],
  checkboxSelectedColor: ['#1b492b'],
  dashboard: {
    headerBarColor: '#1b492b',
    backgroundCardColor: ['#1b492b', '#FFF', '#FFF', '#FFF'],
    backgroundCardDisabledColor: ['#7F7E7E', '#FFF', '#FFF', '#FFF'],
    fontCardColor: ['#FFF', '#CCC', '#7F7E7E', '#7F7E7E', '#1b492b'],
    fontTextoSuperiorMenu: ['#626262'],
    skeletonColor: [
      '#1f5631',
      '#276d3d',
      '#FFF',
      '#dedede',
      '#7F7E7E',
      '#efefef',
    ],
    skeletonDisabledColor: ['#9F9E9E', '#AFAEAE', '#7F7E7E', '#7F7E7E'],
    buttonMenu: ['#FFF'],
  },
  view: {
    viewBackgroundColor: ['#fff'],
    cardBackgroundColor: ['#efefef'],
    dividerColor: ['#afafaf', '#CCC'],
  },
  alternativeView: {
    viewBackgroundColor: ['#efefef', '#FFF'],
    cardBackgroundColor: ['#fff'],
    dividerColor: ['#afafaf'],
  },
  tab: {
    indicadorActiveBackgroundColor: ['#1b492b'],
    indicadorActiveBorderColor: ['#1b492b'],
    indicadorBackgroundColor: ['#FFF'],
    indicadorBorderColor: ['#cdcdcd'],
  },
  interactive: {
    fontColor: ['#1b492b', '#686868', '#FFFFFF', '#1b492b'],
    disabledFontColor: ['#bfbfbf'],
    cardBackground: ['#efefef'],
    dangerColor: ['#B50000'],
  },
  card: {
    backgroundColor: ['#fff', '#f6f7dd'],
    disabledBackgroundColor: ['#fff'],
    fontColor: ['#000', '#000'],
    disabledFontColor: ['#000'],
    dividerColor: ['#dedede'],
  },
  login: {
    viewBackgroundColor: '#1b492b',
    input: {
      backgroundColor: '#FFF',
    },
    dividerColor: '#9f9f9f',
  },
  input: {
    fontColor: ['#0f0f0f'],
    backgroundColor: ['#FFF'],
    iconColor: ['#9f9f9f', '#FFF', '#FFF', '#FFF'],
    errorColor: ['#B00020', '#ff5454'],
    placeholderColor: ['#919191'],
    containerColor: ['#ececec'],
  },
  button: {
    alternativeBackgroundColor: ['#275638', '#1b492b'],
    backgroundColor: ['#fefefe', '#1b492b', '#8ab54e', '#f71104', '#e8e8e8'],
    disabledBackgroundColor: ['#afafaf', '#597c65', '#adc986', '#ff5454'],
    fontColor: ['#fff', '#fff', '#fff', '#fff'],
    disabledFontColor: ['#bfbfbf', '#fff', '#fff'],
  },
  telaInicial: {
    fontColorSaudacao: ['#FFF'],
  },
  fixacao: {
    badgeTipoValor: ['#FFF', '#1b492b'],
    fontBadgeTipoValor: ['#636363', '#FFFFFF'],
    backgroundButtonContinuar: ['#1b492b'],
    fontButtonContinuar: ['#FFFFFF'],
    backgroundCard: ['#FFFFFF'],
    buttonShared: ['#E5E5E5'],
    buttonFontShared: ['#1b492b'],
  },
  modal: {
    background: ['#FFFFFF'],
    borderColor: ['#FFFFFF', '#efefef'],
    actionColor: ['#015900', '#CC1010', '#227FE9'],
  },
  fingerPrintColor: ['#1b492b'],
  badge: {
    background: ['#bfbfbf', '#1b492b'],
    font: ['#FFFFFF'],
  },
  notification: {
    background: ['#FFFFFF', '#fafbfa'],
  },
  switch: {
    background: ['#E3E3E3', '#3c9c5e'],
    indicator: ['#FFF', '#FFF'],
  },
  player: {
    background: ['#7F7E7E'],
  },
  status: {
    intencao: ['#227FE9', '#f71104', '#1b492b'],
    agendamentoRetirada: [
      '#6A6A6A',
      '#d69526',
      '#227FE9',
      '#1b492b',
      '#6A6A6A',
      '#CC1010',
      '#c96800',
      '#6A6A6A',
    ],
    prioridadeAgendamento: {
      normal: '#f2c629',
      alta: '#cc4d4d',
    },
    intencaoDolar: ['#227FE9', '#f71104', '#6A6A6A', '#015900'],
  },
  chart: {
    backgroundColor: [],
    tooltip: {
      backgroundColor: ['#000000'],
      fontColor: ['#ffffff'],
    },
  },
  comunicacao: {
    player: {
      background: ['#FFF', '#E5E5E5', 'rgba(255,255,255,0.97)'],
      command: ['#1b492b'],
      progress: ['#1b492b', '#bfbfbf'],
      time: ['#8A8A8A'],
      font: ['#1b492b', '#4A4A4A', '#1b492b', '#FFF'],
      loading: ['#1b492b'],
    },
  },
};

const PaletteDark: IPalette = {
  primary: ['#101519'],
  bottomNavBarColor: '#101519',
  headerBarColor: '#101519',
  headerBarTextColor: '#FFF',
  headerBarIconBackColor: '#FFF',
  refreshIndicatorColor: '#FFF',
  refreshIndicatorBackgroundColor: '#2F3D4B',
  backgroundTransparent: ['rgba(47, 61, 75, 0.4)'],
  backgroundColor: [
    '#101519',
    '#2F3D4B',
    '#212A33',
    '#0B0E11',
    '#101519',
    '#151b21',
  ],
  buttonFontColor: ['#FFF'],
  fontColor: [
    '#e6e6e6',
    '#dfdfdf',
    '#a0a0a0',
    '#7f7f7f',
    '#AFAFAF',
    '#efefef',
    '#FFFFFF',
    '#FFFFFF',
  ],
  disabledFontColor: ['#3f3f3f', '#6f6f6f', '#6f6f6f', '#2e2e2e'],
  disabledBackgroundColor: ['#afafaf'],
  progressColor: ['#FFF'],
  skeletonColor: ['#101519', '#1F2832', '#26303B', '#303D4B'],
  positiveColor: ['#4E9F3D'],
  negativeColor: ['#d64f4f'],
  warningColor: ['#ff6e00'],
  borderColor: ['#1F2832', '#26303B'],
  checkboxSelectedColor: ['#4f687f'],
  dashboard: {
    headerBarColor: '#101519',
    backgroundCardColor: ['#222c36', '#222c36', '#222c36', '#222c36'],
    backgroundCardDisabledColor: ['#3F3F3F', '#FFF', '#FFF', '#FFF'],
    fontCardColor: ['#FFF', '#CCC', '#7F7E7E', '#FFF', '#FFF'],
    fontTextoSuperiorMenu: ['#FFF'],
    skeletonColor: [
      '#2C3946',
      '#415465',
      '#2C3946',
      '#303D4B',
      '#415465',
      '#415465',
    ],
    skeletonDisabledColor: ['#4F4F4F', '#5F5F5F', '#7F7E7E', '#7F7E7E'],
    buttonMenu: ['#1b232b'],
  },
  view: {
    viewBackgroundColor: ['#efefef'],
    cardBackgroundColor: ['#fff'],
    dividerColor: ['#afafaf', 'rgba(204, 204, 204, 0.3)'],
  },
  alternativeView: {
    viewBackgroundColor: ['#101519'],
    cardBackgroundColor: ['#1F2832'],
    dividerColor: ['#29343f'],
  },
  tab: {
    indicadorActiveBackgroundColor: ['#4f687f'],
    indicadorActiveBorderColor: ['#4f687f'],
    indicadorBackgroundColor: ['#FFF'],
    indicadorBorderColor: ['#FFF'],
  },
  interactive: {
    fontColor: ['#FFF', '#FFF', '#FFFFFF', '#4E9F3D'],
    disabledFontColor: ['#48535e'],
    cardBackground: ['#2F3D4B'],
    dangerColor: ['#d64f4f'],
  },
  card: {
    backgroundColor: ['#2F3D4B', '#151c21'],
    disabledBackgroundColor: ['#2F3D4B'],
    fontColor: ['#7F7E7E', '#FFF'],
    disabledFontColor: ['#7F7E7E'],
    dividerColor: ['#26303B'],
  },
  login: {
    viewBackgroundColor: '#101519',
    input: {
      backgroundColor: '#FFF',
    },
    dividerColor: '#9f9f9f',
  },
  input: {
    fontColor: ['#e6e6e6'],
    backgroundColor: ['#101519'],
    iconColor: ['#9f9f9f', '#FFF', '#FFF', '#FFF'],
    errorColor: ['#d64f4f', '#ff5454'],
    placeholderColor: ['#919191'],
    containerColor: ['#26323E'],
  },
  button: {
    alternativeBackgroundColor: ['#2F3D4B', '#303D4B'],
    backgroundColor: ['#415465', '#2F3D4B', '#FF9900', '#ff5454'],
    disabledBackgroundColor: ['#2C3946', '#141b21', '#f9b857', '#db4848'],
    fontColor: ['#fff', '#fff', '#fff', '#fff'],
    disabledFontColor: ['#3f3f3f', '#6f6f6f', '#efefef'],
  },
  telaInicial: {
    fontColorSaudacao: ['#FFF'],
  },
  fixacao: {
    badgeTipoValor: ['#101519', '#2F3D4B'],
    fontBadgeTipoValor: ['#FFF', '#FFF'],
    backgroundButtonContinuar: ['#2F3D4B'],
    fontButtonContinuar: ['#FFFFFF'],
    backgroundCard: ['#1D252E'],
    buttonShared: ['#2F3D4B'],
    buttonFontShared: ['#FFFFFF'],
  },
  modal: {
    background: ['#192027'],
    borderColor: ['#1F2731', '#26303B'],
    actionColor: ['#4E9F3D', '#d64f4f', '#227FE9'],
  },
  fingerPrintColor: ['#1b492b'],
  badge: {
    background: ['#2F3D4B', '#2F3D4B'],
    font: ['#FFFFFF'],
  },
  notification: {
    background: ['#101519', '#202830'],
  },
  switch: {
    background: ['#4A4A4A', '#4E9F3D'],
    indicator: ['#FFF', '#FFF'],
  },
  player: {
    background: ['#0B0E11'],
  },
  status: {
    intencao: ['#4785cc', '#d64f4f', '#4E9F3D'],
    agendamentoRetirada: [
      '#AFAFAF',
      '#d9a752',
      '#4785cc',
      '#4E9F3D',
      '#AFAFAF',
      '#d64f4f',
      '#e0792b',
      '#AFAFAF',
    ],
    prioridadeAgendamento: {
      normal: '#cc8b00',
      alta: '#cc4d4d',
    },
    intencaoDolar: ['#4785cc', '#d64f4f', '#AFAFAF', '#4E9F3D'],
  },
  chart: {
    backgroundColor: [],
    tooltip: {
      backgroundColor: ['#000000'],
      fontColor: ['#ffffff'],
    },
  },
  comunicacao: {
    player: {
      background: ['#101519', '#101519'],
      command: ['#3d7831'],
      progress: ['#3d7831', '#bfbfbf'],
      time: ['#FFF'],
      font: ['#F5F5F5', '#F5F5F5', '#FFF', '#FFF'],
      loading: ['#FFF'],
    },
  },
};

export function PaletteColor(): IPalette {
  return ThemeColor().isLight ? PaletteLight : PaletteDark;
}

export function ThemeColor(): IThemeColor {
  const theme = ThemePreferences.getThemeUser();
  return {
    isLight: theme === 'light',
    isDark: theme !== 'light',
  };
}

export function BoxShadow(value: number, color?: string): Object {
  return {
    shadowColor: color ? color : '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: value,
    elevation: value,
  };
}

export type StyleSheetThemeCallbackType = (
  options: IParamStyle,
) => NamedStyles<any>;

export function StyleSheetTheme(
  fnStyles: StyleSheetThemeCallbackType,
): () => any {
  return () => {
    const pallete = PaletteColor();

    let styles = fnStyles({
      pallete,
      theme: ThemeColor(),
      textSize: TextSize,
      widthPercentageToDP,
      hp,
      boxShadow: BoxShadow,
    });

    if (AppConfig.getShowLimitBorders()) {
      let newStyles: any = {};

      for (let sty in styles) {
        if (typeof styles[sty] === 'function') {
          newStyles[sty] = styles[sty];
        } else {
          newStyles[sty] = {
            ...styles[sty],
            borderWidth: 0.8,
            borderColor: '#FF0505',
          };
        }
      }
      // @ts-ignore
      return StyleSheet.create(newStyles);
    } else {
      // @ts-ignore
      return StyleSheet.create(styles);
    }
  };
}

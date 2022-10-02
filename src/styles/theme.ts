export interface GaleriaTheme {
  colors: {
    textSecondaryGray: string;
    navBarDestopBkg: string;
    background: string;
    backgroundWhite: string;
    modalBkg: string;
    selectHoverFotosIcn: string;
    selectHoverSavedIcn: string;
    btnBlue: string;
    btnLtBlue: string;
    heartColor: 'rgb(255,116,129)';
  }
}

export const theme: GaleriaTheme = {
  colors: {
    textSecondaryGray: 'rgb(153,153,153)',
    navBarDestopBkg: 'fcfcfd',
    background: 'rgb(249,250,251)',
    backgroundWhite: '#ffffff',
    modalBkg: 'rgb(190,191,191)',
    selectHoverFotosIcn: 'rgb(162,200,250)',
    selectHoverSavedIcn: 'rgb(255,180,188)',
    btnBlue: 'rgb(24,119,242)',
    btnLtBlue: 'rgb(213,230,252)',
    heartColor: 'rgb(255,116,129)'
  },
};

export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};
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
  }
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
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
  },
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
  },
};

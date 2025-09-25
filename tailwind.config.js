module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  darkMode: 'selector',
  // corePlugins: {
  //   preflight: false,
  // },
  theme: {
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      tablet: '1200px',
      xl: '1280px',
      'macbook-13': '1440px',
      '2xl': '1600px',
      'screen-h-760': { raw: '(min-height: 700px)' },
      'screen-h-620': { raw: '(max-height: 620px)' },
      'small-hw-screen': {'raw': '(min-height: 700px) and (min-width: 1280px)'},
    },
    extend: {
      colors: {
        'light-header-bg': '#EBECFF',
        'dark-header-bg': '#1A1B43',
        'light-background': '#ffffff',
        'dark-background': '#202020',
        black: '#232323',
        'light-black': '#434343',
        'light-gray': '#DCDCDC',
        red: '#FF4646'
      },
      fontFamily: {
        'hind': ['Hind', 'sans-serif'],
      },
      height: {
        'screen-minus-header': 'calc(100vh - 4rem)',
        'screen-minus-header-xl': 'calc(100vh - 6rem)',
      },
      minHeight: {
        'screen-minus-header': 'calc(100vh - 4rem)',
        'screen-minus-header-xl': 'calc(100vh - 6rem)',
      },
    },
  },
}
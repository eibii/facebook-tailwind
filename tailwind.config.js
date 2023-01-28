module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'SourceSansPro': 'Source Sans Pro',
      },
      colors: {
        'primary': '#1877F2',
        'primary-hover': '#166fe5',
        'secondary': '#42B72A',
        'secondary-hover': '#36a420',
      },
    },
  },
  plugins: [],
}

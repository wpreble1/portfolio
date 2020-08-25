module.exports = {
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    colors: {
      pink: 'magenta',
      purple: '#794ACF',
      white: 'white',
      black: 'black',
    },
    extend: {
      fontSize: {
        xs: ['10px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
    },
  },
  variants: {},
  plugins: [],
  extend: {
  },
};

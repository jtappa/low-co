
    module.exports.decorateConfig = config => {
      return Object.assign({}, config, {
        cursorColor: 'rgba(22, 0, 36, 0.5)',
        foregroundColor: '#36104e',
        backgroundColor: '#737373',
        borderColor: '#737373',
        colors: {
          black: '#737373',
          red: '#61000d',
          green: '#0b4820',
          yellow: '#483613',
          blue: '#3f0068',
          magenta: '#184846',
          cyan: '#5d009a',
          white: '#36104e',
          lightBlack: '#69636d',
          lightRed: '#481634',
          lightGreen: '#0b4820',
          lightYellow: '#483613',
          lightBlue: '#3f0068',
          lightMagenta: '#184846',
          lightCyan: '#5d009a',
          lightWhite: '#2c0048',
        },
      });
    };
  
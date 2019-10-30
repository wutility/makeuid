import babel from 'rollup-plugin-babel';

export default {
  input: 'src/main.js',
  output: {
    name: 'mk',
    file: 'index.js',
    format: 'umd'
  },
  plugins: [
    babel({ exclude: 'node_modules/**' })
  ],
};


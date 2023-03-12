const { defineConfig } = require('vite');
const react = ('@vitejs/plugin-react');

// https://vitejs.dev/config/
module.exports =  defineConfig({
  plugins: [react()],
})

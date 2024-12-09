const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8081, // Port pour le serveur Vue.js
    proxy: {
      '/tasks': { // Redirige les appels commençant par /api vers le serveur Spring Boot
        target: 'http://localhost:8080', // Adresse de l'API Spring Boot
        changeOrigin: true, // Requis pour les environnements multi-domaine        
      }
    }
  }
});
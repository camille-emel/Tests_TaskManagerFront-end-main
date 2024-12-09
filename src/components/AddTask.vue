<template>
  <div>
    <form action="" method="POST">
      <label for="inputField">Enter something:</label>
      <input type="text" id="inputField" name="inputField" required>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  name: 'AddTask',
  data() {
    return {
      title: '', // Stocke le titre récupéré
    };
  },
  async created() {
    try {
      // Appel à l'API pour récupérer le titre
      const response = await api.addTask();
      this.title = response.data || response; // Mettez à jour la propriété avec le résultat
    } catch (error) {
      console.error('Erreur lors de la récupération du titre :', error);
    }
  },
};
</script>

<style scoped>
h1 {
  color: #2c3e50;
}
</style>

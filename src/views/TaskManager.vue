<template>
  <div>
    <Hello/>
    <ShowTasks/>
  </div>
</template>

<script>
import Hello from '../components/Hello.vue';
import ShowTasks from "@/components/ShowTasks.vue";

export default {
  components: {ShowTasks, Hello }
};
</script>

<template>
  <div>
    <Hello/>
    <ShowTasks/>
    <AddTask/>
  </div>
</template>

<script>
import Hello from '../components/Hello.vue';
import ShowTasks from "@/components/ShowTasks.vue";
import AddTask from "@/components/AddTask.vue";

export default {
  components: {AddTask, ShowTasks, Hello }
};
</script>

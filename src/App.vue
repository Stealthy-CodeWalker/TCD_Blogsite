<script setup>
  import navbar from "./components/navbar.vue"
  import blogview from "./components/blogview.vue"
  import { ref } from 'vue';
  const componentKey = ref(0);
  const forceRerender = () => {
    componentKey.value += 1;
  };
</script>

<template>
  <navbar :key="componentKey"/>
  <blogview/>
</template>


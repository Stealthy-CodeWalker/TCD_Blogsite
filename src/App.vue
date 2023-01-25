<script setup>
  import navbar from "./components/navbar.vue"
  import blogview from "./components/blogview.vue"
  import blogpage from "./components/blogpage.vue";
  import { ref } from 'vue';
  const componentKey = ref(0);
  const forceRerender = () => {
    componentKey.value += 1;
  };
</script>

<template>
    <navbar />
    <router-view>
    </router-view>
</template>



<script setup lang="ts">
  import { ref } from 'vue'
  import { Button } from 'react-vue-library'
  const count = ref(0);
</script>

<template>
  <Button @click="count++">Hello from Vue App: {{count}}</Button>
</template>

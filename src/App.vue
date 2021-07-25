<template>
  <main-layout>
    <template #body>
      <router-view />
    </template>
  </main-layout>
</template>

<script>
import MainLayout from "@/components/MainLayout";
import '@/assets/main.css';

export default {
  name: "App",
  components: {
    MainLayout
  }
};
</script>

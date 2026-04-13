<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/layout/Navbar.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
    <Navbar />
    <main class="container mx-auto px-4 py-8">
      <RouterView />
    </main>
  </div>
</template>

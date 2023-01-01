<template>
  <header>
    <h1 class="text-2xl font-semibold text-center py-6">Song Finder</h1>
    <section class="flex justify-center">
      <SearchLyrics />
    </section>
  </header>
</template>

<script setup lang="ts">
import SearchLyrics from "./components/SearchLyrics.vue";
</script>

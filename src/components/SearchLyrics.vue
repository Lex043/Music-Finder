<template>
  <form action="" @submit.prevent="fetchSong" class="flex gap-1">
    <input
      v-model.trim="text"
      type="text"
      class="border-2 border-green-300 outline-none"
    />
    <button class="bg-green-400 text-white px-2 rounded-sm">search</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
const spotifyToken = import.meta.env.VITE_SPOTIFY_TOKEN;

const text = ref<string | number>("");

const result = ref(null);

const fetchSong = () => {
  try {
    fetch(`https://shazam.p.rapidapi.com/search?term=${text.value}`, {
      headers: {
        "X-RapidAPI-Key": spotifyToken,
      },
    })
      .then((res) => res.json())
      .then((data) => (result.value = data.tracks));
    console.log(text.value);
  } catch (error: any) {
    console.log(error.message);
  }
};
</script>

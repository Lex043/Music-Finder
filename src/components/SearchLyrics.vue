<template>
  <form action="" @submit.prevent="fetchSong" class="flex gap-1 justify-center">
    <input
      v-model.trim="text"
      type="text"
      class="border-2 border-green-300 outline-none md:w-80"
    />
    <button class="bg-green-400 text-white px-2 rounded-sm">search</button>
  </form>
  <section
    class="px-7 mt-14 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-4"
  >
    <div v-for="resp in apiResponse">
      <section
        v-for="{ title, subtitle, images, share } in resp"
        class="flex gap-2 py-1 px-1 border-green-400 border-2"
      >
        <img
          :src="images.coverarthq"
          alt="cover art"
          class="w-24 h-24 rounded-sm"
        />
        <div class="text-sm flex flex-col justify-center">
          <p>{{ title }}</p>
          <p>{{ subtitle }}</p>
          <a :href="share.href">Shazam Link</a>
        </div>
      </section>
      <!-- <li>{{ resp.track }}</li> -->
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
const spotifyToken = import.meta.env.VITE_SPOTIFY_TOKEN;

const text = ref<string | number>("");

const apiResponse = ref<any>(null);

const fetchSong = () => {
  try {
    fetch(`https://shazam.p.rapidapi.com/search?term=${text.value}`, {
      headers: {
        "X-RapidAPI-Key": spotifyToken,
      },
    })
      .then((res) => res.json())
      .then((data) => (apiResponse.value = data.tracks.hits));
    console.log(text.value);
    text.value = "";
  } catch (error: any) {
    console.log(error.message);
  }
};
</script>

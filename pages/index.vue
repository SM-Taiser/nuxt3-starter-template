<template>
  <div>
   <HomeSliders/>
  </div>
</template>

<script setup lang="ts">
import home from '../api/home';

onMounted(async() => {
    const {data: homeData } = await home();
})
</script>

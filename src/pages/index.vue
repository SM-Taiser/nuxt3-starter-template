<script setup lang="ts">
import home from '../api/home';

const {data: homeData } = await home();

</script>

<template>
  <div>
   <HomeSliders :sliders="homeData.data.sliders"/>
  </div>
</template>
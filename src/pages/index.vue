<script setup lang="ts">
import home from '../api/home';

onMounted(async() => {
    const {data: homeData } = await home();
})
console.log(process);

</script>

<template>
  <div>
   <HomeSliders/>
  </div>
</template>
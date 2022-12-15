<script setup lang="ts">

interface Sliders {
    id: number;
    title: string;
    photo: string;
    photo_alt: string;
    photo_description: string;
    status: number;
}

interface Props {
    sliders: Sliders[];
}

const {sliders} = defineProps<Props>(); 

const runtimeConfig = useRuntimeConfig();
const cdnUrl = runtimeConfig.public.cdnUrl;  

</script>

<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div v-for="(item, key) in sliders" :key="key" :class="['carousel-item', key === 0 ? 'active': '' ]">
               <img :src="cdnUrl + item.photo" class="d-block w-100" :alt="item.photo_alt">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<style lang="scss" scoped>
.slide {
    .carousel-indicators {
        bottom: -17px !important;
        [data-bs-target] {
            width: 18px;
            margin-right: 8px;
        }
    }
    .carousel-control-prev-icon, .carousel-control-next-icon {
        display: none;
    }
}
</style>
<script setup>
import "./../assets/styles/main.css";
import NamaPengantin from "../components/NamaPengantin.vue"
import Carousel from "../components/Carousel.vue";
import Slide from "../components/Slide.vue";

const carouselSlides = [
    '/src/assets/photo/carousel/carousel1.webp',
    '/src/assets/photo/carousel/carousel2.webp',
    '/src/assets/photo/carousel/carousel3.webp',
    '/src/assets/photo/carousel/carousel4.webp',
];

</script>
<template>
    <div class="h-screen">
        <div class="relative h-full w-full flex flex-col justify-end">
            <div class="shadow-layer absolute inset-0 bg-black opacity-50 z-10"></div>
            <div id="default-carousel" class="absolute w-full" data-carousel="slide">
                <div class="carousel-wrapper h-screen overflow-hidden w-full">
                    <Carousel :enableAutoPlay="true" :timeout="5000" class="carousel" v-slot="{ currentSlide }">
                        <Slide v-for="(slide, index) in carouselSlides" :key="index">
                            <div class="slide-info" v-show="currentSlide === index + 1">
                                <img :src="slide" :alt="'image ' + slide">
                            </div>
                        </Slide>
                    </Carousel>
                </div>
            </div>
            <div class="main-content z-10 mb-20">
                <NamaPengantin />
                <div class="ayatWeda flex flex-col mx-5 text-center animated">
                    <p>
                        “Wahai pasangan suami-istri, semoga kalian tetap bersatu dan tidak pernah terpisahkan.
                        Semoga kalian mencapai hidup penuh kebahagiaan, tinggal di rumah yang penuh kegembiraan
                        bersama
                        seluruh keturunanmu.”
                    </p>
                    <p style="font-size:16px">
                        <strong>(Rg Veda X.85.42)</strong>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.carousel-wrapper * {
    box-sizing: border-box;
}

.carousel {
    position: relative;
    height: 100vh;
    overflow: hidden;
}

.slide-info {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    max-height: 100vh;
}

.slide-info img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
}


p {
    font-size: 14px;
    margin-bottom: 10px;
}
</style>
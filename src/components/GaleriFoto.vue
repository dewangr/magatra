<script setup>
import '@/assets/styles/main.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import Lightgallery from 'lightgallery/vue/LightGalleryVue.umd.js'

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';

import { ref } from 'vue';

const plugins = [lgThumbnail, lgZoom];

const visibleCount = ref(6);

const allImages = [
    '/photos/galeri/DSC03305.webp',
    '/photos/galeri/DSC03469.webp',
    '/photos/galeri/DSC03519.webp',
    '/photos/galeri/DSC03477.webp',
    '/photos/galeri/DSC03448.webp',
    '/photos/galeri/DSC03497.webp',
    '/photos/galeri/DSC03399.webp',
    '/photos/galeri/DSC03380.webp',
    '/photos/galeri/DSC03421.webp',
    '/photos/galeri/DSC03620.webp',
    '/photos/galeri/DSC03092.webp',
    '/photos/galeri/DSC03483.webp',
    '/photos/galeri/DSC03174.webp',
    '/photos/galeri/DSC03298.webp',
    '/photos/galeri/DSC03342.webp',
    '/photos/galeri/DSC03352.webp',
    '/photos/galeri/DSC03526.webp',
    '/photos/galeri/DSC03554.webp',
    '/photos/galeri/DSC03506.webp',
    '/photos/galeri/DSC03600.webp',
];

</script>

<template>
    <div class=" relative w-full flex flex-col">
        <div class="shadow-layer absolute h-screen inset-0 bg-black opacity-50 z-10 "></div>
        <div class="relative h-screen ">
            <img src="../assets/photo/background/bg-galeri.webp" class="object-cover absolute h-screen " alt="...">
            <div class="main-content relative z-10 flex flex-col justify-center h-[80%]
            mx-7">
                <div class="textAwalan animated">
                    <h2 class="uppercase font-basic my-2 tracking-[0.3rem] text-2xl text-start">Momen Bahagia</h2>
                    <hr>
                </div>
                <div class="galeriFoto mt-3 h-[60%] " id="galeri-foto">
                    <Lightgallery :settings="{ speed: 500, plugins: plugins }"
                        class="flex flex-row w-full flex-wrap lg:gap-6 gap-5 justify-center overflow-y-hidden animated">
                        <a v-for="(img, i) in allImages.slice(0, visibleCount)" :key="img" :href="img" :data-src="img">
                            <div class="flex relative">
                                <img class="to-display lg:w-40 lg:h-40 w-34 h-34" :src="img" loading="lazy" />
                                <p v-if="i === visibleCount - 1"
                                    class="absolute lg:w-40 lg:h-40 w-34 h-34 flex items-center justify-center text-off-white bg-alt-dark/60">
                                    Show more...
                                </p>
                            </div>
                        </a>
                        <a v-for="(img, i) in allImages.slice(6, allImages.length)" :key="img" :href="img"
                            :data-src="img">
                            <img class="opacity-0 h-0 w-20 md:w-40" :src="img" loading="lazy" />
                        </a>
                    </Lightgallery>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.to-display {
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 var(--color-alt-dark);
    object-fit: cover;
    -o-object-fit: cover;
}
</style>

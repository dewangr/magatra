<script setup>
import { ref, onMounted } from 'vue';
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from 'simplelightbox';



const { images } = defineProps({
    images: {
        type: Array,
        required: true,
    },
});

const visibleCount = ref(6);
console.log('visibleCount ' + visibleCount)

let gallery;


onMounted(async () => {
    gallery = new SimpleLightbox('.simple-lg-gallery', {
        showCounter: false,
        fileExt: 'png|jpg|jpeg|gif|webp'
    });

    gallery.refresh()
});

</script>

<template>
    <div
        class="simple-lg-gallery flex flex-row w-full flex-wrap lg:gap-6 gap-5 justify-center overflow-y-hidden animated">
        <a v-for="(img, i) in images.slice(0, visibleCount)" :key="i" :href="img.href">
            <div class="flex relative">
                <img class="to-display lg:w-40 lg:h-40 w-34 h-34" :src="img.href" :alt="img.href" loading="lazy" />
                <p v-if="i === visibleCount - 1"
                    class="absolute lg:w-40 lg:h-40 w-34 h-34 flex items-center justify-center text-off-white bg-alt-dark/60">
                    Show more...
                </p>
            </div>
        </a>
        <a v-for="(img, i) in images.slice(6, images.length)" :key="i" :href="img.href">
            <img class="opacity-0 h-0 w-20 md:w-40" :src="img.href" :alt="img.href" loading="lazy" />
        </a>
    </div>
</template>
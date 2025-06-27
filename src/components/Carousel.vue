<template>
    <div class="carousel">
        <slot :currentSlide="currentSlide"></slot>

        <!-- Navigation -->
        <div class="hidden navigate border-white border-3 z-20">
            <div class="toggle-page left">
                <i @click="prevSlide()" class="toggle-button fa fa-caret-left" aria-hidden="true"></i>
            </div>
            <div class="toggle-page right">
                <i @click="nextSlide()" class="toggle-button fa fa-caret-right" aria-hidden="true"></i>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
    timeout: {
        type: Number,
        default: 5000 // Default to 5 seconds
    },
    enableAutoPlay: {
        type: Boolean,
        default: true // Default to true
    }
});
const currentSlide = ref(1);

const getSlideCount = ref(null);
const autoPlayEnabled = props.enableAutoPlay;
const timeoutDuration = props.timeout;
//autoplay
const autoPlay = () => {
    setInterval(() => {
        nextSlide();
    }, timeoutDuration.valueOf());
};

if (autoPlayEnabled.valueOf()) {
    autoPlay();
}
onMounted(() => {
    getSlideCount.value = document.querySelectorAll('.slide').length;
});

const nextSlide = () => {
    if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1;
        return
    }
    currentSlide.value++;
};

// const prevSlide = () => {
//     if (currentSlide.value === 1) {
//         currentSlide.value = getSlideCount.value;
//         return
//     }
//     currentSlide.value--;
// };
</script>
<style module>
/* .navigate {
    position: absolute;
    display: flex;
    flex: 1;
    justify-content: space-between;
    height: 100vh;
    justify-content: center;
    align-items: center;
    padding: 0 16px;

}

.toggle-page {
    display: flex;

}

.right {
    justify-content: flex-end;
}

.toggle-button {
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 50px;
    height: 50px;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--color-putih-keabuan);
    color: var(--color-alt-dark);
} */
</style>
<script setup>
import { defineComponent } from "vue";

defineComponent({
    name: "backgroundShadowed",
});
defineProps({
    fileName: {
        type: String,
        required: false,
        default: "sampul-1.webp"
    },
    folderName: {
        type: String,
        required: false,
        default: "sampul"
    },
});

const imgUrl = `../asserts/photo/${folderName}/${fileName}`;

</script>
<template>
    <div class="h-screen">
        <div class="relative h-full w-full flex flex-col justify-end">
            <div class="shadow-layer absolute inset-0 bg-black opacity-50 z-10"></div>
            <div class="relative h-screen overflow-hidden ">
                <!-- Item 1 -->
                <img src="../asserts/photo/sampul/sampul-1.webp"
                    class="object-cover absolute w-full h-screen -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="...">
            </div>
            <!-- Slider indicators -->
            <div class="main-content z-10 mb-20">
                <NamaPengantin />
                <div class="ayatWeda flex flex-col mx-5  text-center ">
                    <p>
                        “Wahai pasangan suami-istri, semoga kalian tetap bersatu dan tidak pernah terpisahkan.
                        Semoga kalian mencapai hidup penuh kebahagiaan, tinggal di rumah yang penuh kegembiraan bersama
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
<style scoped></style>
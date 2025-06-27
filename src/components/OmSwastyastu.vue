<script setup>
import "./../assets/styles/main.css";

defineProps({
    textJudul: {
        type: String,
        default: "Om Swastyastu",
        required: false
    },
    textParagraf: {
        type: String,
        required: false
    },
});

</script>
<template>
    <div class=" relative w-full flex flex-col ">
        <div class="shadow-layer absolute h-screen inset-0 bg-black opacity-50 z-10 "></div>
        <div class="flex relative h-screen justify-end">
            <img src="../assets/photo/background/bg-swastyastu.webp"
                class="object-cover absolute h-screen -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 " alt="...">
            <div
                class="main-content relative z-20 flex flex-col justify-center text-end sm:w-[60%] md:w-full h-[55%] mx-7">
                <div class="">
                    <p class="font-basic tracking-widest leading-10 uppercase text-2xl animated">
                        Om Swastyastu
                    </p>
                    <p class=" animated">
                        Atas Asung Kerta Nugraha Ida Sang Hyang Widhi Wasa, kami bermaksud mengundang
                        Bapak/Ibu/Saudara/i untuk
                        hadir pada upacara Manusa Yadnya pawiwahan putra-putri kami.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>
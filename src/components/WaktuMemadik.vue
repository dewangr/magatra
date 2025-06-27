<script setup>
import Countdown from './Countdown.vue';

const targetDate = new Date('2025-07-11T10:00:00'); // Set your target date here

</script>
<template>
    <div class=" relative w-full flex flex-col">
        <div class="shadow-layer absolute h-screen inset-0 bg-black opacity-50 z-10 "></div>
        <div class=" relative h-screen">
            <img src="../assets/photo/background/bg-waktu.webp"
                class="object-cover absolute h-screen -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 " alt="...">
            <div class="main-content relative z-20 flex flex-col justify-center text-start  h-3/4 mx-7">
                <div class="waktuPelaksanaan">
                    <h2 class="uppercase font-basic my-2 tracking-[0.3rem] text-2xl animated">Memadik</h2>
                    <div class="border-b animated"></div>
                    <div class="hariTanggal my-2 animated">
                        <h4 class="bold text-xl">Jumat, 11 Juli 2025</h4>
                        <p>10.00 WITA - Selesai</p>
                        <div class="hitungMundur flex flex-row my-2 text-center">
                            <Countdown :targetDate="targetDate" :hideSeconds="false" />
                        </div>
                    </div>
                </div>
                <div class="tempatPelaksanaan mb-2 text-lg animated">
                    <h4>Jalan Desa Pendem, Jembrana</h4>
                </div>

                <div class="googleMaps my-2 text-lg animated">
                    <a href="https://maps.app.goo.gl/8jdFSJUNq8byzExA9" type="button" class="underline items-start"
                        target="_blank" rel="noopener">Google Maps</a>
                    <!-- <iframe class="w-[80%] h-60 mt-2 rounded-md"
                        src="https://maps.app.goo.gl/8jdFSJUNq8byzExA9&output=embed"> </iframe> -->
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>
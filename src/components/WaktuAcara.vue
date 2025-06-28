<script setup>
import Countdown from './Countdown.vue';

const targetDate = new Date('2025-08-28T11:00:00');
</script>
<template>
    <div class=" relative w-full flex flex-col">
        <div class="shadow-layer absolute h-screen inset-0 bg-black opacity-50 z-10 "></div>
        <div class=" relative h-screen">
            <img src="../assets/photo/galeri/DSC03320.webp" class="object-cover absolute h-screen" alt="...">
            <div class="main-content relative z-20 flex flex-col justify-center text-start  h-screen mx-7">
                <div class="waktuPelaksanaan">
                    <h2 class="uppercase font-basic my-2 tracking-[0.3rem] text-2xl">Resepsi</h2>
                    <hr>
                    <div class="hariTanggal my-2">
                        <h4 class="bold text-xl">Kamis, 28 Agustus 2025</h4>
                        <p>11.00 WITA - Selesai</p>
                        <div class="hitungMundur flex flex-row my-2 text-center">
                            <Countdown :targetDate="targetDate" :hideSeconds="false" />
                        </div>
                    </div>
                </div>
                <div class="tempatPelaksanaan mb-2 text-lg">
                    <h4>Jalan Desa Pendem, Jembrana</h4>
                </div>

                <div class="googleMaps my-2 text-lg">
                    <a href="https://www.google.com/maps?q=-8.3235101,114.6224752" type="button" class="underline"
                        target="_blank" rel="noopener">Google Maps</a>
                    <iframe class="w-full h-60 mt-2 rounded-md"
                        src="https://maps.google.com/maps?q=-8.3235101,114.6224752&output=embed"> </iframe>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.numberDigit {
    font-size: 24px;
}
</style>
<script setup>
import '@/assets/styles/main.css'

import TopCarousel from '../components/TopCarousel.vue';
import BrideAndGroom from '../components/BrideAndGroom.vue';
import OmSwastyastu from '../components/OmSwastyastu.vue';
import AmplopDigital from '../components/AmplopDigital.vue';
import VideoPrewed from '../components/VideoPrewed.vue';
import GaleriFoto from '../components/GaleriFoto.vue';
import NamaPengantin from "../components/NamaPengantin.vue"
import MaturSuksma from '../components/MaturSuksma.vue';
import FormReservasi from '../components/FormReservasi.vue';
import WaktuMemadik from '../components/WaktuMemadik.vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
const invitedPerson = ref(route.query.to || "nama tamu");

function clickBukaUndangan() {
    const el = document.getElementById('sampulDepan');
    const content = document.getElementById('kontenUtama');
    const bgm = document.getElementById('bgm');

    content.classList.remove('hidden');
    content.style.opacity = '1';
    content.style.zIndex = '1';

    el.style.transition = 'transform 0.5s';
    el.style.transform = 'translateY(-100%)';

    bgm.play();
    setTimeout(() => {
        el.style.display = 'none';
    }, 500);
}

function playAudio() {
    const audio = document.getElementById('bgm');
    const audioOn = document.getElementById('audioOn');
    const audioOff = document.getElementById('audioOff');

    if (audio.paused) {
        audio.play();
        audioOn.style.display = 'block';
        audioOff.style.display = 'none';
    } else {
        audio.pause();
        audioOn.style.display = 'none';
        audioOff.style.display = 'block';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animation-fade-in')
                entry.target.style.opacity = '1'
                return
            }

            entry.target.classList.remove('animation-fade-in');
        })
    })

    const targetElements = document.querySelectorAll('.animated')

    targetElements.forEach((element) => observer.observe(element))
});

</script>

<template>
    <main class="float-right w-screen md:w-md h-screen z-30 ">
        <div id="sampulDepan" class="z-10 object-right w-screen md:w-md h-screen ">
            <div class="relative w-full h-full">
                <div class="absolute inset-0 bg-black opacity-50 z-10"></div>
                <div class="background-sampul absolute inset-0 z-0">
                </div>
                <div class="konten-sampul grid grid-rows-2 items-center justify-center h-full pb-40 z-20 relative">
                    <NamaPengantin class="mb-40 mt-20 animated " />
                    <div class="ds-tamu-undangan flex flex-col items-center float-end mt-30">
                        <div class="gelar-tamu animated flex flex-col items-center">
                            <p class="kepada mb-0 pd-0 animated">Kepada</p>
                            <p class="bapak-ibu -mt-1 -mb-5 animated">Yth. Bapak/Ibu/Saudara/i</p>
                        </div>
                        <h3 class="nama-tamu drop-shadow-2xl capitalize mb-5 animated">{{ invitedPerson }}</h3>
                        <button type="button" class="btn-buka-undangan animated" id="btn-buka"
                            @click="clickBukaUndangan()">Buka
                            Undangan</button>
                    </div>
                </div>
            </div>
        </div>
        <div id="kontenUtama" class="hidden md:w-md object-right">
            <div class="isiUndangan relative">
                <TopCarousel>
                </TopCarousel>
                <OmSwastyastu />
                <BrideAndGroom />
                <WaktuMemadik />
                <VideoPrewed />
                <GaleriFoto />
                <FormReservasi />
                <AmplopDigital />
                <MaturSuksma />
                <audio loop class="hidden" preload="none" id="bgm" controlsList="nodownload" controls>
                    <source src="../assets/music/Raim Laode - Lesung Pipi.mp3" type="audio/mp3">
                </audio>
            </div>
            <div class="audioButton fixed bottom-0 right-0 m-4 z-20 ">
                <button id="audioOn" @click="playAudio()" type="button"
                    class="w-9 h-9 text-md rounded-full text-alt-dark bg-putih-keabuan "><i class="fa fa-volume-up "
                        aria-hidden="true"></i></button>
                <button id="audioOff" @click="playAudio()" type="button"
                    class="hidden w-9 h-9 text-md rounded-full text-alt-dark bg-putih-keabuan"><i
                        class="fa fa-volume-off " aria-hidden="true"></i></button>
            </div>
        </div>

    </main>
</template>
<style scoped>
.background-sampul {
    background-image: url("../assets/photo/background/bg-sampul.webp");
    background-size: cover;
    background-position: center;
}

.btn-buka-undangan {
    background-color: var(--color-off-white);
    color: var(--color-alt-dark);
    border: none;
    padding: 5px 12px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    cursor: pointer;
    border-radius: 8px;
}

.btn-buka-undangan:hover {
    transition: 0.2s;
    transform: scale(1.05);
}

.nama-tamu {
    font-size: 24px;
    color: var(--color-off-white);
    text-align: center;
    margin: 12px;
    font-weight: 400;
    text-shadow: 1px 1px 1px rgb(0, 0, 0);
}

.gelar-tamu {
    font-size: 16px;
    color: var(--color-off-white);
    text-align: center;
    margin: 10px;
}
</style>

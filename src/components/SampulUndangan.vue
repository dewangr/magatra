<script setup>
import { defineComponent } from "vue";
import { onMounted, ref } from "vue";

import "./../assets/styles/main.css";
import NamaPengantin from "../components/NamaPengantin.vue"

const invitedPerson = ref("");
defineComponent({
    name: "sampulUndangan",
});

defineProps({
    imgUrl: {
        type: String,
        default: "../assets/photos/sampul/sampul-1.webp",
    },
})
onMounted(() => {
    const urlParams = new URLSearchParams(window.location.search);
    invitedPerson.value = urlParams.get("to") || "nama tamu Dummy";
});

function clickBukaUndangan() {
    const el = document.getElementById('sampulDepan');

    el.style.zIndex = '-1';

    el.style.transition = 'transform 0.5s, opacity 0.5s';
    el.style.transform = 'translateY(-100%)';
    el.style.opacity = '0';

    setTimeout(() => {
        el.style.display = 'none';
    }, 500);
}
</script>

<template>
    <div id="sampulDepan" class="z-10 object-right w-screen md:w-md h-screen">
        <div class="relative w-full h-full">
            <div class="absolute inset-0 bg-black opacity-50 z-10"></div>
            <div class="background-sampul absolute inset-0 z-0">
            </div>
            <div class="konten-sampul grid grid-rows-2 items-center justify-center h-full pb-40 z-20 relative">
                <NamaPengantin class="mb-40 mt-20" />
                <div class="ds-tamu-undangan flex flex-col items-center float-end mt-30">
                    <div class="gelar-tamu flex flex-col items-center">
                        <p class="kepada mb-0 pd-0">Kepada</p>
                        <p class="bapak-ibu -mt-1 -mb-5">Yth. Bapak/Ibu/Saudara/i</p>
                    </div>
                    <h3 class="nama-tamu drop-shadow-2xl capitalize mb-5">{{ invitedPerson }}</h3>
                    <button type="button" class="btn-buka-undangan" id="btn-buka" @click="clickBukaUndangan()">Buka
                        Undangan</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#sampulDepan {
    display: block;
}

.background-sampul {
    background-image: url("../assets/photos/sampul/sampul-1.webp");
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
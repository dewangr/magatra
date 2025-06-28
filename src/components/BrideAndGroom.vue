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
    <div class=" relative w-full flex flex-col">
        <div class="shadow-layer absolute h-screen inset-0 bg-black opacity-50 z-10 "></div>
        <div class=" relative h-screen">
            <img src="../assets/photo/background/bg-groom.webp" class="object-cover absolute h-screen" alt="...">
            <div class="main-content relative z-20 flex flex-col justify-end text-start h-screen mx-7 pb-15">
                <div class="infoPengantin">
                    <p class="uppercase groomBride animated">The Groom</p>
                    <h3 class="font-basic text-2xl my-1 animated">I Made Diana Indrawan, S.M</h3>
                    <div class="animated">
                        <p>Putra kedua dari</p>
                        <p>Bapak I Ketut Sudiarta, SE <br> & Ibu Wayan Nyantel, SH</p>
                    </div>

                    <div class="namaInstagram flex flex-col justify-center animated">
                        <a href="https://www.instagram.com/indraa_wn" type="button" target="_blank" rel="noopener"
                            class="my-2"><i class="fa fa-instagram" aria-hidden="true"></i>
                            indraa_wn</a>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class=" relative w-full flex flex-col">
        <div class="shadow-layer absolute h-screen inset-0 bg-black opacity-50 z-10 "></div>
        <div class=" relative h-screen">
            <img src="../assets/photo/background/bg-bride.webp" class="object-cover absolute h-screen " alt="...">
            <div class="main-content relative z-20 flex flex-col justify-end text-start h-screen mx-7 pb-15">
                <div class="infoPengantin">
                    <p class="uppercase groomBride animated">The Bride</p>
                    <h3 class="font-basic text-2xl my-1 animated">Luh Rika Triana Savitri, S.Kes
                    </h3>
                    <div class="animated">
                        <p>Putri pertama dari</p>
                        <p>Bapak I Gede Karang <br> & Ibu Made Tuty Asrini, S.Sos</p>
                    </div>
                    <div class="namaInstagram flex flex-col justify-center animated">
                        <a href="https://www.instagram.com/riikatriana_" type="button" target="_blank" rel="noopener"
                            class="my-2"><i class="fa fa-instagram" aria-hidden="true"></i>
                            riikatriana_</a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<style scoped>
.groomBride {
    font-size: 18px;
    letter-spacing: 0.2em;
}
</style>
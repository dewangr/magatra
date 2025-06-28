<script setup>
import "@/assets/styles/main.css"
</script>
<template>
    <div class=" relative w-full flex flex-col">
        <div class="shadow-layer absolute h-screen inset-0 bg-black opacity-50 z-10 "></div>
        <div class="relative h-screen">
            <img src="../assets/photo/background/bg-suksma.webp" class="object-cover absolute h-screen " alt="...">
            <div class="main-content relative z-20 grid grid-rows-4  h-screen mx-7">
                <div class="maturSuksma flex flex-col justify-center text-start">
                    <div class="textJudul animated">
                        <h2 class="uppercase font-basic tracking-[0.3rem] text-2xl">Matur Suksma</h2>
                        <hr class="my-2">
                    </div>
                    <p class="mb-2 animated">
                        Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir
                        di hari bahagia kami.
                    </p>
                    <p class="animated">
                        Atas kehadiran dan doa restu Bapak/Ibu/Saudara/i kami ucapkan terima kasih.
                    </p>
                </div>
                <div class="magatraDigital flex flex-col text-center justify-center">
                    <h5 class="font-rougeScript text-4xl">
                        Magatra
                    </h5>
                    <p class="my-1">Digital Invitation © 2025</p>
                    <div class="mediaSosial flex flex-row justify-center ">
                        <a href="https://wa.me/+6283114104070"><i class="fa fa-whatsapp mx-2" target="_blank"
                                rel="noopener" aria-hidden="true"></i></a>
                        <a href="https://www.instagram.com/_dewangurah"><i class="fa fa-instagram mx-2" target="_blank"
                                rel="noopener" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.main-content {
    grid-template-rows: 4fr 1fr;
}
</style>
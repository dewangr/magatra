<script setup>
import BankDetails from './BankDetails.vue';

</script>
<template>
    <div class=" relative w-full flex flex-col">
        <div class="shadow-layer absolute h-screen inset-0 bg-black opacity-50 z-10 "></div>
        <div class=" relative h-screen">
            <img src="../assets/photo/background/bg-amplop.webp"
                class="object-cover absolute h-screen -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 " alt="...">
            <div class="main-content relative z-20 flex flex-col justify-center text-start  h-screen mx-7">
                <div class="textAwalan animated">
                    <h2 class="uppercase font-basic my-2 tracking-[0.3rem] text-2xl ">Amplop Digital</h2>
                    <hr>
                </div>
                <div class="hariTanggal my-2 animated">
                    <p>
                        Tanpa mengurangi rasa hormat kami, bagi tamu yang ingin mengirimkan hadiah kepada kedua
                        mempelai dapat mengirimnya melalui :
                    </p>
                </div>
                <div class="tujuanTransfer animated">
                    <BankDetails bankName="BNI" bankNumber="0889031640" holderName="I Made Diana Indrawan"
                        buttonId="salinBNI" />
                    <BankDetails bankName="BPD" bankNumber="0160202168282" holderName="I Made Diana Indrawan"
                        buttonId="salinBPD" />
                    <BankDetails bankName="BRI" bankNumber="036801052188503" holderName="Luh Rika Triana Savitri"
                        buttonId="salinBRI" />
                    <BankDetails bankName="BCA" bankNumber="2360784196" holderName="Luh Rika Triana Savitri"
                        buttonId="salinBCA" />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.numberDigit {
    font-size: 20px;
}
</style>
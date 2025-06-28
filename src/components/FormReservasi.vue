<script setup>
import "@/assets/styles/main.css"
import CardUcapan from "./cardUcapan.vue";
import axios from "axios";
import { onMounted, ref } from "vue";

const rspvData = ref([])

async function getRsvpData() {
    try {
        const response = await axios.get(`${process.env.BASE_URL}/api/rsvps`);
        rspvData.value = response.data.data;
        return;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

onMounted(() => {
    getRsvpData();
});

setInterval(async () => {
    await getRsvpData();
    console.log('Data refreshed');
}, 5000); // Refresh every minute


const namaTamu = ref('');
const ucapan = ref('');

async function addItem() {
    try {
        const response = await axios.post(`${BASE_URL}/api/rsvps`, {
            nama_tamu: namaTamu.value,
            ucapan: ucapan.value,
        });
    } catch (err) {
        console.error('There has been a problem with your fetch operation: ', err);
    }
    await getRsvpData(); // Refresh data after adding new item
    namaTamu.value = '';
    ucapan.value = '';
}

</script>
<template>
    <div class=" relative w-full flex flex-col">
        <div class="shadow-layer absolute h-screen inset-0 bg-black opacity-50 z-10 "></div>
        <div class=" relative h-screen">
            <img src="../assets/photo/background/bg-rsvp.webp"
                class="object-cover absolute h-screen -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 " alt="...">
            <div class="main-content relative z-20 flex flex-col justify-center h-screen mx-7">
                <div class="formReservasi flex flex-col">
                    <div class="textJudul animated">
                        <h2 class="uppercase font-basic mb-2 tracking-[0.3rem] text-2xl">RESERVASI</h2>
                        <hr>
                        <p class="my-2">
                            Mohon doa restu untuk kedua mempelai, dan silakan isi form di bawah ini untuk mengirimkan
                            ucapan
                            atau konfirmasi kehadiran Anda.
                        </p>
                    </div>

                    <form @submit.prevent="addItem" action="" method="post"
                        class="formReservasi flex flex-col animated">
                        <label for="namaTamu" class="mt-3">Nama</label>
                        <input v-model="namaTamu" name="namaTamu" type="text"
                            class="bg-alt-dark text-off-white opacity-70 rounded-sm" placeholder="Masukkan nama"
                            required>
                        <label for="pesanUcapan" class="mt-3">Ucapan</label>
                        <textarea v-model="ucapan" required name="pesanUcapan" rows="2"
                            class="bg-alt-dark text-off-white opacity-70 rounded-sm"
                            placeholder="Mohon doa restu untuk kedua mempelai"></textarea>
                        <!-- <label for="kehadiran" class="mt-3" placeholder="Konfirmasi kehadiran">Konfirmasi</label> -->
                        <!-- <select v-model="kehadiran" required name="kehadiran"
                            class="bg-alt-dark text-off-white opacity-70 rounded-sm" id="konfirmasiKehadiran">
                            <option value="1">Iya, saya hadir</option>
                            <option value="0">Maaf tidak bisa hadir</option>
                        </select> -->
                        <button type="submit"
                            class="mt-3 btn-submit px-4 py-1 rounded-md bg-alt-dark text-off-white w-max ">Kirim</button>
                    </form>
                    <div class="hasilReservasi mt-7 flex flex-col max-h-56 overflow-y-scroll animated">
                        <CardUcapan v-for="(data, id) in rspvData" :key="id" :namaTamu="data.nama_tamu"
                            :ucapan="data.ucapan" :timestampKomentar="data.timestamp" />
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
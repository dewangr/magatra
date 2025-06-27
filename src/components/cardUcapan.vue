<script setup>
import dayjs from 'dayjs';
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    namaTamu: {
        type: String,
        required: true
    },
    ucapan: {
        type: String,
        required: true
    },
    timestampKomentar: {
        type: String,
        required: true
    }
});

// let iconColor = props.kehadiran === 1 ? 'text-[#5AA469]' : 'text-[#D35D6E]';
// let iconKehadiran = props.kehadiran === 1 ? 'fa fa-check-circle' : 'fa fa-times-circle';
const waktuKomentar = ref('');

function updateWaktuKomentar() {
    const now = dayjs();
    const diff = now.diff(dayjs(props.timestampKomentar), 'minute');
    let hours = 0;
    let minutes = 0;
    let days = 0;
    let text = '';

    if (diff > 59) {
        hours = Math.floor(diff / 60);
        minutes = diff % 60;
        days = Math.floor(hours / 24);
        if (days > 0) {
            text = `${days} hari yang lalu`;
        } else {
            text = `${hours} jam ${minutes} menit yang lalu`;
        }
    } else {
        text = `${diff} menit yang lalu`;
    }
    waktuKomentar.value = text;
}

let intervalId;
onMounted(() => {
    updateWaktuKomentar();
    intervalId = setInterval(updateWaktuKomentar, 60000); // update every minute
});
onUnmounted(() => {
    clearInterval(intervalId);
});



</script>
<template>
    <div class="textUcapan bg-off-white text-alt-dark p-3 rounded-sm mb-4 mx-2 opacity-70">
        <div class="namaDanKonfirmasi flex flex-row text-[14px] items-center justify-between">
            <p class="namaTamuReservasi"><strong>{{ namaTamu }} &nbsp;</strong></p>
            <!-- <span :class="iconColor">
                <i :class="iconKehadiran" aria-hidden="true"></i></span> -->
        </div>
        <p class="text-[16px]">{{ ucapan }}</p>
        <p class="text-[10px] italic "> {{ waktuKomentar }}</p>
    </div>
    <!-- <div class="textUcapan bg-off-white text-alt-dark p-3 rounded-sm mb-4 mx-2 opacity-80">
        <div class="namaDanKonfirmasi flex flex-row justify-between items-center">
            <p class="namaTamuReservasi text-[14px]">~{{ namaTamu }}</p>
            <span class="text-off-white bg-alt-dark w-max px-2 py-1 rounded-xl text-[11px] flex items-center"> <i
                    :class="classKehadiran" aria-hidden="true"></i> &nbsp; {{
                        konfirmasiKehadiran
                    }}</span>
        </div>
        <p>{{ ucapan }}</p>
    </div> -->
</template>
<style scoped>
i {
    font-size: 13px;
}
</style>
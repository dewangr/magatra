<script setup>
const props = defineProps({
    bankName: {
        type: String, required: true
    },
    bankNumber: {
        type: String,
        required: true
    },
    holderName: {
        type: String,
        required: true
    },
    buttonId: {
        type: String,
        required: true
    }
});

function copyToClipboard() {
    navigator.clipboard.writeText(props.bankNumber);
    let buttonSalin = document.getElementById(props.buttonId);

    buttonSalin.innerHTML = "disalin";
    setTimeout(() => {
        buttonSalin.innerHTML = "salin";
    }, 1000);
}

document.getElementsByClassName("bankName").innerHTML = 'Test Bank';
</script>
<template>
    <div class="bankAccount flex flex-row items-center">
        <div class="bankAccountDetail w-2/3">
            <p class="bankName text-sm font-basic">{{ bankName }}</p>
            <h5 class="bankNumber text-sm leading-3">{{ bankNumber }}</h5>
            <p class="holderName text-sm font-basic">{{ holderName }}</p>
            <hr>
        </div>
        <div class="flex w-1/3 justify-end">
            <button :id="props.buttonId" type="button" @click=copyToClipboard()
                class="tombolSalin text-sm px-3 py-0.5">salin</button>
            <!-- <button id="tombolDisalin" type="button" class="tombolDisalin hidden text-sm px-3 py-0.5">disalin</button> -->
        </div>
    </div>
</template>
<style scoped>
.tombolSalin {
    cursor: pointer;
    background-color: var(--color-alt-dark);
    color: var(--color-off-white);
    border-radius: 5px;
    margin-top: 23px;
    margin-bottom: 23px;
}
</style>
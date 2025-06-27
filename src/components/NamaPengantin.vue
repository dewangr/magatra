<script setup>
import { defineComponent } from 'vue';

defineProps({
    brideName: {
        type: String,
        default: "Rika",
    },
    groomName: {
        type: String,
        default: "Indra",
    },
});
defineComponent({
    name: 'NamaPengantin',
});
</script>
<template>
    <div class="ds-text-nama-pengantin flex flex-col ">
        <h4 class="txt-wedding-of font-karla uppercase">
            The Wedding Of
        </h4>
        <h2 class="txt-mempelai font-basic capitalize font-white">
            {{ groomName }} & {{ brideName }}
        </h2>
    </div>
</template>
<style scoped></style>
<script setup>
</script>
<template>
    <div class="relative w-full flex flex-col">
        <div class="shadow-layer absolute h-screen inset-0 bg-black opacity-50 z-10 "></div>
        <div class=" relative h-screen">
            <img src="../assets/photo/background/bg-video.webp" class="object-cover absolute h-screen " alt="...">
            <div class="main-content relative z-20 flex flex-col justify-center text-start h-[60%] mx-7">
                <div class="textAwalan animated">
                    <h2 class="uppercase font-basic my-2 tracking-[0.3rem] text-2xl">Cerita Kami</h2>
                    <hr>
                </div>
                <div class="videoPrewed mt-2">
                    <iframe class="w-full min-h-60 aspect-video"
                        src="https://www.youtube.com/embed/a0v-PI0giE4?si=Mhwv07jKiIOTGarx&amp;controls=1&autoplay=0&mute=1"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <!-- <video class="w-full h-auto max-w-full border-1 border-putih-keabuan rounded-lg" controls>
                        <source src="https://www.youtube.com/watch?v=a0v-PI0giE4" type="video/mp4">
                    </video> -->

                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>
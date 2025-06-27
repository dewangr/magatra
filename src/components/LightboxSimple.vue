<script setup>
import '@/assets/styles/main.css';

const props = defineProps({
    images: {
        type: Array,
        required: true
    }
});

console.log('LightboxSimple component initialized');
console.log(props.images);

// Open the Modal
function openModal() {
    console.log('modal opened')
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
    modal.style.position = "fixed"
}

// Close the Modal
function closeModal() {
    console.log('modal closed')
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (!slides.length || !dots.length) return;

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
</script>
<template>
    <!-- Images used to open the lightbox -->
    <!-- <div class="row flex flex-row w-full flex-wrap lg:gap-6 gap-5 justify-center overflow-y-hidden animated">
        <a class="column" v-for="(img, i) in images.slice(0, visibleCount)" :key="i" :href="img.src">
            <div class="flex relative ">
                <img class=" hover-shadow  to-display lg:w-40 lg:h-40 w-34 h-34" :src="img.src"
                    @click="openModal(); currentSlide(i)" loading="lazy" />
                <p v-if="i === visibleCount - 1"
                    class="absolute lg:w-40 lg:h-40 w-34 h-34 flex items-center justify-center text-off-white bg-alt-dark/60">
                    Show more...
                </p>
            </div>
        </a>
        <a v-for="(img, i) in images.slice(6, images.length)" :key="i" :href="img.src">
            <img class="opacity-0 h-0 w-20 md:w-40" :src="img.src" :alt="img.src" loading="lazy" />
        </a>
    </div> -->
    <div class="row flex flex-row w-full flex-wrap lg:gap-6 gap-5 justify-center overflow-hidden animated">
        <div type="button" class="column" v-for="(img, i) in props.images" :key="i">
            <div class="flex relative ">
                <img class=" hover-shadow  to-display lg:w-40 lg:h-40 w-34 h-34" :src="img.src"
                    @click="openModal(); currentSlide(i)" loading="lazy" />
                <p v-if="i === 5"
                    class="absolute lg:w-40 lg:h-40 w-34 h-34 flex items-center justify-center text-off-white bg-alt-dark/60">
                    Show more...
                </p>
            </div>
        </div>
    </div>

    <!-- The Modal/Lightbox -->
    <div id="myModal" class="modal">
        <span class="close cursor" @click="closeModal()">&times;</span>
        <div class="modal-content">
            <div v-for="(img, i) in props.images" :key="i" class="mySlides h-[80%]">
                <div class="numbertext">{{ i + 1 }} / {{ images.length }}</div>
                <img :src="img.src" style="width:100%">
            </div>
            <!-- Next/previous controls -->
            <a class="prev" @click="plusSlides(-1)">&#10094;</a>
            <a class="next" @click="plusSlides(1)">&#10095;</a>

            <!-- Caption text -->
            <div class="caption-container">
                <p id="caption"></p>
            </div>

            <!-- Thumbnail image controls -->
            <div v-for="(img, i) in props.images" :key="i" class="column thumbnail">
                <img class="demo" :src="img.src" @click="currentSlide(i)" :alt="img.src">
            </div>
        </div>
    </div>

</template>
<style>
.row>.column {
    padding: 0 8px;
}

.row:after {
    content: "";
    display: table;
    clear: both;
}

/* Create four equal columns that floats next to eachother */
.column {
    float: left;
    width: 25%;
}

/* The Modal (background) */
.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: black;
}

/* Modal Content */
.modal-content {
    position: relative;
    width: 95%;
    align-self: center;
    background-color: #fefefe;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
    max-width: 1200px;
}

/* The Close Button */
.close {
    color: var(--color-putih-keabuan);
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 25px;
}

.close:hover,
.close:focus {
    color: #999;
    text-decoration: none;
    cursor: pointer;
}

/* Hide the slides by default */
.mySlides {
    display: none;
    top: 50%;

}

/* Next & previous buttons */
.prev,
.next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -50px;
    color: white;
    font-weight: bold;
    font-size: 15px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    -webkit-user-select: none;
    font-style: none;
}

/* Position the "next button" to the right */
.next {
    right: 0;
    border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */

/* Number text (1/3 etc) */
.numbertext {
    color: var(--color-putih-keabuan);
    font-size: 10px;
    padding: 6px 10px;
    position: absolute;
    top: 0;
}

/* Caption text */
.caption-container {
    text-align: center;
    background-color: black;
    padding: 2px 16px;
    color: var(--color-putih-keabuan);
}

img.demo {
    opacity: 0.6;
}

.active,
.demo:hover {
    opacity: 1;
}

img.hover-shadow {
    transition: 0.3s;
}

.hover-shadow:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
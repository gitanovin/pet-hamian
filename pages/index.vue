<template>
    <Header/>
    <section class="slider">
        <swiper class="lg:h-[450px]" :cssMode="true" :navigation="true" :pagination="true" :mousewheel="true" :keyboard="true" :modules="modules">
            <swiper-slide class="lg:h-[450px]"><img class="lg:h-[450px] w-full object-cover" src="@/assets/images/pet.avif"></swiper-slide>
            <swiper-slide class="lg:h-[450px]"><img class="lg:h-[450px] w-full object-cover" src="@/assets/images/1.jpg"></swiper-slide>
            <swiper-slide class="lg:h-[450px]"><img class="lg:h-[450px] w-full object-cover" src="@/assets/images/1.jpg"></swiper-slide>
    
        </swiper>
    </section>

    <div  class="p-4 lg:-0">
          <Home/>  
    </div>

    <Footer/>
</template>

<script setup>

// import { Vue3Lottie } from 'vue3-lottie'
//Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

//Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
const modules = [Navigation, Pagination, Mousewheel, Keyboard];
import Header from "@/components/Header/header.vue";
import Home from "@/components/Home/home.vue";
import Footer from "@/components/Footer/footer.vue";
</script>
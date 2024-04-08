<template>
    <section class="slider border-b pb-6">
        <swiper :cssMode="true" :navigation="true" :pagination="true" :mousewheel="true" :keyboard="true" :modules="modules" class="mySwiper">
            <swiper-slide><img src="@/assets/images/1.jpg"></swiper-slide>
            <swiper-slide><img src="@/assets/images/1.jpg"></swiper-slide>
            <swiper-slide><img src="@/assets/images/1.jpg"></swiper-slide>
    
        </swiper>
    </section>
    
    <section class="Kind-appointments lg:pt-24  w-full max-w-screen-xl mx-auto px-4">
        <div class="grid grid-cols-12 gap-4">
    
            <div class="lg:col-span-4 col-span-12">
    
                <client-only>
                    <Vue3Lottie animationLink="/dog.json" :height="200" :width="250" />
                </client-only>
    
            </div>
    
            <div class="bg-cyan-50 p-4 rounded-2xl  flex items-center lg:col-span-4 col-span-12">
                <div class="pay-box">
                    <div class="pay-title-block  grid grid-cols-12 gap-8">
                        <div class="image col-span-4 flex items-center justify-center">
                            <client-only>
                                <Vue3Lottie animationLink="/card.json" />
                            </client-only>
    
                        </div>
                        <div class="caption col-span-8 flex-col flex">
                            <h3 class="ptb-h3 mt-4 block text-xl text-mahak font-semibold">کمک آنلاین</h3>
                            <span class="ptb-des">شما هم سهمی در نجات کودکان محک داشته باشید</span>
                            <a href="/online-payment/" class="buttons index-pay-button bg-[#9d2c48] text-white px-4 py-1 rounded-lg mt-4 flex items-center justify-center w-32">کمک آنلاین</a>
                        </div>
    
                    </div>
    
                </div>
            </div>
            <div class="bg-green-50 p-4 rounded-2xl  flex items-center lg:col-span-4 col-span-12">
                <div class="pay-box">
                    <div class="pay-title-block  grid grid-cols-12 gap-8">
                        <div class="image col-span-4 flex items-center justify-center">
                            <client-only>
                                <Vue3Lottie animationLink="/meet.json" />
                            </client-only>
    
                        </div>
                        <div class="caption col-span-8 flex-col flex">
                            <h3 class="ptb-h3 mt-4 block text-xl text-mahak font-semibold">قرارهای مهربانی</h3>
                            <span class="ptb-des">شما هم سهمی در نجات کودکان محک داشته باشید</span>
                            <a href="/online-payment/" class="buttons index-pay-button bg-[#9d2c48] text-white px-4 py-1 rounded-lg mt-4 flex items-center justify-center w-32">کمک آنلاین</a>
                        </div>
    
                    </div>
    
                </div>
            </div>
    
    
    
        </div>
    
    </section>
    
    <section class="Introduction-sponsors w-full max-w-screen-xl mx-auto px-4 my-8  p-8 rounded-lg">
        <div class="text-2xl text-mahak font-semibold flex items-center justify-start">
            <i class="fa fa-heart pl-2"></i>
            <h2>معرفی حامیان</h2>
    
        </div>
    
        <div class="hamian mt-8">
    
            <swiper class="rounded-lg relative overflow-hidden" :keyboard="true" :navigation="true" :modules="modules" :breakpoints="{
                        '300': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '400': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '640': {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        '768': {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        '1024': {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        }, '1280': {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        '1920': {
                            slidesPerView: 6,
                            spaceBetween: 20,
                        },
                    }">
    
                <swiper-slide>
                    <div class="bg-white person relative overflow-hidden flex items-center justify-between  p-4 border">
                        <div class="flex items-center ">
                            <img src="/ali.jpg"  alt="" class="w-20  h-20 bg-center flex-none rounded-lg bg-slate-100 object-cover ">
                            <div class="min-w-0 flex-auto space-y-1 font-semibold mr-2 ">
                                <p class="text-cyan-500 transition-all duration-500  text-lg leading-6">
                                    <h2>علی آزادمند</h2> 
                                </p>
                                <h3 class="text-slate-500 transition-all duration-500  text-sm leading-6 truncate">
                                    پرستار حیوانات
                                </h3>
                                <p class=" transition-all duration-500  text-sm ltr font-en font-normal text-mahak">
                                    @aliazadmand
                                </p>
                            </div>
                        </div>
    
                    </div>
    
    
                </swiper-slide>
    
    
            </swiper>
        </div>
    
    </section>
    
    <section class="Sign-Up">
    
    </section>
</template>

<script setup>
import { Vue3Lottie } from 'vue3-lottie'
//Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

//Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
const modules = [Navigation, Pagination, Mousewheel, Keyboard];
</script>


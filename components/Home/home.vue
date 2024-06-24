<template>

<div class="hero before:bg-rose-900 before:w-full before:h-[700px] before:absolute before:top-0 before:inset-0 lg:before:rounded-bl-[200px] before:bg-gradient-to-r before:from-mahak before:via-rose-800 before:to-rose-500">
    <section class="relative">
    <div class="w-full max-w-screen-xl mx-auto relative overflow-hidden flex items-center justify-center px-8 py-16  rounded-3xl">
        <div class="relative z-10 overflow-hidden">
            <div class="text-center">
                <h1 class="xl:text-6xl md:text-3xl text-3xl xs:text-[28px] font-extrabold text-white font-fas py-4 pt-16"> پتومن <span class="text-white">حامی حیوانات </span></h1>
                <div class="py-4 text-rose-200 font-fa flex items-center justify-center  gap-2 pb-4"><span class="text-2xl">شما هم می توانید در حمایت از حیوانات به ما کمک کنید</span></div>
                <div class="buttons flex gap-4 items-center  justify-center xs:gap-y-6 space-y-0 mt-8">
                    <button type="button" class="text-mahak bg-white shadow-lg shadow-white/50 py-3 px-5 rounded-lg w-auto font-semibold">ثبت نام حامیان حیوانات</button>
                    <a href="/auth/sign-up" class="">
                        <button type="button" class="text-white bg-rose-900 py-3 px-5 rounded-lg w-auto shadow-lg shadow-rose-500/40 font-semibold"> ثبت نام در پتومن </button></a>
                    </div></div>
    <!-- <div class="col-span-12 lg:col-span-4"><img src="@/assets/images/pets.svg" class="w-[700px] block"></div> -->
</div></div>
</section>


    <section class="Kind-appointments lg:pt-24  w-full max-w-screen-xl mx-auto z-10 relative pb-16">
        <div class="grid grid-cols-12 gap-4">
    
            <div class="lg:col-span-4 col-span-12 ">
    
                <client-only>
                    <Vue3Lottie animationLink="/dog.json" :height="300" :width="500" class="lg:absolute lg:top-0"/>
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
                            <span class="ptb-des">شما هم سهمی در نجات حیوانات بی پناه داشته باشید</span>
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
                            <span class="ptb-des">از این بخش می توانید قرارهای مهربانی را مشاهده کنید</span>
                            <a href="/online-payment/" class="buttons index-pay-button bg-[#9d2c48] text-white px-4 py-1 rounded-lg mt-4 flex items-center justify-center w-32">مشاهده قرارها</a>
                        </div>
    
                    </div>
    
                </div>
            </div>
    
    
    
        </div>
    
    </section>
</div>




    <section class="Introduction-sponsors w-full max-w-screen-xl mx-auto  my-8 mb-16 rounded-lg relative z-10">
        <div class="text-2xl text-mahak font-semibold flex items-center justify-start">
            <i class="fa fa-icons pl-2"></i>
            <h2>مستندات حمایت از حیوانات</h2>
            <a href="/hamian" class="mr-2 text-sm bg-gray-100 px-3 py-1 rounded-lg flex items-center justify-center pt-1 text-gray-700">مشاهده همه<i class="fa fa-chevron-left pr-2"></i></a>
    
        </div>
    
        <div class="hamian mt-8">
    
            <swiper class="rounded-lg relative overflow-hidden" :keyboard="true" :navigation="true" :modules="modules" :breakpoints="{
                            '300': {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            '400': {
                                slidesPerView: 1,
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
                    <nuxt-link to="/biography">
                        <div class="bg-white  border border-gray-100 rounded-lg person relative overflow-hidden">
                        <div class="block w-full">
                            <div class="image-or-video relative overflow-hidden flex items-center justify-center">
<div class="bg-white/30 w-full h-full absolute flex items-center justify-center inset-0 text-center">
    <div class="bg-black/30 w-10 h-10 rounded-lg flex items-center justify-center">
     <i class="fa fa-play text-2xl text-white "></i>   
    </div>

</div>
       <img src="@/assets/images/dog.jpg" alt="" class="w-full h-48 object-cover ">
                            </div>
                     
                            <div class="min-w-0 flex-auto space-y-1 font-semibold p-4">
                                <p class="text-mahak transition-all duration-500  text-lg leading-6">
                                    <h2>نان دادن به گربه ها</h2>
                                </p>
                                <h3 class="text-slate-500 transition-all duration-500  text-sm leading-6 truncate">
                                   این توظیح کواته تستس است
                                </h3>
                             
                            </div>
                        </div>
                    </div> 
                    </nuxt-link>
                   
                </swiper-slide>
    
    

    
    
            </swiper>
        </div>
    
    </section>



    <section class="Introduction-sponsors w-full max-w-screen-xl mx-auto  mt-8  rounded-lg relative z-10">
        <div class="text-2xl text-mahak font-semibold flex items-center justify-start">
            <i class="fa fa-handshake pl-2"></i>
            <h2>قرارهای مهربانی</h2>
            <a href="/events" class="mr-2 text-sm bg-gray-100 px-3 py-1 rounded-lg flex items-center justify-center pt-1 text-gray-700">همه قرارها <i class="fa fa-chevron-left pr-2"></i></a>
    
        </div>
    
        <div class="hamian mt-8 grid grid-cols-12 gap-6">
    <div class="lg:col-span-6 col-span-12 bg-mahak rounded-lg">
        <header class="lg:flex justify-between items-center p-4 border-b border-red-50/20 mb-6">
            <h3 class=" text-white text-2xl font-semibold lg:mb-0 mb-6">زمان قرار</h3>
            <div class="shomareshgar font-semibold text-mahak bg-white p-4 rounded-lg">
                <span class="px-2">23 روز</span><span class="px-2">10 ساعت</span><span class="px-2">32 دقیقه</span><span class="px-2">10 ثانیه</span>
            </div>
        </header>



<div class="p-3">
<ul class="flex-col border  border-red-200/20 rounded-lg  divide-y divide-red-50/10 text-white mb-4">
    <li class="p-4"><i class="fa fa-calendar-days"></i><span class="mr-2 font-semibold">تاریخ قرار</span> : <span>1403/01/28</span></li>
    <li class="p-4"><i class="fa fa-location-dot"></i><span class="mr-2 font-semibold">مکان قرار</span> : <span>نیاوران-کاخ سعد آباد</span></li>
    <li class="p-4"><i class="fa fa-clock"></i><span class="mr-2 font-semibold">ساعت قرار</span> : <span>17:45</span></li>
</ul>
</div>
        

    </div>

    <div class="lg:col-span-6 col-span-12">
<article>
    <div class="card bg-white relative overflow-hidden after:bg-black after:w-full after:h-full after:p-4 after:bottom-0 after:absolute after:rounded-lg after:opacity-60 after:bg-gradient-to-b after:from-indigo-900 after:via-mahak after:to-mahaklight">
<figure>
    <img src="@/assets/images/dog.jpg" class="rounded-lg">

</figure>
<div class="date absolute left-0 top-0 flex flex-col items-center justify-center bg-mahak p-3 text-white rounded-tl-lg rounded-br-lg z-10">
    <span class="text-4xl font-bold">28</span>
    <span class="font-medium">اردیبهشت</span>

</div>

<div class="title absolute right-4 bottom-16  font-medium z-10 text-white">
    <h3 class="text-2xl font-fas">قرار حمایت از حیوانات بی سرپرست</h3>
    <p class="mt-2 font-fas text-sm text-red-100"> در کنار هم برای حیوانات بی سرپرست غذا خواهیم داد</p>
</div>

    </div>
</article>
    </div>
        </div>
    
    </section>


    
    <section class="Introduction-sponsors w-full max-w-screen-xl mx-auto  my-8  rounded-lg">
        <div class="text-2xl text-mahak font-semibold flex items-center justify-start">
            <i class="fa fa-heart pl-2"></i>
            <h2>معرفی حامیان</h2>
            <a href="/hamian" class="mr-2 text-sm bg-gray-100 px-3 py-1 rounded-lg flex items-center justify-center pt-1 text-gray-700">همه حامیان <i class="fa fa-chevron-left pr-2"></i></a>
    
        </div>
    
        <div class="hamian mt-8">
    
            <swiper class="rounded-lg relative overflow-hidden" :keyboard="true" :navigation="true" :modules="modules" :breakpoints="{
                            '300': {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            '400': {
                                slidesPerView: 1,
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
                    <nuxt-link to="/biography">
                        <div class="bg-white  border border-gray-100 rounded-lg person relative overflow-hidden flex items-center justify-between  p-4">
                        <div class="flex items-center ">
                            <img src="/ali.jpg" alt="" class="w-20  h-20 bg-center flex-none rounded-xl bg-slate-100 object-cover ">
                            <div class="min-w-0 flex-auto space-y-1 font-semibold mr-2 ">
                                <p class="text-cyan-500 transition-all duration-500  text-lg leading-6">
                                    <h2>علی آزادمند</h2>
                                </p>
                                <h3 class="text-slate-500 transition-all duration-500  text-sm leading-6 truncate">
                                    پرستار حیوانات
                                </h3>
                                <p class=" transition-all duration-500  text-sm ltr !font-en font-normal text-mahak block">
                                    @aliazadmand
                                </p>
                            </div>
                        </div>
                    </div> 
                    </nuxt-link>
                   
                </swiper-slide>
    
                <swiper-slide>
                    <div class="bg-white  border border-gray-100 rounded-lg person relative overflow-hidden flex items-center justify-between  p-4">
                        <div class="flex items-center ">
                            <img src="/ali.jpg" alt="" class="w-20  h-20 bg-center flex-none rounded-xl bg-slate-100 object-cover ">
                            <div class="min-w-0 flex-auto space-y-1 font-semibold mr-2 ">
                                <p class="text-cyan-500 transition-all duration-500  text-lg leading-6">
                                    <h2>علی آزادمند</h2>
                                </p>
                                <h3 class="text-slate-500 transition-all duration-500  text-sm leading-6 truncate">
                                    پرستار حیوانات
                                </h3>
                                <p class=" transition-all duration-500  text-sm ltr !font-en font-normal text-mahak block">
                                    @aliazadmand
                                </p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="bg-white  border border-gray-100 rounded-lg person relative overflow-hidden flex items-center justify-between  p-4">
                        <div class="flex items-center ">
                            <img src="/ali.jpg" alt="" class="w-20  h-20 bg-center flex-none rounded-xl bg-slate-100 object-cover ">
                            <div class="min-w-0 flex-auto space-y-1 font-semibold mr-2 ">
                                <p class="text-cyan-500 transition-all duration-500  text-lg leading-6">
                                    <h2>علی آزادمند</h2>
                                </p>
                                <h3 class="text-slate-500 transition-all duration-500  text-sm leading-6 truncate">
                                    پرستار حیوانات
                                </h3>
                                <p class=" transition-all duration-500  text-sm ltr !font-en font-normal text-mahak block">
                                    @aliazadmand
                                </p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="bg-white  border border-gray-100 rounded-lg person relative overflow-hidden flex items-center justify-between  p-4">
                        <div class="flex items-center ">
                            <img src="/ali.jpg" alt="" class="w-20  h-20 bg-center flex-none rounded-xl bg-slate-100 object-cover ">
                            <div class="min-w-0 flex-auto space-y-1 font-semibold mr-2 ">
                                <p class="text-cyan-500 transition-all duration-500  text-lg leading-6">
                                    <h2>علی آزادمند</h2>
                                </p>
                                <h3 class="text-slate-500 transition-all duration-500  text-sm leading-6 truncate">
                                    پرستار حیوانات
                                </h3>
                                <p class=" transition-all duration-500  text-sm ltr !font-en font-normal text-mahak block">
                                    @aliazadmand
                                </p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="bg-white  border border-gray-100 rounded-lg person relative overflow-hidden flex items-center justify-between  p-4">
                        <div class="flex items-center ">
                            <img src="/ali.jpg" alt="" class="w-20  h-20 bg-center flex-none rounded-xl bg-slate-100 object-cover ">
                            <div class="min-w-0 flex-auto space-y-1 font-semibold mr-2 ">
                                <p class="text-cyan-500 transition-all duration-500  text-lg leading-6">
                                    <h2>علی آزادمند</h2>
                                </p>
                                <h3 class="text-slate-500 transition-all duration-500  text-sm leading-6 truncate">
                                    پرستار حیوانات
                                </h3>
                                <p class=" transition-all duration-500  text-sm ltr !font-en font-normal text-mahak block">
                                    @aliazadmand
                                </p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

    
    
            </swiper>
        </div>
    
    </section>
    
    <section class="Sign-Up w-full max-w-screen-xl mx-auto px-4 my-8  p-8 rounded-lg bg-mahak/10">

    <div class="grid grid-cols-12 gap-4 lg:p-8">
        <div class="lg:col-span-6 col-span-12 lg:text-4xl text-2xl text-center text-mahak font-semibold"> شما هم به جمع حامیان ما بپیوندید</div>
        <div class="lg:col-span-6 col-span-12 flex items-center lg:justify-end justify-center gap-6">
<NuxtLink to="/register-new-supporters" class="bg-mahak text-white px-6 py-3 rounded-xl font-semibold hover:bg-mahaklight hover:text-white transition-all duration-1000">ثبت نام حامیان جدید</NuxtLink>
<NuxtLink to="/" class="bg-mahak text-white px-6 py-3 rounded-xl font-semibold hover:bg-mahaklight hover:text-white transition-all duration-1000">حمایت مالی</NuxtLink>
        </div>
    </div>
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


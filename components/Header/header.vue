<template>
  <div
    class="Header-Mobile items-center justify-between gap-6 flex lg:hidden w-full h-[60px] px-4 shadow-lg shadow-gray-300/50 fixed m-auto pt-2 top-0 left-0 right-0 z-50 bg-white "
  >
    <div class="left flex items-center justify-end gap-4">
      <button type="button" class="menu text-xl text-gray-600">
        <i class="fa-solid fa-bars"></i>
      </button>
      <div class="logo">
        <img
          class="w-20"
          src="https://mahak-charity.org/wp-content/themes/kalhors-mahak/images/logo.svg"
        />
      </div>
    </div>

    <div class="left flex items-center justify-end gap-6">
      <button type="button" class="menu text-xl text-mahak">
        <i class="fa-duotone fa-question-circle"></i>
      </button>
      <button type="button" class="menu text-xl text-mahak">
        <i class="fa-duotone fa-phone"></i>
      </button>
    </div>
  </div>

  <header class="hidden lg:block z-20 relative">
    <div class="bg-white p-3 w-full font-fas">
      <div
        class="w-full max-w-screen-xl mx-auto flex items-center justify-between"
      >
        <div class="logo">
          <img
            src="https://mahak-charity.org/wp-content/themes/kalhors-mahak/images/logo.svg"
          />
        </div>
        <div class="menu">
          <ul class="gap-4 items-center justify-start hidden lg:flex">
            <li>خانه</li>
            <li>قرارهای مهربانی</li>
            <li>تماس با ما</li>
            <li>درباره ما</li>
            <li></li>
          </ul>
        </div>
        <div class="login-register flex items-center gap-4">
          <div class="buttons flex items-center"></div>
          <div class="online-help px-4 py-1">
            <i class="fa fa-credit-card ml-2"></i>
            <span>کمک آنلاین</span>
          </div>
        </div>
      </div>
    </div>
  </header>

  <section class="mobile-side block lg:hidden">
    <div class="h-screen w-full fixed right-0 top-0 z-20">
      <div class="backdrop bg-gray-100/50 w-full h-screen"></div>
      <div class="close absolute left-2 top-4">
        <i class="fa fa-times text-2xl bg-white p-2 rounded-lg"></i>
      </div>
      <div
        class="bg-white opacity-90 absolute z-50 w-64 right-0 top-0 h-screen"
      >
        <div class="logo w-full border-b">
          <img src="/dog.svg" class="max-w-20 mx-auto" />
        </div>
        <ul class="flex flex-col space-y-6 p-4 font-semibold text-gray-700">
          <li>خانه</li>
          <li>قرارهای مهربانی</li>
          <li>تماس با ما</li>
          <li>درباره ما</li>
          <li cl>ثبت نام حامیان جدید</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
// import { Vue3Lottie } from 'vue3-lottie'
//Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

//Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
const modules = [Navigation, Pagination, Mousewheel, Keyboard];
</script>

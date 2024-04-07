<template>
    <section class="slider">
        <swiper
    :cssMode="true"
    :navigation="true"
    :pagination="true"
    :mousewheel="true"
    :keyboard="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide><img src="@/assets/images/1.jpg"></swiper-slide>
    <swiper-slide><img src="@/assets/images/1.jpg"></swiper-slide>
    <swiper-slide><img src="@/assets/images/1.jpg"></swiper-slide>

  </swiper>
    </section>

    <section class="Kind-appointments">
        <div class="grid grid-cols-12 gap-4">
            <div class="lg:col-span-6 ">
                قرارهای مهربانی
            </div>
            <div class="lg:col-span-6">
                انیمیشن سگ
            </div>

        </div>

    </section>

    <section class="Introduction-sponsors">

    </section>

    <section class="Sign-Up">

    </section>

</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide} from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/navigation';
  import 'swiper/css/pagination';


  // import required modules
  import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Navigation, Pagination, Mousewheel, Keyboard],
      };
    },
  };
</script>

<style>
</style>

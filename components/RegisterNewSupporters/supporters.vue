<template>
     <div class="bg-mahak h-40 p-4">

<nav class="flex w-full max-w-screen-xl mx-auto text-white" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    <li class="inline-flex items-center">
      <a href="#" class="inline-flex items-center text-sm font-medium text-white hover:text-red-100 dark:text-gray-400 dark:hover:text-white">
        <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </svg>
       خانه
      </a>
    </li>
    <li>
      <div class="flex items-center">
        <svg class="rtl:rotate-180 w-3 h-3 text-white mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <a href="#" class="ms-1 text-sm font-medium text-white hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">حمایت مالی</a>
      </div>
    </li>

  </ol>
</nav>
     </div>
    <div class="w-full max-w-screen-xl mx-auto my-8  lg:border  rounded-lg -mt-16 bg-white grid grid-cols-12">
       
        <div class="form lg:col-span-6 col-span-12">
            <h2 class="font-semibold text-2xl py-4 px-6 text-mahak rounded-t-lg">ثبت نام حامی جدید</h2>
    
            <form class="w-full max-w-full p-6">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                نام
              </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="علی">
                        <p class="text-red-500 text-xs">این یک فیلد اجباری است</p>
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
               نام خانوادگی
              </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="آزادمند">
                    </div>
                </div>
    
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                کدملی
              </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="کد ملی">
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                زمینه مورد علاقه فعالیت
              </label>
                        <div class="relative">
                            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                  <option>دامپزشکی</option>
                  <option>شرکت در فعالیت ها و قرارها</option>
                  <option>دامپزشکی</option>
                </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
               شماره موبایل
              </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="شماره موبایل">
                    </div>
                </div>
    
                <div class="flex flex-wrap -mx-3 mb-2 mt-4">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <button type="button" class="bg-mahak text-white px-6 py-2 flex rounded-lg hover:bg-mahaklight duration-300 font-semibold"> ثبت نام</button>
    
                    </div>
                </div>
            </form>
        </div>
        <div class="animation lg:col-span-6 col-span-12 overflow-hidden relative flex items-center justify-center">
            <div class="w-full max-w-72 flex items-center justify-center mx-auto">
                <client-only>
                                <Vue3Lottie animationLink="/dog-cat.json" />
                            </client-only> 
            </div>
           
        </div>
    
    </div>
</template>

<script setup>
import { Vue3Lottie } from 'vue3-lottie'

</script>
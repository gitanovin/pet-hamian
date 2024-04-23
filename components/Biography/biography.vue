<template>
    <div class="bg-mahak h-40 p-4 flex items-center">

        <nav class="flex w-full max-w-screen-xl mx-auto text-white mb-8" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li class="inline-flex items-center">
                    <a href="#"
                        class="inline-flex items-center text-sm font-medium text-white hover:text-red-100 dark:text-gray-400 dark:hover:text-white">
                        <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>
                        خانه
                    </a>
                </li>
                <li>
                    <div class="flex items-center">
                        <svg class="rtl:rotate-180 w-3 h-3 text-white mx-1" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 9 4-4-4-4" />
                        </svg>
                        <a href="#"
                            class="ms-1 text-sm font-medium text-white hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
                            بیوگرافی حامی</a>
                    </div>
                </li>

            </ol>
        </nav>
    </div>
    <div class="w-full max-w-screen-xl mx-auto my-8  grid grid-cols-12 gap-4">

        <div class="form lg:col-span-9 col-span-12  lg:border rounded-lg -mt-16 bg-white">
            <h1 class="font-semibold text-2xl py-4 px-6 text-mahak rounded-t-lg mt-4 font-fas">بیوگرافی علی آزادمند </h1>
            <div class="p-6 pt-0 font-fas text-gray-600">
                <article>
                  <p>این یک متن تستی است برای نمایش بیوگرافی حامی پت می توانیم این را با بیوگرافی واقعی جایگزین کنیم</p>
                </article>

            </div>

        </div>

        <div class="animation lg:col-span-3 col-span-12">


            <aside class="aside">
                <div class="aside-block sticky top-0">

                    <div class="box bg-mahak/10 p-4 rounded-lg mb-6 flex gap-4">
                        <div class="image"><img class="rounded-lg w-16 h-16" src="/assets/images/y.jpg"></div>
                        <div class="name">
                        <h3 class="mt-2 block text-xl text-mahak font-semibold">علی آزادمند </h3>
                        <span class="ptb-des block">پرستار حیوانات</span>
                        </div>

                        
                    </div>

                    <div class="space-y-4">
                        <a href="/register-new-supporters"
                            class="bg-gray-50 font-semibold px-6 py-4 rounded-lg border flex items-center">
                            <i class="fa-brands fa-instagram text-2xl text-mahak"></i>
                            <span class="pr-2 font-fas">مشاهده در اینستاگرام</span>
                        </a>
                        <a href="" class="bg-gray-50  px-6 py-4 rounded-lg border flex items-center">
                            <i class="fa fa-check-circle text-2xl text-mahak pl-2"></i>

                            <span class="font-fas font-bold">زمینه فعالیت : پرستار سگ ها</span> </a>
                   

                    </div>

                </div>
            </aside>










        </div>

    </div>
</template>

<template>
  <div class="bg-mahak h-40 p-4">
    <nav
      class="flex w-full max-w-screen-xl mx-auto text-white"
      aria-label="Breadcrumb"
    >
      <ol
        class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
      >
        <li class="inline-flex items-center">
          <a
            href="#"
            class="inline-flex items-center text-sm font-medium text-white hover:text-red-100 dark:text-gray-400 dark:hover:text-white"
          >
            <svg
              class="w-3 h-3 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
              />
            </svg>
            خانه
          </a>
        </li>
        <li>
          <div class="flex items-center">
            <svg
              class="rtl:rotate-180 w-3 h-3 text-white mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <a
              href="#"
              class="ms-1 text-sm font-medium text-white hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >حمایت مالی</a
            >
          </div>
        </li>
      </ol>
    </nav>
  </div>
  <div
    class="w-full max-w-screen-xl mx-auto my-8 lg:border rounded-lg -mt-16 bg-white grid grid-cols-12"
  >
    <div class="form lg:col-span-6 col-span-12">
      <h2 class="font-semibold text-2xl py-4 px-6 text-mahak rounded-t-lg">
        ثبت نام حامی جدید
      </h2>

      <div class="p-4 tab-content sm:p-5">
        <div class="space-y-5">
          <div class="relative col-span-4 sm:col-span-2 mt-4">
            <label
              for="last-name"
              class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
              ><span>نام و نام خانوادگی حامی</span></label
            >
            <div class="mt-1 rounded-md">
              <div
                class="relative flex items-stretch flex-grow focus-within:z-10"
              >
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                >
                  <i
                    class="fa-duotone fa-duotone fa-user text-hamian h-5 w-5 flex leading-[1px] pr-1"
                  ></i>
                </div>
                <input
                  type="text"
                  class="block w-full pr-10 py-4 border-gray-300 rounded-md focus:border-hamian focus:ring-hamian sm:text-sm"
                  placeholder="حداکثر 60 کاراکتر بنویسید"
                />
              </div>
            </div>
          </div>
          <div class="grid lg:grid-cols-3 gap-4">
            <div class="relative mt-4">
              <div class="dropdown">
                <label class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                  ><span>حیوان مورد علاقه شما</span></label
                ><select>
                  <option disabled="" value="">حیوان مورد علاقه شما</option>
                  <option>سگ</option>
                  <option>گربه</option>
                  <option>طوطی</option>
                  <option>مار</option></select
                ><button
                  type="button"
                  class="text-gray-500 border border-gray-300 focus:ring-1 focus:outline-none focus:ring-hamian font-medium rounded-lg text-sm px-4 py-4 text-center inline-flex items-center w-full justify-between mt-1"
                >
                  <i
                    class="fa-duotone fa-list text-hamian h-5 w-5 flex leading-[1px] text-[19px]"
                  ></i
                  ><span class="w-full pr-2 text-right text-normal font-normal"
                    >حیوان مورد علاقه شما</span
                  ><i
                    class="fa-duotone fa-angle-down text-[14px] ml-1 w-4 h-3 leading-[20px]"
                  ></i></button
                ><!--v-if-->
              </div>
            </div>
            <div class="relative mt-4">
              <label
                for="last-name"
                class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                ><span>شماره تلفن یا موبایل </span></label
              >
              <div class="mt-1 rounded-md">
                <div
                  class="relative flex items-stretch flex-grow focus-within:z-10"
                >
                  <div
                    class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                  >
                    <i
                      class="fa-duotone fa-duotone fa-phone text-hamian h-5 w-5 flex leading-[1px] pr-1"
                    ></i>
                  </div>
                  <input
                    type="text"
                    class="block w-full pr-10 py-4 border-gray-300 rounded-md focus:border-hamian focus:ring-hamian sm:text-sm"
                    placeholder="محبوب حسین زاده"
                  />
                </div>
              </div>
            </div>
            <div class="relative mt-4">
              <div class="dropdown">
                <label class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                  ><span>حوزه فعالیت</span></label
                ><select>
                  <option disabled="" value="">
                    حوزه فعالیت را انتخاب کنید
                  </option>
                  <option value="1">سگ ها</option>
                  <option value="2">گربه ها</option>
                  <option value="3">پرندگان</option>
                  <option value="4">دیگر</option></select
                ><button
                  type="button"
                  class="text-gray-500 border border-gray-300 focus:ring-1 focus:outline-none focus:ring-hamian font-medium rounded-lg text-sm px-4 py-4 text-center inline-flex items-center w-full justify-between mt-1"
                >
                  <i
                    class="fa-duotone fa-list text-hamian h-5 w-5 flex leading-[1px] text-[19px]"
                  ></i
                  ><span class="w-full pr-2 text-right text-normal font-normal"
                    >حوزه فعالیت را انتخاب کنید</span
                  ><i
                    class="fa-duotone fa-angle-down text-[14px] ml-1 w-4 h-3 leading-[20px]"
                  ></i></button
                ><!--v-if-->
              </div>
            </div>
          </div>
          <div class="relative col-span-4 sm:col-span-2 mt-2">
            <label
              for="last-name"
              class="flex py-2 pr-1 text-sm font-medium text-gray-700"
              ><span>بیوگرافی</span></label
            >
            <div class="w-full mt-1">
              <!---->
              <div class="ql-toolbar ql-snow">
                <span class="ql-formats"
                  ><button type="button" class="ql-header" value="1">
                    <svg viewBox="0 0 18 18">
                      <path
                        class="ql-fill"
                        d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z"
                      ></path>
                    </svg></button
                  ><button type="button" class="ql-header" value="2">
                    <svg viewBox="0 0 18 18">
                      <path
                        class="ql-fill"
                        d="M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"
                      ></path>
                    </svg></button></span
                ><span class="ql-formats"
                  ><button type="button" class="ql-bold">
                    <svg viewBox="0 0 18 18">
                      <path
                        class="ql-stroke"
                        d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"
                      ></path>
                      <path
                        class="ql-stroke"
                        d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"
                      ></path>
                    </svg></button
                  ><button type="button" class="ql-italic">
                    <svg viewBox="0 0 18 18">
                      <line
                        class="ql-stroke"
                        x1="7"
                        x2="13"
                        y1="4"
                        y2="4"
                      ></line>
                      <line
                        class="ql-stroke"
                        x1="5"
                        x2="11"
                        y1="14"
                        y2="14"
                      ></line>
                      <line
                        class="ql-stroke"
                        x1="8"
                        x2="10"
                        y1="14"
                        y2="4"
                      ></line>
                    </svg></button
                  ><button type="button" class="ql-underline">
                    <svg viewBox="0 0 18 18">
                      <path
                        class="ql-stroke"
                        d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"
                      ></path>
                      <rect
                        class="ql-fill"
                        height="1"
                        rx="0.5"
                        ry="0.5"
                        width="12"
                        x="3"
                        y="15"
                      ></rect>
                    </svg></button></span
                ><span class="ql-formats"
                  ><button type="button" class="ql-list" value="ordered">
                    <svg viewBox="0 0 18 18">
                      <line
                        class="ql-stroke"
                        x1="7"
                        x2="15"
                        y1="4"
                        y2="4"
                      ></line>
                      <line
                        class="ql-stroke"
                        x1="7"
                        x2="15"
                        y1="9"
                        y2="9"
                      ></line>
                      <line
                        class="ql-stroke"
                        x1="7"
                        x2="15"
                        y1="14"
                        y2="14"
                      ></line>
                      <line
                        class="ql-stroke ql-thin"
                        x1="2.5"
                        x2="4.5"
                        y1="5.5"
                        y2="5.5"
                      ></line>
                      <path
                        class="ql-fill"
                        d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"
                      ></path>
                      <path
                        class="ql-stroke ql-thin"
                        d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"
                      ></path>
                      <path
                        class="ql-stroke ql-thin"
                        d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"
                      ></path>
                    </svg></button
                  ><button type="button" class="ql-list" value="bullet">
                    <svg viewBox="0 0 18 18">
                      <line
                        class="ql-stroke"
                        x1="6"
                        x2="15"
                        y1="4"
                        y2="4"
                      ></line>
                      <line
                        class="ql-stroke"
                        x1="6"
                        x2="15"
                        y1="9"
                        y2="9"
                      ></line>
                      <line
                        class="ql-stroke"
                        x1="6"
                        x2="15"
                        y1="14"
                        y2="14"
                      ></line>
                      <line
                        class="ql-stroke"
                        x1="3"
                        x2="3"
                        y1="4"
                        y2="4"
                      ></line>
                      <line
                        class="ql-stroke"
                        x1="3"
                        x2="3"
                        y1="9"
                        y2="9"
                      ></line>
                      <line
                        class="ql-stroke"
                        x1="3"
                        x2="3"
                        y1="14"
                        y2="14"
                      ></line>
                    </svg></button
                  ><span class="ql-align ql-picker ql-icon-picker"
                    ><span
                      class="ql-picker-label"
                      tabindex="0"
                      role="button"
                      aria-expanded="false"
                      aria-controls="ql-picker-options-7"
                      ><svg viewBox="0 0 18 18">
                        <line
                          class="ql-stroke"
                          x1="3"
                          x2="15"
                          y1="9"
                          y2="9"
                        ></line>
                        <line
                          class="ql-stroke"
                          x1="3"
                          x2="13"
                          y1="14"
                          y2="14"
                        ></line>
                        <line
                          class="ql-stroke"
                          x1="3"
                          x2="9"
                          y1="4"
                          y2="4"
                        ></line></svg></span
                    ><span
                      class="ql-picker-options"
                      aria-hidden="true"
                      tabindex="-1"
                      id="ql-picker-options-7"
                      ><span tabindex="0" role="button" class="ql-picker-item"
                        ><svg viewBox="0 0 18 18">
                          <line
                            class="ql-stroke"
                            x1="3"
                            x2="15"
                            y1="9"
                            y2="9"
                          ></line>
                          <line
                            class="ql-stroke"
                            x1="3"
                            x2="13"
                            y1="14"
                            y2="14"
                          ></line>
                          <line
                            class="ql-stroke"
                            x1="3"
                            x2="9"
                            y1="4"
                            y2="4"
                          ></line></svg></span
                      ><span
                        tabindex="0"
                        role="button"
                        class="ql-picker-item"
                        data-value="center"
                        ><svg viewBox="0 0 18 18">
                          <line
                            class="ql-stroke"
                            x1="15"
                            x2="3"
                            y1="9"
                            y2="9"
                          ></line>
                          <line
                            class="ql-stroke"
                            x1="14"
                            x2="4"
                            y1="14"
                            y2="14"
                          ></line>
                          <line
                            class="ql-stroke"
                            x1="12"
                            x2="6"
                            y1="4"
                            y2="4"
                          ></line></svg></span
                      ><span
                        tabindex="0"
                        role="button"
                        class="ql-picker-item"
                        data-value="right"
                        ><svg viewBox="0 0 18 18">
                          <line
                            class="ql-stroke"
                            x1="15"
                            x2="3"
                            y1="9"
                            y2="9"
                          ></line>
                          <line
                            class="ql-stroke"
                            x1="15"
                            x2="5"
                            y1="14"
                            y2="14"
                          ></line>
                          <line
                            class="ql-stroke"
                            x1="15"
                            x2="9"
                            y1="4"
                            y2="4"
                          ></line></svg></span
                      ><span
                        tabindex="0"
                        role="button"
                        class="ql-picker-item"
                        data-value="justify"
                        ><svg viewBox="0 0 18 18">
                          <line
                            class="ql-stroke"
                            x1="15"
                            x2="3"
                            y1="9"
                            y2="9"
                          ></line>
                          <line
                            class="ql-stroke"
                            x1="15"
                            x2="3"
                            y1="14"
                            y2="14"
                          ></line>
                          <line
                            class="ql-stroke"
                            x1="15"
                            x2="3"
                            y1="4"
                            y2="4"
                          ></line></svg></span></span></span
                  ><select class="ql-align" style="display: none">
                    <option selected="selected"></option>
                    <option value="center"></option>
                    <option value="right"></option>
                    <option value="justify"></option></select
                ></span>
              </div>
              <div class="ql-container ql-snow">
                <div
                  class="ql-editor ql-blank"
                  data-gramm="false"
                  contenteditable="true"
                  data-placeholder="بیوگرافی کوتاه حامی"
                >
                  <p><br /></p>
                </div>
                <div
                  class="ql-clipboard"
                  contenteditable="true"
                  tabindex="-1"
                ></div>
                <div class="ql-tooltip ql-hidden">
                  <a
                    class="ql-preview"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="about:blank"
                  ></a
                  ><input
                    type="text"
                    data-formula="e=mc^2"
                    data-link="https://quilljs.com"
                    data-video="Embed URL"
                  /><a class="ql-action"></a><a class="ql-remove"></a>
                </div>
              </div>
            </div>
          </div>
          <div class="gap-4 border rounded-lg border-gray-200 py-5">
            <div class="lable px-6">
              <label
                for="about"
                class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >افزودن لینک شبکه های اجتماعی</label
              >
              <p class="mt-2 text-sm text-gray-500">
                از این بخش می توانید لینک های دلخواه را به پروفایل حامی اضافه
                کنید
              </p>
            </div>
            <div class="block">
              <div class="border mx-2 rounded-md my-2 p-4 mt-8">
                <input
                  type="text"
                  class="appearance-none border border-gray-200 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none mb-1"
                  placeholder="عنوان لینک"
                /><input
                  type="text"
                  class="appearance-none ltr border rounded-lg border-gray-200 text-hamian font-en w-full mt-2 py-2 px-3 leading-tight focus:outline-none mb-1"
                  placeholder="https://instagram.com/petoman"
                /><button
                  class="mb-8 text-red-500 font-bold focus:outline-none mt-1 p py-1 rounded-lg flex items-center text-sm"
                >
                  <i class="fa fa-trash-can"></i
                  ><span class="mr-2 font-normal">حذف</span>
                </button>
              </div>
              <button
                class="mb-8 text-white bg-hamian border-hamian font-bold focus:outline-none mr-3 mt-2 border px-3 py-2 rounded-lg flex items-center"
              >
                <i class="fa fa-plus"></i
                ><span class="mr-2 font-normal">افزودن</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <form class="w-full max-w-full p-6">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              نام
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="علی"
            />
            <p class="text-red-500 text-xs">این یک فیلد اجباری است</p>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              نام خانوادگی
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="آزادمند"
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              کدملی
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder="کد ملی"
            />
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              زمینه مورد علاقه فعالیت
            </label>
            <div class="relative">
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>دامپزشکی</option>
                <option>شرکت در فعالیت ها و قرارها</option>
                <option>دامپزشکی</option>
              </select>
              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
              >
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              شماره موبایل
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="شماره موبایل"
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-2 mt-4">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <button
              type="button"
              class="bg-mahak text-white px-6 py-2 flex rounded-lg hover:bg-mahaklight duration-300 font-semibold"
            >
              ثبت نام
            </button>
          </div>
        </div>
      </form>
    </div>
    <div
      class="animation lg:col-span-6 col-span-12 overflow-hidden relative flex items-center justify-center"
    >
      <div class="w-full max-w-72 flex items-center justify-center mx-auto">
        <client-only>
          <Vue3Lottie animationLink="/dog-cat.json" />
        </client-only>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Vue3Lottie } from "vue3-lottie";
</script>

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
    <div class="form lg:col-span-6 col-span-12 border-l">
      <h2 class="font-semibold text-2xl py-4 px-6 text-mahak rounded-t-lg">
        ثبت نام حامی جدید
      </h2>

      <div class="flex flex-col tabs">
        <div class="p-4 tab-content sm:p-5">
          <div class="space-y-5">
            <div class="relative col-span-4 sm:col-span-2 mt-4">
              <label
                for="last-name"
                class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
              >
                <span>نام و نام خانوادگی حامی</span>
              </label>
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
                  <label
                    class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                  >
                    <span>حیوان مورد علاقه شما</span>
                  </label>
                  <select ref="input" v-model="Petvalue">
                    <option value="" :disabled="true">
                      {{ Petplaceholder }}
                    </option>
                    <option v-for="Petcategory in Petcategories">
                      {{ Petcategory.text }}
                    </option>
                  </select>

                  <button
                    type="button"
                    class="text-gray-500 border border-gray-300 focus:ring-1 focus:outline-none focus:ring-hamian font-medium rounded-lg text-sm px-4 py-4 text-center inline-flex items-center w-full justify-between mt-1"
                    @click="PettoggleFocus"
                  >
                    <i
                      class="fa-duotone fa-list text-hamian h-5 w-5 flex leading-[1px] text-[19px]"
                    ></i>
                    <span
                      class="w-full pr-2 text-right text-normal font-normal"
                    >
                      {{
                        [null, ""].includes(Petvalue)
                          ? Petplaceholder
                          : myfindText(Petvalue)
                      }}</span
                    >
                    <i
                      class="fa-duotone fa-angle-down text-[14px] ml-1 w-4 h-3 leading-[20px]"
                    ></i>
                  </button>
                  <div
                    class="categories absolute top-18 z-10 mt-2 bg-white border rounded-lg w-full p-3"
                    v-if="Petfocused"
                  >
                    <ul>
                      <li class="disabled text-sm font-normal">
                        <input
                          type="search"
                          class="border border-gray-200 w-full my-2 rounded-lg placeholder:text-sm text-gray-400 placeholder:text-gray-400/70"
                          placeholder="جستجو در لیست"
                        />
                      </li>
                      <li
                        class="py-1 text-gray-500 mt-2 cursor-pointer hover:bg-gray-50 px-2 rounded-md"
                        v-for="Petcategory in Petcategories"
                        @click="selectPetCategory(Petcategory.Petvalue)"
                        :data-value="Petcategory.Petvalue"
                      >
                        {{ Petcategory.text }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="relative mt-4">
                <label
                  for="last-name"
                  class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                >
                  <span>شماره تلفن یا موبایل </span>
                </label>
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
                      placeholder="0914000000"
                    />
                  </div>
                </div>
              </div>

              <div class="relative mt-4">
                <div class="dropdown">
                  <label
                    class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                  >
                    <span>حوزه فعالیت</span>
                  </label>
                  <select :name="name" :id="id" ref="input" v-model="value">
                    <option value="" :disabled="true">{{ placeholder }}</option>
                    <option
                      v-for="category in categories"
                      :value="category.value"
                    >
                      {{ category.text }}
                    </option>
                  </select>

                  <button
                    type="button"
                    class="text-gray-500 border border-gray-300 focus:ring-1 focus:outline-none focus:ring-hamian font-medium rounded-lg text-sm px-4 py-4 text-center inline-flex items-center w-full justify-between mt-1"
                    @click="toggleFocus"
                  >
                    <i
                      class="fa-duotone fa-list text-hamian h-5 w-5 flex leading-[1px] text-[19px]"
                    ></i>
                    <span
                      class="w-full pr-2 text-right text-normal font-normal"
                    >
                      {{
                        [null, ""].includes(value)
                          ? placeholder
                          : findText(value)
                      }}</span
                    >
                    <i
                      class="fa-duotone fa-angle-down text-[14px] ml-1 w-4 h-3 leading-[20px]"
                    ></i>
                  </button>
                  <div
                    class="categories absolute top-18 z-10 mt-2 bg-white border rounded-lg w-full p-3"
                    v-if="focused"
                  >
                    <ul>
                      <li class="disabled text-sm font-semibold text-gray-400">
                        {{ placeholder }}
                      </li>
                      <li class="disabled text-sm font-normal">
                        <input
                          type="search"
                          class="border border-gray-200 w-full my-2 rounded-lg placeholder:text-sm text-gray-400 placeholder:text-gray-400/70"
                          placeholder="جستجو در لیست"
                        />
                      </li>
                      <li
                        class="py-1 text-gray-500 mt-2 cursor-pointer hover:bg-gray-50 px-2 rounded-md"
                        v-for="category in categories"
                        @click="selectCategory(category.value)"
                        :data-value="category.value"
                        :class="{ selected: value === category.value }"
                      >
                        {{ category.text }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative col-span-4 sm:col-span-2 mt-2">
              <label
                for="last-name"
                class="flex py-2 pr-1 text-sm font-medium text-gray-700"
              >
                <span>بیوگرافی</span>
              </label>
              <div class="w-full mt-1">
                <form action="#" class="relative">
                  <div
                    class="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500"
                  >
                    <label for="title" class="sr-only">بیوگرافی</label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      class="block w-full border-0 pt-2.5 text-lg font-medium placeholder-gray-500 focus:ring-0"
                      placeholder="درباره شما"
                    />
                    <label for="description" class="sr-only">Description</label>
                    <textarea
                      rows="2"
                      name="description"
                      id="description"
                      class="block w-full resize-none border-0 py-0 placeholder-gray-500 focus:ring-0 sm:text-sm h-28"
                      placeholder="در مورد خودتان کوتاه بنویسید..."
                    ></textarea>
                  </div>
                </form>
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
                <div
                  class="border mx-2 rounded-md my-2 p-4 mt-8"
                  v-for="field in fields"
                >
                  <input
                    type="text"
                    v-model="field.content"
                    class="appearance-none border border-gray-200 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none mb-1"
                    placeholder="عنوان لینک"
                  />
                  <input
                    type="text"
                    v-model="field.link"
                    class="appearance-none ltr border rounded-lg border-gray-200 text-hamian font-en w-full mt-2 py-2 px-3 leading-tight focus:outline-none mb-1"
                    placeholder="https://instagram.com/petoman"
                  />

                  <button
                    @click="removeField(field.id)"
                    class="mb-8 text-red-500 font-bold focus:outline-none mt-1 p py-1 rounded-lg flex items-center text-sm"
                  >
                    <i class="fa fa-trash-can"></i
                    ><span class="mr-2 font-normal">حذف</span>
                  </button>
                </div>
                <button
                  @click="addField"
                  class="mb-8 text-white bg-mahak border-mahak font-bold focus:outline-none mr-3 mt-2 border px-3 py-2 rounded-lg flex items-center"
                >
                  <i class="fa fa-plus"></i
                  ><span class="mr-2 font-normal">افزودن</span>
                </button>
              </div>
              <div class="border-t text-center">
                <button
                  @click="addField"
                  class="mb-8 text-white bg-mahak border-mahak font-bold focus:outline-none mt-2 border px-3 py-4 flex items-center justify-center w-full"
                >
                  <i class="fa fa-user-plus"></i
                  ><span class="mr-2 font-normal">پیوستن به حامیان پتو من</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
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

<script>
import { Vue3Lottie } from "vue3-lottie";
export default {
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      fields: [{ content: "", link: "" }],
      fieldCount: 1,

      placeholder: "حوزه  فعالیت   ",
      useRealInput: false,
      value: "",
      focused: false,
      category: false,
      categories: [
        { value: 1, text: "سگ ها" },
        { value: 2, text: "گربه ها" },
        { value: 3, text: "پرندگان" },
        { value: 4, text: "دیگر" },
      ],

      Petplaceholder: "حیوان مورد علاقه",
      PetuseRealInput: false,
      Petvalue: "",
      Petfocused: false,
      Petcategory: false,
      Petcategories: [
        { Petvalue: 1, text: "سگ " },
        { Petvalue: 2, text: " گربه" },
        { Petvalue: 3, text: "طوطی" },
        { Petvalue: 4, text: "مار" },
      ],
    };
  },

  methods: {
    toggleFocus() {
      if (this.useRealInput) {
        this.$refs.input.focus();
      } else {
        this.focused = !this.focused;
      }
    },
    selectCategory(value) {
      if (value !== this.value) {
        this.value = value;
        this.$refs.input.value = value;
        this.toggleFocus();
      }
    },
    findText(value) {
      const category = this.categories.filter((category) => {
        if (category.value === value) return true;
      })[0];
      return category === undefined ? "" : category.text;
    },
    PettoggleFocus() {
      if (this.usePetRealInput) {
        this.$refs.input.focus();
      } else {
        this.Petfocused = !this.Petfocused;
      }
    },
    selectPetCategory(Petvalue) {
      if (Petvalue !== this.Petvalue) {
        this.Petvalue = Petvalue;
        this.$refs.input.Petvalue = Petvalue;
        this.PettoggleFocus();
      }
    },
    myfindText(Petvalue) {
      const Petcategory = this.Petcategories.filter((Petcategory) => {
        if (Petcategory.Petvalue === Petvalue) return true;
      })[0];
      return Petcategory === undefined ? "" : Petcategory.text;
    },
    addField() {
      this.fieldCount++;
      this.fields.push({ id: this.fieldCount, content: "", link: "" });
    },
    removeField(id) {
      this.fields = this.fields.filter((obj) => obj.id !== id);
    },
  },
};
</script>

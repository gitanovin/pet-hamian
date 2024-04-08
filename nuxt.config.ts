
export default defineNuxtConfig({
    css: ['~/assets/css/app.css','~/assets/css/fonts/icons/icons.css'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
        
      },
    },
  

  
    app: {
      head: {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',
        htmlAttrs: {
          dir: 'rtl'
        },
        title: 'Pet Strore App',
        meta: [
          { name: 'description', content: 'Pet Store Website' }
        ],
        bodyAttrs: {
          class: 'font-fa'
        },
      }
      
      
    },
  
  })
  
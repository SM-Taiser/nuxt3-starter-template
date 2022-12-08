export default defineNuxtConfig({
    app: {
        head: {
          meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
          ],
          script: [
            { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js' }
          ],
          link: [
            { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' },
            { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css'}
          ]
        },
    },
    components: {
       global: true,
       dirs: ['~/components']
    },
    vite: {
        css: {
          preprocessorOptions: {
              scss: {
                  additionalData: '@import "@/assets/sass/main.scss";',
              },
          },
      }
    }
})

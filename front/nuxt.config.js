export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'FrontApp',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },




    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "./assets/css/Login.css",
        "./assets/css/Homepage.css",
        "./assets/css/Profile.css",
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
        '@nuxtjs/auth',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        'bootstrap-vue/nuxt',
    ],

    bootstrapVue: {
        bootstrapCSS: true,
        bootstrapVueCSS: true
    },
    styleResources: {
        scss: "./scss/*.scss"
    },


    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseURL: 'http://127.0.0.1:3001/api'

    },

    auth: {
        strategies: {
            local: {
                token: {
                    property: "token",
                    global: true,
                    required: true,
                    type: "Bearer"
                },

                endpoints: {
                    login: { url: 'authenticate', method: 'post', propertyName: 'data.token' },
                    user: { url: 'profile', method: 'get', propertyName: 'data' },
                    logout: false
                }




            }
        }
    },
    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}
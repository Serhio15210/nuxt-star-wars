// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";

export default defineNuxtConfig({
    alias: {},
    router: {
        options: {
            scrollBehaviorType: 'smooth'
        }
    },
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: [
      '@nuxt/image',
      '@nuxtjs/apollo',
      '@vee-validate/nuxt',
      '@pinia/nuxt',
      '@sidebase/nuxt-auth',
      '@nuxtjs/color-mode'
    ],
    colorMode: {
        classSuffix: '', // Удаляет суффикс класса по умолчанию (например, будет просто 'dark' вместо 'dark-mode')
        preference: 'system', // Использовать системные настройки темы (light/dark)
        fallback: 'dark', // Тема по умолчанию

    },
    auth: {
        globalAppMiddleware: true,
        baseURL: process.env.NUXT_PUBLIC_API_URL,
        provider: {
            type: 'local',
            endpoints: {
                signIn: {path: '/login', method: 'post'},
                signOut: {path: '/logout', method: 'post'},
                signUp: {path: '/register', method: 'post'},
                getSession: {path: '/me', method: 'get'}
            },
            pages: {
                login: '/auth'
            },
            token: {
                signInResponseTokenPointer: '/accessToken'
            },
            sessionDataType: {}
        },
        enableSessionRefreshPeriodically: 5000,
        enableSessionRefreshOnWindowFocus: true,
        globalMiddlewareOptions: {
            allow404WithoutAuth: true, // Defines if the 404 page will be accessible while unauthenticated
            addDefaultCallbackUrl: '/',

        }
    },


    pinia: {
        autoImports: [
            'defineStore',
            ['defineStore', 'definePiniaStore']
        ]
    },
    veeValidate: {
        // disable or enable auto imports
        autoImports: true,
        // Use different names for components
        componentNames: {
            Form: 'VeeForm',
            Field: 'VeeField',
            FieldArray: 'VeeFieldArray',
            ErrorMessage: 'VeeErrorMessage',
        },
    },
    css: ['@/assets/global.scss'],
    apollo: {
        clients: {
            default: {
                httpEndpoint: 'https://swapi-graphql.netlify.app/.netlify/functions/index'
            }
        },
    },
    app: {
        head: {
            title: 'Star Wars',
            link: [],

        }
    },
    image: {
        quality: 80,

    }
})

import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin({
  name: 'app-dino-playground-launch',
  dependsOn: ['desktop-app-dino-register'],
  setup(nuxtApp) {
    autoStartPlaygroundApps(nuxtApp, [
      { id: 'org.owdproject.dino', entry: 'dino', windowModel: 'main' },
    ])
  },
})

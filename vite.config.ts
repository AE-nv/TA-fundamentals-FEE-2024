import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {viteExternalsPlugin} from 'vite-plugin-externals';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(),
        viteExternalsPlugin({
            mlcConfig: 'mlcConfig',
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
})

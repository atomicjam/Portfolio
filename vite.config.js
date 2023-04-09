// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { VitePWA } from "vite-plugin-pwa"

export default defineConfig({
    plugins: [
         VitePWA({  
                registerType: 'autoUpdate',
                workbox: {
                  globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,avif,webp,mp4,webm,woff,woff2}']
                }, 
                manifest: { 
                  name: 'Elliot Goode - Portfolio',
                  short_name: 'Goode',
                  description: 'Elliot Goode, About & Portfolio',
                  theme_color: '#30465a',
                  icons: [
                    {
                      src: "/icons/512.png",
                      sizes: "512x512",
                      type: "image/png",
                      purpose: "maskable"
                    },
                    {
                      src: "/icons/512.png",
                      sizes: "512x512",
                      type: "image/png",
                      purpose: "any"
                    }
                  ]
                }
              })
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                work: resolve(__dirname, 'work/index.html'),
                about: resolve(__dirname, 'about/index.html'),
                appraisals: resolve(__dirname, 'appraisals/index.html'),
                auctions: resolve(__dirname, 'auctions/index.html'),
                contractors: resolve(__dirname, 'contractors/index.html'),
                delorean: resolve(__dirname, 'delorean/index.html'),
                emergency: resolve(__dirname, 'emergency/index.html'),
                enrichment: resolve(__dirname, 'enrichment/index.html'),
                enrolment: resolve(__dirname, 'enrolment/index.html'),
                entranceexams: resolve(__dirname, 'entranceexams/index.html'),
                fitness: resolve(__dirname, 'fitness/index.html'),
                flourish: resolve(__dirname, 'flourish/index.html'),
                guild: resolve(__dirname, 'guild/index.html'),
                helpdesk: resolve(__dirname, 'helpdesk/index.html'),
                parabola: resolve(__dirname, 'parabola/index.html'),
                pathways: resolve(__dirname, 'pathways/index.html'),
                springboard: resolve(__dirname, 'springboard/index.html'),
                transfer: resolve(__dirname, 'transfer/index.html'),
                venues: resolve(__dirname, 'venues/index.html'),
            },
        },
    },
})

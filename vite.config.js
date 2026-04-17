import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Apollo visitor tracking script injected into <head> for production builds only.
const apolloTrackingPlugin = {
  name: 'inject-apollo-tracking',
  transformIndexHtml: {
    order: 'pre',
    handler(html, ctx) {
      if (!ctx.server) { // ctx.server is defined in dev, undefined during vite build
        const script = `<script>function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,o.onload=function(){window.trackingFunctions.onLoad({appId:"69e27ae900abf60019ab5fb1"})},document.head.appendChild(o)}initApollo();</script>`
        return html.replace('</head>', `${script}\n</head>`)
      }
      return html
    },
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), apolloTrackingPlugin],
})

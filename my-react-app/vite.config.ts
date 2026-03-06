import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
 base: "/git-push-react-app/",
  plugins: [react()],
  deploy: "gh-pages -d dist "
})

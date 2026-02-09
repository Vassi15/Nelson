import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Nelson/', // <--- CAMBIA ESTO: Pon el nombre de tu repo entre barras
})

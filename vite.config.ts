import { defineConfig, loadEnv, UserConfigExport } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '', '')
  const config: UserConfigExport = {
    base: env.VITE_BASE_PATH ?? '/',
    plugins: [react()],
  }
  return config
})

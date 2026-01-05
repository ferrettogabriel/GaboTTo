import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), './'), 
      },
    },
    define: {
      'process.env': JSON.stringify(env)
    },
    server: {
      port: 3000,
      host: true 
    }
  }
})

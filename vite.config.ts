import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carga las variables de entorno desde el directorio actual
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    resolve: {
      alias: {
        // Alias para importar usando @/
        '@': path.resolve(process.cwd(), './'), 
      },
    },
    define: {
      // Compatibilidad para librerías que usen process.env
      'process.env': JSON.stringify(env)
    },
    server: {
      port: 3000,
      host: true 
    }
  }
})

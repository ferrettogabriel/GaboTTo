import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
export default defineConfig(({ mode }) => {
  // Carga las variables de entorno para que estén disponibles
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    resolve: {
      alias: {
        // Esto permite usar imports como "@/components/..."
        '@': path.resolve(process.cwd(), './'), 
      },
    },
    define: {
      // Esto asegura que si usas process.env en tu código (estilo antiguo), funcione en el navegador
      'process.env': JSON.stringify(env)
    },
    server: {
      port: 3000,
      host: true 
    }
  }
})

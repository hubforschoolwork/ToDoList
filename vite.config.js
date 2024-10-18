import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/


export default defineConfig({
  base: '/ToDoList/',
  plugins: [react()],
});





// export default defineConfig({
//   plugins: [react()],
// })

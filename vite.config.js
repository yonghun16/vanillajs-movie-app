// vite.config.js
export default {
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 실제 백엔드 서버의 포트 (예: Express 서버)
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '') // API 경로에 맞게 리다이렉트
      }
    }
  }
}

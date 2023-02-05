import { CorsOptions, defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import fs from 'fs';
import { SecureContextOptions } from 'tls';

const HOST = 'sample';
const PORT = 5173;
const HTTPS_OPTIONS: SecureContextOptions = {
  key: fs.readFileSync('../certs/test.test/key.pem'),
  cert: fs.readFileSync('../certs/test.test/cert.pem')
};
const FQDN = 'test.test';
const PROTOCOL = 'https://';
const CORS_OPTION: CorsOptions = {
  origin: `${PROTOCOL}${FQDN}`
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: HOST,
    origin: `${PROTOCOL}${FQDN}`,
    https: HTTPS_OPTIONS,
    hmr: {
      host: FQDN,
      port: PORT
    },
    strictPort: true,
    cors: CORS_OPTION
  },
  preview: {
    host: HOST,
    port: PORT,
    https: HTTPS_OPTIONS,
    strictPort: true,
    cors: CORS_OPTION
  }
});

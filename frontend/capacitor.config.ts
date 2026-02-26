import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.reactdotnetapp',
  appName: 'ReactDotnetApp',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;

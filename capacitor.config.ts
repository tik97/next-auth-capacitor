import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nextauth.app',
  appName: 'next-auth',
  webDir: "out",
  server: {
    androidScheme: 'https'
  }
};

export default config;

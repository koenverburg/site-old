/// <reference types="next" />
/// <reference types="next/types/global" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GRAPHCMS_URL: string;
      UMAMI_HOST: string;
      UMAMI_WEBSITE_ID: string;
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      PWD: string;
    }
  }
}

export {}

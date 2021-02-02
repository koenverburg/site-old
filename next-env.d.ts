/// <reference types="next" />
/// <reference types="next/types/global" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GRAPHCMS_URL: string;
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      PWD: string;
    }
  }
}

export {}

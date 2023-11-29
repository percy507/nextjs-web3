declare namespace NodeJS {
  export interface ProcessEnv {
    APP_ENV: 'local' | 'dev' | 'test' | 'prod';
  }
}

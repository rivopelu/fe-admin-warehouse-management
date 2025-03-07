import packageJson from '../../package.json';
export const ENV = {
  BASE_URL: import.meta.env.VITE_APP_BASE_URL,
  DISCORD_API_KEY: import.meta.env.VITE_APP_DISCORD_API_KEY,
  VERSION: packageJson.version,
};

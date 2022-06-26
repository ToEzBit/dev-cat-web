const ACCESS_TOKEN = 'accessToken';

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);
export const setAccessToken = (token) =>
  localStorage.setItem(ACCESS_TOKEN, token);
export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);

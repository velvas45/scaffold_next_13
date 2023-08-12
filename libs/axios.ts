import axios, { AxiosInstance } from "axios";

export const fetchAxios: AxiosInstance = axios.create({
  baseURL: "url",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to add the JWT token to the authorization header
fetchAxios.interceptors.request.use(
  (config) => {
    /**
     * NEXT DEVELOPMENT
     * CHANGE SESSION STORE TO COOKIES
     */
    const token = sessionStorage.getItem("jwtToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor to refresh the JWT token if it's expired
fetchAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;

    // If the error is a 401 and we have a refresh token, refresh the JWT token
    if (
      error.response.status === 401 &&
      sessionStorage.getItem("refreshToken")
    ) {
      /**
       * NEXT DEVELOPMENT
       * CHANGE SESSION STORE TO COOKIES
       */
      const refreshToken = sessionStorage.getItem("refreshToken");

      let data = JSON.stringify({
        refresh_token: refreshToken,
      });

      /**
       * Next Development
       * Refetch refresh token api
       */
    }

    // Return the original error if we can't handle it
    return Promise.reject(error);
  }
);

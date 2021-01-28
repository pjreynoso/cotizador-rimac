import axios, { AxiosInstance } from 'axios'

export const baseURL = process.env.REACT_APP_API_ENDPOINT
type Payload = Record<string, any>

export const http = function (): AxiosInstance {

  const instance = axios.create({
    baseURL: baseURL,
  })
  instance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });
  return instance
}

export function Post(route: string, json: Payload = {}, headers: Payload = {}): Promise<any> {
  return new Promise((resolve, reject) => {
    http()
      .post(route, json, { headers })
      .then((res) => resolve(res.data))
      .catch((e) => {
        reject({ type: axios.isCancel(e) ? "cancel" : "err", ...e });
      });
  })
}
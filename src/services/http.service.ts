
import axios, { AxiosRequestConfig } from 'axios';
import { ENV } from '../constants/env.ts';
import { LOCAL_STORAGE_KEY } from '../constants/local-storage-key.ts';

export class HttpService {
  private baseUrl = ENV.BASE_URL;
  private token: string | null = localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);

  private HeaderSetting(): AxiosRequestConfig {
    return {
      headers: {
        Authorization: this.token ? `Bearer ${this.token}` : null,
      },
    };
  }

  public GET(url: string) {
    return axios.get(this.baseUrl + url, this.HeaderSetting());
  }

  public POST<T>(URL: string, data: T) {
    return axios.post(this.baseUrl + URL, data, this.HeaderSetting());
  }

  public PUT<T>(URL: string, data: T) {
    return axios.put(this.baseUrl + URL, data, this.HeaderSetting());
  }

  public PATCH(URL: string) {
    return axios.patch(this.baseUrl + URL, undefined, this.HeaderSetting());
  }

  public DELETE(URL: string) {
    return axios.delete(this.baseUrl + URL, this.HeaderSetting());
  }
}

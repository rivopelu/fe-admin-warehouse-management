import axios, { AxiosError } from 'axios';

export default class ErrorService {
  private handleSnackbar(message: string) {
    alert(message);
  }

  public fetchApiError(error: AxiosError<any>) {
    if (error?.response?.status === 401) {
      alert('SIGN OUT');
    } else {
      let message;
      if (axios.isAxiosError(error) && error.response) {
        message = error?.response?.data?.errors?.message
          ? error?.response?.data?.errors?.message
          : 'Terjadi Kesalahan Pada Sistem';
      } else message = String(error);
      return this.handleSnackbar(message);
    }
  }
}

import ErrorService from '../services/error.service.ts';
import { HttpService } from '../services/http.service.ts';

export default class BaseActions {
  get errorService(): ErrorService {
    return this._errorService;
  }

  get httpService(): HttpService {
    return this._httpService;
  }

  private _httpService: HttpService = new HttpService();
  private _errorService: ErrorService = new ErrorService();
}

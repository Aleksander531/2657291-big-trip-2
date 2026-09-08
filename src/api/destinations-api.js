import { EndPoints } from '../const';
import ApiService from '../framework/api-service';

export default class DestinationsApiService extends ApiService {

  async getDestinations() {
    const response = await this._load({
      url: EndPoints.DESTINATIONS,
    });

    const result = await ApiService.parseResponse(response);
    return result;
  }

}

import { EndPoints } from '../const';
import ApiService from '../framework/api-service';

export default class OffersApiService extends ApiService {

  async getOffers() {
    const response = await this._load({
      url: EndPoints.OFFERS,
    });

    const result = await ApiService.parseResponse(response);
    return result;
  }
}

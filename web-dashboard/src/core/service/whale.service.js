import HttpService from './http.service';
import {Whale} from "../model/whale.model";

class WhaleService extends HttpService {

  url = process.env.api_url ;

  constructor(opts){
    super(opts);
  }

  static getInstance() {
    if (WhaleService.instance === null) {
      WhaleService.instance = new WhaleService();
    }
    return this.instance;
  }

  /**
   * @param id
   * @param data
   * @param opts
   * @returns {Promise<any>}
   */
  async savePlan(id, data, opts = null) {
    const res = await this.post(this.url + '/' + id, JSON.stringify(data), {
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      }
    });
    return Promise.resolve(res);
  }

  /**
   * @param id
   * @param opts
   * @returns {Promise<any>}
   */
  async getWhales(data, opts = null) {
    const res = await this.get(this.url + '/whale/list', data, opts);
    return Promise.resolve(res);
  }
  
  /**
   * @param id
   * @param opts
   * @returns {Promise<any>}
   */
  async getWhale(data, opts = null) {
    const res = await this.get(this.url + '/whale/get-whale', data, opts);
    return Promise.resolve(res);
  }
}

export default WhaleService.getInstance();

import HttpService from './http.service';

class NearTokenService extends HttpService {

  url = process.env.api_url ;

  constructor(opts){
    super(opts);
  }

  static getInstance() {
    if (NearTokenService.instance === null) {
      NearTokenService.instance = new NearTokenService();
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
  async getTokens(data, opts = null) {
    const res = await this.get(this.url + '/near/get-list-token', data, opts);
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

export default NearTokenService.getInstance();

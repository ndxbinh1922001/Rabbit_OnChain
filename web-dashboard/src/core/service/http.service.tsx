export default class HttpService {

  static instance = null;

  //default options
  opts = {
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  constructor(opts){
    if (opts) {
      this.opts = Object.assign({}, this.opts, opts);
    }
  }

  setOptions(opts) {
    let finalOpts = this.opts;
    if (opts) {
      if (opts['headers']) {
        opts['headers'] =  Object.assign({}, this.opts['headers'], opts['headers']);
      }
      finalOpts = Object.assign({}, this.opts, opts);
    }
    return finalOpts;
  }

  async get(url, data, opts = null) {
    opts = Object.assign({}, this.setOptions(opts), {
      method: 'GET'
    });

    const getParams = new URLSearchParams(data).toString();

    const response = await fetch(url + '?' + getParams, opts);
    return await response.json();
  }

  /**
   * Post to server
   * @param url
   * @param data
   * @param opts
   * @returns {Promise<any>}
   */
  async post(url, data, opts = null) {
    opts = Object.assign({}, this.setOptions(opts), {
      method: 'POST',
      body: data
    });

    const response = await fetch(url, opts);
    return await response.json();
  }

  async put(url, data, opts = null) {
    opts = Object.assign({}, this.setOptions(opts), {
      method: 'PUT',
      body: data
    });

    const response = await fetch(url, opts);
    return await response.json();
  }

  async delete(url, data = null, opts = null) {
    opts = Object.assign({}, this.setOptions(opts), {
      method: 'DELETE',
      body: data
    });
    const response = await fetch(url, opts);
    return await response.json();
  }
}

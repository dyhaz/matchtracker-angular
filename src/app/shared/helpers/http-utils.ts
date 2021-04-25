import {environment} from '../../../environments/environment';

export class HttpUtils {
  static env = environment;
  static opts = {
    headers: new Headers(),
    method: 'GET', // GET, POST, PUT, DELETE
    // mode: 'no-cors' as RequestMode // the most important option
  };

  static get(input: RequestInfo, apiToken?): Promise<Response> {
    this.opts.headers = new Headers();
    if (!input.toString().includes('wikipedia')) {
      this.opts.headers.append('X-Auth-Token', apiToken ? apiToken : this.env.apiToken);
    }

    return fetch(input, {...this.opts, method: 'GET'});
  }

  static post(input: RequestInfo, apiToken?, data?): Promise<Response> {
    this.opts.headers = new Headers();
    this.opts.headers.append('X-Auth-Token', apiToken ? apiToken : this.env.apiToken);

    if (data) {
      return fetch(input, {...this.opts, method: 'POST', body: JSON.stringify(data)});
    } else {
      return fetch(input, {...this.opts, method: 'POST'});
    }
  }

  static put(input: RequestInfo, apiToken?, data?): Promise<Response> {
    this.opts.headers = new Headers();
    this.opts.headers.append('X-Auth-Token', apiToken ? apiToken : this.env.apiToken);

    if (data) {
      return fetch(input, {...this.opts, method: 'PUT', body: JSON.stringify(data)});
    } else {
      return fetch(input, {...this.opts, method: 'PUT'});
    }
  }

  static del(input: RequestInfo, apiToken?) {
    return fetch(input, {...this.opts, method: 'DELETE'});
  }
}

export function retrieve(input , apiToken?: string) {return HttpUtils.get(input, apiToken); }
export function submit(input , apiToken?: string) {return HttpUtils.post(input, apiToken); }
export function submitWithData(input, data, apiToken?: string) {return HttpUtils.post(input, apiToken, data); }
export function submitChange(input, data, apiToken?: string) {return HttpUtils.put(input, apiToken, data); }
export function rem(input, apiToken?: string) {return HttpUtils.del(input, apiToken); }

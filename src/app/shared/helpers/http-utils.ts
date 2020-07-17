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

  static post(input: RequestInfo, apiToken?): Promise<Response> {
    this.opts.headers = new Headers();
    this.opts.headers.append('X-Auth-Token', apiToken ? apiToken : this.env.apiToken);

    return fetch(input, {...this.opts, method: 'POST'});
  }
}

export function retrieve(input , apiToken?: string) {return HttpUtils.get(input, apiToken); }
export function submit(input , apiToken?: string) {return HttpUtils.post(input, apiToken); }

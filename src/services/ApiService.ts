import axios from "axios";

type ResponseType<T> = {
  data: T;
};

const reqMethods = {
  get: axios.get,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};
type RequestMethods = keyof typeof reqMethods;

class MetricsService {
  private _baseUri: string;

  constructor() {
    this._baseUri = `https://${process.env.NEXT_PUBLIC_BASE_URI}/`;
  }

  public get baseUri() {
    return this._baseUri;
  }

  private async req<T = any>(
    endpoint: string,
    method: RequestMethods,
    body: any = {}
  ) {
    const call = reqMethods[method];
    const uri = this._baseUri + endpoint;
    const isBody = method === "put" || method === "patch";
    const res: any = await (isBody
      ? call<any, ResponseType<T>>(uri, body)
      : call<any, ResponseType<T>>(uri));
    if (res.data._embedded) {
      const {
        _embedded: { records },
        _links: { self, next, prev },
      } = res.data as any;

      return { records, self, next, prev };
    } else {
      return res.data;
    }
  }

  public async get<T = any>(endpoint: string) {
    const res = await this.req<T>(endpoint, "get");
    return res;
  }

  public async put<T = any>(endpoint: string, data: any) {
    const res = await this.req<T>(endpoint, "put", data);
    return res;
  }

  public async patch<T = any>(endpoint: string, data: any) {
    const res = await this.req<T>(endpoint, "patch", data);
    return res;
  }

  public async delete<T = any>(endpoint: string) {
    const res = await this.req<T>(endpoint, "delete");
    return res;
  }
}

export default new MetricsService();

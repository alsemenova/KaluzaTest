import axios, { AxiosError, AxiosResponse } from 'axios';
import { Result } from './result';

export interface IPerson {
  count: number | null;
  name: string;
  age: number | null;
}

export interface IErrorResponse {
  error: string;
}

export interface ILocalizedPerson extends IPerson {
  country_id: string | null;
}

export class AgifyApiClient {
  private baseUrl = 'https://api.agify.io';

  async getAgeByName(name: string | null): Promise<Result<IPerson>> {
    const url =
      name != undefined && name != null
        ? `${this.baseUrl}?name=${encodeURIComponent(name)}`
        : this.baseUrl;

    return await this.getResponse<IPerson>(url);
  }
  async getLocalizedAgeByName(
    name: string | null,
    country_id: string | null,
  ): Promise<Result<ILocalizedPerson>> {
    const url =
      name != undefined && name != null && country_id != null
        ? `${this.baseUrl}?name=${encodeURIComponent(name)}&country_id=${encodeURIComponent(country_id)}`
        : this.baseUrl;

    return await this.getResponse<ILocalizedPerson>(url);
  }
  async getAgeByNameMultiple(name: string[] | null): Promise<Result<IPerson>> {
    if (!name || name.length === 0) {
      return await this.getResponse<IPerson>(this.baseUrl);
    }
    const query = name.map((n) => `name[]=${encodeURIComponent(n)}`).join('&');
    const url =
      name != undefined && name != null && name.length > 0
        ? `${this.baseUrl}?${query}`
        : this.baseUrl;

    return await this.getResponse<IPerson>(url);
  }

  private async getResponse<T>(url: string): Promise<Result<T>> {
    try {
      const response = await axios.get<T>(url, {
        headers: {
          'User-Agent': 'Kaluza API Client',
        },
      });
      if (response.data == null) {
        return new Result<T>(false, undefined, 'Data is null');
      }
      return new Result<T>(true, response.data);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if ([401, 402, 422, 429].includes(error.response?.status)) {
          const errorResponse = error.response.data as IErrorResponse;
          return new Result<T>(false, undefined, errorResponse.error);
        }
      }

      return new Result<T>(false, undefined, 'Exeptional error');
    }
  }
}

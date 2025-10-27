import axios, { AxiosError, AxiosResponse } from 'axios';
import { Result } from './result';

interface IPerson {
  count: number | null;
  name: string;
  age: number | null;
}

interface IErrorResponse {
  error: string;
}

export class AgifyApiClient {
  private baseUrl = 'https://api.agify.io';

  async getAgeByName(name: string | null): Promise<Result> {
    const url =
      name != undefined && name != null
        ? `${this.baseUrl}?name=${encodeURIComponent(name)}`
        : this.baseUrl;

    return await this.getResponse(url);
  }

  async getNotFoundData(name: string | null): Promise<Result> {
    return await this.getResponse(`${this.baseUrl}/notfounddata`);
  }

  private async getResponse(url: string): Promise<Result> {
    try {
      const response = await axios.get<IPerson | IErrorResponse>(url, {
        headers: {
          'User-Agent': 'Kaluza API Client',
        },
      });
      if (response.data == null) {
        return new Result(false, undefined, 'Data is null');
      }

      const person = response.data as IPerson;
      if (person.age == null) {
        return new Result(true, null);
      }

      return new Result(true, person.age);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if ([401, 402, 422, 429].includes(error.response?.status)) {
          const errorResponse = error.response.data as IErrorResponse;
          return new Result(false, undefined, errorResponse.error);
        }
      }

      return new Result(false, undefined, 'Exeptional error');
    }
  }
}

import { IWorldOptions, setWorldConstructor } from '@cucumber/cucumber';
import { AgifyApiClient } from '../api/agifyApiClient';
import { Result } from '../api/result';
import { IPerson, ILocalizedPerson } from '../api/agifyApiClient';

export class CustomWorld<T> {
  client?: AgifyApiClient;
  result?: Result<T>;

  constructor(options: IWorldOptions) {}
}

setWorldConstructor(CustomWorld);

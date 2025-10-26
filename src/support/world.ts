import { IWorldOptions, setWorldConstructor } from '@cucumber/cucumber';
import { AgifyApiClient } from '../api/agifyApiClient';
import { Result } from '../api/result';

export class CustomWorld {
  client?: AgifyApiClient;
  result?: Result;

  constructor(options: IWorldOptions) {}
}

setWorldConstructor(CustomWorld);

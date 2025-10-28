import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../src/support/world';
import { expect } from 'chai';
import { AgifyApiClient } from '../src/api/agifyApiClient';

When(
  'I send a request with name {string} and country_id {string}',
  async function (this: CustomWorld, name: string, country_id: string) {
    this.result = await this.client?.getLocalizedAgeByName(name, country_id);
  },
);

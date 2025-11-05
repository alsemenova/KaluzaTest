import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../src/support/world';
import { expect } from 'chai';
import { AgifyApiClient, ILocalizedPerson } from '../src/api/agifyApiClient';

When(
  'I send a request with name {string} and country_id {string}',
  async function (this: CustomWorld<ILocalizedPerson>, name: string, country_id: string) {
    this.result = await this.client?.getLocalizedAgeByName(name, country_id);
  },
);

Then(
  'The country_id should be {string}',
  function (this: CustomWorld<ILocalizedPerson>, expCountry_id: string) {
    const data = this.result?.data as any;
    expect(data?.country_id).to.equal(expCountry_id);
  },
);

Then('The country_id should be empty', function (this: CustomWorld<ILocalizedPerson>) {
  expect(this.result?.data?.country_id).to.be.empty;
});

Then('The result in console log', function (this: CustomWorld<ILocalizedPerson>) {
  console.log('Full result:', JSON.stringify(this.result, null, 2));
});

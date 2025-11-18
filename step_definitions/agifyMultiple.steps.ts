import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../src/support/world';
import { expect } from 'chai';
import { AgifyApiClient, IPerson } from '../src/api/agifyApiClient';

When(
  'I send a request with multiple names:',
  async function (this: CustomWorld<IPerson>, nametable) {
    const name = nametable
      .raw()
      .slice(1)
      .map((row: string[]) => row[0]);
    this.result = await this.client?.getAgeByNameMultiple(name);
  },
);

Then(
  'The response should contain {int} results',
  function (this: CustomWorld<IPerson[]>, expectedCount: number) {
    expect(this.result?.data).to.be.an('array');
    expect(this.result?.data?.length).to.equal(expectedCount);
  },
);

Then('Each result should include name, age and count', function (this: CustomWorld<IPerson[]>) {
  expect(this.result?.data).to.be.an('array');
  this.result?.data?.forEach((item) => {
    expect(item).to.have.property('count');
    expect(item).to.have.property('name');
    expect(item).to.have.property('age');
  });
});

Then('The names in response should be:', function (this: CustomWorld<IPerson[]>, datatable) {
  const expectedNames = datatable.raw().flat();
  const actualName = this.result?.data?.map((item) => item.name);
  expect(actualName).to.have.members(expectedNames);
  expect(actualName?.length).to.equal(expectedNames.length);
});

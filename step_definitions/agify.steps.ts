import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../src/support/world';
import { expect } from 'chai';
import { AgifyApiClient } from '../src/api/agifyApiClient';

Given('The Agify API Client is available', async function (this: CustomWorld) {
  this.client = new AgifyApiClient();
});

When('I send a request with name {string}', async function (this: CustomWorld, name: string) {
  this.result = await this.client?.getAgeByName(name);
});

Then('The result should be successful', async function (this: CustomWorld) {
  expect(this.result?.isSuccessful).to.be.true;
});

Then('The age is presented', async function (this: CustomWorld) {
  expect(this.result?.data).to.be.a('number');
  expect(this.result?.data).to.be.greaterThan(0);
});

Then('The age should be null', async function (this: CustomWorld) {
  expect(this.result?.data).to.be.a('null');
});

When('I send a request with missing parameter name', async function (this: CustomWorld) {
  this.result = await this.client?.getAgeByName(null);
});

Then('The result should be Failed', async function (this: CustomWorld) {
  expect(this.result?.isFailed).to.be.true;
});

Then('The error should be {string}', async function (this: CustomWorld, errorMessage: string) {
  expect(this.result?.error).to.equal(errorMessage);
});

When('I send wrong request', async function (this: CustomWorld) {
  this.result = await this.client?.getAgeByName(null);
});

Then('Throw an Exeption', async function (this: CustomWorld) {
  expect(this.result?.error).to.exist;
});

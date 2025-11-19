export class Result<T> {
  readonly isSuccessful: boolean;
  readonly isFailed: boolean;
  readonly data?: T;
  readonly error?: string;

  constructor(isSuccessful: boolean, data?: T, error?: string) {
    this.isSuccessful = isSuccessful;
    this.isFailed = !isSuccessful;
    this.data = data;
    this.error = error;
  }
}

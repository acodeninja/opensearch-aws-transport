import {describe, expect, test} from "@jest/globals";

describe('a placeholder test', () => {
  test('typescript compilation for jest is working', () => {
    interface TestInterface {
      test: boolean;
    }

    const testFunction = ({test}: TestInterface) => {
      return test
    };

    expect(testFunction({test: true})).toBeTruthy();
  });
});

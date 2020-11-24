import * as index from './index';
import { prepare, verifyConditions } from './index';

describe('index', () => {

  afterEach(() => jest.restoreAllMocks());

  it('should export verifyConditions', async () => {
    expect(index.verifyConditions).toEqual(verifyConditions);
  });

  it('should export prepare', async () => {
    expect(index.prepare).toEqual(prepare);
  });

});

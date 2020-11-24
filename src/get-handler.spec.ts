import { getHandler } from './get-handler';
import { mit } from './handlers/mit';
import { bsl } from './handlers/bsl';

describe('getHandler', () => {

  afterEach(() => jest.restoreAllMocks());

  it('should return mit handler', async () => {
    expect(getHandler('MIT')).toEqual(mit);
  });

  it('should return bsl handler', async () => {
    expect(getHandler('BSL')).toEqual(bsl);
  });

  it('should throw when no handler for license type', async () => {
    let error;
    try {
      getHandler(undefined);
    } catch (e) {
      error = e;
    }
    expect(error).toBeDefined();
  });

});

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

});

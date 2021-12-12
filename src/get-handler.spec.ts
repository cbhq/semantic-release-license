import { getHandler } from './get-handler';
import { mit } from './handlers/mit';
import { bsd } from "./handlers/bsd";

describe('getHandler', () => {

  afterEach(() => jest.restoreAllMocks());

  it('should return BSD-2-Clause handler', async () => {
    expect(getHandler('BSD-2-Clause')).toEqual(bsd);
  });

  it('should return BSD-3-Clause handler', async () => {
    expect(getHandler('BSD-3-Clause')).toEqual(bsd);
  });

  it('should return ISC handler', async () => {
    expect(getHandler('ISC')).toEqual(bsd);
  });

  it('should return MIT handler', async () => {
    expect(getHandler('MIT')).toEqual(mit);
  });

  it('should return UPL-1.0 handler', async () => {
    expect(getHandler('UPL-1.0')).toEqual(mit);
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

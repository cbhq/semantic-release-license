import { verifyConditions } from './verify-conditions';
import { Context } from 'semantic-release';
import * as _detectLicensePath from './detect-license-path';
import * as _detectLicense from './detect-license';
import { promises } from 'fs';

describe('verifyConditions', () => {

  let context: Context;

  beforeEach(() => {
    context = <any>{
      logger: {
        log: jest.fn(),
        error: jest.fn(),
      },
    }
  });

  afterEach(() => jest.restoreAllMocks());

  it('should throw error when cannot detect license path', async () => {
    const spy = jest.spyOn(_detectLicensePath, 'detectLicensePath').mockReturnValue(Promise.resolve(undefined));
    let error;
    try {
      await verifyConditions(<any>{}, context);
    } catch (e) {
      error = e;
    }
    expect(error).toBeDefined();
    expect(spy).toHaveBeenCalled();
  });

  it('should throw error when cannot detect license', async () => {
    jest.spyOn(_detectLicensePath, 'detectLicensePath').mockReturnValue(Promise.resolve('path'));
    const readFile = jest.spyOn(promises, 'readFile').mockReturnValue(Promise.resolve('content'));
    const detectLicense = jest.spyOn(_detectLicense, 'detectLicense').mockReturnValue(Promise.resolve(undefined));
    let error;
    try {
      await verifyConditions(<any>{}, context);
    } catch (e) {
      error = e;
    }
    expect(error).toBeDefined();
    expect(readFile).toHaveBeenCalledWith('path');
    expect(detectLicense).toHaveBeenCalledWith('content');
  });

  it('should throw error when cannot find provided license file', async () => {
    const readFile = jest.spyOn(promises, 'readFile').mockImplementation(() => Promise.reject('error'));
    let error;
    try {
      await verifyConditions({ license: { path: 'path' } }, context);
    } catch (e) {
      error = e;
    }
    expect(readFile).toHaveBeenCalledWith('path');
    expect(error).toBeDefined();
  });

  it('should not throw license file detected', async () => {
    const detectLicense = jest.spyOn(_detectLicense, 'detectLicense').mockReturnValue(Promise.resolve('MIT'));
    const readFile = jest.spyOn(promises, 'readFile').mockImplementation(() => Promise.resolve('content'));
    let error;
    try {
      await verifyConditions({ license: { path: 'path' } }, context);
    } catch (e) {
      error = e;
    }
    expect(readFile).toHaveBeenCalledWith('path');
    expect(error).toBeUndefined();
    expect(detectLicense).toHaveBeenCalledWith('content');
  });

});

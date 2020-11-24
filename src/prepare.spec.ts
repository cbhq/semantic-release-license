import * as _getHandler from './get-handler';
import { prepare } from './prepare';
import { Context } from 'semantic-release';
import { promises } from 'fs';
import * as _detectLicense from './detect-license';
import { detectLicense } from './detect-license';
import * as _detectLicensePath from './detect-license-path';

describe('prepare', () => {

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

  it('should update license file', async () => {
    const fakeHandler = jest.fn().mockReturnValue('replace');
    const handler = jest.spyOn(_getHandler, 'getHandler').mockReturnValue(fakeHandler);
    const detectLicensePath = jest.spyOn(_detectLicensePath, 'detectLicensePath').mockReturnValue(Promise.resolve('path'));
    const readFile = jest.spyOn(promises, 'readFile').mockReturnValue(Promise.resolve('content'));
    const writeFile = jest.spyOn(promises, 'writeFile').mockReturnValue(Promise.resolve());
    const detectLicense = jest.spyOn(_detectLicense, 'detectLicense').mockReturnValue(Promise.resolve('MIT'));

    await prepare(<any>{}, context);

    expect(detectLicensePath).toHaveBeenCalled();
    expect(readFile).toHaveBeenCalledWith('path');
    expect(detectLicense).toHaveBeenCalledWith('content');
    expect(handler).toHaveBeenCalledWith('MIT');
    expect(fakeHandler).toHaveBeenCalledWith('content', context);
    expect(writeFile).toHaveBeenCalledWith('path', 'replace');
  });

  it('should update configured license file', async () => {
    const fakeHandler = jest.fn().mockReturnValue('replace');
    jest.spyOn(_getHandler, 'getHandler').mockReturnValue(fakeHandler);
    const detectLicensePath = jest.spyOn(_detectLicensePath, 'detectLicensePath');
    const readFile = jest.spyOn(promises, 'readFile').mockReturnValue(Promise.resolve('content'));
    const writeFile = jest.spyOn(promises, 'writeFile').mockReturnValue(Promise.resolve());
    jest.spyOn(_detectLicense, 'detectLicense').mockReturnValue(Promise.resolve('MIT'));

    await prepare(<any>{ license: { path: 'path' } }, context);

    expect(detectLicensePath).not.toHaveBeenCalled();
    expect(readFile).toHaveBeenCalledWith('path');
    expect(writeFile).toHaveBeenCalledWith('path', 'replace');
  });

  it('should throw error when no handler for detected license type', async () => {
    const readFile = jest.spyOn(promises, 'readFile').mockReturnValue(Promise.resolve('content'));
    jest.spyOn(_detectLicense, 'detectLicense').mockReturnValue(Promise.resolve('MIT'));
    jest.spyOn(_getHandler, 'getHandler').mockReturnValue(undefined);

    let error;
    try {
      await prepare(<any>{ license: { path: 'path' } }, context);
    } catch (e) {
      error = e;
    }

    expect(error).toBeDefined();
  });

});

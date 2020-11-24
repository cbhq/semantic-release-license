import * as _fileExists from './utils/file-exists';
import { detectLicensePath } from './detect-license-path';

describe('detectLicensePath', () => {

  afterEach(() => jest.restoreAllMocks());

  it('should find first available license file', async () => {
    const spy = jest.spyOn(_fileExists, 'fileExists').mockImplementation(async path => path === 'LICENSE.md');
    const path = await detectLicensePath();
    expect(path).toEqual('LICENSE.md');
    expect(spy.mock.calls).toEqual([
      ['LICENSE'],
      ['LICENSE.md'],
    ]);
  });

  it('should return undefined when cannot find license file', async () => {
    jest.spyOn(_fileExists, 'fileExists').mockImplementation(async path => false);
    const path = await detectLicensePath();
    expect(path).toBeUndefined();
  });

});

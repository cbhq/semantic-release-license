import { detectLicense } from './detect-license';
import { promises as fs } from "fs";

describe('detectLicense', () => {

  afterEach(() => jest.restoreAllMocks());

  it('should detect mit', async () => {
    const license = (await fs.readFile('./test/mit.txt')).toString();
    expect(await detectLicense(license)).toEqual('MIT');
  });

  it('should detect bsl', async () => {
    const license = (await fs.readFile('./test/bsl.txt')).toString();
    expect(await detectLicense(license)).toEqual('BSL');
  });

  it('should return undefined when no license detected', async () => {
    expect(await detectLicense('')).toEqual(undefined);
  });

});

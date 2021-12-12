import { detectLicense } from './detect-license';
import { promises as fs } from "fs";

describe('detectLicense', () => {

  afterEach(() => jest.restoreAllMocks());

  it('should detect BSD-2-Clause', async () => {
    const license = (await fs.readFile('./test/BSD-2-Clause.txt')).toString();
    expect(await detectLicense(license)).toEqual('BSD-2-Clause');
  });

  it('should detect BSD-3-Clause', async () => {
    const license = (await fs.readFile('./test/BSD-3-Clause.txt')).toString();
    expect(await detectLicense(license)).toEqual('BSD-3-Clause');
  });

  it('should detect ISC', async () => {
    const license = (await fs.readFile('./test/ISC.txt')).toString();
    expect(await detectLicense(license)).toEqual('ISC');
  });

  it('should detect MIT', async () => {
    const license = (await fs.readFile('./test/MIT.txt')).toString();
    expect(await detectLicense(license)).toEqual('MIT');
  });

  it('should detect UPL-1.0', async () => {
    const license = (await fs.readFile('./test/UPL-1.0.txt')).toString();
    expect(await detectLicense(license)).toEqual('UPL-1.0');
  });

  it('should return undefined when no license detected', async () => {
    expect(await detectLicense('')).toEqual(undefined);
  });

});

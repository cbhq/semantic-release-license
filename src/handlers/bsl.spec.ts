import { promises as fs } from 'fs';
import { bsl } from './bsl';

describe('bsl', () => {

  afterEach(() => jest.restoreAllMocks());

  it('should update license', async () => {
    const license = (await fs.readFile('./test/bsl.txt')).toString();
    const updatedLicense = await bsl(license, <any>{ nextRelease: { version: '1.1.0-beta.2' } });
    const date = new Date();
    console.log(updatedLicense);
    expect(updatedLicense.indexOf('MyApp 1.1.0-beta.2') !== -1).toBeTruthy();
    expect(updatedLicense.indexOf(`Change Date:          ${date.getFullYear() + 4}-${date.getMonth() + 1}-${date.getDate()}`) !== -1).toBeTruthy();
    expect(updatedLicense.indexOf(`(c) ${date.getFullYear()} My Company`) !== -1).toBeTruthy();
  });

  it('should support non-zero-padded date formats', async () => {
    const license = (await fs.readFile('./test/bsl.txt')).toString();
    const updatedLicense = await bsl(license, <any>{ nextRelease: { version: '1.1.0-beta.2' } });
    const date = new Date();
    console.log(updatedLicense);
    expect(updatedLicense.indexOf('MyApp 1.1.0-beta.2') !== -1).toBeTruthy();
    expect(updatedLicense.indexOf(`Change Date:          ${date.getFullYear() + 4}-${date.getMonth() + 1}-${date.getDate()}`) !== -1).toBeTruthy();
    expect(updatedLicense.indexOf(`(c) ${date.getFullYear()} My Company`) !== -1).toBeTruthy();
  });

});

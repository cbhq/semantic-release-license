import { promises as fs } from 'fs';
import { bsd } from './bsd';

describe('bsl', () => {

  afterEach(() => jest.restoreAllMocks());

  it('should update BSD2 license', async () => {
    const license = (await fs.readFile('./test/BSD-2-Clause.txt')).toString();
    const updatedLicense = await bsd(license, <any>{ nextRelease: { version: '1.1.0-beta.2' } });
    const date = new Date();
    expect(updatedLicense.indexOf(`Copyright ${date.getFullYear()} `) !== -1).toBeTruthy();
  });

  it('should update BSD3 license', async () => {
    const license = (await fs.readFile('./test/BSD-3-Clause.txt')).toString();
    const updatedLicense = await bsd(license, <any>{ nextRelease: { version: '1.1.0-beta.2' } });
    const date = new Date();
    expect(updatedLicense.indexOf(`Copyright ${date.getFullYear()} `) !== -1).toBeTruthy();
  });
});

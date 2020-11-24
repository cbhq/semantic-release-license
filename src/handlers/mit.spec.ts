import { promises as fs } from 'fs';
import { mit } from './mit';

describe('mit', () => {

  let license: string;

  beforeEach(async () => {
    license = (await fs.readFile('./test/mit.txt')).toString();
  });

  afterEach(() => jest.restoreAllMocks());

  it('should update license', async () => {
    const updatedLicense = await mit(license, <any>{});
    const date = new Date();
    expect(updatedLicense.indexOf(`(c) ${date.getFullYear()}`) !== -1).toBeTruthy();
  });

});

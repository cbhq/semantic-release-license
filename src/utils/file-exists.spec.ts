import { fileExists } from './file-exists';
import { promises } from 'fs';

describe('fileExists', () => {

  afterEach(() => jest.restoreAllMocks());

  it('should be true when file exists', async () => {
    const spy = jest.spyOn(promises, 'lstat').mockReturnValue(Promise.resolve({} as any));
    const actual = await fileExists('path');
    expect(actual).toBeTruthy();
    expect(spy).toHaveBeenCalledWith('path');
  });

  it('should be false when file does not exist', async () => {
    jest.spyOn(promises, 'lstat').mockImplementation(() => Promise.reject());
    const actual = await fileExists('path');
    expect(actual).toBeFalsy();
  });

});

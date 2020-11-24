import { fileExists } from './utils/file-exists';

const paths = [
  'LICENSE',
  'LICENSE.md',
  'COPYING',
  'COPYING.md',
];

export async function detectLicensePath(): Promise<string> {
  for (let i = 0; i < paths.length; i++) {
    const path = paths[i];
    // eslint-disable-next-line no-await-in-loop
    if (await fileExists(path)) {
      return path;
    }
  }
  return undefined;
}

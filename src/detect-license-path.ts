import { fileExists } from './utils/file-exists';

const paths = [
  'LICENSE',
  'LICENSE.md',
  'COPYING',
  'COPYING.md',
];

export async function detectLicensePath(): Promise<string> {
  for (let path of paths) {
    if (await fileExists(path)) {
      return path;
    }
  }
  return undefined;
}

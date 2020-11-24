import { fileExists } from './utils/file-exists';

const paths = [
  'LICENSE',
  'LICENSE.md',
  'COPYING',
  'COPYING.md',
];

export async function getLicenseFile(): Promise<string> {
  const mask = await Promise.all(paths.map(fileExists));
  return paths.find((_, index) => mask[index]);
}

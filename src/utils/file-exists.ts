import { promises as fs } from 'fs';

export async function fileExists(path: string): Promise<boolean> {
  try {
    await fs.lstat(path);
  } catch (e) {
    return false;
  }
  return true;
}

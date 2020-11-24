import { LicenseType } from './types/license-type';

export async function detectLicense(license: string): Promise<LicenseType> {
  if (license.match(/MIT License/g)) {
    return 'MIT';
  }
  if (license.match(/Business Source License/g)) {
    return 'BSL';
  }
  return undefined;
}

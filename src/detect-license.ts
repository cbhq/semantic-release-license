import { LicenseType } from './types/license-type';

export async function detectLicense(license: string): Promise<LicenseType> {
  if (license.match(/3\. Neither the name of the copyright holder/g)) {
    return 'BSD-3-Clause';
  }
  if (license.match(/2\. Redistributions in binary form must reproduce the above copyright notice/g)) {
    return 'BSD-2-Clause';
  }
  if (license.match(/ISC License/g)) {
    return 'ISC';
  }
  if (license.match(/MIT License/g)) {
    return 'MIT';
  }
  if (license.match(/The Universal Permissive License/g)) {
    return 'UPL-1.0';
  }
  return undefined;
}

import { LicenseType } from './types/license-type';
import { mit } from './handlers/mit';
import { bsd } from './handlers/bsd';
import { Handler } from './types/handler';

export function getHandler(licenseType: LicenseType): Handler {
  switch (licenseType) {
    case 'BSD-2-Clause':
      return bsd;
    case 'BSD-3-Clause':
      return bsd;
    case 'ISC':
      return bsd;
    case 'MIT':
      return mit;
    case 'UPL-1.0':
      return mit;
    default:
      throw new Error(`No handler for license type ${licenseType}`);
  }
}

import { LicenseType } from './types/license-type';
import { mit } from './handlers/mit';
import { bsl } from './handlers/bsl';
import { Handler } from './types/handler';

export function getHandler(licenseType: LicenseType): Handler {
  switch (licenseType) {
    case 'MIT':
      return mit;
    case 'BSL':
      return bsl;
    default:
      throw new Error(`No handler for license type ${licenseType}`);
  }
}

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
  }
}

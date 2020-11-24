import { Options } from 'semantic-release';
import { LicenseType } from './license-type';

export interface PluginOptions extends Options {
  license: {
    type?: LicenseType;
    path?: string;
  };
}

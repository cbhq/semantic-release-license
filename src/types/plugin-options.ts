import { Options } from 'semantic-release';

export interface PluginOptions extends Options {
  license: {
    path?: string;
  };
}

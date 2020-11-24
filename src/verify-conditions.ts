import { PluginOptions } from './types/plugin-options';
import { Context } from 'semantic-release';
import { detectLicensePath } from './detect-license-path';
import { promises as fs } from "fs";
import { detectLicense } from './detect-license';

export async function verifyConditions({ license }: PluginOptions, context: Context) {
  const licensePath = license?.path || await detectLicensePath();
  if (!licensePath) {
    throw new Error('License file not found');
  }

  const content = (await fs.readFile(licensePath)).toString();

  const licenseType = await detectLicense(content);
  if (!licenseType) {
    throw new Error('Could not detect license');
  }

  context.logger.log(`Detected license type ${licenseType}`);
}

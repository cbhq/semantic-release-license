import { Context } from 'semantic-release';
import { detectLicense } from './detect-license';
import { PluginOptions } from './types/plugin-options';
import { getLicenseFile } from './get-license-file';
import { promises, promises as fs } from 'fs';
import { bsl } from './handlers/bsl';
import { mit } from './handlers/mit';

export async function verifyConditions({ license }: PluginOptions, context: Context) {
  const licensePath = license?.path || await getLicenseFile();
  if (!licensePath) {
    throw new Error('License file not found');
  }

  const content = (await fs.readFile(licensePath)).toString();

  const licenseType = license?.type || await detectLicense(content);
  if (!licenseType) {
    throw new Error('Could not detect license');
  }

  context.logger.log(`Detected license type ${licenseType}`);
}

export async function prepare({ license }: PluginOptions, context: Context) {
  const licensePath = license?.path || await getLicenseFile();
  const content = (await fs.readFile(licensePath)).toString();
  const licenseType = license?.type || await detectLicense(content);

  let replacement = content;

  switch (licenseType) {
    case 'MIT':
      replacement = await mit(content);
      break;
    case 'BSL':
      replacement = await bsl(content, context.nextRelease.version);
      break;
    case 'GPL':
      break;
    default:
      throw new Error(`License type ${licenseType} not supported`);
  }

  await promises.writeFile(licensePath, replacement);
}

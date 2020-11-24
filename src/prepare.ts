import { PluginOptions } from './types/plugin-options';
import { Context } from 'semantic-release';
import { detectLicensePath } from './detect-license-path';
import { promises, promises as fs } from 'fs';
import { detectLicense } from './detect-license';
import { getHandler } from './get-handler';

export async function prepare({ license }: PluginOptions, context: Context) {
  const licensePath = license?.path || await detectLicensePath();
  const content = (await fs.readFile(licensePath)).toString();
  const licenseType = await detectLicense(content);

  const handlerFn = getHandler(licenseType);
  const replacement = await handlerFn(content, context);

  await promises.writeFile(licensePath, replacement);

  context.logger.log(`Updated license file ${licensePath}`);
}

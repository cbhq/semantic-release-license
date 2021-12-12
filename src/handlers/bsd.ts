import { Context } from 'semantic-release';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function bsd(license: string, context: Context): string {
  const newYear = new Date().getFullYear();

  return license.replace(
    /Copyright \d{4} /g,
    `Copyright ${newYear} `,
  );
}

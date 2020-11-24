export async function gnu(license: string): Promise<string> {
  const newYear = new Date().getFullYear();
  return license.replace(
    /Copyright \(C\) (\d{4})/g,
    `Copyright (C) ${newYear}`,
  );
}

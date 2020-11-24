import { Context } from 'semantic-release';

export function bsl(content: string, context: Context): string {
  return content
    .replace(/(Licensed Work.*)(\d+.\d+.\d+)/, (full, part1) => (
      `${part1}${context.nextRelease.version}`
    ))
    .replace(/(Change Date.*)(\d{4}-\d{2}-\d{2})/, (full, part1) => {
      const today = new Date();
      const newDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
      return `${part1}${newDate}`;
    })
    .replace(/(The Licensed Work is \(c\) )(\d{4})/, (full, part1) => {
      return `${part1}${new Date().getFullYear()}`;
    });
}

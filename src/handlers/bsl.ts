import { Context } from 'semantic-release';

export function bsl(content: string, context: Context): string {
  return content
    .replace(/(Licensed Work:.*)(\d\.\d\.\d.*)/, (full, part1) => (
      `${part1}${context.nextRelease.version}`
    ))
    .replace(/(Change Date: +)(\d+-\d+-\d+)/, (full, part1) => {
      console.log(full, part1);
      const today = new Date();
      const newDate = `${today.getFullYear() + 4}-${today.getMonth() + 1}-${today.getDate()}`;
      return `${part1}${newDate}`;
    })
    .replace(/(The Licensed Work is \(c\) )(\d{4})/, (full, part1) => `${part1}${new Date().getFullYear()}`);
}

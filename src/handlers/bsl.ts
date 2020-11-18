export function bsl(content: string, nextVersion: string): string {
  return content
    .replace(/(Licensed Work.*)(\d+.\d+.\d+)/, (full, part1) => (
      `${part1}${nextVersion}`
    ))
    .replace(/(Change Date.*)(\d{4}-\d{2}-\d{2})/, (full, part1) => {
      const today = new Date();
      const newDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
      return `${part1}${newDate}`;
    });
}

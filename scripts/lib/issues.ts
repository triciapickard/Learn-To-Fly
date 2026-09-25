export type IssueLevel = 'error' | 'warning';

export interface ContentIssue {
  level: IssueLevel;
  file: string;
  line?: number;
  message: string;
}

export class IssueList {
  readonly items: ContentIssue[] = [];

  error(file: string, message: string, line?: number) {
    this.items.push({ level: 'error', file, message, line });
  }

  warning(file: string, message: string, line?: number) {
    this.items.push({ level: 'warning', file, message, line });
  }

  get errors() {
    return this.items.filter((i) => i.level === 'error');
  }

  get warnings() {
    return this.items.filter((i) => i.level === 'warning');
  }
}

export function formatIssue(issue: ContentIssue): string {
  const where = issue.line ? `${issue.file}:${issue.line}` : issue.file;
  return `${issue.level === 'error' ? 'ERROR' : 'WARN '} ${where} — ${issue.message}`;
}

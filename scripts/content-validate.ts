/**
 * Validates everything in content/ (plan.md Section 28.5).
 * Usage: npm run content:validate [-- --strict] [-- --dir path/to/content]
 * Exit code 1 on errors (and on warnings with --strict).
 */
import path from 'node:path';
import { formatIssue } from './lib/issues.js';
import { loadContent } from './lib/loadContent.js';
import { validateContent } from './lib/validateContent.js';

const args = process.argv.slice(2);
const strict = args.includes('--strict');
const dirIndex = args.indexOf('--dir');
const contentDir =
  dirIndex >= 0 && args[dirIndex + 1] ? path.resolve(args[dirIndex + 1]!) : undefined;

const bundle = loadContent({ contentDir });
validateContent(bundle);
const { errors, warnings } = bundle.issues;

for (const issue of [...errors, ...warnings]) console.log(formatIssue(issue));

const drafts =
  bundle.lessons.filter((l) => !l.frontmatter.published).length +
  bundle.challenges.filter((c) => !c.published).length;
console.log(
  `\nContent: ${bundle.modules.length} modules, ${bundle.lessons.length} lessons, ` +
    `${bundle.challenges.length} challenges (${drafts} drafts), ${bundle.checklists.length} checklists, ` +
    `${bundle.airports.length} airports, ${bundle.glossary.length} glossary terms, ${bundle.resources.length} resources.`,
);
console.log(
  `${errors.length} error(s), ${warnings.length} warning(s)${strict ? ' (strict: warnings fail)' : ''}.`,
);

if (errors.length > 0 || (strict && warnings.length > 0)) process.exit(1);

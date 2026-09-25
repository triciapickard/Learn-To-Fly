/**
 * Content statistics (plan.md Section 28.6): word counts, lessons per module, reading time.
 * Usage: npm run content:stats
 */
import { loadContent } from './lib/loadContent.js';

const WORDS_PER_MINUTE = 200;
const bundle = loadContent();
const words = (text: string) => text.split(/\s+/).filter(Boolean).length;

console.log(
  'Module                                   Lessons  Drafts  Challenges  Words  Read (min)',
);
let totalWords = 0;
for (const module of bundle.modules) {
  const lessons = bundle.lessons.filter((l) => l.frontmatter.module === module.slug);
  const challenges = bundle.challenges.filter((c) => c.module === module.slug);
  const count = lessons.reduce((n, l) => n + words(l.text), 0);
  totalWords += count;
  console.log(
    `${`${module.code} ${module.title}`.padEnd(40)} ${String(lessons.length).padStart(7)} ${String(
      lessons.filter((l) => !l.frontmatter.published).length,
    ).padStart(7)} ${String(challenges.length).padStart(11)} ${String(count).padStart(6)} ${String(
      Math.ceil(count / WORDS_PER_MINUTE),
    ).padStart(11)}`,
  );
}
console.log(
  `\nTotal: ${bundle.lessons.length} lessons, ${bundle.challenges.length} challenges, ${totalWords} words (~${Math.ceil(totalWords / WORDS_PER_MINUTE)} min reading).`,
);
console.log(
  `Reference: ${bundle.glossary.length} glossary terms, ${bundle.resources.length} resources, ${bundle.checklists.length} checklists, ${bundle.airports.length} airports.`,
);
for (const lesson of bundle.lessons) {
  const quizzes = lesson.blocks.filter((b) => b.type === 'quiz').length;
  console.log(
    `  ${lesson.frontmatter.code.padEnd(6)} ${String(words(lesson.text)).padStart(5)} words, ${quizzes} questions, widgets: ${lesson.widgets.join(', ') || '—'}`,
  );
}

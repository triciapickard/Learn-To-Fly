/** A knowledge-check answer emitted by a widget's quiz mode (step 6.17). */
export interface WidgetQuizAnswer {
  questionId: string;
  correct: boolean;
  answer: string;
}

export type WidgetMode = 'explore' | 'quiz';

/** Props every widget receives from the lesson directive and the lesson player. */
export interface WidgetProps {
  /** String attributes from the directive, e.g. mode="quiz". */
  props: Record<string, string>;
  onQuizAnswer?: (answer: WidgetQuizAnswer) => void;
}

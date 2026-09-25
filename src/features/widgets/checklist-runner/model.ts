/** Pure state for W16 Checklist Runner (Section 16.17). */

export interface Tick {
  itemId: string;
  at: string;
}

export interface RunnerState {
  ticks: Tick[];
}

export const emptyRunner: RunnerState = { ticks: [] };

export function isTicked(state: RunnerState, itemId: string): boolean {
  return state.ticks.some((t) => t.itemId === itemId);
}

export function toggle(state: RunnerState, itemId: string, at = new Date()): RunnerState {
  return isTicked(state, itemId)
    ? { ticks: state.ticks.filter((t) => t.itemId !== itemId) }
    : { ticks: [...state.ticks, { itemId, at: at.toISOString() }] };
}

/** Backspace: untick the most recently ticked item. */
export function untickLast(state: RunnerState): RunnerState {
  return { ticks: state.ticks.slice(0, -1) };
}

/** The first item not yet ticked (highlighted as "current"), or null when complete. */
export function currentItem(itemIds: string[], state: RunnerState): string | null {
  return itemIds.find((id) => !isTicked(state, id)) ?? null;
}

export function progress(
  itemIds: string[],
  state: RunnerState,
): { done: number; total: number; complete: boolean } {
  const done = itemIds.filter((id) => isTicked(state, id)).length;
  return { done, total: itemIds.length, complete: done === itemIds.length && itemIds.length > 0 };
}

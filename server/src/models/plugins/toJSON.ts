import type { Schema } from 'mongoose';

interface ToJSONOptions {
  /** Extra fields to strip from JSON output (e.g. `passwordHash`). */
  hide?: string[];
}

/**
 * Base JSON transform for every model (step 2.18): `_id` → `id` (string), removes `__v`
 * and any hidden fields.
 */
export function toJSONPlugin(schema: Schema, { hide = [] }: ToJSONOptions = {}): void {
  schema.set('toJSON', {
    virtuals: false,
    versionKey: false,
    transform: (_doc, ret: Record<string, unknown>) => {
      if (ret._id !== undefined) {
        ret.id = String(ret._id);
        delete ret._id;
      }
      for (const field of hide) delete ret[field];
      return ret;
    },
  });
}

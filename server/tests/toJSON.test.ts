import mongoose, { Schema } from 'mongoose';
import { describe, expect, it } from 'vitest';
import { toJSONPlugin } from '@server/models/plugins/toJSON.js';

const schema = new Schema({ name: String, secret: String });
schema.plugin(toJSONPlugin, { hide: ['secret'] });
const Thing = mongoose.model('ToJsonThing', schema);

describe('toJSONPlugin', () => {
  it('renames _id to id, removes __v and hidden fields', () => {
    const doc = new Thing({ name: 'Skyhawk', secret: 'hash' });
    const json = doc.toJSON() as Record<string, unknown>;
    expect(json).toEqual({ id: doc._id.toString(), name: 'Skyhawk' });
  });
});

import * as mongoose from 'mongoose';
import { CommunicatedTypes } from 'src/entities/enums';

export const CommunicatedSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  type: { type: String, enum: [CommunicatedTypes.ALL, CommunicatedTypes.CLASS] },
  photoId: String,
});

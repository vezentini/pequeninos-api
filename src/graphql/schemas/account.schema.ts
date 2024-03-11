import * as mongoose from 'mongoose';
import { ProfileTypes } from 'src/entities/enums';

export const AccountSchema = new mongoose.Schema({
  id: String,
  name: String,
  username: String,
  password: String,
  phone: String,
  document: String,
  studentIds: [String],
  profile: { type: String, enum: [ProfileTypes.ADMIN, ProfileTypes.PARENT] },
});

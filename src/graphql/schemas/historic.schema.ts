import * as mongoose from 'mongoose';
export const HistoricSchema = new mongoose.Schema({
  id: String,
  studentIds: String,
  medications: [String],
});

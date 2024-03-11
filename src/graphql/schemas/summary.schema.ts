import * as mongoose from 'mongoose';
import { SnackConsumnTypes } from 'src/entities/enums';

const ConsumnTypes = { type: String, enum: [SnackConsumnTypes.ALL, SnackConsumnTypes.HALF, SnackConsumnTypes.NONE] };

export const SummarySchema = new mongoose.Schema({
  id: String,
  studentId: String,
  date: String,
  mornningSnack: String,
  mornningSnackConsumn: ConsumnTypes,
  luncheon: String,
  luncheonConsumn: ConsumnTypes,
  afternoonSnack: String,
  afternoonSnackConsumn: ConsumnTypes,
  preDinner: String,
  preDinnerConsumn: ConsumnTypes,
  description: String,
});

import * as mongoose from 'mongoose';
import { PhotoTypes } from 'src/entities/enums';

export const PhotoSchema = new mongoose.Schema({
  id: String,
  referenceId: String,
  type: {
    type: String,
    enum: [PhotoTypes.ALL, PhotoTypes.CLASS, PhotoTypes.COMUNICATION],
  },
  photo: String,
});

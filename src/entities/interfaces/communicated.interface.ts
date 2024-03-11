import { Document } from 'mongoose';
import { CommunicatedTypes } from 'src/entities/enums';

export interface ICommunicated extends Document {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly type: CommunicatedTypes;
  readonly photoId: string;
}

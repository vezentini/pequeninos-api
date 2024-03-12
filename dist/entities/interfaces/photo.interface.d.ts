import { PhotoTypes } from '../enums';
export interface IPhoto extends Document {
    readonly id: string;
    readonly referenceId: string;
    readonly type: PhotoTypes;
    readonly photo: string;
}

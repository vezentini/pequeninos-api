import { SnackConsumnTypes } from '../enums';
export interface ISummary extends Document {
    readonly id: string;
    readonly studentId: string;
    readonly date: string;
    readonly mornningSnack: string;
    readonly mornningSnackConsumn: SnackConsumnTypes;
    readonly luncheon: string;
    readonly luncheonConsumn: SnackConsumnTypes;
    readonly afternoonSnack: string;
    readonly afternoonSnackConsumn: SnackConsumnTypes;
    readonly preDinner: string;
    readonly preDinnerConsumn: SnackConsumnTypes;
    readonly description: string;
}

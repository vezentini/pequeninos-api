import { ProfileTypes } from 'src/entities/enums';
export interface IAccountLogin {
    readonly id: string;
    readonly name: string;
    readonly username: string;
    readonly studentIds: string[];
    readonly profile: ProfileTypes;
}

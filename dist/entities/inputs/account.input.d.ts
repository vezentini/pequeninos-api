import { ProfileTypes } from '../enums';
export declare class AccountInput {
    readonly id: string | null;
    readonly name: string;
    readonly username: string;
    readonly password: string;
    readonly phone: string;
    readonly document: string;
    readonly studentIds: string[];
    readonly profile: ProfileTypes;
}

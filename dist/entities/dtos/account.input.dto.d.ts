import { ProfileTypes } from '../enums';
export declare class AccountInputDto {
    id: string;
    name: string;
    username: string;
    password: string;
    phone: string;
    document: string;
    studentIds: string[];
    profile: ProfileTypes;
}

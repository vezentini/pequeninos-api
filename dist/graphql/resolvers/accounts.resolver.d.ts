import { AccountsService } from '../../services';
import { AccountFilterInput, AccountLoginInput } from 'src/entities/inputs';
import { AccountType } from 'src/entities/dtos';
import { IAccount, IAccountLogin } from 'src/entities/interfaces';
import { AccountInputDto } from 'src/entities/dtos/account.input.dto';
export declare class AccountsResolver {
    private readonly accountsService;
    constructor(accountsService: AccountsService);
    loginAccount(input: AccountLoginInput): Promise<IAccountLogin>;
    findAccounts(input: AccountFilterInput): Promise<IAccount[]>;
    findOneAccount(input: AccountFilterInput): Promise<IAccount>;
    createAccount(accountInputDto: AccountInputDto): Promise<AccountType>;
}

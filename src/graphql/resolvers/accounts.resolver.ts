import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AccountsService } from '../../services';
import { AccountFilterInput, AccountInput, AccountLoginInput } from 'src/entities/inputs';
import { AccountLoginType, AccountType } from 'src/entities/dtos';
import { IAccount, IAccountLogin } from 'src/entities/interfaces';

@Resolver()
export class AccountsResolver {
  constructor(private readonly accountsService: AccountsService) { }

  @Query(() => AccountLoginType)
  async loginAccount(@Args('input') input: AccountLoginInput): Promise<IAccountLogin> {
    const acb = await this.accountsService.login(input);
    console.log(acb);
    return acb;
  }

  @Query(() => [AccountType])
  async findAccounts(@Args('input') input: AccountFilterInput): Promise<IAccount[]> {
    return this.accountsService.findAll(input);
  }

  @Query(() => AccountType)
  async findOneAccount(@Args('input') input: AccountFilterInput): Promise<IAccount> {
    return this.accountsService.findOne(input);
  }

  @Mutation(() => AccountType)
  async createAccount(@Args('input') input: AccountInput): Promise<IAccount> {
    return this.accountsService.upsert(input);
  }
}

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AccountsService } from '../../services';
import { AccountFilterInput, AccountLoginInput } from 'src/entities/inputs';
import { AccountLoginType, AccountType } from 'src/entities/dtos';
import { IAccount, IAccountLogin } from 'src/entities/interfaces';
import { AccountInputDto } from 'src/entities/dtos/account.input.dto';

@Resolver((of) => AccountType)
export class AccountsResolver {
  constructor(private readonly accountsService: AccountsService) { }

  @Query(() => AccountLoginType)
  async loginAccount(
    @Args('input') input: AccountLoginInput,
  ): Promise<IAccountLogin> {
    return await this.accountsService.login(input);
  }

  @Query(() => [AccountType])
  async findAccounts(
    @Args('input') input: AccountFilterInput,
  ): Promise<IAccount[]> {
    return this.accountsService.findAll(input);
  }

  @Query((returns) => AccountType)
  async findOneAccount(
    @Args('input') input: AccountFilterInput,
  ): Promise<IAccount> {
    return this.accountsService.findOne(input);
  }

  @Mutation((returns) => AccountType)
  async createAccount(
    @Args('accountInputDto') accountInputDto: AccountInputDto,
  ): Promise<AccountType> {
    return this.accountsService.upsert(accountInputDto);
  }
}

import { Model } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AccountFilterInput, AccountInput, AccountLoginInput } from 'src/entities/inputs';
import { IAccount, IAccountLogin } from 'src/entities/interfaces';

@Injectable()
export class AccountsService {
  constructor(@InjectModel('Account') private readonly accountModel: Model<IAccount>) { }

  async login(filter: Partial<AccountLoginInput>): Promise<IAccountLogin> {
    const { id, name, profile, studentIds, username } = await this.accountModel.findOne(filter).exec();
    let loginResult: IAccountLogin = { id, name, profile, studentIds, username }
    return loginResult;
  }

  async upsert(upsertAccountDto: AccountInput): Promise<IAccount> {
    const upsertObject = { ...upsertAccountDto };
    if (upsertAccountDto.id === '') {
      upsertObject.id = uuid();
    }

    const createdAccount = new this.accountModel(upsertObject);
    await this.accountModel.findOneAndUpdate({ id: upsertObject.id }, { ...upsertObject }, { upsert: true });
    return createdAccount;
  }

  async findAll(filter: Partial<AccountFilterInput>): Promise<IAccount[]> {
    return this.accountModel.find(filter).exec();
  }

  async findOne(filter: Partial<AccountFilterInput>): Promise<IAccount> {
    return this.accountModel.findOne(filter).exec();
  }
}

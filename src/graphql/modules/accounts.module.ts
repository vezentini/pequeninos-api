import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountsResolver } from '../resolvers';
import { AccountSchema } from '../schemas';
import { AccountsService } from 'src/services';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Account', schema: AccountSchema }])],
  providers: [AccountsResolver, AccountsService],
})
export class AccountsModule { }

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommunicatedsResolver } from '../resolvers';
import { CommunicatedSchema } from '../schemas';
import { CommunicatedsService } from 'src/services';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Communicated', schema: CommunicatedSchema }])],
  providers: [CommunicatedsResolver, CommunicatedsService],
})
export class CommunicatedsModule { }

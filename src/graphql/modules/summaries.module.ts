import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SummariesResolver } from '../resolvers';
import { SummariesService } from 'src/services';
import { SummarySchema } from '../schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Summary', schema: SummarySchema }])],
  providers: [SummariesResolver, SummariesService],
})
export class SummariesModule { }

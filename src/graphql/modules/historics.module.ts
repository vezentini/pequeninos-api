import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HistoricsResolver } from '../resolvers';
import { HistoricsService } from 'src/services';
import { HistoricSchema } from '../schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Historic', schema: HistoricSchema }]),
  ],
  providers: [HistoricsResolver, HistoricsService],
})
export class HistoricsModule {}

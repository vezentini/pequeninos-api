import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassesResolver } from '../resolvers';
import { ClassesService } from 'src/services';
import { ClassSchema } from '../schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Class', schema: ClassSchema }]),
  ],
  providers: [ClassesResolver, ClassesService],
})
export class ClassesModule {}

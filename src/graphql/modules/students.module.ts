import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsResolver } from '../resolvers';
import { StudentsService } from 'src/services';
import { StudentSchema } from '../schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }])],
  providers: [StudentsResolver, StudentsService],
})
export class StudentsModule { }

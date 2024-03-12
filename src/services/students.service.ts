import { Model } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { StudentFilterInput, StudentInput } from 'src/entities/inputs';
import { IStudent } from 'src/entities/interfaces';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel('Student') private readonly studentModel: Model<IStudent>,
  ) {}

  async upsert(upsertStudentDto: StudentInput): Promise<IStudent> {
    const upsertObject = { ...upsertStudentDto };

    if (upsertObject.id === '') {
      upsertObject.id = uuid();
    }

    const upsertStudent = new this.studentModel(upsertObject);
    await this.studentModel.findOneAndUpdate(
      { id: upsertObject.id },
      { ...upsertObject },
      { upsert: true },
    );
    return upsertStudent;
  }

  async findAll(filter: Partial<StudentFilterInput>): Promise<IStudent[]> {
    return this.studentModel.find(filter).exec();
  }

  async findOne(filter: Partial<StudentFilterInput>): Promise<IStudent> {
    return this.studentModel.findOne(filter).exec();
  }
}

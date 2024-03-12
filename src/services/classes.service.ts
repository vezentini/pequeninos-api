import { Model } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ClassFilterInput, ClassInput } from 'src/entities/inputs';
import { IClass } from 'src/entities/interfaces';

@Injectable()
export class ClassesService {
  constructor(
    @InjectModel('Class') private readonly classModel: Model<IClass>,
  ) {}

  async upsert(upsertClassDto: ClassInput): Promise<IClass> {
    const upsertObject = { ...upsertClassDto };

    if (upsertObject.id === '') {
      upsertObject.id = uuid();
    }

    const upsertClass = new this.classModel(upsertObject);
    await this.classModel.findOneAndUpdate(
      { id: upsertObject.id },
      { ...upsertObject },
      { upsert: true },
    );
    return upsertClass;
  }

  async findAll(filter: Partial<ClassFilterInput>): Promise<IClass[]> {
    return this.classModel.find(filter).exec();
  }

  async findOne(filter: Partial<ClassFilterInput>): Promise<IClass> {
    return this.classModel.findOne(filter).exec();
  }
}

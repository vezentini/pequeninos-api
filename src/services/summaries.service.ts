import { Model } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SummaryFilterInput, SummaryInput } from 'src/entities/inputs';
import { ISummary } from 'src/entities/interfaces';

@Injectable()
export class SummariesService {
  constructor(
    @InjectModel('Summary') private readonly studentModel: Model<ISummary>,
  ) {}

  async upsert(upsertSummaryDto: SummaryInput): Promise<ISummary> {
    const upsertObject = { ...upsertSummaryDto };

    if (upsertObject.id === '') {
      upsertObject.id = uuid();
    }

    const upsertSummary = new this.studentModel(upsertObject);
    await this.studentModel.findOneAndUpdate(
      { id: upsertObject.id },
      { ...upsertObject },
      { upsert: true },
    );
    return upsertSummary;
  }

  async findAll(filter: Partial<SummaryFilterInput>): Promise<ISummary[]> {
    return this.studentModel.find(filter).exec();
  }

  async findOne(filter: Partial<SummaryFilterInput>): Promise<ISummary> {
    return this.studentModel.findOne(filter).exec();
  }
}

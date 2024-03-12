import { Model } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HistoricFilterInput, HistoricInput } from 'src/entities/inputs';
import { IHistoric } from 'src/entities/interfaces';

@Injectable()
export class HistoricsService {
  constructor(
    @InjectModel('Historic') private readonly accountModel: Model<IHistoric>,
  ) {}

  async upsert(upsertHistoricDto: HistoricInput): Promise<IHistoric> {
    const upsertObject = { ...upsertHistoricDto };
    if (upsertHistoricDto.id === '') {
      upsertObject.id = uuid();
    }

    const createdHistoric = new this.accountModel(upsertObject);
    await this.accountModel.findOneAndUpdate(
      { id: upsertObject.id },
      { ...upsertObject },
      { upsert: true },
    );
    return createdHistoric;
  }

  async findAll(filter: Partial<HistoricFilterInput>): Promise<IHistoric[]> {
    return this.accountModel.find(filter).exec();
  }

  async findOne(filter: Partial<HistoricFilterInput>): Promise<IHistoric> {
    return this.accountModel.findOne(filter).exec();
  }
}

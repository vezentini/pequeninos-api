import { Model } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CommunicatedFilterInput, CommunicatedInput } from '../entities/inputs';
import { ICommunicated } from 'src/entities/interfaces';

@Injectable()
export class CommunicatedsService {
  constructor(@InjectModel('Communicated') private readonly communicatedModel: Model<ICommunicated>) { }

  async upsert(upsertCommunicatedDto: CommunicatedInput): Promise<ICommunicated> {
    const upsertObject = { ...upsertCommunicatedDto };
    if (upsertCommunicatedDto.id === '') {
      upsertObject.id = uuid();
    }

    const createdCommunicated = new this.communicatedModel(upsertObject);
    await this.communicatedModel.findOneAndUpdate({ id: upsertObject.id }, { ...upsertObject }, { upsert: true });
    return createdCommunicated;
  }

  async findAll(filter: Partial<CommunicatedFilterInput>): Promise<ICommunicated[]> {
    return this.communicatedModel.find(filter).exec();
  }

  async findOne(filter: Partial<CommunicatedFilterInput>): Promise<ICommunicated> {
    return this.communicatedModel.findOne(filter).exec();
  }
}

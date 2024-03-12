import { Model } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PhotoFilterInput, PhotoInput } from 'src/entities/inputs';
import { IPhoto } from 'src/entities/interfaces';

@Injectable()
export class PhotosService {
  constructor(
    @InjectModel('Photo') private readonly photoModel: Model<IPhoto>,
  ) {}

  async upsert(upsertPhotoDto: PhotoInput): Promise<IPhoto> {
    const upsertObject = { ...upsertPhotoDto };

    if (upsertObject.id === '') {
      upsertObject.id = uuid();
    }

    const upsertPhoto = new this.photoModel(upsertObject);
    await this.photoModel.findOneAndUpdate(
      { id: upsertObject.id },
      { ...upsertObject },
      { upsert: true },
    );
    return upsertPhoto;
  }

  async findAll(filter: Partial<PhotoFilterInput>): Promise<IPhoto[]> {
    return this.photoModel.find(filter).exec();
  }

  async findOne(filter: Partial<PhotoFilterInput>): Promise<IPhoto> {
    return this.photoModel.findOne(filter).exec();
  }
}

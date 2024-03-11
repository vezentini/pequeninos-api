import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PhotoType } from 'src/entities/dtos';
import { PhotoFilterInput, PhotoInput } from 'src/entities/inputs';
import { IPhoto } from 'src/entities/interfaces';
import { PhotosService } from 'src/services';

@Resolver()
export class PhotosResolver {
  constructor(private readonly photosService: PhotosService) { }

  @Query(() => [PhotoType])
  async findPhotos(@Args('input') input: PhotoFilterInput): Promise<IPhoto[]> {
    return this.photosService.findAll(input);
  }

  @Query(() => PhotoType)
  async findOnePhoto(@Args('input') input: PhotoFilterInput): Promise<IPhoto> {
    return this.photosService.findOne(input);
  }

  @Mutation(() => PhotoType)
  async upsertPhoto(@Args('input') input: PhotoInput): Promise<IPhoto> {
    return this.photosService.upsert(input);
  }
}

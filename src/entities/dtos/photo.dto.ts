import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';
import { PhotoTypes } from '../enums';

registerEnumType(PhotoTypes, {
  name: 'PhotoTypes',
});

@ObjectType()
export class PhotoType {
  @Field(() => ID)
  readonly id: string;
  @Field()
  readonly photo: string;
  @Field(() => PhotoTypes)
  readonly type: PhotoTypes;
  @Field(() => ID)
  readonly referenceId: string;
}

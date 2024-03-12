import { Field, ID, InputType } from '@nestjs/graphql';
import { PhotoTypes } from '../enums';

@InputType()
export class PhotoInput {
  @Field(() => ID)
  readonly id: string;
  @Field()
  readonly photo: string;
  @Field(() => PhotoTypes)
  readonly type: PhotoTypes;
  @Field(() => ID)
  readonly referenceId: string;
}

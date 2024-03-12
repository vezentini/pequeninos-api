import { Field, ID, InputType } from '@nestjs/graphql';
import { PhotoTypes } from '../enums';

@InputType()
export class PhotoFilterInput {
  @Field(() => ID, { nullable: true })
  readonly referenceId: string;
  @Field(() => PhotoTypes, { nullable: true })
  readonly type: PhotoTypes;
}

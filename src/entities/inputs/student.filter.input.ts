import { Field, ID, InputType } from '@nestjs/graphql';
import { GenderTypes } from '../enums';

@InputType()
export class StudentFilterInput {
  @Field(() => ID, { nullable: true })
  readonly id: string;
  @Field({ nullable: true })
  readonly name: string;
  @Field(() => GenderTypes, { nullable: true })
  readonly gender: GenderTypes;
  @Field(() => ID, { nullable: true })
  readonly classId: string;
}

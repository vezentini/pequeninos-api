import { Field, ID, InputType } from 'type-graphql';
import { GenderTypes } from '../enums';

@InputType()
export class StudentInput {
  @Field(() => ID)
  readonly id: string;
  @Field()
  readonly name: string;
  @Field(() => GenderTypes)
  readonly gender: GenderTypes;
  @Field(() => ID)
  readonly classId: string;
}

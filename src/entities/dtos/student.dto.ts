import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';
import { GenderTypes } from '../enums';

registerEnumType(GenderTypes, {
  name: 'GenderTypes',
});

@ObjectType()
export class StudentType {
  @Field(() => ID)
  readonly id: string;
  @Field()
  readonly name: string;
  @Field(() => GenderTypes)
  readonly gender: GenderTypes;
  @Field(() => ID)
  readonly classId: string;
}

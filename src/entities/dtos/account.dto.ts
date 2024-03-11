import { ObjectType, Field, ID, registerEnumType } from 'type-graphql';
import { ProfileTypes } from '../enums';

registerEnumType(ProfileTypes, {
  name: 'ProfileTypes',
});

@ObjectType()
export class AccountType {
  @Field(() => ID)
  readonly id: string;
  @Field()
  readonly name: string;
  @Field()
  readonly username: string;
  @Field()
  readonly password: string;
  @Field()
  readonly phone: string;
  @Field()
  readonly document: string;
  @Field(() => [String])
  readonly studentIds: string[];
  @Field(() => ProfileTypes)
  readonly profile: ProfileTypes;
}

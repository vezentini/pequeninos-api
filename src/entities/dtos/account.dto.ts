import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';
import { ProfileTypes } from '../enums';

registerEnumType(ProfileTypes, {
  name: 'ProfileTypes',
});

@ObjectType()
export class AccountType {
  @Field(() => ID)
  id: string;
  @Field()
  name: string;
  @Field()
  username: string;
  @Field()
  password: string;
  @Field()
  phone: string;
  @Field()
  document: string;
  @Field(() => [String])
  studentIds: string[];
  @Field(() => ProfileTypes)
  profile: ProfileTypes;
}

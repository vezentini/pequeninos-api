import { ObjectType, Field, ID, registerEnumType } from 'type-graphql';
import { CommunicatedTypes } from '../enums';

registerEnumType(CommunicatedTypes, {
  name: 'CommunicationTypes',
});

@ObjectType()
export class CommunicatedType {
  @Field(() => ID)
  readonly id: string;
  @Field()
  readonly title: string;
  @Field()
  readonly description: string;
  @Field(() => CommunicatedTypes)
  readonly type: CommunicatedTypes;
  @Field(() => ID)
  readonly photoId: string;
}

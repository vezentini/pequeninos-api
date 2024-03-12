import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import modules from './graphql/modules';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
@Module({
  imports: [
    ...modules,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      playground: true,
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/pequeninos'),
  ],
})
export class AppModule { }

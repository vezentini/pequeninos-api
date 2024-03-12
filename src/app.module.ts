import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import modules from './graphql/modules';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

const mongoUri =
  'mongodb+srv://pequeninos-app:q8qDSmnSRxKkRWhl@cluster0.hhhy8qo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
@Module({
  imports: [
    ...modules,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      playground: true,
    }),
    MongooseModule.forRoot(mongoUri),
  ],
})
export class AppModule { }

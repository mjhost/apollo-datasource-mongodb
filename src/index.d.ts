import * as ApolloDatasource from 'apollo-datasource';
import * as MongoDB from 'mongodb';

// Type definitions for apollo-datasource-mongo 0.1.4
// Project: https://github.com/GraphQLGuide/apollo-datasource-mongodb
// Definitions by: Paolo Mariotti <https://github.com/mjhost>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface MongoDataSourceCacheConfig {
  ttl: number;
}

declare class MongoDataSource<TContext = any, TResult = any> extends ApolloDatasource.DataSource<TContext> {
  constructor(collection: MongoDB.Collection<TResult>);
  initialize(config: ApolloDatasource.DataSourceConfig<TContext>): void;

  collection: MongoDB.Collection<TResult>;
  context: TContext;
  findOneById<TResult = any>(id: string, config?: MongoDataSourceCacheConfig): Promise<TResult>;
  findManyByIds<TResult = any>(id: string[], config?: MongoDataSourceCacheConfig): Promise<TResult[]>;
  deleteFromCacheById(id: string): void;
}

declare namespace MongoDataSourceNs {}

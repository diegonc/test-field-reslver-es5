import 'reflect-metadata';
import { GraphQLServer } from 'graphql-yoga';
import {
  AuthChecker,
  buildSchema,
  buildTypeDefsAndResolvers
} from 'type-graphql';
import { createConnection } from 'typeorm';

async function bootstrap() {
  try {
    const connection = await createConnection()

    const { typeDefs, resolvers } = await buildTypeDefsAndResolvers({
      resolvers: [__dirname + '/modules/**/*.resolver.ts'],
    })

    console.log('typeDefs:\n', typeDefs);

    const server = new GraphQLServer({
      resolvers,
      typeDefs,
    })
    server.start({
      port: 4200,
      playground: '/playground',
    }, ({ port, playground }) => {
      console.log(`Server started at port http://localhost:${port}${playground}`)
    })

  } catch(e) {
    console.error("Error: ", e);
  }
}

bootstrap()

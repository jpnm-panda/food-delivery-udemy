import { withData } from 'next-apollo';

const { HttpLink } = require('apollo-link-http');

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337/graphql';

const config = {
  link: new HttpLink({
    uri: `${API_URL}/graphql`,
  }),
};

export default withData(config);

import { resolver } from 'graphql-sequelize';
import { Option } from '../../models';

export const Mutation = {
  upsertOption: resolver(Option, {
    before: async (findOptions, { data }, ctx) => {
      const [option, createOption] = await Option.upsert(data, {
        returning: true,
      });
      return option;
    },
    after: (option) => {
      return option;
    },
  }),
};

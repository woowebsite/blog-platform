import { resolver } from 'graphql-sequelize';
import { Option } from '../../models';

export const Query = {
  option: resolver(Option, {
    before: async (findOptions, { where }, context) => {
      findOptions.where = where;
      return findOptions;
    },
    after: (option) => option,
  }),
  options: resolver(Option, {
    list: true,
    before: async (findOptions, { where }, context) => {
      findOptions.where = where;
      findOptions.order = [['name', 'ASC']];
      return findOptions;
    },
    after: async (options, args) => {
      const total = await Option.count(args.where);
      return { rows: options, count: total };
    },
  }),
};

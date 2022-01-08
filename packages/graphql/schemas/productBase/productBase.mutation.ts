import { resolver } from 'graphql-sequelize';
import { ProductBase } from '../../models';
import to from 'await-to-js';
import { ProductBaseTerm } from '../../models/productBaseTerm.model';

export const Mutation = {
  upsertProductBase: resolver(ProductBase, {
    before: async (findOptions, { data, metadata, taxonomies }, ctx) => {
      const { currentUser } = ctx;
      const obj = { ...data, userId: currentUser.id };

      const [productBase, createProductBase] = await ProductBase.upsert(obj, {
        returning: true,
      });

      // Update taxonomyRelationship
      if (productBase && taxonomies) {
        const terms = taxonomies.map((termId) => ({
          term_taxonomy_id: termId,
          ref_id: productBase.id,
        }));
        await ProductBaseTerm.bulkCreate(terms);
      }

      // Update productBase
      ProductBase.upsert(obj);

      findOptions.where = { id: productBase.id };
      return findOptions;
    },
    after: (productBase) => {
      return productBase;
    },
  }),
};

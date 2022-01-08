import { resolver } from 'graphql-sequelize';
import { ProductBase } from '../../models';
import to from 'await-to-js';
import { ProductBaseTerm } from '../../models/productBaseTerm.model';
import { StatusType } from '../../types';

export const Mutation = {
  upsertProductBase: resolver(ProductBase, {
    before: async (findOptions, { data, metadata, taxonomies }, ctx) => {
      const { currentUser } = ctx;
      const obj: ProductBase = { ...data, userId: currentUser.id };

      // create new
      if (!data.id) {
        obj.publishDate = new Date();
      }

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

      findOptions.where = { id: productBase.id };
      return findOptions;
    },
    after: (productBase) => {
      return productBase;
    },
  }),
  deleteProductBase: resolver(ProductBase, {
    before: async (findOptions, { id }, ctx) => {
      await ProductBase.destroy({ where: { id } });
      findOptions.where = { id };
      return findOptions;
    },
    after: (productBase) => {
      return !productBase;
    },
  }),
};

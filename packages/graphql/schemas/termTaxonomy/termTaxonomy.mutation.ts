import { resolver } from 'graphql-sequelize';
import { TermTaxonomy } from '../../models';
import to from 'await-to-js';
import { Term } from '../../models/term.model';

export const Mutation = {
  upsertTermTaxonomy: resolver(TermTaxonomy, {
    before: async (findOptions, { data }, ctx) => {
      const termObj: any = { name: data.termName, slug: data.termName };
      const [term, createTerm] = await Term.upsert(termObj, {
        returning: true,
      });

      const [termTaxonomy, createTermTaxonomy] = await TermTaxonomy.upsert(
        { ...data, term_id: term.id },
        {
          returning: true,
        },
      );
      console.log('termTaxonomy', termTaxonomy);

      return termTaxonomy;
    },
    after: (termTaxonomy) => {
      return termTaxonomy;
    },
  }),
};

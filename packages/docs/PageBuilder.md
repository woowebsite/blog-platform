# Libraries
- landing.ant.design

# Template Builder with JSON
- Build list of Element
- Create `layout.tsx` to render page
    - Get `componentData` from JSON
    - Get `template` from JSON

## Admin build
Create list of Elements as templates/template/element
Save `template` ( List of Element's name ) into table `ProductBase` (type = `page`)
Save `componentData` into the table `ProductBaseTerm`
Create `layout.tsx` to render page
    - Get `componentData` in `ProdutBaseTerm`
    - Get `template` in `ProductBase`


- Using landing.ant.design to export pages `Home`, `About` ...into `pages` folder
- Using landing.ant.design Preview to `frontpage` packages


## User build
- Publish landing.ant.design into Admin page

# Elements
Example make Header component to dynamic
* Step 1: create template.config.ts in Header. `dataSource` is default props
```js
import component from './Header';

export default {
  component,
  dataSource: {
    logo: 'light',
    color: 'default-color',
  },
};
```

* Step 2: Update into `components.config.ts`
```js
import Header from 'components/header/template.config';
import KeyPair from '~/types/KeyPair';

const components: KeyPair = {
  Header,
};
export default components;
```
* Step 3: Modify Header component to use `dataSource` props
```js
const {  logo, color='default-color' } = this.props.dataSource;
```

* Step 4: Update `layout.ts` in folder `\Home`
```js
export default ['Header'];
```
import component from './Header';
import menuConfig from 'components/menu/template.config';
import logoConfig from 'components/logo/template.config';

export default {
  component,
  dataSource: {
    menu: menuConfig.dataSource,
    logo: logoConfig.dataSource,
    color: 'default-color',
  },
};

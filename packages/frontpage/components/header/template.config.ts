import component from './Header';
import menuConfig from 'components/menu/template.config';
import logoConfig from 'components/logo/template.config';
import anchorButtonConfig from 'components/AnchorButton/anchorButton.config';

export default {
  component,
  dataSource: {
    color: 'default-color',
    menu: menuConfig.dataSource,
    logo: logoConfig.dataSource,
    button: anchorButtonConfig.dataSource,
  },
};

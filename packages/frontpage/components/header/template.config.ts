import component from './Header';
import menuConfig from '~/components/MainMenu/template.config';
import logoConfig from '~/components/Logo/template.config';
import anchorButtonConfig from '~/components/AnchorButton/template.config';

export default {
  component,
  dataSource: {
    color: 'default-color',
    menu: menuConfig.dataSource,
    logo: logoConfig.dataSource,
    button: anchorButtonConfig.dataSource,
  },
};

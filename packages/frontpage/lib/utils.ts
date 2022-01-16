import { config } from 'process';
import React from 'react';
import components from '~/components/components.config';

interface ComponentConfig {
  componentName: any;
  name?: string;
  dataSource: any;
}

export const getComponent = (name: string) => {
  return components[name];
};
export const renderComponent = (config: ComponentConfig) => {
  const { name, componentName, dataSource } = config;
  const component = components[componentName];
  const Component = React.createElement(component, {
    key: name,
    id: name,
    ...dataSource,
  });

  return Component;
};

export const renderDiv = (config: ComponentConfig) => {
  const { name, dataSource } = config;
  const data: any = dataSource.children
    ? {
        ...dataSource,
        children: renderChildren(dataSource.children),
      }
    : dataSource;

  const Component = React.createElement('div', {
    key: name,
    id: name,
    ...data,
  });

  return Component;
};

export const renderChildren = (children: ComponentConfig[]) => {
  return children.map((x) => {
    switch (x.componentName) {
      case 'div':
        return renderDiv(x);

      default:
        return renderComponent(x);
    }
  });
};

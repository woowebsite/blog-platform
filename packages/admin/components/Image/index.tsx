import React from 'react';
import { Image as AntdImage } from 'antd';
import EmptyImage from 'components/EmptyImage';

const Image = ({ src, ...others }) => {
  if (src) {
    let _src =
      src.startsWith('https://') || src.startsWith('http://')
        ? src
        : '/images/' + src;

    return <AntdImage {...others} src={_src} />;
  }

  return <EmptyImage width={50} height={50} />;
};

export default Image;

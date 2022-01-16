import { HTMLAttributes } from 'react';
import { renderChildren, renderComponent } from '~/lib/utils';

interface ContentProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  description?: string;
  children: any[];
}
const Content = (props: ContentProps) => {
  const { title, description, children, className } = props;

  return (
    <div className={className}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center service-style--3 mb--30">
              <h2 className="title">{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper plr--30">{renderChildren(children)}</div>
    </div>
  );
};

export default Content;

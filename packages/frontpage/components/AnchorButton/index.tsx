import { AnchorHTMLAttributes } from 'react';

interface AnchorButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  text: string;
}
const AnchorButton = ({
  href,
  text,
  className = 'rn-btn',
  ...rest
}: AnchorButtonProps) => {
  return (
    <a className={className} href={href} {...rest}>
      <span>{text}</span>
    </a>
  );
};

export default AnchorButton;

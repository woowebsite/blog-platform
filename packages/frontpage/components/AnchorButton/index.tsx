interface AnchorButtonProps {
  href: string;
  text: string;
}
const AnchorButton = ({ href, text }: AnchorButtonProps) => {
  return (
    <a className="rn-btn" href={href}>
      <span>{text}</span>
    </a>
  );
};

export default AnchorButton;

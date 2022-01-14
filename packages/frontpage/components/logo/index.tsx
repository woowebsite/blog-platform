interface LogoProps {
  logo: 'light' | 'dark' | 'symbol-dark' | 'symbol-light';
  href: string;
}

const Logo = ({ logo, href = '/' }: LogoProps) => {
  let logoUrl;
  if (logo === 'light') {
    logoUrl = (
      <img src="/assets/images/logo/logo-light.png" alt="Digital Agency" />
    );
  } else if (logo === 'dark') {
    logoUrl = (
      <img src="/assets/images/logo/logo-dark.png" alt="Digital Agency" />
    );
  } else if (logo === 'symbol-dark') {
    logoUrl = (
      <img
        src="/assets/images/logo/logo-symbol-dark.png"
        alt="Digital Agency"
      />
    );
  } else if (logo === 'symbol-light') {
    logoUrl = (
      <img
        src="/assets/images/logo/logo-symbol-light.png"
        alt="Digital Agency"
      />
    );
  } else {
    logoUrl = <img src="/assets/images/logo/logo.png" alt="Digital Agency" />;
  }

  return (
    <div className="logo">
      <a href={href}>{logoUrl}</a>
    </div>
  );
};

export default Logo;

import { Link } from "react-router-dom";

const Button3D = ({
  children,
  className = "",
  onClick,
  href,
  target,
  rel,
  download,
  to,
  ...props
}) => {
  const commonProps = {
    className: `inline-flex items-center justify-center transition-all duration-200 ${className}`,
    onClick,
    ...props,
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        download={download}
        {...commonProps}
      >
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} {...commonProps}>
        {children}
      </Link>
    );
  }

  return <button {...commonProps}>{children}</button>;
};

export default Button3D;

import Image from 'next/image';

interface LogoProps {
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
}

const Logo = (props: LogoProps) => {
  const { width = 40, height = 40 } = props;
  return <Image alt="atlys" src="/atlys.svg" width={width} height={height} />;
};

export default Logo;

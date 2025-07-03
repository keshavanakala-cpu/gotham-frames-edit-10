
interface BatmanLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const BatmanLogo = ({ size = 'md', className = '' }: BatmanLogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
        <path d="M50 10 C30 10, 15 25, 15 35 C15 45, 25 50, 35 45 C40 42, 45 40, 50 42 C55 40, 60 42, 65 45 C75 50, 85 45, 85 35 C85 25, 70 10, 50 10 Z" className="fill-gotham-red"/>
        <path d="M50 15 C35 15, 22 27, 22 37 C22 44, 28 47, 35 45 C40 43, 45 42, 50 43 C55 42, 60 43, 65 45 C72 47, 78 44, 78 37 C78 27, 65 15, 50 15 Z" className="fill-gotham-black"/>
      </svg>
    </div>
  );
};

export default BatmanLogo;

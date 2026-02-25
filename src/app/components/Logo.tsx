import { images } from '../../assets';

export function Logo({ className = "", size = "default" }: { className?: string; size?: "small" | "default" | "large" }) {
  const sizeClasses = {
    small: "h-16",
    default: "h-40",
    large: "h-64"
  };
  
  return (
    <img 
      src={images.logo} 
      alt="Rad Electric Solutions" 
      className={`${sizeClasses[size]} w-auto ${className}`}
    />
  );
}

export function LogoCompact({ className = "" }: { className?: string }) {
  return <Logo size="small" className={className} />;
}
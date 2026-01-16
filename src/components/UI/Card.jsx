export default function Card({ children, className = '', hover = true, glass = false, onClick }) {
  const baseStyles = 'rounded-xl shadow-md overflow-hidden';
  const hoverStyles = hover ? 'card-hover cursor-pointer' : '';
  const glassStyles = glass ? 'glass' : 'bg-white dark:bg-gray-800';

  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${glassStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

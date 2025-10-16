interface LogoProps {
  variant?: 'default' | 'minimal' | 'full' | 'geometric';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animated?: boolean;
}

export function Logo({ 
  variant = 'default', 
  size = 'md', 
  className = '',
  animated = false 
}: LogoProps) {
  const sizeMap = {
    sm: { container: 48, svg: 48 },
    md: { container: 80, svg: 80 },
    lg: { container: 120, svg: 120 },
    xl: { container: 180, svg: 180 }
  };

  const dimensions = sizeMap[size];

  // Geometric shapes variant
  if (variant === 'geometric') {
    return (
      <div className={`${className} ${animated ? 'group' : ''}`}>
        <svg 
          width={dimensions.svg} 
          height={dimensions.svg} 
          viewBox="0 0 120 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* C - Angular shape */}
          <path 
            d="M 45 20 L 20 35 L 20 85 L 45 100 L 55 95 L 55 85 L 35 75 L 35 45 L 55 35 L 55 25 Z" 
            className="fill-cyan-500 transition-all duration-300 group-hover:fill-cyan-400"
          />
          
          {/* G - Angular shape */}
          <path 
            d="M 100 35 L 75 20 L 65 25 L 65 35 L 85 45 L 85 60 L 75 65 L 75 75 L 85 70 L 100 60 L 100 35 Z M 85 75 L 75 80 L 65 75 L 65 95 L 75 100 L 100 85 L 100 75 L 85 75 Z" 
            className="fill-blue-600 transition-all duration-300 group-hover:fill-blue-500"
          />
        </svg>
      </div>
    );
  }

  // Icon variant - Hexagonal badge
  if (variant === 'minimal') {
    return (
      <div className={`${className} ${animated ? 'group' : ''}`}>
        <svg 
          width={dimensions.svg} 
          height={dimensions.svg} 
          viewBox="0 0 120 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Hexagon outline */}
          <path 
            d="M 60 10 L 100 35 L 100 85 L 60 110 L 20 85 L 20 35 Z" 
            className="stroke-cyan-500 transition-all duration-300 group-hover:stroke-cyan-400" 
            strokeWidth="3"
            fill="none"
          />
          
          {/* C */}
          <path 
            d="M 50 35 L 35 43 L 35 77 L 50 85 L 50 75 L 45 72 L 45 48 L 50 45 Z" 
            className="fill-cyan-500 transition-all duration-300 group-hover:fill-cyan-400"
          />
          
          {/* G */}
          <path 
            d="M 85 43 L 70 35 L 70 45 L 75 48 L 75 60 L 70 60 L 70 70 L 80 70 L 85 67 L 85 43 Z M 75 72 L 70 75 L 70 85 L 85 77 L 85 72 Z" 
            className="fill-blue-600 transition-all duration-300 group-hover:fill-blue-500"
          />
        </svg>
      </div>
    );
  }

  // Full variant with name
  if (variant === 'full') {
    return (
      <div className={`inline-flex flex-col items-center gap-3 ${className}`}>
        <svg 
          width={dimensions.svg} 
          height={dimensions.svg} 
          viewBox="0 0 120 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Angular C */}
          <path 
            d="M 45 20 L 20 35 L 20 85 L 45 100 L 55 95 L 55 85 L 35 75 L 35 45 L 55 35 L 55 25 Z" 
            className="fill-cyan-500"
          />
          
          {/* Angular G */}
          <path 
            d="M 100 35 L 75 20 L 65 25 L 65 35 L 85 45 L 85 60 L 75 65 L 75 75 L 85 70 L 100 60 L 100 35 Z M 85 75 L 75 80 L 65 75 L 65 95 L 75 100 L 100 85 L 100 75 L 85 75 Z" 
            className="fill-blue-600"
          />
        </svg>
        <div className="text-sm tracking-[0.3em] text-muted-foreground">CELESTE GUILLÉN</div>
      </div>
    );
  }

  // Default - Angular badge with gradient
  return (
    <div className={`${className} ${animated ? 'group' : ''}`}>
      <svg 
        width={dimensions.svg} 
        height={dimensions.svg} 
        viewBox="0 0 120 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(6 182 212)" />
            <stop offset="100%" stopColor="rgb(37 99 235)" />
          </linearGradient>
          <linearGradient id="gradient-c" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(6 182 212)" />
            <stop offset="100%" stopColor="rgb(8 145 178)" />
          </linearGradient>
          <linearGradient id="gradient-g" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(37 99 235)" />
            <stop offset="100%" stopColor="rgb(29 78 216)" />
          </linearGradient>
        </defs>
        
        {/* Background angular shape */}
        <path 
          d="M 60 5 L 105 32.5 L 105 87.5 L 60 115 L 15 87.5 L 15 32.5 Z" 
          fill="url(#gradient-bg)"
          className="transition-all duration-300 group-hover:opacity-90"
        />
        
        {/* C - Angular shape */}
        <path 
          d="M 50 30 L 30 42 L 30 78 L 50 90 L 55 87 L 55 80 L 40 72 L 40 48 L 55 40 L 55 33 Z" 
          fill="white"
          className="transition-all duration-300 group-hover:scale-105"
          style={{ transformOrigin: '42.5px 60px' }}
        />
        
        {/* G - Angular shape */}
        <path 
          d="M 90 42 L 70 30 L 65 33 L 65 40 L 80 48 L 80 60 L 70 65 L 70 72 L 80 67 L 90 60 L 90 42 Z M 80 75 L 70 78 L 65 75 L 65 87 L 70 90 L 90 78 L 90 72 L 80 72 Z" 
          fill="white"
          className="transition-all duration-300 group-hover:scale-105"
          style={{ transformOrigin: '77.5px 60px' }}
        />
      </svg>
    </div>
  );
}

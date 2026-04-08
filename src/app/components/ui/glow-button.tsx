import React, { forwardRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from './utils';

interface GlowButtonProps {
  label?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  icon?: React.ReactNode;
  className?: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}

export const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ label = "Button", variant = 'primary', icon, className, onClick, type = 'button' }, ref) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 200);
      if (onClick) {
        onClick(e);
      }
    };

    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "glow-btn",
          variant === 'primary' && "glow-btn-primary",
          variant === 'secondary' && "glow-btn-secondary",
          variant === 'accent' && "glow-btn-accent",
          className
        )}
        onClick={handleClick}
        data-state={isClicked ? "clicked" : undefined}
      >
        <span className="flex items-center justify-center gap-2">
          {label}
          {icon || <ArrowRight className="w-5 h-5" />}
        </span>
      </button>
    );
  }
);

GlowButton.displayName = "GlowButton";

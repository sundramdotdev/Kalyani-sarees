'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  position?: 'right' | 'left' | 'bottom';
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  position = 'right',
  children,
  footer,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const positionClasses = {
    right: 'top-0 right-0 h-full w-full max-w-md translate-x-0',
    left: 'top-0 left-0 h-full w-full max-w-sm translate-x-0',
    bottom: 'bottom-0 left-0 right-0 max-h-[85vh] rounded-t-xl',
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={cn(
          'fixed z-10 bg-[#F8F3EA] border-[#DED5C8] shadow-2xl flex flex-col transition-transform duration-300 ease-out',
          position === 'bottom' ? 'border-t' : position === 'right' ? 'border-l' : 'border-r',
          positionClasses[position]
        )}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#DED5C8]">
          {title && <h3 className="font-serif text-lg font-semibold text-[#6B1F2A]">{title}</h3>}
          <button
            onClick={onClose}
            className="p-1.5 text-[#6F6A63] hover:text-[#252525] hover:bg-[#EFE5D5] rounded-full transition-colors ml-auto"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4">{children}</div>

        {/* Footer */}
        {footer && <div className="px-6 py-4 border-t border-[#DED5C8] bg-[#EFE5D5]/50">{footer}</div>}
      </div>
    </div>
  );
};

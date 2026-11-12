import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 md:px-0">
      <ol className="flex items-center flex-wrap gap-1.5 text-xs text-[#6F6A63]">
        <li>
          <Link href="/" className="hover:text-[#6B1F2A] transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <li aria-hidden="true" className="text-[#DED5C8]">
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li>
                {isLast || !item.href ? (
                  <span className="text-[#252525] font-medium truncate max-w-[200px] inline-block align-bottom" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-[#6B1F2A] transition-colors">
                    {item.label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

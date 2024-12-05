import React from 'react'
import Link from 'next/link';

type Props = {
    href: string;
    children: React.ReactNode;
  };

export function LinkStyle({children , href}: Props) {
  return (
    <Link href={href} className='transition-all text-white font-semibold text-lg hover:text-primer'>{children}</Link>
  )
}

export function SmallLinkStyle({children , href}: Props) {
  return (
    <Link href={href} className=' transition-all text-white hover:text-primer'>{children}</Link>
  )
}

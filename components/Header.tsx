import React, { Children } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Header = ({children}: HeaderProps) => {
  return (
    <div className='header'>
        <Link href="/" className="md:flex-1">
            <Image src='/assets/icons/logo.svg' width={120} height={32} alt='Scribbles logo' className='hidden md:block' />
        </Link>
        <Link href="/" className="md:flex-1">
            <Image src='/assets/icons/logo-icon.svg' width={120} height={32} alt='Scribbles logo' className='md:hidden mr-2' />
        </Link>
        {children}
    </div>
  )
}

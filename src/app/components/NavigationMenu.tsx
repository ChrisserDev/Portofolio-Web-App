'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import './NavigationMenu.scss';

export default function NavigationMenu(): React.JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleNavPageActiveState = (href: string): string => {
    return pathname === href ? 'is-active' : '';
  };

  return (
    <>
      <button
        className='mobile-menu-toggle'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen}
        aria-controls='primary-navigation'
      >
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' aria-hidden='true' focusable='false'>
          {isMenuOpen ? (
            <>
              <line x1='18' y1='6' x2='6' y2='18'></line>
              <line x1='6' y1='6' x2='18' y2='18'></line>
            </>
          ) : (
            <>
              <line x1='3' y1='6' x2='21' y2='6'></line>
              <line x1='3' y1='12' x2='21' y2='12'></line>
              <line x1='3' y1='18' x2='21' y2='18'></line>
            </>
          )}
        </svg>
      </button>
      <nav id='primary-navigation' aria-label='Primary' className={`navigation-menu ${isMenuOpen ? 'mobile-open' : ''}`}  onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <ul className='navigation-pages'>
          <li>
            <Link href='/' className={handleNavPageActiveState('/')} aria-label='About Me Section'>
              <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' focusable='false'>
                <circle cx='12' cy='8' r='4' />
                <path d='M4 21c0-4 3.58-7 8-7s8 3 8 7' />
              </svg>
              <span>About Me</span>
            </Link>
          </li>
          <li>
            <Link href='/experience' className={handleNavPageActiveState('/experience')} aria-label='Work Experience Section'>
              <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' focusable='false'>
                <rect x='3' y='7' width='18' height='13' rx='2' />
                <path d='M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2' />
                <path d='M3 13h18' />
              </svg>
              <span>Work Experience</span>
            </Link>
          </li>
          <li>
            <Link href='/projectss' className={handleNavPageActiveState('/projectss')} aria-label='Projects Section'>
              <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' focusable='false'>
                <path d='M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z' />
              </svg>
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link href='/skills' className={handleNavPageActiveState('/skills')} aria-label='Skills Section'>
              <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' focusable='false'>
                <polyline points='8 6 3 12 8 18' />
                <polyline points='16 6 21 12 16 18' />
              </svg>
              <span>Skills</span>
            </Link>
          </li>
          <li>
            <Link href='/blog' className={handleNavPageActiveState('/blog')} aria-label='Blog Section'>
              <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' focusable='false'>
                <path d='M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z' />
                <polyline points='14 3 14 9 20 9' />
                <path d='M8 13h8' />
                <path d='M8 17h5' />
              </svg>
              <span>Blog</span>
            </Link>
          </li>
        </ul>
        <ul className='social-links'>
          <li>
            <a href='mailto:cristian.serban33@yahoo.com' aria-label='Email' role='link' tabIndex={0}>
              <svg width='24'height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' role='img' aria-labelledby='emailIconTitle' focusable='false'>
                <title id='emailIconTitle'>Email</title>
                <rect x='2' y='4' width='20' height='16' rx='2' />
                <polyline points='22,6 12,13 2,6' />
              </svg>
            </a>
          </li>
          <li>
            <a href='https://github.com/ChrisserDev' aria-label='GitHub' role='link' tabIndex={0} target="_blank" rel="noopener noreferrer">
              <svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor' role='img' aria-labelledby='githubIconTitle' focusable='false'>
                <title id='githubIconTitle'>GitHub</title>
                <path d='M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z'/>
              </svg>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/cristianserban24/' aria-label='LinkedIn' role='link' tabIndex={0} target="_blank" rel="noopener noreferrer">
              <svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor' role='img' aria-labelledby='linkedinIconTitle'focusable='false'>
                <title id='linkedinIconTitle'>LinkedIn</title>
                <path d='M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z'/>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

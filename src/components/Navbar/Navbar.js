'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoText}>Soft<span>Nova</span></span>
          </Link>
        </div>
        
        <ul className={styles.navLinks}>
          <li><Link href="/" className={pathname === '/' ? styles.active : ''}>Home</Link></li>
          <li><Link href="/services" className={pathname === '/services' ? styles.active : ''}>Services</Link></li>
          <li><Link href="/projects" className={pathname.startsWith('/projects') ? styles.active : ''}>Projects</Link></li>
          <li><Link href="/about" className={pathname === '/about' ? styles.active : ''}>About</Link></li>
          <li><Link href="/contact" className={pathname === '/contact' ? styles.active : ''}>Contact</Link></li>
        </ul>

        <div className={styles.cta}>
          <Link href="/get-quote" className={styles.btn}>
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// components/Header.tsx
import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.logo}>
                <Link href="/">
                    <span className={styles.navLink}>Logo</span>
                </Link>
            </div>
            <nav>
                <ul className={styles.navList}>
                <li>
                        <span className={styles.navLink}>Parceria</span>
                    </li>
                    <li>
                        <span className={styles.navLink}>Contacto</span>
                    </li>
                    <li>
                        <span className={styles.navLink}>Mensagem</span>
                    </li>

                </ul>
            </nav>
        </header>
    );
};

export default Header;

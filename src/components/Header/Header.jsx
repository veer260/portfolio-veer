import React from 'react';
import styles from './Header.module.css'

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.imageWrapper}>
               <svg width="36px" height="36px" preserveAspectRatio="" viewBox="0 0 400 400" fill="none">
                <g stroke="var(--gray-1200)" strokeWidth="24">
                    <path d="M33.9747 20.183C65.0637 2.23376 104.817 12.8856 122.766 43.9747L242.266 250.955C260.216 282.044 249.564 321.797 218.475 339.746C187.386 357.696 147.632 347.044 129.683 315.955L10.183 108.975C-7.76624 77.8856 2.88565 38.1323 33.9747 20.183Z"  />
<rect x="292.322" y="-21.6495" width="125" height="382.595" rx="62.5" transform="rotate(30 292.322 -21.6495)" />
                </g>

</svg>
            </div>
            <nav className={styles.navWrapper}>
                <ul className={styles.navList}>

                    <li  className={styles.item}>
                       <a href="#home"> Index</a>
                    </li>

                    <li className={styles.item}>
                       <a href="#about"> About</a>
                    </li>

                    <li className={styles.item}>
                       <a href="#work"> Work</a>
                    </li>

                    <li className={styles.item}>
                       <a href="#contact"> Contact</a>
                    </li>
                    {/* <li className={styles.item}>About</li>
                    <li className={styles.item}>Work</li>
                    <li className={styles.item}>Contact</li> */}
                </ul>
            </nav>
            
        </div>
    )
}

export default Header;

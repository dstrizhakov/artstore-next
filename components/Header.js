import Image from 'next/image';
import styles from '../styles/Header.module.scss'

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.header__logo}>
				logo
			</div>
			<div className={styles.header__menu}>
				<nav className={styles.header__nav}>
					<ul className={styles.menu}>
						<li className={styles.menu__item}>Home</li>
						<li className={styles.menu__item}>Gallery</li>
						<li className={styles.menu__item}>Delivery</li>
						<li className={styles.menu__item}>About</li>
						<li className={styles.menu__item}>Contact us</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header;
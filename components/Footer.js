import styles from '../styles/Footer.module.scss'

function Footer() {
	return (
		<footer className={styles.footer}>
			<div className='footer__copyright'>Copyright</div>
			<div className='footer__social'>Social</div>
		</footer>
	)
}

export default Footer;
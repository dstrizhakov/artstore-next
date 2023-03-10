import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;400;700&display=swap" rel="stylesheet" />
			</Head>
			<main className={styles.main}>
				<div className={styles.main__presentation}>
					<Image
						src="/main-page-image.png"
						alt="13"
						width={700}
						height={500}
						priority
					/>
					<div className={styles.main__about}>
						<h1>Welcome to the personal web page an artist Arina Yastrebova</h1>
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Vero consequuntur nam quibusdam ex obcaecati sunt ducimus
							blanditiis? Quibusdam, nihil
							temporibus sequi omnis laborum, cupiditate reiciendis dolorem
							enim vero recusandae quam?
						</p>
						<a href='#' className={styles.main__button}>
							Go to Gallery
						</a>
					</div>
				</div>
				<div className={styles.main__favorites}>
					<h2>Favotites painting</h2>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						Vero consequuntur nam quibusdam ex obcaecati sunt ducimus
						blanditiis? Quibusdam, nihil
						temporibus sequi omnis laborum, cupiditate reiciendis dolorem
						enim vero recusandae quam?
					</p>
					<div className={styles.main__row}>
						<div className={styles.main__items}>
							<div className={styles.item}>
								<div className={styles.item__body}>
									<div className={styles.item__image}>
										<Image
											src="/item.jpg"
											alt="13"
											width={296}
											height={272}
											priority
										/>
									</div>
									<div className={styles.item__title}>
										Some painting title
									</div>
								</div>
								<div>

								</div>
							</div>
							<div className={styles.item}>
								<div className={styles.item__body}>
									<div className={styles.item__image}>
										<Image
											src="/item2.jpg"
											alt="13"
											width={296}
											height={272}
											priority
										/>
									</div>
									<div className={styles.item__title}>
										Some painting title
									</div>
								</div>
								<div>

								</div>
							</div>
							<div className={styles.item}>
								<div className={styles.item__body}>
									<div className={styles.item__image}>
										<Image
											src="/item.jpg"
											alt="13"
											width={296}
											height={272}
											priority
										/>
									</div>
									<div className={styles.item__title}>
										Some painting title
									</div>
								</div>
								<div>

								</div>
							</div>
						</div>
					</div>
				</div>


				<div className={styles.main__bottom}>
					<Image
						src="/main-bottom-image.png"
						alt="13"
						width={1000}
						height={75}
						priority
					/>
				</div>
			</main>
		</>
	)
}

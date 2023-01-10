
import Layout from '../components/Layout'
import '../styles/globals.scss'
import '../styles/normalize.scss'

export default function App({ Component, pageProps }) {
	return (
		<Layout><Component {...pageProps} /></Layout>
	)
}

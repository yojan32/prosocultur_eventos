import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

function Layaout({ children, pagina }) {
	return (
		<>
			<Head>
				<title>Prosocultur Eventos - {pagina}</title>
				<meta name="Prosocultur Eventos" content="Venta de Paquetes de Eventos Recreativos" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<div className="contenedor">{children}</div>
			<Footer />
		</>
	)
}

export default Layaout
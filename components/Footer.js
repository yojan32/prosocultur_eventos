import Image from 'next/image'
import Styles from '../styles/Footer.module.css'

function Footer() {
	return (
		<footer className={Styles.fooContenedor}>
			<div className={Styles.contenedor}>
				<h5>Organización de Salidas Pedagógicas y Eventos Empresariales</h5>
				<div className={Styles.contactFoo}>
					<div>
						<a href='mailto:contacto@prosocultur.com'>contacto@prosocultur.com</a>
						<p>(+57) 311 202 2084 - (+57) 316 835 9606</p>
					</div>
					<div>
						<a href='https://www.instagram.com/prosocultur/?hl=es-la'><Image src="/img/instagram-icon.svg" width={35} height={35} /></a>
						<a href='https://www.facebook.com/ProsoculturEventos'><Image src="/img/facebook-icon.svg" width={35} height={35} /></a>
					</div>
				</div>
				<div className={Styles.contactFoo}>
					<span>Copyright © 2022 by <a href="https://prosocultur.com/">Prosocultur</a></span>
					<Image src="/img/paymethod-icon.svg" width={210} height={60} />
				</div>
			</div>
		</footer>
	)
}

export default Footer
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Header.module.css'
import MobileMenu from './MobileMenu'

function Header() {
	const router = useRouter();
	const currentRoute = router.pathname;

	const [menu, setMenu] = useState(false)

	const handleMenuIcon = () => {
		setMenu(true)
	}
	

	return (
		<>
			{menu && 
				<MobileMenu 
					setMenu={setMenu}
				/>
			}
			<header className={styles.header}>
				<div className={styles.contenedor}>
					<Link href="/" >
						<div className={styles.logoLink}><Image src="/img/PROSOCULTUR-Logo.svg" alt="Logo Prosocultur" width={87} height={70} /></div>
					</Link>
					<nav>
						<Link href="/" >
							<a className={currentRoute === "/" ? styles.active : ""}>Inicio</a>
						</Link>
						<Link href="/empresas">
							<a className={currentRoute === "/empresas" ? styles.active : ""}>Planes Empresas</a>
						</Link>
                        <Link href="/nosotros">
							<a className={currentRoute === "/nosotros" ? styles.active : ""}>Nosotros</a>
						</Link>
					</nav>
					<div className={styles.navIcon} >
						<Image onClick={handleMenuIcon} src="/img/movil-icon.svg" alt="Icon Movil" width={50} height={45} />
					</div>
				</div>
			</header>
			
		</>
	)
}

export default Header
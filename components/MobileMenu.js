import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Header.module.css'

function MobileMenu({ setMenu }) {

    const router = useRouter();
    const currentRoute = router.pathname;

    const cerrarMenu = () => {
        setMenu(false)
    }
    return (
        <div className={styles.contMovil} >
            <div className={styles.cerrarMenu} onClick={cerrarMenu}>
                <p>Cerrar</p>
            </div>
            <div className={styles.contNav}>
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
            </div>
        </div>
    )
}

export default MobileMenu
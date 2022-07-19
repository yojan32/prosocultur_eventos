import Layaout from "../components/Layaout"
import PlanEmpresa from "../components/PlanEmpresa"
import Styles from "../styles/Planes.module.css"

function Empresas({ categorias }) {
	return (
		<Layaout pagina='Planes Empresas'>
			<main>
				<h2>Servicios Dirigidos a Empresas</h2>
				<div className={Styles.contPlanes}>
					{categorias.data.map((categoria) => (
						<PlanEmpresa key={categoria.id} categoria={categoria} />
					))}
				</div>
			</main>
		</Layaout>
	)
}

export async function getServerSideProps() {
	const url = `${process.env.API_URL}/categoria-empresas?populate=deep&sort=createdAt`
	const res = await fetch(url)
	const categorias = await res.json()
	
	return {
		props: {
			categorias
		}
	}
}

export default Empresas
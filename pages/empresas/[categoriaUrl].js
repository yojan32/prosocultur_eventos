import Styles from "../../styles/Planes.module.css"
import Layaout from "../../components/Layaout"
import CategoriaUrl from '../../components/CategoriaUrl'
import Error from "../404"

function categoriaUrl({ plan }) {
	if (!plan.data.length) {
		return (<Error />)
	}
	const categoriaPlanes = plan.data[0].attributes
	const { titulo_categoria,  } = categoriaPlanes
	const cPlanes = categoriaPlanes.planes.data

	return (
		<Layaout pagina={`${titulo_categoria}`}>
				<section>
					<h2>Planes de {`${titulo_categoria}`}</h2>
					<div className={Styles.contPlanes}>
						{cPlanes.map((pl) => (
							<CategoriaUrl key={pl.id} pl={pl} />
						))}
					</div>
				</section>
		</Layaout >
	)
}
export async function getServerSideProps({ query: { categoriaUrl } }) {

	const url = `${process.env.API_URL}/categoria-empresas?filters[url]=${categoriaUrl}&populate=deep&sort=createdAt`
	const res = await fetch(url)
	const plan = await res.json()

	return {
		props: {
			plan
		}
	}
}

export default categoriaUrl
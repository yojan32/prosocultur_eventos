import Link from 'next/link'
import Image from "next/image"
import Styles from "../styles/Planes.module.css"
import Error from "../pages/404"

function PlanEmpresa({ categoria }) {
	if (categoria.data === false) {
		return (<Error />)
	}
	const { titulo_categoria } = categoria.attributes
	const { url } = categoria.attributes.portada_categoria.data.attributes
	return (
		<Link href={`/empresas/${categoria.attributes.url}`}>
			<a className={Styles.linkPlan}>
				<div className={`${Styles.planes} ${Styles.hvrFloat}`}>
					<div className={Styles.imgPlan}>
						<Image src={url} alt={`Plan ${titulo_categoria}`} width={210} height={170} />
					</div>
					<div>
						<p>{titulo_categoria}</p>
					</div>
				</div>
			</a>
		</Link>
	)
}

export default PlanEmpresa
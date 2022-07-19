import Link from "next/link"
import Image from "next/image"
import Styles from "../styles/Planes.module.css"

function categoriaUrl({ pl }) {
	return (
		<Link href={`/empresas/planes/${pl.attributes.url}/`}>
			<a className={Styles.linkPlan}>
				<div className={`${Styles.planes} ${Styles.hvrFloat}`}>
					<div className={Styles.imgPlan}>
						<Image src={pl.attributes.portada_plan.data.attributes.url} alt={`Plan ${pl.attributes.titulo_plan}`} width={210} height={170} />
					</div>
					<div>
						<p>{pl.attributes.titulo_plan}</p>
					</div>
				</div>
			</a>
		</Link>
	)
}

export default categoriaUrl
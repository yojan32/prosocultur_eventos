import ImageGallery from 'react-image-gallery';
import Layaout from "../../../components/Layaout"
import Error from "../../404"
import Styles from "../../../styles/Planes.module.css"
import Shop from '../../../components/Shop';

function postPlanUrl({ post }) {
	if (!post.data.length) {
		return (<Error />)
	}
	const dataPost = post.data[0].attributes
	const { titulo_plan, descripcion, incluido, excluido } = dataPost
	const galeria = dataPost.galeria.data.map((gale) => (gale.attributes.url))

	const img = galeria.map(url => (
		{
			original: `${url}`,
			thumbnail: `${url}`,
			originalHeight: 490,
			thumbnailHeight: 50
		}
	))

	return (
		<Layaout pagina={`${titulo_plan}`}>
			<Shop />
			<section>
				<h2 className={Styles.tituloPost}>{titulo_plan}</h2>
				<div className={Styles.contPost}>
					<div className={Styles.contGallery}>
						<div className={Styles.contPostGallery}>
							<ImageGallery
								items={img}
								autoPlay={true}
								showPlayButton={false}
								slideDuration={950}
								slideInterval={5500}
								useBrowserFullscreen={false}
								disableThumbnailScroll={true}
							/>
						</div>
					</div>
				</div>
				<div className={Styles.contPost} >
					<div dangerouslySetInnerHTML={{ __html: descripcion }} />
					<h3>Incluido/Excluido</h3>
					<div className={Styles.listCont}>
						<div className={Styles.listIncluidos}>
							<ul>{incluido.data.map((data) => (<li><p>{data.attributes.titulo}</p></li>))}</ul>
						</div>
						<div className={Styles.listExcluidos}>
							<ul>{excluido.data.map((data) => (<li><p>{data.attributes.titulo}</p></li>))}</ul>
						</div>
					</div>
				</div>
			</section>
		</Layaout>
	)
}

export async function getServerSideProps({ query: { postPlanUrl } }) {

	const url = `${process.env.API_URL}/planes?filters[url]=${postPlanUrl}&populate=deep&sort=createdAt`
	const res = await fetch(url)
	const post = await res.json()

	return {
		props: {
			post
		}
	}
}

export default postPlanUrl
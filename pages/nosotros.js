import Layaout from "../components/Layaout"
import styles from '../styles/Nosotros.module.css'

function Nosotros() {
	return (
		<Layaout pagina='Nosotros'>
			<h1 className={styles.titulo}>Nuestra Historia</h1>
			<div className={styles.historia}>
				<p>Nuestra empresa es familiar, creada hace ya 36 años y 33 en el mercado.</p>

				<p>
					Nuestra historia comienza en el año 1984, en la ciudad de Bogotá, cuando mi mamá (Doña Luz) estaba buscando empleo e iba en camino a entregar Hojas de Vida,
					en un bus de transporte publico (conocidos coloquialmente como Buses Dietéticos), por casualidades de la vida una docente detuvo el bus donde mi madre iba,
					y subió junto con un grupo de más o menos 100 estudiantes de primaria, acompañados por 2 docentes más,
					la profesora encargada se sentó al lado de mi mamá y comenzaron a entablar conversación sobre la salida que había organizado junto con los estudiantes para ese día,
					iban para el Museo Militar para realizar la visita guiada; mi madre al ver lo encartadas que iban las Profesoras, las ayudo y acompaño hasta el Museo,
					habló con el Capitán del Museo para gestionar el ingreso de los estudiantes, y mi madre convenció al Capitán de ayudarla con ingresos a otros Museos,
					y el mismo al ver que los niños eran de tan escasos recursos, les tramito el ingreso gratuito a dos Museos más (Museo Artes y Tradiciones y Museo 20 de Julio),
					y les otorgo una zona para que los niños tomaran almuerzo en sus ollitas y les brindo gaseosa a todo el grupo.
					Al salir de los Museos, mi madre fue hasta el paradero de Buses y contrato al Sr del Bus de transporte público (el mismo que habían tomado en la mañana) y regresaron al Colegio.
				</p>

				<p>
					A raíz de que mi madre fue tan amable y colaboradora con la Profesora, la recomendó con los Profesores de los otros cursos y las otras sedes de la Escuelita y otras Escuelas,
					empezando así sacando la mayoría de las Escuelas de la Localidad de Ciudad Bolívar.
				</p>

				<p>
					Se empezó a trabajar de manera informal durante un año, al año se creó el nombre de la empresa jugando, organizando, separando y juntando palabras,
					teniendo en cuenta que el objetivo de la empresa era y es ¨Promover el turismo de manera social y cultural¨,
					por lo que se creo la PROMOTORA SOCIOCULTURAL DE TURISMO ¨PROSOCULTUR¨, al año siguiente se registro la empresa ante Cámara y Comercio, durando como persona natural 22 años.
				</p>

				<p>
					A mis 16 años empecé a estudiar Administración Turística y Hotelera en los Libertadores, al cumplir los 18 años convertimos la empresa en Sociedad (Madre e Hija),
					terminé mis estudios de Pre-Grado e hice un Post-Grado en la Universidad Externado de Colombia en Organización Integral de Eventos, realizando también seminarios,
					diplomados y cursos que nos mantengan al día en la actualidad de hoy.
				</p>

				<p>
					Al día de hoy nos sentimos orgullosas y agradecidas con nuestra empresa, que hemos forjado con demasiado esfuerzo, amor, pasión y compromiso,
					y esperamos seguir con esta bonita empresa.
				</p>

				<p>
					La experiencia de tener empresa es un mix de emociones, hemos tenido altas, bajas, logros y caídas, que han servido para levantarnos, seguir adelante,
					fortalecernos como personas y empresa, y así seguir trabajando y brindarles el mejor servicio.
				</p>
			</div>
			<h1 className={styles.titulo}>Nuestra Misión</h1>
			<div className={styles.historia}>
				<p>
					Posicionarnos como una de las más prestigiosas agencias de viajes a nivel nacional, ofreciendo la mejor calidad de servicio, hacia nuestro público objetivo Colegios y Empresas,
					y así caracterizarnos por ser una organización comprometida con la calidad y compromiso de nuestros servicios ofrecidos.
				</p>
			</div>
		</Layaout>
	)
}

export default Nosotros
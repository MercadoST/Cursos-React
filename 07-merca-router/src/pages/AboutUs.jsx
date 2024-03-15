import { Link } from "../components/Link";

const i18n = {
  es: {
    title: 'Sobre nosotros',
    description: '¡Hola! Me llamo Santiago Mercado y estoy creando un clon de React Router.',
    button: 'Ir a la home'
  },
  en: {
    title: 'About us',
    description: '¡Hi! My name is Santiago Mercado and I am creating a clone of React Router.',
    button: 'Go to home'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}


export default function AboutPage({routeParams}) {

  const i18n = useI18n(routeParams.lang ?? 'es')
  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img className='img-perfil' src="https://scontent.faep22-1.fna.fbcdn.net/v/t1.6435-9/158825771_4057638717629892_712162697323018364_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFNZZXQmIUPop-Zaqj4PoVZOW7t9jl7keA5bu32OXuR4AKNT9clUGtxr-KRzU4B5GCPXrX40mayC_lOl8i59gEx&_nc_ohc=LtFYDf7iHd8AX-MBicP&_nc_oc=AQm60QX9K1GqDEctHPhfcMXZy1mQZG_htZBE_hSspGGEVRS5wAjNjrtB2ownHYstwww&_nc_ht=scontent.faep22-1.fna&oh=00_AfD23klLAw89tt-oHwvkuN3TFMxLbIJVhmkckK3Wqu1KNw&oe=66184A1B" alt="Santiago Mercado" />
        <p>{i18n.description}</p>
      </div>
      <Link to={'/'} >Ir a Home</Link>
    </>
  )
}
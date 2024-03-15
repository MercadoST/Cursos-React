import { Link } from "../components/Link";

export default function HomePage() {
  return (
    <>
      <h1>Merca Router Demo </h1>
      <p>Esta es una pagina de ejemplo de un clon de React router</p>
      <Link to={'/about'} >Ir a sobre nosotros</Link>
    </>
  )
}
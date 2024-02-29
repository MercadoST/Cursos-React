import './Footer.css'
import { IS_DEVELOPMENT } from '../config.js'
import { useFilters } from '../hooks/useFilters.js'
import { useCart } from '../hooks/useCart.js'

export function Footer() {
  const { filters } = useFilters()
  const { cart } = useCart()

  const filtersJson = JSON.stringify(filters, null, 2)
  const cartJson = JSON.stringify(cart, null ,2)
  return (
    <footer className="footer">
      { IS_DEVELOPMENT
        ? <h5>{cartJson}</h5>
        : <>
          <h4>Prueba tecnica de React - <span>@MercadoST</span></h4>
          <h5>Shoping Cart</h5>
        </>
      }
    </footer>
  )
}
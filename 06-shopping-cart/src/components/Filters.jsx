import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'

import './Filters.css'

export function Filters() {
  const { filters, setFilters } = useFilters()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters(prevSate => ({
      ...prevSate,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevSate => ({
      ...prevSate,
      category: event.target.value
    }))
  }
  
  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${ filters.minPrice }</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select name="" id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Portatiles</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  )
}
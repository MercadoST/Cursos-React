import { useEffect, useState } from 'react'


export function MouseFollower() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {

    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }

  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(100, 108, 255, 0.5)',
        boxShadow: '0 0 1em rgba(100, 108, 255, 1)',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -22,
        top: -18,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`,
        display: enabled ? '':'none'
      }}></div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  )
}
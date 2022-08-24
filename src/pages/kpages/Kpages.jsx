import React, { useEffect, useState } from 'react'
import Search from 'components/search/Search'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import ContenedorKpages from 'components/contenedores/ContenedorKpages'
import Footer from 'components/footer/Footer'
import { getAllKpage } from 'features/actions/libros'

const mensaje1 =
  'Los libros son espejos: sólo se ve en ellos lo que uno ya lleva dentro...'
const mensaje2 =
  'Pocas son las ocasiones en que la vida permite a uno pasearse por sus propios sueños y acariciar un recuerdo perdido con las manos...'

export default function Kpages() {
  const {
    kpages: { count },
  } = useSelector(({ librosStore }) => librosStore)
  const location = useLocation()
  const [mensaje, setMensaje] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    if (window.scrollY) {
      window.scroll(0, 0) // Restablece la posición de desplazamiento en la parte superior izquierda del documento
    }

    location.pathname === '/views'
      ? dispatch(getAllKpage('formatos=[2,3]'))
      : dispatch(getAllKpage('formatos=[1]'))
    location.pathname === '/views' ? setMensaje(mensaje1) : setMensaje(mensaje2)
  }, [dispatch, location.pathname])

  return (
    <div className=" 2xl:container 2xl:mx-auto">
      <p className=" w-10/12 mx-auto md:w-full font-style: italic   lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800">
        {mensaje}
      </p>
      <p className=" w-10/12 mx-auto md:w-full  font-semibold lg:text-2xl text-1xl lg:leading-7 md:leading-5 leading-3 text-center text-gray-800">
        Hay {count} libros.
      </p>

      <Search />
      <ContenedorKpages />
      <Footer />
    </div>
  )
}

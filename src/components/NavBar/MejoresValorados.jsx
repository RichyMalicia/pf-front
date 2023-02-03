import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getAll as print } from 'features/actions/review'

const MasVendidos = () => {
  const { reviews } = useSelector(({ reviewsStore }) => reviewsStore)
  const { totalLibros } = useSelector(({ librosStore }) => librosStore)
  let libros = []
  
  reviews.forEach((e) => {
    if (e.rating > 2) {
      //3 estrellas o mas
      let index = libros.findIndex((l) => l[0] === e.LibroId)
      console.log('ID', e.LibroId)
      index === -1
        ? libros.push([e.LibroId, e.rating]) //agregando el id y el rating si no esta
        : (libros[index][1] += e.rating) //sumando estrellas si ya esta
    }
  })

  libros.sort((a, b) => b[1] - a[1])
  let cantidadParaMostrar = 16
  const data = libros
    .slice(0, cantidadParaMostrar)
    .map((e) => totalLibros.find((p) => p.id === e[0]))
  console.log('DATA', data)

  return (
    <div className=" 2xl:container 2xl:mx-auto">
      <div className=" text-center lg:py-10 md:py-8 py-6">
        <p className=" w-10/12 mx-auto md:w-full  font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800">
          Lo mas comentado por nuestros usuarios
        </p>
      </div>
      <div className=" py-6 lg:px-20 md:px-6 px-4">
        <hr className=" w-full bg-gray-200 my-6" />

        <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
          {data &&
            data.map((e) => (
              <div key={crypto.randomUUID()} className=" relative ">
                <div className=" relative group">
                  <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                  <img
                    className=" w-full"
                    src={e.portada}
                    alt="A girl Posing Img"
                  />
                  <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                    <Link
                      className=" block flex-col justify-between"
                      to={`/detalle/${e.id}`}
                    >
                      <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
                        Ver Detalles
                      </button>
                    </Link>
                  </div>
                </div>
                <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">
                  {e.autor}
                </p>
                <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">
                  {e.titulo}
                </p>
                {/* <p className=" font-normal text-base leading-4 text-gray-600 mt-4">2 colours</p> */}
              </div>
            ))}
        </div>

      </div>
    </div>
  )
}

export default MasVendidos

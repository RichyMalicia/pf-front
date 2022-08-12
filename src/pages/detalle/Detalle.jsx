import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getById } from '../../features/actions/libros'
import Button from '../../components/templates/Button'
import ReviewCard from '../../components/review/Review.jsx'

export default function Detalle() {
  const history = useNavigate()
  const dispatch = useDispatch()
  const { id } = useParams()
  const { libro } = useSelector(({ librosStore }) => librosStore)
  const [showModal, setShowModal] = React.useState(false);

  useEffect(() => {
    dispatch(getById(id))
  }, [id, dispatch])

  function handleBuy(e) {
    e.preventDefault()
    console.log(e)
  }
  function handleAdd(e) {
    e.preventDefault()
    console.log(e)
  }
  function handleAddRv(e) {
    e.preventDefault()
    console.log(e)
  }

  return (
    <>
      <div className="relative max-w-screen-2xl px-4 py-8 mx-auto">
        {/*<Link to="/home">
          <button
            className="text-pink-500 border border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Volver
          </button>
        </Link>*/}
        <div>
          <h1 className="text-3xl font-bold lg:text-5xl font-poiret-one">
            {libro.titulo}
          </h1>
          <p className="mt-1 text-sm text-gray-500 ">{libro.autor}</p>
        </div>
        <div className="grid gap-8 lg:items-start lg:grid-cols-4">
          <div className="lg:col-span-3">
            <div className="relative mt-4">
              <img
                alt=""
                src={libro.portada}
                className="w-full rounded-xl h-72 lg:h-[540px] object-contain"
              />
              {/*Hover to zoom?*/}
            </div>
            {/*extra imgs?*/}
          </div>
          <div className="lg:top-0 lg:sticky">
            <form className="space-y-4 lg:pt-8">
              {/* <fieldset>
                <legend className="text-lg font-bold">Color</legend>
                <div className="flex mt-2 space-x-1">
                  <label htmlFor="color_green" className="cursor-pointer">
                    <input
                      type="radio"
                      id="color_green"
                      name="color"
                      className="sr-only peer"
                      defaultChecked=""
                    />
                    <span className="block w-6 h-6 bg-green-700 border border-gray-200 rounded-full ring-1 ring-offset-1 ring-transparent peer-checked:ring-gray-300" />
                  </label>
                  <label htmlFor="color_blue" className="cursor-pointer">
                    <input
                      type="radio"
                      id="color_blue"
                      name="color"
                      className="sr-only peer"
                    />
                    <span className="block w-6 h-6 bg-blue-700 border border-gray-200 rounded-full ring-1 ring-offset-1 ring-transparent peer-checked:ring-gray-300" />
                  </label>
                  <label htmlFor="color_pink" className="cursor-pointer">
                    <input
                      type="radio"
                      id="color_pink"
                      name="color"
                      className="sr-only peer"
                    />
                    <span className="block w-6 h-6 bg-pink-700 border border-gray-200 rounded-full ring-1 ring-offset-1 ring-transparent peer-checked:ring-gray-300" />
                  </label>
                  <label htmlFor="color_red" className="cursor-pointer">
                    <input
                      type="radio"
                      id="color_red"
                      name="color"
                      className="sr-only peer"
                    />
                    <span className="block w-6 h-6 bg-red-700 border border-gray-200 rounded-full ring-1 ring-offset-1 ring-transparent peer-checked:ring-gray-300" />
                  </label>
                  <label htmlFor="color_indigo" className="cursor-pointer">
                    <input
                      type="radio"
                      id="color_indigo"
                      name="color"
                      className="sr-only peer"
                    />
                    <span className="block w-6 h-6 bg-indigo-700 border border-gray-200 rounded-full ring-1 ring-offset-1 ring-transparent peer-checked:ring-gray-300" />
                  </label>
                </div>
              </fieldset> */}
              <fieldset>
                <legend className="text-lg font-bold">Tipo</legend>
                <div className="flex mt-2 space-x-1">
                  <label htmlFor="tipo_ebook" className="cursor-pointer">
                    <input
                      type="radio"
                      id="tipo_ebook"
                      name="tipo"
                      className="sr-only peer"
                      defaultChecked=""
                    />
                    <span className="block px-3 py-1 text-xs border border-gray-200 rounded-full peer-checked:bg-gray-100">
                      eBook
                    </span>
                  </label>
                  <label htmlFor="tipo_fisico" className="cursor-pointer">
                    <input
                      type="radio"
                      id="tipo_fisico"
                      name="tipo"
                      className="sr-only peer"
                      defaultChecked=""
                    />
                    <span className="block px-3 py-1 text-xs border border-gray-200 rounded-full peer-checked:bg-gray-100">
                      Físico
                    </span>
                  </label>
                </div>
              </fieldset>
              <div className="p-4 bg-gray-100 border rounded">
                <p className="text-sm">
                  <span className="block">Texto para posibles descuentos?</span>
                  <a href="?" className="inline-block mt-1 underline">
                    Find out more
                  </a>
                </p>
              </div>
              <div>
                <p className="text-xl  font-bold">${libro.precio}</p>
              </div>
              <Button>Comprar</Button>
              <Button secondary>Agregar a favoritos</Button>
            </form>
          </div>
          <div className="lg:col-span-3">
            <div className="prose max-w-none ">
              <div className="m-2 p-8 mx-auto max-w-screen-2xl sm:px-6 lg:px-8 shadow-2xl rounded-2xl bg-orange-50">
                <h2 className="text-3xl font-poiret-one font-bold ">Resumen:</h2>
                <p className='text-justify mr-2 ml-2'>{libro.resumen}</p>
                <br />
                <h3 className="text-2xl font-poiret-one font-bold ">Categorias</h3>
                <ul>
                  <li className='mr-2 ml-2'> - categorias asignadas</li>
                </ul>
              </div>
              <div className="m-2 p-8 mx-auto max-w-screen-2xl sm:px-6 lg:px-8 shadow-2xl rounded-2xl bg-orange-50">
                <div className="items-end justify-between sm:flex">
                  <div className="max-w-xl">
                    <h2 className="text-3xl font-bold font-poiret-one tracking-tight sm:text-3xl">
                      Reseñas
                    </h2>
                    <p className="max-w-lg">
                      Ve lo que otros lectores tiene que decir
                    </p>
                  </div>
                  <button
                    className="inline-flex items-center flex-shrink-0 px-5 py-3 m-1 font-medium text-pink-600 border border-pink-600 rounded-full sm:mt-0 lg:mt-8 hover:bg-pink-600 hover:text-white"
                    onClick={() => setShowModal(true)}
                  >
                    Escriba una review
                  </button>
                  {showModal ? (
                    <>
                      <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                      >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                          {/*content*/}
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                              <h3 className="text-3xl font-semibold">
                                Modal Title
                              </h3>
                              <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                              >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                  ×
                                </span>
                              </button>
                            </div>
                            {/*body*/}
                            <div className="relative m-5 p-1 flex-auto items-center border-4 rounded-2xl">
                              <input className="text-slate-800 text-lg leading-relaxed outline-none"
                              placeholder='Escriba su review'
                              >
                              </input>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                              <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                              >
                                Close
                              </button>
                              <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                              >
                                Save Changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                  ) : null}
                  <a
                    className="inline-flex items-center flex-shrink-0 px-5 py-3 m-1 font-medium text-pink-600 border border-pink-600 rounded-full sm:mt-0 lg:mt-8 hover:bg-pink-600 hover:text-white"
                    href="?"
                  >
                    Lea todas las reviews
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
                <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
                  <ReviewCard title={'Waiting for more'} author={'Martin McFly'} score={5} />
                  <ReviewCard title={'Espectacular'} author={'Anonimo'} score={5} />
                  <ReviewCard title={'Pipí Cucú'} author={'Alberto Olmedo'} score={5} />
                  <ReviewCard title={'Brígido'} author={'Dylantero'} score={5} />
                  <ReviewCard title={'Amazing read'} author={'Jhonny Test'} score={4} />
                  <ReviewCard title={'Great book'} author={'Eddie Murphy'} score={3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

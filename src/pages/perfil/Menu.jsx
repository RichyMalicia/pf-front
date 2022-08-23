import Button from 'components/templates/Button'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useParams } from 'react-router-dom'
import Logout from '../../components/sesion/Logout'
import { getByNickname } from 'features/actions/usuarios'
import { useAuth0 } from '@auth0/auth0-react'

import Audio from 'components/audio/Audio'
import { getById, getByUser } from 'features/actions/pedidos'
import Barra from './Barra'


export default function Menu() {
  const dispatch = useDispatch()
  const { user } = useAuth0()
  const { usuario } = useSelector(({ usuariosStore }) => usuariosStore)
  console.log(usuario.id)

  const [Speak, setSpeak] = useState(false)
  const [tags, setTags] = useState(document.getElementsByName('DIV'))
  const synth = window.speechSynthesis;

  function speech(Speak) {

    tags.forEach((tag) => {
      tag.addEventListener('click', (e) => {

        var voices = synth.getVoices();
        let msg = '';
        e.target.innerText ? msg = e.target.innerText : msg = e.target.placeholder

        var utterThis = new SpeechSynthesisUtterance(msg);
        utterThis.voice = voices[1];
        utterThis.pitch = 1;
        utterThis.rate = 1;

        if (synth.speaking) {
          synth.cancel();
          setTimeout(() => { localStorage.audio === 'on' && synth.speak(utterThis); }, 250);
        }
        else {
          synth.speak(utterThis);
        }

      });
    });

  }

  function hi(n) {
    var voices = synth.getVoices();
    var utterThis = new SpeechSynthesisUtterance('perfil actual\n' + n);
    utterThis.voice = voices[1];
    utterThis.pitch = 1;
    utterThis.rate = 1;
    if (synth.speaking) {
      synth.cancel();
      setTimeout(() => { (localStorage.audio === 'on') && synth.speak(utterThis); }, 250);
    }
    else {
      synth.speak(utterThis);
    }
  }
  useEffect(() => {
    localStorage.audio === 'on' && speech(Speak)
    dispatch(getByNickname(user))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getByNickname, user])
  useEffect(() => {
    if (usuario) {
      dispatch(getByUser(usuario.id))
    }
  }, [usuario])
  return (
    <section>
      <div>
        <div>
          <Barra />
        </div>
        <div>
          <Outlet />         
        </div>
      </div>
    </section>
  )
}

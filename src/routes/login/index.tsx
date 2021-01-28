import  { useState } from 'react'
import Input from '../../components/Input'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import Information from './Information'
import family from '../../images/family.svg'
import logoCompany from '../../images/logoCompany.svg'

const Login = () => {
  const { register, handleSubmit, errors, setError, clearErrors } = useForm()
  const history = useHistory()
  const [politicData, setPoliticData] = useState<Boolean>(false)
  const [politicComercial, setPoliticComercial] = useState<Boolean>(false)

  const  onSubmit  = ({ documentNumber }) => {
    if(politicComercial && politicData) {
      history.push({
        pathname: '/process',
        state: { documentNumber }
      })
    } else {
      setError('politics',{
        type: 'manual',
        message: 'Se debe aceptar las condiciones'
      })
    }
  }


  return(
    <div className='login'>
      <div className='login__info'>
          <div className='login__info__rimac'>
            <img src={logoCompany} alt='Rimac logo'/>
          </div>
          <Information />
        <img src={family} className='login__info__family' alt='Family logo'/>
      </div>
      <div className='login__form'>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p className='login__form__title'>Obtén tu <span className='login__form__title--red'>seguro ahora</span></p>
          <span>Ingres los datos para comenzar</span>
        </div>
        <div className='login__form__document'>
          <select className='login__form__document__select'>
            <option>DNI</option>
          </select >
          <input
            name='documentNumber'
            placeholder='Nro. de documento'
            className='login__form__document__input'
            ref={register({
              required: 'El campo Nro. documento es requerido.'
            })}
          />
        </div>
        {errors?.documentNumber? <span className='message-warning'>{errors.documentNumber?.message}</span> : null}
        <div className='login__form__birthdate'>
          <input
            placeholder="  Fecha de nacimiento"
            name='date'
            type="text"
            onBlur={
              (e) => {
                e.currentTarget.type = 'date';
              }
            }
            onFocus={
              (e) => {
                e.currentTarget.type = 'date';
                e.currentTarget.focus()
              }
            }
            className='login__form__birthdate__date'
          />
        </div>
      <div>
          <Input 
            name='phone'
            label='Celular'
          />
        </div>
        <div className='login__form__terms'>
          {errors?.politics ? <span className='message-warning'>{errors.politics?.message}</span> : null}
            <div className='terms__item'>
              <div className="custom-checkbox">
                <input
                  type='checkbox'
                  id='checkbox1'
                  className='content-terms__input'
                  onChange={() => {
                    setPoliticData(!politicData)
                    clearErrors()
                  }}
                />
                <label htmlFor="checkbox1" className="content-terms__input">
                  <div>
                    <p className='terms'>
                      Acepto la <span className='checkbox__label'>Politica de proteccion de datos <br /> Personales y los Terminos y Condiciones</span>
                    </p>
                  </div>
                </label>
              </div>
            </div>
          <div className='terms__item'>
              <div className="custom-checkbox">
                <input
                  type='checkbox'
                  id="checkbox2"
                  className='content-terms__input'
                  onChange={() => {
                    setPoliticComercial(!politicComercial)
                    clearErrors()
                  }}
                  />
                <label htmlFor="checkbox2" className="content-terms__input">
                  <div className='terms'>
                    <p>Acepto la politica de envio de <br /> <span className='checkbox__label'>Comunicaciones Comerciales </span></p>
                  </div>
                </label>
              </div>
          </div>
        </div>
        <div className='content-button'>
          <button className='content-button__button' type="submit">
              COMENCEMOS
          </button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Login

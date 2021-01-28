import React, { useState} from 'react'
import Input from '../../../components/Input'
import { useForm } from 'react-hook-form';
import DataFamily from '../DataFamily'

interface Prop {
  nextStep: () => void
}

const FirstStep: React.FC<Prop> = ({ nextStep }) => {
  const [, setGender] = useState('M')
  const [, setFamilyWrapper] = useState('M')
  const { register, handleSubmit, errors } = useForm()
  const [onlySecurity, setOnlySecurity] = useState('')

  const onChangeGender = (e: any) => {
    setGender(e.target.value)
  }

  const onChangeOnlySecurity = (e: any) => {
    setOnlySecurity(e.target.value)
  }

  const onSubmit = (data: any) => {
    nextStep()
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='register'>
          <div className='register__item'>
            <div className='register__item__document'>
              <select className='register__item__document__select'>
                <option>DNI</option>
              </select >
              <input
                name='numberDocument'
                ref={register({
                  required: 'El campo Nro. documento es requerido.'
                })}
                placeholder='Nro. de documento'
                className='register__item__document__input'
              />
            </div>
            {errors?.numberDocument ? <span className='message-warning'>{errors.numberDocument?.message}</span> : null}
          </div>
          <div className='register__item'>
            <Input
              name='names'
              label='Nombres'
              register={register({
                required: 'El campo nombres es requerido',
                pattern: {
                  value: /[a-zA-Z\s]+$/,
                  message: 'Caracteres invalidos'
                }
              })}
            />
            {errors?.names ? <span className='message-warning'>{errors.names?.message}</span> : null}
          </div>
          <div className='register__item'>
            <Input
              name='firtLastname'
              label='Apellido paterno'
              register={register({
                required: 'El campo apellido paterno es requerido',
                pattern: {
                  value: /[a-zA-Z\s]+$/,
                  message: 'Caracteres invalidos'
                }
              })}
            />
            {errors?.names ? <span className='message-warning'>{errors.names?.message}</span> : null}
          </div>
          <div className='register__item'>
            <Input
              name='secondLastName'
              label='Apellido materno'
              register={register({
                required: 'El campo apellido materno es requerido',
                pattern: {
                  value: /[a-zA-Z\s]+$/,
                  message: 'Caracteres invalidos'
                }
              })}
            />
            {errors?.secondLastName? <span className='message-warning'>{errors.secondLastName?.message}</span> : null}
          </div>
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
        </div>
        <div className='register'>
          <p>Genero</p>
          <div>
            <div onChange={onChangeGender} className='flex-direction-column'>
              <div>
                <input type='radio' value='M' name='gender' id='m' /> 
                <label htmlFor='m'>Masculino</label>
              </div>
              <div>
                <input type='radio' value='F' name='gender' id='f'/>
                <label htmlFor='f'>Femenino</label>
              </div>
            </div>
          </div>
          <p>¿A quien vamos a asegurar</p>
          <div>
            <div onChange={onChangeOnlySecurity} className='flex-direction-column'>
              <div>
                <input type='radio' value='only' name='cantPeople' id='only' />
                <label htmlFor='only'>Solo a mi</label> 
             </div>
              <div>
                <input type='radio' value='much' name='cantPeople' id='much'/>
                <label htmlFor='much' >A mi y a mi familia</label>
              </div>
            </div>
          </div>
          <div>
            {
              onlySecurity === 'much' && <DataFamily setFamilyWrapper={setFamilyWrapper}/>
            }
          </div>
          <div className='process-content__button'>
            <button className={`content-button__button--active`} type='submit'>
              CONTINUAR
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default FirstStep

import React, { useState, useEffect } from 'react'
import Input from '../../../components/Input'
import { useForm } from 'react-hook-form';
import DataFamily, { Family } from '../DataFamily'

interface Person {
  id: number
  numberDocument: string 
  name: string
  firstLastName: string
  secondLastName: string
  birthday: string
  gender: string
}

interface Prop {
  nextStep: () => void
  person: Person
  submitFirstStep: (e: Array<Family>) => any
}

const FirstStep: React.FC<Prop> = ({ nextStep , person, submitFirstStep}) => {
  const [, setGender] = useState('M')
  const [family, setFamilyWrapper] = useState<Array<Family>>([])
  const { register, handleSubmit, errors, setValue, setError, clearErrors } = useForm()
  const [onlySecurity, setOnlySecurity] = useState('')


  useEffect(() => {
    const setValuesForm = () => {
      for(let k in person) {
        setValue(k, person[k])
      }
    }
    setValuesForm()
  }, [person, setValue])

  const onChangeGender = (e: any) => {
    setGender(e.target.value)
  }

  const onChangeOnlySecurity = (e: any) => {
    clearErrors()
    setOnlySecurity(e.target.value)
  }

  const onSubmit = (data: any) => {
    if(onlySecurity) {
      nextStep()
      submitFirstStep(family)
    } else {
      setError('onlySecurity', {
        type: 'manual',
        message: 'Se requiere este campo'
      })
    }
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
              name='name'
              label='Nombres'
              register={register({
                required: 'El campo nombres es requerido',
                pattern: {
                  value: /[a-zA-Z\s]+$/,
                  message: 'Caracteres invalidos'
                }
              })}
            />
            {errors?.name ? <span className='message-warning'>{errors.name?.message}</span> : null}
          </div>
          <div className='register__item'>
            <Input
              name='firstLastName'
              label='Apellido paterno'
              register={register({
                required: 'El campo apellido paterno es requerido',
                pattern: {
                  value: /[a-zA-Z\s]+$/,
                  message: 'Caracteres invalidos'
                }
              })}
            />
            {errors?.firstLastName ? <span className='message-warning'>{errors.firstLastName?.message}</span> : null}
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
            ref={register}
            name='birthday'
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
                <input type='radio' value='M' name='gender' id='m'  defaultChecked/> 
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
            {errors?.onlySecurity ? <span className='message-warning'>{errors.onlySecurity?.message}</span> : null}
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

import React, { useState, useEffect } from 'react'
import Input from '../../../components/Input'
import { useForm } from 'react-hook-form';
// import { Post } from '../../../utils'
import DataFamily from '../DataFamily'

interface Prop {
  nextStep: () => void
}

const FirstStep: React.FC<Prop> = ({ nextStep }) => {
  const { register, handleSubmit, errors } = useForm()
  const [onlySecurity, setOnlySecurity] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      /*
      const { result = {} } = await Post(`/contact/update`, {}, {
        'Content-type': 'application/json'
      })
      setData(result)
      */
    }
    fetchData()
  }, [])

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
          <div className='form__document--item'>
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
        </div>
        <div className='register'>
          <p>¿A quien vamos a asegurar</p>
          <div>
            <div onChange={onChangeOnlySecurity} className='flex-direction-column'>
              <div className='align-items-center'>
                <input type='radio' value='only' name='cantPeople' id='only' />
                <label htmlFor='only'>Solo a mi</label> 
             </div>
              <div className='align-items-center'>
                <input type='radio' value='much' name='cantPeople' id='much'/>
                <label htmlFor='much' >A mi y a mi familia</label>
              </div>
            </div>
          </div>
          <div>
            {
              onlySecurity === 'much' && <DataFamily setFamilyWrapper={() => {}}/>
            }
          </div>
          <div className='process-content__button'>
            {
              // hace falta que cambie la apareiencia del boton
            }
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

import { useState } from 'react'

interface Family {
  id: number
  typeFamily: string
  birthdate: string 
}


interface props {
  setFamilyWrapper: (e: any) => void
}

const DataFamily = (props: props) => {
  const { setFamilyWrapper } = props
  const [family,setFamily] = useState<Array<Family>>([])
  const [typeFamily,setTypeFamily] = useState('Conyuge')
  const [birthdate,setBirthdate] = useState('')

  const addFamily = () => {
    const currentFamily = [...family]
    
    currentFamily.push(
      {
        id: family.length,
        typeFamily,
        birthdate
      }
    )
    setFamily(currentFamily)
    setFamilyWrapper(currentFamily)
  }

  const deleteFamily = (id: number) => {
    const newFamily = family.filter( e => e.id !== id) 

    setFamily(newFamily)
  }

  const handleSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value

    setTypeFamily(String(value))
  }

  const handleSelectBirth = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value

    setBirthdate(String(value))
  }

  return (
    <div>
      <div className='layout-data-family'>
        <div>
          <select className='select-family' onChange={handleSelect}>
            <option value={'Conyuge'}>Conyuge</option>
            <option value={'Hijo'}>Hijo</option>
          </select>
        </div>
        <div>
        <div className='login__form__birthdate'>
          <input
            placeholder="  Fecha de nacimiento"
            name='date'
            onChange={handleSelectBirth}
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
        <div className='content-add-family' onClick={() => addFamily()}>
          <p className='add-family__text'>AGREGAR</p>
        </div>
      </div>
        {
          family.map(e => (
            <div className='layout-data-family' key={e.id}>
              <div className='layout-data-family-item'>
                <span>{e.typeFamily}</span>
              </div>
              <div className='layout-data-family-item'>
                <span>{e.birthdate}</span>
              </div>
              <div onClick={() => deleteFamily(e.id)}>
                <p className='delete-family__text'>ELIMINAR</p>
              </div>
            </div>
          )
          )
        }
    </div>
  )
}

export default DataFamily

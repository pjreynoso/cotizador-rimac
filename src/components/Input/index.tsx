import React, { ChangeEvent, useState } from 'react'

interface Props {
  label: string
  name: string
  register?: any
  onHandlerChange?: (e: ChangeEvent) => void
}

const Input: React.FC<Props> = ({name, label, onHandlerChange, register }) => {
  const [value, setValue] = useState<any>('')
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    let { target: { value }} = event
    if(typeof onHandlerChange=== 'function')
      onHandlerChange(value as any)
      setValue(value)
  }

  return (
    <div className="wrapper">
      {
        value ? 
          <p className='label'>{label}</p>
        : 
          null
      }
      <input
        name={name}
        onChange={handleChange}
        ref={register}
        className='wrapper__input'
        placeholder={label}
      />
    </div>
    )
}

export default Input
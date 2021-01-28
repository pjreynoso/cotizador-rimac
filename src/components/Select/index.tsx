
import React, { ChangeEvent } from 'react'

interface Props {
  handleChange?: (e: ChangeEvent) => void
}

const Input: React.FC<Props> = ({ handleChange }) => {

  return (
      <select className='wrapper__select'>
        <option>DNI</option>
      </select>
  )
}

export default Input
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Family } from '../DataFamily'
import iconArrowBottom from '../../../images/bottom.svg'
import exclusion from '../../../images/exclusion.svg'
import correct from '../../../images/correct.png'
import Table from '../Table'

interface Props {
  family: Array<Family>
  prevStep: () => void
}

const SecondStep: React.FC<Props> = ({ family }) => {
  const history = useHistory()
  const [cardActive, setCardActive] = useState(1)
  const [showTableFamily , setShowTableFamily] = useState<boolean>(false)
  const [myFamily, setMyFamily] = useState<Array<Family>>([])
  const plan = [
    {
      id: 1,
      mount: 160,
      type: 'BASICO',
      detail: {
        coverage: '1MM',
        zone: true,
        locals: true,
        medicDelivery: false,
        checked: false,
        refundNacionality: false,
        refundInternational: false
      }
    },
    {
      id: 2,
      mount: 200,
      type: 'AVANZADO'
    },
    {
      id: 3,
      mount: 250,
      type: 'PREMIUN'
    },
    {
      id: 4,
      mount: 500,
      type: 'FULL'
    }
  ]

  useEffect(() => {
    family.length > 0 && setMyFamily(family)
  }, [family])

  const cardSelect = (id: number) => {
    setCardActive(id)
  }

  const Plans = () => (
    <>
      {
        plan.map((e) => (
          <div className={`card-${e.id === cardActive ? 'active' : 'disable'}`} key={e.id} onClick={() => cardSelect(e.id)}>
            <div style={{ height: 20, display: 'flex', justifyContent: 'flex-end' }}>
              {
                e.id === cardActive ?
                  <img src={correct} width='20px' alt='Card'/>
                  :
                  null
              }
            </div>
            <p className='card__title'>{e.type}</p>
            <div style={{ display: 'flex' }}>
              <span className='card__content__mount'>S/</span><span className='card__mount'>{e.mount}</span>
            </div>
            <p className='card__recurrent'>mensual</p>
          </div>
        ))
      }
    </>
 )

 const TableFamily = () => {
   let sumTotal = 0
   myFamily.forEach(element => { 
    const sum = element.typeFamily === 'Conyuge' ? 40 : 60 

    return sumTotal + sum
   });

    return(
      <div>
        <div className='family'>
        {
          myFamily.map( (fam) => (
            <div className='rowFamily' key={fam.id}>
              <span>{fam.typeFamily}</span>
              <span>{`S/ ${fam.typeFamily === 'Conyuge' ? '40': '60'}`}</span> 
            </div>
          ))
        }
        </div>
        <div className='rowFamily'>
          <span>PAGO TOTAL MENSUAL</span>
          <span>S./ 160</span>
        </div>
      </div>
    )
 }

  return (
    <div className='content__plans'>
      <div style={{ display: 'flex', marginBottom: 20, overflowY: 'scroll'}}>
        <Plans />
      </div>
      <div className='content__plans__tableFamily' >
        <div className='content__plans__tableFamily__header' onClick={() => setShowTableFamily(!showTableFamily)} >
          <span>{`Tienes(${myFamily.length}) asegurados`}</span>
          <span>RESUMEN DEL PLAN</span>
        </div>
        {
          showTableFamily ? 
            <TableFamily />
          : 
            ''
        }
      </div>
      <Table cardId={cardActive}/>
      <div style={{marginTop: 35}}>
        <p className='process__review'>Revisa nuestros</p>
        <div className='process__options-exclusion'>
          <p className='process__services'>servicios y exclusiones</p>
          <img src={exclusion} className='image-exclusion' alt='Review'/>
        </div>
        <div className='process__options'>
          <p className='process__services-all'>Servicios brindados</p>
          <img src={iconArrowBottom} alt='Options'/>
        </div>
        <div className='process__options'>
          <p className='process__services-all'>Exclusiones</p>
          <img src={iconArrowBottom} alt='Service'/>
        </div>
      </div>
      <div style={{ marginTop: 35}}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <p className='send-email'>ENVIAR COTIZACION POR CORREO</p>
          <button className='content-button__button' onClick={ () => history.push('/thanks') }>
            COMPRAR PLAN
          </button>
        </div>
      </div>
    </div>
  )
}

export default SecondStep

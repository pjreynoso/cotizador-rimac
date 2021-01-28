import IconPlan from '../../images/Illustration.png'
import IconHeart from '../../images/heart.svg'
import IconHeartDisable from '../../images/heart-disable.svg'

const Table = (props:any) => {
  const { cardId } = props
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
      type: 'AVANZADO',
      detail: {
        coverage: '5MM',
        zone: true,
        locals: true,
        medicDelivery: true,
        checked: true,
        refundNacionality: false,
        refundInternational: false
      }
    },
    {
      id: 3,
      mount: 600,
      type: 'PREMIUN',
      detail: {
        coverage: '6MM',
        zone: true,
        locals: true,
        medicDelivery: true,
        checked: true,
        refundNacionality: true,
        refundInternational: false
      }
    },
    {
      id: 4,
      mount: 500,
      type: 'FULL',
      detail: {
        coverage: '8MM',
        zone: true,
        locals: true,
        medicDelivery: true,
        checked: true,
        refundNacionality: true,
        refundInternational: true
      }
    }
  ]
  const planSelected = plan.find( e => e.id === cardId)

  return (
    <div className='table'>
      <div className='table__header'>
        <span>Cuentas con estos beneficios: </span>
      </div>
      <div className='table__information'>
        <div className='table__information--main'>
          <div style={{ width: '70%'}}>
            <span className='information__main--title'>
              Cobertura maxima
              </span>
            <p className='information__main--mount'>{`S/ ${planSelected?.detail?.coverage}`}</p>
            <div className='information__main--recurrent'>
              {`PLAN ${planSelected?.type} `}
              </div>
          </div>
          <div className='information__table--image'>
            <img src={IconPlan} width='100px' height='100px'/>
          </div>
        </div>
        <div className='table__information--description'>
          <div style={{ display: 'flex', alignItems: 'center'}}>
            <img src={planSelected?.detail.zone ? IconHeart : IconHeartDisable} height='20px' style={{marginRight: 10}}/>
            <p className={`information__description--${planSelected?.detail.zone ? 'active' : 'disable'}`}>Lima <span className='information__description--message'>(zona de cobertura)</span></p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center'}}>
            <img src={ planSelected?.detail.locals? IconHeart : IconHeart} height='20px' style={{marginRight: 10}}/>
            <p className={`information__description--${planSelected?.detail.locals ? 'active' : 'disable'}`}>+30 clinicas <span className='information__description--message'>(zona de cobertura)</span></p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center'}}>
            <img src={planSelected?.detail.medicDelivery? IconHeart : IconHeartDisable} height='20px' style={{marginRight: 10}}/>
            <p className={`information__description--${planSelected?.detail?.medicDelivery ? 'active': 'disable'}`}>Medico a domicilio</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center'}}>
            <img src={planSelected?.detail.checked ? IconHeart : IconHeartDisable} height='20px' style={{marginRight: 10}}/>
            <p className={`information__description--${planSelected?.detail?.checked ? 'active': 'disable'}`}>Chequeos proventivos</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center'}}>
            <img src={planSelected?.detail.refundNacionality ? IconHeart : IconHeartDisable} height='20px' style={{marginRight: 10}}/>
            <p className={`information__description--${planSelected?.detail?.refundNacionality ? 'active' : 'disable'}`}>Reembolso nacional</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center'}}>
            <img src={planSelected?.detail.refundInternational ? IconHeart : IconHeartDisable} height='20px' style={{marginRight: 10}}/>
            <p className={`information__description--${planSelected?.detail?.refundInternational ? 'active' : 'disable'}`}>Reembolso internacional</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table

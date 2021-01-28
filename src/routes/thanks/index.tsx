import React from 'react'
import family from '../../images/family.svg'
import { withRouter } from 'react-router'
import logoCompany from '../../images/logoCompany.svg'
import { useHistory } from 'react-router-dom'
import iconThanks from '../../images/icon-thanks.svg'

const ThanksRouter = () => {
  const history = useHistory()
    return(
        <>
        <div className='content__thanks-column'>
            <div className='content__thanks--information'>
              <div className='header__logo'>
                <img src={logoCompany} />
              </div>
              <img src={family} className='thanks__logo-family'/>
            </div>
            <div className='content__thanks'>
                <div>
                    <div className='thanks__image'>
                        <img src={iconThanks}/>
                    </div>
                    <p className='thanks__form--title'>Gracias por <span className='thanks__form--title-name'>confiar en <br/> nosotros!</span></p>
                    <p>Queremos conocer mejor la salud de los segurados. Un asesor <span>se <br/> pondra en contacto contigo en las siguientes 48 horas</span></p>
                    <div className='container__button'>
                        <button className='button-thanks' onClick={() => history.push('/')}>
                            IR A SALUD RIMAC
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

const Thanks = withRouter(ThanksRouter)

export default Thanks
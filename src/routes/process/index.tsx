import React, {useState, useEffect} from 'react'
import FirstStep from './steps/FirstStep'
import axios from 'axios'
import SecondStep from './steps/SecondStep'
import FristWithOutDni  from './steps/FirstWithOutDni'
import ArrowBack from '../../images/arrow-back.svg'
import { withRouter } from 'react-router'
import logoCompany from '../../images/logoCompany.svg'
import { Steps } from "../../components/Step";
import family from '../../images/family.svg'
const { Step } = Steps;


const ProcessRouter = (props:any) => {
  const DNI = Number(process.env.REACT_APP_DNI || 0)

  const { history, location: { state: { documentNumber } } } = props
  const [step, setStep] = useState(1)
  const [currentStep, changeStep] = useState(0);
  const notFoundDni = documentNumber != DNI

  /*
  useEffect(() => {
    axios.post(`https://freestyle.getsandbox.com/dummy/obtenerdatospersona`, {})
        .then(res => {
          const persons = res.data.data.tercero;
        })
  }, [step,])
  */

 const next = () => {
    changeStep(currentStep + 1);
  };

  const prev = () => {
    changeStep(currentStep - 1);
  };

  const steps = [
    {
      key: "step-1",
      component: () => notFoundDni ? <FristWithOutDni nextStep={next}/> : <FirstStep nextStep={next}/>
    },
    {
      key: "step-2",
      component: () => <SecondStep prevStep={prev}/>
    }
  ];

  return (
    <div className='process'>
      <div className='process__info'>
        <div className='process__info__rimac'>
          <img src={logoCompany} />
        </div>
        <img src={family} className='process__info__family'/>
      </div>
      <div className='process__form'>
        <div className='process__form__header'>
          <div className='process__form__header__steps'>
            <div className='process__form__header__steps__icon' onClick={() => currentStep > 0 && prev()}>
              <img src={ArrowBack}/>
            </div>
            <div>
              <p
                className='process__form__header__steps__text'
              ><span className="process__form__header__steps__text--red">{`PASO ${currentStep+1}`}</span> DE 2</p>
            </div>
          </div>
          <div className='process__form__header__text'>
            {
              currentStep === 0 ? 
                <>
                  <p className='process__form__header__text__greeting'>Hola, <span className='process__form__header__text__name'>{notFoundDni ? `¡empecemos!` : 'Luisa' }</span></p>
                  {
                    notFoundDni ?
                      <p className='process__form__header__text__description'>Cuéntanos un poco sobre ti.</p>
                    :
                      <p className='process__form__header__text__description'>Valida que los datos sean correctos.</p>
                  }
                </>
              : 
                <>
                  <p className='process__form__header__text__greeting'>Elige <span className='process__form__header__text__name'>tu proteccion</span></p>
                  <p className='process__form__header__text__description'>Selecciona tu plan de salud ideal.</p>
                </>
            }
          </div>
        </div>
          <Steps current={currentStep}>
            {steps.map((e) => {
              return <Step key={e.key}>{e.component()}</Step>;
            })}
          </Steps>
      </div>
    </div>
  )
}

const ProcessComponent = withRouter(ProcessRouter)

export default ProcessComponent 

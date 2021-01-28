import React, {useState} from 'react'
import FirstStep from './steps/FirstStep'
import SecondStep from './steps/SecondStep'
import FristWithOutDni  from './steps/FirstWithOutDni'
import { Family } from './DataFamily'
import ArrowBack from '../../images/arrow-back.svg'
import { withRouter } from 'react-router'
import logoCompany from '../../images/logoCompany.svg'
import { Steps } from "../../components/Step";
import family from '../../images/family.svg'
// import axios from 'axios'

const { Step } = Steps;

const person = {
  id: 1,
  numberDocument: '72494600',
  name: 'Pablo',
  firstLastName: 'Reynoso',
  secondLastName: 'Mena',
  birthday: '19/08/1998',
  gender: 'M'
}

const ProcessRouter = (props:any) => {
  const DNI = Number(process.env.REACT_APP_DNI || 0)

  const { location: { state: { documentNumber } } } = props
  const [currentStep, changeStep] = useState(0);
  const notFoundDni = Number(documentNumber) !== DNI

  const [dataFirstStep, setDataFirstStep] = useState<Array <Family>>([])

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

  const submitFirstStep = (data: Array<Family>) => {
    setDataFirstStep(data)
  }

  const steps = [
    {
      key: "step-1",
      component: () => notFoundDni ? <FristWithOutDni nextStep={next} submitFirstStep={submitFirstStep}  /> : <FirstStep nextStep={next} person={person} submitFirstStep={submitFirstStep} />
    },
    {
      key: "step-2",
      component: () => <SecondStep prevStep={prev} family={dataFirstStep}/>
    }
  ];

  return (
    <div className='process'>
      <div className='process__info'>
        <div className='process__info__rimac'>
          <img src={logoCompany} alt='Logo Rimac'/>
        </div>
        <img src={family} className='process__info__family' alt='Logo Family'/>
      </div>
      <div className='process__form'>
        <div className='process__form__header'>
          <div className='process__form__header__steps'>
            <div className='process__form__header__steps__icon' onClick={() => currentStep > 0 && prev()}>
              <img src={ArrowBack} alt='Arrow'/>
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
                  <p className='process__form__header__text__greeting'>Hola, <span className='process__form__header__text__name'>{notFoundDni ? `¡empecemos!` : person.name }</span></p>
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

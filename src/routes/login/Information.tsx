import { useState, useEffect, cloneElement } from 'react'
import security from '../../images/segurity.png'
import mobile from '../../images/mobile.png'
import BackIcon from '../../images/BackIcon'
import NextIcon from '../../images/NextIcon'
import money from '../../images/money.svg'
import clinics from '../../images/clinics.svg'
import { Steps } from "../../components/Step";

const { Step } = Steps;

const BuyFast = () => (
  <div className='content-information--item'>
    <img src={security} alt='seguro' width='20px' style={{ marginRight: 10 }} />
    <span>Cómpralo de manera facil y rapida</span>
  </div>
)
const Digital = () => (
  <div className='content-information--item'>
    <img src={mobile} alt='seguro' width='20px' style={{ marginRight: 10 }} />
    <span>Cotiza y compra tu seguro 100% digital</span>
  </div>
)

const Coverage = () => (
  <div className='content-information--item'>
    <img src={money} alt='seguro' width='20px' style={{ marginRight: 10 }} />
    <span>Hasta S/. 12 millones de cobertura anual</span>
  </div>
)

const Clinics = () => (
  <div className='content-information--item'>
    <img src={clinics} alt='mobile' width='20px' style={{ marginRight: 10 }} />
    <span>Más de 300 clinicas en todo el Perú</span>
  </div>
)

  const steps = [
    {
      key: "step-1",
      component: () => <BuyFast />
    },
    {
      key: "step-2",
      component: () => <Digital />
    },
    {
      key: "step-3",
      component: () => <Coverage />
    },
    {
      key: "step-4",
      component: () => <Clinics />
    }
  ];

const InformationList = () => (
  <>
    <div>
      <p className='content-information__title'>Seguro de <br /><span className='title__salud'>Salud</span></p>
      <div>
        {steps.map((e, key) => {
          return cloneElement(e.component(), { key })
        })}
      </div>
    </div>
    <div>
      <span style={{ color: 'white' }}> © 2021 y Company</span>
    </div>
  </>
)

const InformationSteps = () => {
  const [currentStep, changeStep] = useState(0);

  const next = () => {
    changeStep(currentStep + 1);
  };

  const prev = () => {
    changeStep(currentStep - 1);
  };

  return (
    <>
      <p className='content-information__title'>Seguro de <br /><span className='title__salud'>Salud</span></p>
      <Steps current={currentStep}>
        {steps.map((e) => {
          return <Step key={e.key}>{e.component()}</Step>;
        })}
      </Steps>
      <div className='flex-align-center'>
        <div style={{ cursor: 'pointer'}} onClick={() => currentStep > 0 && prev()}>
          <BackIcon active={currentStep === 0 ? false : true} />
        </div>
        <div className='flex-align-center'>
          <div className='number-steps'>
            <span  > {`0${currentStep + 1}`} </span> 
          </div>
          <div>
            <p className='number-steps__separator'>/</p>
          </div>
          <div className='number-steps'>
            <span  > 04 </span> 
          </div>
        </div>
        <div style={{ cursor: 'pointer'}} onClick={() => currentStep < steps.length - 1 && next()}>
          <NextIcon active={currentStep === steps.length -1 ? false : true}/>
        </div>
      </div>
    </>
  )
}

const Information = () => {
  const [windowSize, setWindowSize] = useState<any>({});

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='content-information'>
      {
        windowSize.width <= 850 ?
          <InformationSteps />
          :
          <InformationList />
      }
    </div>
  )
}

export default Information

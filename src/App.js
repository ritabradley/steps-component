import { useState } from 'react';
import Step from './components/Step';
import StepText from './components/StepText';
import Button from './components/Button';

const stepText = ['Learn React ⚛️', 'Apply to jobs 💼', 'Get a job 🎉'];

function App() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < stepText.length) {
      setStep(step + 1);
    }
    console.log(step);
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
    console.log(step);
  };

  return (
    <div className='steps'>
      <div className='numbers'>
        {stepText.map((_, index) => (
          <Step styleClass={step === index + 1 ? 'active' : ''} key={`Step ${index + 1}`} number={index + 1} />
        ))}
      </div>
      <div className='message'>
        <StepText text='Learn React ⚛️' />
      </div>

      <div className='buttons'>
        <Button styleClass={step > 1 ? 'active' : ''} onClick={handlePrevious}>
          Previous
        </Button>
        <Button styleClass={step < stepText.length ? 'active' : ''} onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default App;

import Step from './components/Step';
import StepText from './components/StepText';
import Button from './components/Button';

function App() {
  return (
    <div className='steps'>
      <div className='numbers'>
        <Step number={1} />
        <Step number={2} />
        <Step number={3} />
      </div>
      <div className='message'>
        <StepText text='Learn React ⚛️' />
      </div>

      <div className='buttons'>
        <Button>Previous</Button>
        <Button>Next</Button>
      </div>
    </div>
  );
}

export default App;

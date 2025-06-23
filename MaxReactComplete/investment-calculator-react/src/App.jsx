import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Result from './components/Result';
import { calculateInvestmentResults } from './util/investment';

const INITIAL_PARAMETERS = {
    "initialInvestment": 10000,
    "annualInvestment": 1200,
    "expectedReturn": 6,
    "duration": 10 
};

function deriveAnnualData(parameters) {
  let calculatedData = calculateInvestmentResults(parameters);
  let totalInterest = 0;
  
  let annualData = calculatedData.map((row) => {
    totalInterest += row.interest;
    let investedCapital = row.valueEndOfYear - totalInterest;

    return {
      ...row,
      ["totalInterest"]: totalInterest,
      ["investedCapital"]: investedCapital 
    }
  });

  return annualData;
}

function App() {
  const [ parameters, setParameters ] = useState({...INITIAL_PARAMETERS});  
  const results = deriveAnnualData(parameters);

  function handleChangeParameter(id, value) {
    setParameters(prevParameters => {
      return {
        ...prevParameters,
        [id]: value
      }
    });
  }

  return (
    <>
      <Header />
      
      <UserInput initialValues={INITIAL_PARAMETERS} onChangeValue={handleChangeParameter} />
      {parameters.duration < 1 && <p className="center">Please enter a duration greater than 0.</p>}
      {parameters.duration > 0 && <Result data={results} />}
    </>
  )
}

export default App

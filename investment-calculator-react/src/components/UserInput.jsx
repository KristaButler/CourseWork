import InputField from './InputField';



export default function UserInput({ initialValues, onChangeValue }) {
   const { initialInvestment, annualInvestment, expectedReturn, duration } = initialValues;

   return (
      <section id="user-input">
         <p className="input-group">
            <InputField id="initialInvestment" label="Initial Investment" initialValue={initialInvestment} onChangeValue={onChangeValue} />
            <InputField id="annualInvestment" label="Annual Investment" initialValue={annualInvestment} onChangeValue={onChangeValue} />
         </p>
         <p className="input-group">
            <InputField id="expectedReturn" label="Expected Return" initialValue={expectedReturn} onChangeValue={onChangeValue} />
            <InputField id="duration" label="Duration" initialValue={duration} onChangeValue={onChangeValue} />
         </p>
      </section>
   );
}
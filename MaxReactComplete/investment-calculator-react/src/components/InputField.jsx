import { useState } from 'react';

export default function InputField({ label, id, initialValue, onChangeValue, ...props }) {
   const [ value, setValue ] = useState(initialValue);

   function handleChange(event) {
      setValue(event.target.value);
      onChangeValue(id, parseInt(event.target.value));
   }

   return (
      <span>
         <label>{label}</label>
         <input id={id} type="number" min="0" {...props} value={value} onChange={handleChange} />
      </span>
   );
}
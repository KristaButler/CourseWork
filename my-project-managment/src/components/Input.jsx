export default function Input({label, type, ...props}) {
   return (
      <>
         <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
         {type === 'textarea'  && <textarea type={type} className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" {...props} />}
         {type != 'textarea'  && <input type={type} className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" {...props} />}
      </>
   );
}
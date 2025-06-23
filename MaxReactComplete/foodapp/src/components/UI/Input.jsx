export default function Input({ label, name, type, defaultValue, ...props }) {
  return (
    <p className='control'>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        defaultValue={defaultValue}
        {...props}
      />
    </p>
  );
}

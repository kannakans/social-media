import React from 'react'

const TextInput = React.forwardRef((props, ref) => {
  const {
    type,
    placeholder,
    styles,
    label,
    labelStyles,
    register,
    name,
    error,
  } = props
  return (
    <div className='w-full flex flex-col mt-2'>
      {label && <p className={`text-ascent-2 text-sm ${labelStyles}`}>{label}</p>}
      <div>
        <input
        type={type}
        placeholder={placeholder}
        name={name}
        ref={ref}
        className={`bg-secondary border rounded border-[#66666690] outline-none text-sm
        text-ascent-1 py-3 px-4 placeholder:text-[#666] ${styles}`}
        {...register}
        aria-invalid={error?"true": "false"}
        />
      </div>
      {error && (
        <span className='text-xs mt-0.5 text-[#f64949fe]'>{error}</span>
      )}
    </div>
  )
})

export default TextInput
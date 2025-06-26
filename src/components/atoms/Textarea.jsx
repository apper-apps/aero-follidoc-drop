import { forwardRef } from 'react'

const Textarea = forwardRef(({ 
  label,
  error,
  rows = 4,
  fullWidth = false,
  className = '',
  ...props 
}, ref) => {
  const textareaClasses = `
    w-full px-4 py-3 border rounded-lg transition-all duration-200 resize-vertical
    focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
    ${error ? 'border-red-500' : 'border-gray-300'}
    ${className}
  `.trim()

  return (
    <div className={`${fullWidth ? 'w-full' : ''} relative`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      
      <textarea
        ref={ref}
        rows={rows}
        className={textareaClasses}
        {...props}
      />
      
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
})

Textarea.displayName = 'Textarea'

export default Textarea
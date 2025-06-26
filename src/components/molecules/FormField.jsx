import Input from '@/components/atoms/Input'
import Textarea from '@/components/atoms/Textarea'

const FormField = ({ 
  type = 'text', 
  multiline = false, 
  rows = 4,
  ...props 
}) => {
  if (multiline) {
    return <Textarea rows={rows} {...props} />
  }

  return <Input type={type} {...props} />
}

export default FormField
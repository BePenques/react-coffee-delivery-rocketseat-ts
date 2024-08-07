import { FormFieldProps } from '../../types'
import { FormFieldStyle, ErrorMessage, Box } from './style'

const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
  onBlur,
}) => (
  <Box>
    <FormFieldStyle
      type={type}
      placeholder={placeholder}
      {...register(name, { valueAsNumber, onBlur })}
    />

    {error && <ErrorMessage>{error.message}</ErrorMessage>}
  </Box>
)
export default FormField

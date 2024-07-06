import { FormFieldProps } from '../../types'
import { FormFieldStyle, ErrorMessage, Box } from './style'

const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
}) => (
  <Box>
    <FormFieldStyle
      type={type}
      placeholder={placeholder}
      {...register(name, { valueAsNumber })}
    />

    {error && <ErrorMessage>{error.message}</ErrorMessage>}
  </Box>
)
export default FormField

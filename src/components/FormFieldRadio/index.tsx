import { FormFieldRadioProps } from '../../types'
import { Box } from './style'

const FormField: React.FC<FormFieldRadioProps> = ({
  name,
  value,
  isSelected,
  valueAsNumber,
  register,
  children,
}) => (
  <Box data-state={isSelected}>
    <>
      <input
        type="radio"
        value={value}
        {...register(name, { valueAsNumber })}
      />
      {children}
    </>
  </Box>
)
export default FormField

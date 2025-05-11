import React, { useContext } from 'react'
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormGroup } from '@mui/material';

import { OptionsGameContext } from '../../../context/optionGame/OptionsGameContext'

export const VsComputerToggle: React.FC = () => {

  const { vsComputer, setVsComputer } = useContext(OptionsGameContext)

  return (
    <FormGroup >
      <FormControlLabel
        control={<Checkbox
          {...checkboxProps}
          checked={vsComputer}
          onChange={() => setVsComputer(!vsComputer)} />}
        label="vs machine" />
    </FormGroup>
  )
}

const checkboxProps: CheckboxProps = {
  style: { marginLeft: '2px', fontSize: 12 },
  size: "small",
  color: "secondary"
}
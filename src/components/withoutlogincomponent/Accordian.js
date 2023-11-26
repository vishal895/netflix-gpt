import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'

const Accordian = ({heading,description}) => {
  return (
    <div className='w-full md:w-1/2 mx-auto text-white'>
    <Accordion className='AccordionBG mb-1 py-2'>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>{heading}</Typography>
    </AccordionSummary>
    <AccordionDetails className='AccordianBG2 text-lg font-bold text-left'>
      <Typography >
        {description}
      </Typography>
    </AccordionDetails>
  </Accordion>
  </div>
  )
}

export default Accordian
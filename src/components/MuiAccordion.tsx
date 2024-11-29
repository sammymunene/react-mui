import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const MuiAccordion = () => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Accordion Title</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eius, laboriosam impedit illum dolorem dolore temporibus? Optio soluta illum obcaecati assumenda atque odit quos ea reprehenderit, blanditiis cum. Molestias, esse?
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export default MuiAccordion

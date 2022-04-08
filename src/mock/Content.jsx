import React from 'react'
import Typography from '@mui/material/Typography';
import Steps from './Steps';
import Queries from './Queries';

export default function Content() {
  return (
    <div className="Content">
        <Typography variant="h5" component="p" mt={1} mb={1} ml={3}>
            How To Use:
            <iframe width="334" height="179" src="https://www.youtube.com/embed/CWCMGIG1Y54">
        </iframe>
        </Typography>
        
        <Typography variant="h5" component="p" mt={1} ml={3}>
            Steps:
        </Typography>
        <Steps />
        <Typography variant="h5" component="p" mt={1} ml={3}>
            Common Queries:
        </Typography>
        <Queries />
    </div>
  )
}

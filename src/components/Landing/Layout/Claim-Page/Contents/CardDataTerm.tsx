import { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { CornerIcon } from '../../../../Icons';

interface CardDataTermProps {

}

export const CardDataTerm: FC<CardDataTermProps> = () => {
    return(
      <>
         <CardContent className='claim__cards__card__term_content'>
            <Typography component="p" fontFamily='Inter' fontSize='16px' fontWeight='400'
                textTransform='uppercase' color='#fff'
            >
                Pre-Sale is live!
            </Typography>
            <Box className='claim__cards__card__term_headers' pt={2.5}>
                <Typography component="p" fontFamily='Inter' fontSize='40px' fontWeight='900'
                    textTransform='uppercase' color='#fff'
                >
                    Ending In:
                </Typography>
                <Typography component="p" fontFamily='Inter' fontSize='40px' fontWeight='900'
                    textTransform='uppercase' color='#fff'
                >
                    03:12:34:45
                </Typography>
            </Box>
            <Typography component="p" fontFamily='Inter' fontSize='16px' fontWeight='400'
                 color='#fff' sx={{paddingTop: '30px'}}
            >
                Exclusively available on Arbitrium Network
            </Typography>
            <Button className='claim__cards__card__inputs_button' variant="contained" sx={{width: '30% !important', marginTop: '60px !important'}}>
                <span>Bridge</span>
                <CornerIcon />
            </Button>
            </CardContent>
        </>
);  }
import { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { CornerIcon } from '../../../../Icons';

interface CardDataInputProps {

}

export const CardDataInput: FC<CardDataInputProps> = () => {
    return(
      <>
         <CardContent className='claim__cards__card__input_content'>
             <Typography component="p" fontFamily='Inter' fontSize='16px' fontWeight='400'
                textTransform='uppercase' color='#fff'
              >
                Claim & Stale
              </Typography>
              <Box className='claim__cards__card_inputs' pt={2.5}>
                  <TextField className='claim__cards__card__inputs_input' label="" placeholder='1 BNB = 13500000 MM' focused />
                    <Button className='claim__cards__card__inputs_button' variant="contained">
                        <span>CONTRIBUTE</span>
                        <CornerIcon />
                    </Button>
              </Box>
              <hr className='claim__cards__card_line' />
              <Box pt={2.5} display='flex' gap={3} alignItems='end'>
                  <Box sx={{width: '100%'}}>
                    <Typography component="p" fontSize='16px' fontWeight='300' lineHeight='19px'
                       textAlign='center' color='#fff'
                    >     Your contributed amount
                    </Typography>
                    <Box className='claim__cards__card_check' pt={1.6} pb={1.6}>
                    <Typography component="p" fontSize='20px' fontWeight='500' lineHeight='24px' textAlign='center'
                        textTransform='uppercase' color='#fff'
                    >     0.00 BNB
                    </Typography>
                    </Box>
                  </Box>
                  <Box sx={{width: '100%'}}>
                  <Typography component="p" fontSize='16px' fontWeight='300' lineHeight='19px' textAlign='center'
                      color='#fff'
                  >     Your reserved tokens
                  </Typography>
                    <Box className='claim__cards__card_check' pt={1.6} pb={1.6}>
                      <Typography component="p" fontSize='20px' fontWeight='500' lineHeight='24px' textTransform='uppercase'
                          textAlign='center' color='#fff'
                      >   0.00 MM
                      </Typography>
                    </Box>  
                  </Box>                 
                </Box>
            </CardContent>
        </>
);  }
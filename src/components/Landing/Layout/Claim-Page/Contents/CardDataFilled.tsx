import { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { CornerIcon } from '../../../../Icons';

interface CardDataFilledProps {

}

export const CardDataFilled: FC<CardDataFilledProps> = () => {
    return(
      <>
         <CardContent className='claim__cards__card__term_content'>
            <Typography component="p" fontFamily='Inter' fontSize='16px' fontWeight='400'
                textTransform='uppercase' color='#fff'
            >
                Total Filled
            </Typography>           
            <Typography component="p" fontFamily='Inter' fontSize='40px' fontWeight='900'
                textTransform='uppercase' color='#fff' pt={2}
            >
                0 / 250 bnb
            </Typography>
            <Box className='claim__cards__card__filled__desc' mt={14.2} position='relative' display='flex' alignItems='end' justifyContent='space-between'>
                <Typography component="div">
                    <Typography noWrap component="div" fontFamily='Inter' textAlign={'left'} fontWeight='300'
                     fontSize={'20px'} color={'#FFFFFF'}>
                        Soft Cap  100 BNB<br />
                        Hard Cap  250 BNB<br />
                        Minimum Contribution  NONE<br />
                        Maximum Contribution  BNB<br />
                    </Typography>
                </Typography>               
                <Typography component="div" className='claim__cards__card__filled_diagrams_diagram'>
                    <div className='claim__cards__card__filled__diagrams__diagram_line'></div>
                    <Typography component="div" display='flex' gap='15px'>
                        <Box width='55px' height='60px' borderRadius='0px 0px 5px 5px' sx={{backgroundColor: '#FFFFFF'}}></Box>
                        <Box width='55px' height='60px' borderRadius='0px 0px 5px 5px'sx={{backgroundColor: '#FFFFFF'}}>
                            <Box className='claim__cards__card__filled__diagrams__diagram_growth'></Box>
                        </Box>
                    </Typography>
                </Typography>
            </Box>
        </CardContent>
    </>
);}
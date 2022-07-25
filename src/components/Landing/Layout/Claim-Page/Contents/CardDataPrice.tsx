import { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { DiagramIcon } from '../../../../Icons';

interface CardDataPriceProps {

}

export const CardDataPrice: FC<CardDataPriceProps> = () => {
    return(
      <>
         <CardContent className='claim__cards__card__term_content'>
            <Typography component="p" fontSize='16px' fontWeight='400'
                textTransform='uppercase' color='#fff'
            >
                Post Sale $mm price:
            </Typography>
            <Box className='claim__cards__card__price_headers' pt={2} display='flex'>
                <Typography component="p" fontSize='40px' fontWeight='900'
                    textTransform='uppercase' color='#fff'
                >
                    $7.70 usd
                </Typography>
                <Typography component="p" fontSize='16px' fontWeight='400'
                   color='#fff'
                >
                    Presale Price: $0.25<br />
                    Listing Price: &nbsp;$0.75
                </Typography>
            </Box>
            <Box className='claim__cards__card__price_diagrams' mt={2.5} position='relative'>
                <Typography component="div" className='claim__cards__card__price_diagrams_diagram'>
                    <Typography component="div" textAlign={'right'} pr={1.5} fontSize={'15px'} color={'#2C303F'}>7</Typography>
                    <hr className='claim__cards__card__price__diagrams_line' />
                </Typography>
                <Typography component="div" className='claim__cards__card__price_diagrams_diagram'>
                    <Typography component="div" textAlign={'right'} pr={1.5} fontSize={'15px'} color={'#2C303F'}>6</Typography>
                    <hr className='claim__cards__card__price__diagrams_line' />
                </Typography>
                <Typography component="div" className='claim__cards__card__price_diagrams_diagram'>
                    <Typography component="div" textAlign={'right'} pr={1.5} fontSize={'15px'} color={'#2C303F'}>5</Typography>
                    <hr className='claim__cards__card__price__diagrams_line' />
                </Typography>
                <Typography component="div" className='claim__cards__card__price_diagrams_diagram'>
                    <Typography component="div" textAlign={'right'} pr={1.5} fontSize={'15px'} color={'#2C303F'}>4</Typography>
                    <hr className='claim__cards__card__price__diagrams_line' />
                </Typography>
                <Typography component="div" className='claim__cards__card__price_diagrams_diagram'>
                    <Typography component="div" textAlign={'right'} pr={1.5} fontSize={'15px'} color={'#2C303F'}>3</Typography>
                    <hr className='claim__cards__card__price__diagrams_line' />
                </Typography>
                <Typography component="div" className='claim__cards__card__price_diagrams_diagram'>
                    <Typography component="div" textAlign={'right'} pr={1.5} fontSize={'15px'} color={'#2C303F'}>2</Typography>
                    <hr className='claim__cards__card__price__diagrams_line' />
                </Typography>
                <Typography component="div" className='claim__cards__card__price_diagrams_diagram'>
                    <Typography component="div" textAlign={'right'} pr={1.5} fontSize={'15px'} color={'#2C303F'}>1</Typography>
                    <hr className='claim__cards__card__price__diagrams_line' />
                </Typography>
                <Typography component="div" className='claim__cards__card__price__diagrams_diagramIcon'>
                    <DiagramIcon />
                </Typography>
            </Box>
            </CardContent>
        </>
);  }
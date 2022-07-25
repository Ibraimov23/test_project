import { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container, maxWidth, width } from '@mui/system';
import { Button } from '@mui/material';

interface WelcomeProps {

}

export const Welcome: FC<WelcomeProps> = () => {
    return(
        <section className='welcome'>
            <Container>
                <Box className='welcome__header'>
                    <Typography fontFamily='Inter' variant="h6" noWrap component="p" color='#fff'>
                      Welcome Meta Movers!
                    </Typography>
                    <Typography variant="h3" noWrap component="p" fontFamily='Inter' fontSize='45px'
                        fontWeight='900' textTransform='uppercase' pt={1} color='#fff'>
                      Presale Ends Soon!
                    </Typography>
                </Box>
                <Box display='flex' gap={2} pt={5}>
                    <Button variant="contained" sx={{padding: '15px 30px 15px 30px', borderRadius: 2, backgroundColor: 'rgb(102, 87, 214)'}}>
                      <Typography noWrap component='p' fontWeight='900'>TokenoMics</Typography>
                    </Button>
                    <Button variant="contained" sx={{padding: '15px 30px 15px 30px', borderRadius: 2, backgroundColor: 'rgb(102, 87, 214)'}}>
                      <Typography noWrap component='p' fontWeight='900'>Sales Guide</Typography>
                    </Button>
                </Box>
            </Container>
        </section>
);  }
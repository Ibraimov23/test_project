import { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import { Container, maxWidth, width } from '@mui/system';
import { Button } from '@mui/material';
import {CardDataInput, CardDataTerm, CardDataPrice, CardDataFilled} from './Contents';

interface ClaimProps {

}

export const Claim: FC<ClaimProps> = () => {
    return(
        <section className='claim'>
            <Container>
                <Box className='claim__cards' display='flex' flexWrap='wrap' justifyContent='space-between'>
                    <Box className='claim__cards__card'>
                        <Card className='claim__cards__card_body' sx={{bgcolor: 'rgb(206, 34, 72)',borderRadius: 3 }}>
                            <CardDataInput />
                        </Card>
                    </Box>
                    <Box className='claim__cards__card'>
                        <Card className='claim__cards__card_body' sx={{bgcolor: 'rgb(206, 34, 72)',borderRadius: 3 }}>
                            <CardDataTerm />
                        </Card>
                   </Box>
                   <Box className='claim__cards__card'>
                        <Card className='claim__cards__card_body' sx={{bgcolor: 'rgb(206, 34, 72)',borderRadius: 3 }}>
                            <CardDataPrice />
                        </Card>
                   </Box>
                   <Box className='claim__cards__card'>
                        <Card className='claim__cards__card_body' sx={{bgcolor: 'rgb(206, 34, 72)',borderRadius: 3 }}>
                            <CardDataFilled />
                        </Card>
                   </Box>
                </Box>
            </Container>
        </section>
);  }
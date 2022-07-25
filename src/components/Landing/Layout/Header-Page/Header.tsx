import { FC, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container, maxWidth, width } from '@mui/system';

interface HeaderProps {

}

export const LandHeader: FC<HeaderProps> = () => {
    return(
        <AppBar className='main-header' position="static">
            <Container className='container' maxWidth={false}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="p" sx={{flexGrow: 1}}>
                        Logo :)
                    </Typography>
                    <Typography variant="h6" noWrap component="p" fontFamily='Inter' fontSize='16px'
                        fontWeight='700' textTransform='uppercase'
                    >
                        Connect
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
);  }
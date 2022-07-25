import { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container, maxWidth, width } from '@mui/system';
import { Button } from '@mui/material';
import { VoteIcon,CoinIcon } from '../../../Icons';

interface DescriptionProps {

}

export const Description: FC<DescriptionProps> = () => {
    return(
        <section className='description'>
            <Container>
              <div className='description__header'>
                  <Typography noWrap component="p" fontFamily='Inter' fontSize='32px' fontWeight='700'
                      textAlign='center' color='#FFFFFF' lineHeight='39px'>
                      IF presale is not sold out, remaining tokens are redistributed<br />
                      back into the rewards pools for staking, farming & activity. 
                  </Typography>
              </div>
              <div className='description__blocks'>
                  <Box className='description__blocks__block'>
                        <Box className='description__blocks__block_icon right'><CoinIcon /></Box>
                        <Typography noWrap component="p" fontFamily='Inter' fontSize='2vh' fontWeight='400'
                            textAlign='center' color='#FFFFFF' lineHeight='29px' pt='20px'>
                                50% of presale will be<br />
                                auto-sent to LP for liquidity. 
                        </Typography>
                  </Box>
                  <Box className='description__blocks__block'>
                        <Box className='description__blocks__block_icon left'><VoteIcon /></Box>
                        <Typography noWrap component="p" fontFamily='Inter' fontSize='2vh' fontWeight='400'
                            textAlign='center' color='#FFFFFF' lineHeight='29px' pt='20px'>
                                50% of the remaining will be<br />
                                distributed to the treasury for<br />
                                further development and marketing.
                        </Typography>
                  </Box>
              </div>
            </Container>
        </section>
);  }
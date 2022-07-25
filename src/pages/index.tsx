import {FC} from 'react';
import { LandHeader,Welcome,Claim, Description } from '../components/Landing/Layout';

interface LandProps {

}

const Land: FC<LandProps> = ({}) => {

  return (
    <>
      <LandHeader />
      <Welcome />
      <Claim />
      <Description/>
    </>

    );
}

export default (Land);

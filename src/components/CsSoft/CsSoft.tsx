import { FC } from 'react';
import { cn } from '@bem-react/classname';

import CsSoftHeader from './Header/CsSoft-Header';

import './CsSoft.scss';

const cnCsSoft = cn('CsSoft');

const CsSoft: FC = () => {
  return (
    <div className={cnCsSoft()}>
      <CsSoftHeader />
    </div>
  );
};

export default CsSoft;

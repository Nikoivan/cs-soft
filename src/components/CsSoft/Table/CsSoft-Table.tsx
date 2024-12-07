import { FC } from 'react';
import { cn } from '@bem-react/classname';

const cnCsSoft = cn('CsSoft');

const columns = [1, 2];

const CsSoftTable: FC = () => {
  return <div className={cnCsSoft('Table')}></div>;
};

export default CsSoftTable;

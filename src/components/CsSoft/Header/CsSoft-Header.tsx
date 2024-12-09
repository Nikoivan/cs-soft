import React, { FC } from 'react';
import { cn } from '@bem-react/classname';

import CsSoftLogo from '../Logo/CsSoft-Logo';

import '../HeaderWrapper/CsSoft-HeaderWrapper.scss';
import '../Title/CsSoftTitle.scss';

const cnCsSoft = cn('CsSoft');

const CsSoftHeader: FC = () => (
  <div className={cnCsSoft('Header')}>
    <div className={cnCsSoft('HeaderWrapper')}>
      <div className={cnCsSoft('PageWrapper')}>
        <h1 className={cnCsSoft('Title')}>Тестовое задание</h1>
        <h2 className={cnCsSoft('Author')}>
          Frontend-разработчик: Николаенко Иван Александрович
        </h2>
      </div>
      <div className={cnCsSoft('LogoWrap')}>
        <CsSoftLogo />
      </div>
    </div>
  </div>
);

export default CsSoftHeader;

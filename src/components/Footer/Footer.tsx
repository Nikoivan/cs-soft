import { cn } from '@bem-react/classname';
import { FC } from 'react';

const cnFooter = cn('Footer');

const Footer: FC = () => (
  <footer className={cnFooter()}>Created by Николаенко Иван</footer>
);

export default Footer;

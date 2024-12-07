import { FC } from 'react';
import { cn } from '@bem-react/classname';

const cnHeader = cn('Header');

const Header: FC = () => <header className={cnHeader()}>Header</header>;

export default Header;

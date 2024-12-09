import {FC} from 'react';
import {cn} from '@bem-react/classname';

import CsSoftHeader from './Header/CsSoft-Header';
import CsSoftFooter from './Footer/CsSoftFooter';
import CsSoftTable from "./Table/CsSoft-Table.tsx";

import './CsSoft.scss';

const cnCsSoft = cn('CsSoft');

const CsSoft: FC = () => {


		return (
				<div className={cnCsSoft()}>
						<CsSoftHeader/>
						<CsSoftTable/>
						<CsSoftFooter/>
				</div>
		);
};

export default CsSoft;

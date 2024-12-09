import {FC} from 'react';
import {cn} from '@bem-react/classname';

import {useAppSelector} from '../../../lib/redux/store';

import './CsSoft-Footer.scss';

const cnCsSoftFooter = cn('CsSoft', 'Footer');

const CsSoftFooter: FC = () => {
		const {columns} = useAppSelector((state) => state.tableSlice);

		const blob = new Blob([JSON.stringify(columns)], {type: 'aplication/json'});
		const href = URL.createObjectURL(blob)
		return (
				<footer className={cnCsSoftFooter()}>
						<a href={href}>Выгрузить таблицу в формате JSON</a>
				</footer>
		);
};

export default CsSoftFooter;

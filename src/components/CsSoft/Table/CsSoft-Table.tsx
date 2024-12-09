import {FC} from 'react';
import {cn} from '@bem-react/classname';

import {useAppDispatch, useAppSelector} from "../../../lib/redux/store.ts";
import CsSoftColumn from "../Column/CsSoft-Column.tsx";
import {tableDataActions} from "../../../lib/redux/slices/tableSlice.ts";

const cnCsSoft = cn('CsSoft');

const CsSoftTable: FC = () => {
		const dispatch = useAppDispatch()
		const {columns} = useAppSelector((state) => state.tableSlice);

		const handleAddColumnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
				e.preventDefault()

				dispatch(tableDataActions.addColumn())
		}

		const handleAddLineClick = (e: React.MouseEvent<HTMLButtonElement>) => {
				e.preventDefault()

				dispatch(tableDataActions.addLine())
		}

		return (
				<div className={cnCsSoft('TableWrap')}>
						<form className={cnCsSoft('Form')}>
								<button onClick={handleAddColumnClick}>Добавить столбец
								</button>
								<button onClick={handleAddLineClick}>Добавить строку</button>
						</form>
						<div className={cnCsSoft('Table')}>
								<ul className={cnCsSoft('ColumnsList')}>
										{columns.map((col) => (<CsSoftColumn {...col} />))}
								</ul>
						</div>
				</div>
		)
};

export default CsSoftTable;

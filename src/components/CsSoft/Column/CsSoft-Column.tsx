import {cn} from "@bem-react/classname";
import {FC} from "react";
import {Column, DataTypes} from "../../../lib/redux/slices/tableSlice.types.ts";
import CsSoftCell from "../Cell/CsSoftCell.tsx";
import {useAppDispatch} from "../../../lib/redux/store.ts";
import {tableDataActions} from "../../../lib/redux/slices/tableSlice.ts";

const cnCsSoft = cn("CsSoft");

const CsSoftColumn: FC<Column> = ({id, type, cells}) => {
		const dispatch = useAppDispatch();

		const handleChangeType = () => {
				dispatch(tableDataActions.changeColumnType({
						id,
						type: type === DataTypes.STRING ? DataTypes.NUMBER : DataTypes.STRING
				}));
		}

		return (
				<li className={cnCsSoft('Column')}>
						<div className={cnCsSoft('Line')}
								 onClick={handleChangeType}><span
								className={cnCsSoft('ColumnTitle')}>{type === DataTypes.STRING ? 'Label' : 'Cтолбец'}</span></div>
						{cells.map((cell) => (<CsSoftCell {...cell} />))}
				</li>
		)
}

export default CsSoftColumn;
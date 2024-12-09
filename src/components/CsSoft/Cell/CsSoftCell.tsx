import {cn} from "@bem-react/classname";
import {ChangeEvent, FC} from "react";
import {Cell, DataTypes} from "../../../lib/redux/slices/tableSlice.types.ts";
import {useAppDispatch} from "../../../lib/redux/store.ts";
import {tableDataActions} from "../../../lib/redux/slices/tableSlice.ts";

const cnCsSoft = cn('CsSoft');

const CsSoftCell: FC<Cell> = ({content, id, type, columnId}) => {
		const dispatch = useAppDispatch()

		const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
				const {value} = e.target;

				console.log(type, /\d/.test(value))

				if (type === DataTypes.NUMBER && value !== '' && !/\d/.test(value)) {
						return;
				}

				dispatch(tableDataActions.changeCellValue({value, cellId: id, columnId}))
		}

		return (
				<div className={cnCsSoft('Cell')}>
						<div className={cnCsSoft('Line')}>
								<input value={content} onChange={handleChange} placeholder='Данные'/>
						</div>
				</div>
		)
}

export default CsSoftCell;

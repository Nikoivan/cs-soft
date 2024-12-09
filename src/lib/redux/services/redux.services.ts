import {v4} from 'uuid';

import {
		Cell,
		Column,
		ColumnData,
		DataTypes
} from '../slices/tableSlice.types';

type CellData = {
		cellsCount: number;
		type: DataTypes;
		columnId: string;
};

export function createCells({cellsCount, type, columnId}: CellData): Cell[] {
		const cells: Cell[] = [];

		for (let i = 0; i < cellsCount; i++) {
				cells.push({
						content: 'Данные',
						id: v4(),
						type,
						columnId,
						highLighted: false
				});
		}

		return cells;
}

export function createColumns({
																	columnsCount,
																	cellsCount,
																	type
															}: ColumnData): Column[] {
		const columns: Column[] = [];

		for (let i = 0; i < columnsCount; i++) {
				const columnId = v4();

				const column = {
						id: columnId,
						type,
						cells: createCells({cellsCount, type, columnId})
				};

				columns.push(column);
		}

		return columns;
}

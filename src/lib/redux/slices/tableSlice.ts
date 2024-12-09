import {createSlice} from '@reduxjs/toolkit';

import {ChangeCellValue, ChangeColumnTypeAction, Column, DataTypes} from './tableSlice.types';
import {createCells, createColumns} from '../services/redux.services';

type TableSlice = {
		columns: Column[];
};

const initialState: TableSlice = {
		columns: createColumns({columnsCount: 1, cellsCount: 1, type: DataTypes.STRING})
};

export const tableSlice = createSlice({
		name: 'tableSlice',
		initialState,
		reducers: {
				addColumn: (state) => {
						const column = createColumns({
								columnsCount: 1,
								cellsCount: state.columns[0].cells.length,
								type: DataTypes.STRING
						});

						state.columns.push(column[0]);
				},
				addLine: (state) => {
						state.columns.forEach((column) => {
								const newCell = createCells({cellsCount: 1, columnId: column.id, type: column.type});
								
								column.cells.push(newCell[0]);
						})
				},
				changeColumnType: (state, action: ChangeColumnTypeAction) => {
						const {id, type} = action.payload;

						const column = state.columns.find(column => column.id === id);

						if (!column) {
								throw new Error('Ошибка приложения, отсутствует столбец с указанным id');
						}

						column.type = type;
						column.cells = column.cells.map((cell) => ({...cell, type}))
				},
				changeCellValue: (state, action: ChangeCellValue) => {
						const {value, cellId, columnId} = action.payload;

						const currentCollumn = state.columns.find(column => column.id === columnId);


						if (!currentCollumn) {
								throw new Error('Ошибка приложения, отсутствует столбец с указанным id');
						}

						const cell = currentCollumn.cells.find(cell => cell.id === cellId);

						if (!cell) {
								throw new Error('Ошибка приложения, отсутствует ячейка с указанным id');
						}

						cell.content = value;
				}
		}
});

export const tableDataActions = tableSlice.actions;

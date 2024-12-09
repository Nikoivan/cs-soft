import {PayloadAction} from '@reduxjs/toolkit';

export enum DataTypes {
		STRING = 'string',
		NUMBER = 'number'
}

export type Cell = {
		content: string | number;
		id: string;
		type: DataTypes;
		columnId: string;
		highLighted: boolean;
};

export type Column = {
		id: string;
		type: DataTypes;
		cells: Cell[];
};

export type ColumnData = {
		type: DataTypes;
		columnsCount: number;
		cellsCount: number;
};


export type ChangeColumnTypeAction = PayloadAction<{ id: string, type: DataTypes }>;
export type ChangeCellValue = PayloadAction<{ value: string, cellId: string, columnId: string }>;

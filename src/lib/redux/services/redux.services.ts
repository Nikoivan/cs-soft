import { v4 } from 'uuid';

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

function createCells({ cellsCount, type, columnId }: CellData): Cell[] {
  let cells: Cell[] = [];

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
  let columns: Column[] = [];

  for (let i = 0; i < columnsCount; i++) {
    const columnId = v4();

    const column = {
      id: v4(),
      title: 'Столбец',
      type: DataTypes,
      cells: createCells({ cellsCount, type, columnId })
    };
  }

  return columns;
}

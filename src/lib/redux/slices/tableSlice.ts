import { createSlice } from '@reduxjs/toolkit';

import { Column, CreateTableAction } from './tableSlice.types';
import { createColumns } from '../services/redux.services';

type TableSlice = {
  columns: Column[];
};

const initialState: TableSlice = {
  columns: []
};

export const tableSlice = createSlice({
  name: 'tableSlice',
  initialState,
  reducers: {
    createTable: (state, action: CreateTableAction) => {
      const { columnsCount, cellsCount, type } = action.payload;

      state.columns = createColumns({ columnsCount, cellsCount, type });
    }
  }
});

export const tableDataActions = tableSlice.actions;

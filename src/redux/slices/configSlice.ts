import {createSlice} from '@reduxjs/toolkit';
import {configs} from '@utils/configdata';

const configSlice = createSlice({
  name: 'configSlice',
  initialState: configs,
  reducers: {},
});

export default configSlice.reducer;

import {createSlice} from '@reduxjs/toolkit';
import {dim} from '@utils/configdata';

const dimSlice = createSlice({
  name: 'dimSlice',
  initialState: dim,
  reducers: {},
});

export default dimSlice.reducer;

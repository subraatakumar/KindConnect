import {createSlice} from '@reduxjs/toolkit';
import {colors} from '@utils/configdata';

const colorsSlice = createSlice({
  name: 'colorsSlice',
  initialState: colors,
  reducers: {},
});

export default colorsSlice.reducer;

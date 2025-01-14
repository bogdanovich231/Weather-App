import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TemperatureUnit = 'Celsius' | 'Fahrenheit' | 'Kelvin';

interface TemperatureState {
  unit: TemperatureUnit;
}

const initialState: TemperatureState = {
  unit: 'Celsius',
};

const temperatureSlice = createSlice({
  name: 'temperature',
  initialState,
  reducers: {
    setTemperatureUnit: (state, action: PayloadAction<TemperatureUnit>) => {
      state.unit = action.payload;
    },
  },
});

export const { setTemperatureUnit } = temperatureSlice.actions;
export default temperatureSlice.reducer;

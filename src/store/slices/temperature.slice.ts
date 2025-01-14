import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TemperatureUnit = 'Celsius' | 'Fahrenheit' | 'Kelvin';

interface TemperatureState {
  unit: TemperatureUnit;
}

const savedTemperatureUnit = localStorage.getItem('temperatureUnit') as TemperatureUnit | null;

const initialState: TemperatureState = {
  unit: savedTemperatureUnit || 'Celsius',
};

const temperatureSlice = createSlice({
  name: 'temperature',
  initialState,
  reducers: {
    setTemperatureUnit: (state, action: PayloadAction<TemperatureUnit>) => {
      state.unit = action.payload;
      localStorage.setItem('temperatureUnit', action.payload);
    },
  },
});

export const { setTemperatureUnit } = temperatureSlice.actions;
export default temperatureSlice.reducer;

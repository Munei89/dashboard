import React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import { StyledCalenderComponent } from './styles';

export const StyledCalender = () => {
  const [date, setDate] = React.useState<Date | null>(new Date());
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StyledCalenderComponent>
        <CalendarPicker
          date={date}
          onChange={newDate => date && setDate(newDate)}
          disableFuture
        />
      </StyledCalenderComponent>
    </LocalizationProvider>
  );
};

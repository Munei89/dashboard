import styled from 'styled-components/macro';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';

export const StyledCalenderComponent = styled.div`
  .MuiCalendarPicker-root {
    .MuiTypography-root {
      color: #fff;
    }
    .MuiPickersDay-root {
      background: transparent;
      color: #fff;

      &.Mui-selected {
        background: #008e8a;
        color: #fff;
      }
    }
  }
`;

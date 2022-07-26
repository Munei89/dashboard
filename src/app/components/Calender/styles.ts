import styled from 'styled-components/macro';

export const StyledCalenderComponent = styled.div`
  .MuiCalendarPicker-root {
    margin: 0 -20px;

    @media (min-width: 768px) and (max-width: 1280px) {
      margin: 0 auto;
    }
    @media (min-width: 1920px) {
      margin: 0 auto;
    }
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
    .MuiIconButton-root {
      svg {
        fill: #fff;
      }
    }
  }
`;

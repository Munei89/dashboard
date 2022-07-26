import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Main } from 'app/layout/Main/Loadable';
import {
  StyledHeading,
  StyledCardHeader,
  StyledParagrapgh,
  StyledIconWrapper,
} from './styles';
import { StyledCard } from 'app/components/Card/Loadable';
import { StyledButton } from 'app/components/Button/Loadable';
import Grid from '@mui/material/Grid';
import ActiveMarina from 'app/assets/images/active-marina.png';
import { SwitchButton } from 'app/components/SwitchButton/Loadable';
import { StyledCalender } from 'app/components/Calender/Loadable';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Main>
        <StyledHeading>DashBoard</StyledHeading>
        <Grid container>
          <Grid item xs={8}>
            <Grid
              container
              sx={{
                gap: 1,
                position: 'relative',
              }}
            >
              <StyledIconWrapper>
                <img src={ActiveMarina} alt="Active Marina" />
              </StyledIconWrapper>
              <Grid item xs={7}>
                <StyledCard
                  sx={{
                    backgroundColor: '#008E8A',
                    height: '320px',
                  }}
                >
                  <StyledCardHeader>Good Morning, Eleanor</StyledCardHeader>
                  <StyledParagrapgh>
                    Welcome to your daily event calendar. Here you can see all
                    the upcoming events, meeting and create new events.
                  </StyledParagrapgh>
                  <StyledButton
                    variant="contained"
                    buttonType="primary"
                    disableElevation
                    size="large"
                    sx={{
                      position: 'absolute',
                      bottom: '20px',
                      left: '20px',
                    }}
                  >
                    + Create event
                  </StyledButton>
                </StyledCard>
              </Grid>
              <Grid item xs={4}>
                <StyledCard
                  sx={{
                    backgroundColor: '#141518',
                    border: '1.5px solid #1F1F25',
                    height: '320px',
                  }}
                >
                  <StyledCardHeader>Reminder</StyledCardHeader>
                  <SwitchButton>
                    <div>
                      <p>Training session</p>
                      <p>10:00 am</p>
                    </div>
                  </SwitchButton>
                  <SwitchButton>
                    <div>
                      <p>Training session</p>
                      <p>10:00 am</p>
                    </div>
                  </SwitchButton>
                  <StyledButton
                    variant="outlined"
                    buttonType="secondary"
                    disableElevation
                    size="large"
                    sx={{
                      position: 'absolute',
                      bottom: '20px',
                      left: '20px',
                    }}
                  >
                    + Add new
                  </StyledButton>
                </StyledCard>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <StyledCard
              sx={{
                backgroundColor: 'transparent',
                border: '1.5px solid #008E8A',
              }}
            >
              <StyledCalender />
            </StyledCard>
          </Grid>
        </Grid>
      </Main>
    </>
  );
}

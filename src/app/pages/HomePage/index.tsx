import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Main } from 'app/layout/Main/Loadable';
import {
  StyledHeading,
  StyledCardHeader,
  StyledParagrapgh,
  StyledIconWrapper,
  StyledSchedulerWrapper,
  StyledScheduleContent,
  StyledContactListContent,
} from './styles';
import { StyledCard } from 'app/components/Card/Loadable';
import { StyledButton } from 'app/components/Button/Loadable';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ActiveMarina from 'app/assets/images/active-marina.png';
import { SwitchButton } from 'app/components/SwitchButton/Loadable';
import { StyledCalender } from 'app/components/Calender/Loadable';
import { ScheduleItems } from 'app/mock';
import Chip from '@mui/material/Chip';
import { ThreeDotEllipsisIcon } from 'app/assets/icons';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { actions, reducer, sliceKey } from 'app/slice';
import { applicationsSaga } from 'app/sagas';
import { selectAppState } from 'app/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar } from '@mui/material';
import { StyledChartsIcon } from 'app/assets/icons';

export function HomePage() {
  // @ts-ignore: Unreachable code error
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: applicationsSaga });

  const dispatch = useDispatch();

  const { contactList, isLoading, isError, isDrawerOpen } =
    useSelector(selectAppState);

  useEffect(() => {
    dispatch(actions.getUsers());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Main
        drawerOpen={isDrawerOpen}
        onCloseDrawer={() => dispatch(actions.setDrawerOpen())}
      >
        <StyledHeading>DashBoard</StyledHeading>
        <Grid container spacing={2}>
          <Grid item md={12} lg={9} sm={12} xs={12}>
            <Grid
              container
              sx={{
                position: 'relative',
                marginBottom: '16px',
              }}
              spacing={2}
            >
              <StyledIconWrapper>
                <img src={ActiveMarina} alt="Active Marina" />
              </StyledIconWrapper>
              <Grid item xs={12} sm={6} md={8}>
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
              <Grid item xs={12} md={4} sm={6}>
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
            <Grid container spacing={2}>
              <Grid item xs={12} md={5} sm={6}>
                <StyledCard
                  sx={{
                    background: '#141518',
                    border: '1.5px solid #1F1F25',
                    borderRadius: '15px',
                    marginBottom: '16px',
                    height: '400px',
                  }}
                >
                  <StyledSchedulerWrapper>
                    <StyledCardHeader>Contacts</StyledCardHeader>
                    <p>View all</p>
                  </StyledSchedulerWrapper>
                  {isLoading && <p>Loading...</p>}
                  {contactList &&
                    contactList.length > 0 &&
                    contactList.map((contact, index) => (
                      <StyledScheduleContent
                        key={index}
                        style={{
                          display: 'flex',
                        }}
                      >
                        <Avatar src={contact.picture.thumbnail} />
                        <StyledContactListContent>
                          <h4>
                            {contact.name.first} {contact.name.last}
                          </h4>
                          <p>Coach</p>
                        </StyledContactListContent>
                        <div
                          style={{
                            flexGrow: 1,
                            textAlign: 'right',
                          }}
                        >
                          <ThreeDotEllipsisIcon />
                        </div>
                      </StyledScheduleContent>
                    ))}
                  {contactList.length === 0 && !isLoading && (
                    <StyledScheduleContent>
                      <p>No contacts found</p>
                    </StyledScheduleContent>
                  )}
                  {isError && (
                    <StyledScheduleContent>
                      <p>There was an error loading the contacts</p>
                    </StyledScheduleContent>
                  )}
                </StyledCard>
              </Grid>
              <Grid item xs={12} sm={6} md={7}>
                <StyledCard
                  sx={{
                    background: '#141518',
                    border: '1.5px solid #1F1F25',
                    borderRadius: '15px',
                    marginBottom: '16px',
                    height: '400px',
                  }}
                >
                  <StyledSchedulerWrapper>
                    <StyledCardHeader>Half Year Work Results</StyledCardHeader>
                    <p>View all</p>
                  </StyledSchedulerWrapper>
                  <Box
                    sx={{
                      svg: {
                        width: '100%',
                        height: 'auto',
                      },
                    }}
                  >
                    <StyledChartsIcon />
                  </Box>
                </StyledCard>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={3}>
            <StyledCard
              sx={{
                backgroundColor: 'transparent',
                border: '1.5px solid #008E8A',
              }}
            >
              <StyledCalender />
              <StyledSchedulerWrapper>
                <StyledCardHeader>Schedule</StyledCardHeader>
                <p>View all</p>
              </StyledSchedulerWrapper>
              {ScheduleItems.map((item, index) => (
                <StyledCard
                  sx={{
                    background: '#141518',
                    border: '1.5px solid #1F1F25',
                    borderRadius: '15px',
                    marginBottom: '16px',
                  }}
                  key={index}
                >
                  <StyledSchedulerWrapper>
                    <Chip
                      label={item.type}
                      sx={{
                        backgroundColor: `${item.typeColor}`,
                        color: '#fff',
                        fontWeight: 500,
                        fontSize: '14px',
                        borderRadius: '4px',
                        padding: '5px',
                        fontFamily: 'Poppins, sans-serif',
                      }}
                    />
                    <div
                      style={{
                        flexGrow: 1,
                        textAlign: 'right',
                      }}
                    >
                      <ThreeDotEllipsisIcon />
                    </div>
                  </StyledSchedulerWrapper>
                  <StyledScheduleContent>
                    <h4>{item.title}</h4>
                    <p>{item.time}</p>
                  </StyledScheduleContent>
                </StyledCard>
              ))}
            </StyledCard>
          </Grid>
        </Grid>
      </Main>
    </>
  );
}

import styled from 'styled-components/macro';

export const StyledHeading = styled.h2`
  font-weight: 500;
  font-size: 48px;
  line-height: 120%;
  color: #ffffff;
  margin-botttom: 30px;
  margin-top: 0;
`;

export const StyledCardHeader = styled.h4`
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  color: #ffffff;
  margin-top: 0;
  margin-botttom: 20px;
`;

export const StyledParagrapgh = styled.p`
  font-weight: 500;
  font-size: 17px;
  line-height: 140%;
  color: #ffffff;
  width: 70%;
`;

export const StyledIconWrapper = styled.div`
  display: block;
  position: absolute;
  z-index: 1;
  right: -10%;
  top: 15%;

  @media (min-width: 768px) {
    right: 45%;
    top: 25%;
  }
  @media (min-width: 1024px) {
    right: 30%;
    top: 5%;
  }
  @media (min-width: 1280px) {
    right: 30%;
    top: -5%;
  }
  @media (min-width: 1600px) {
    right: 31%;
    top: -5%;
  }

  img {
    width: 160px;
    height: 220px;
    @media (min-width: 1024px) {
      width: 230px;
      height: 290px;
    }
    @media (min-width: 1280px) {
      width: 240px;
      height: 330px;
    }
  }
`;

export const StyledSchedulerWrapper = styled.div`
  display: flex;
  h4 {
    flex-grow: 1;
  }
  p {
    margin-top: 0;
    color: #008e8a;
  }
`;

export const StyledScheduleContent = styled.div`
  h4 {
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 12px;
    margin-top: 12px;
  }
  p {
    font-weight: 500;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 12px;
    margin-top: 0px;
  }
`;

export const StyledContactListContent = styled.div`
  margin-left: 16px;
  margin-top: -5px;
  h4 {
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 0px;
    margin-top: 5px;
  }
  p {
    font-weight: 500;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 16px;
    margin-top: 0px;
  }
`;

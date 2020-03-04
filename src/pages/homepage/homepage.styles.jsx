import styled from 'styled-components';

export const HomePageContainer = styled.div` 
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HomePageTopContainer = styled.div`
  height: 400px;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin-bottom: 40px;
`;

export const HomePageImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url("images/study.jpeg");
  filter: blur(5px) grayscale(20%);
`

export const HomePageContentContainer = styled.div`
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  position: absolute;
`;

export const HomePageContentTitle = styled.span`
  font-weight: bold;
  font-size: 26px;
  color: white;
`;

export const HomePageContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
  color: white;
`;
import styled from "@emotion/styled";

export const StatisticsTitle = styled.h2`
    font-size: 42px;
    margin-top: 60px;
    margin-bottom: 10px;
`

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: black;
  flex-direction: column;
  margin-bottom: 60px;
`

export const StatisticsList = styled.ul`
display: flex;
justify-content: center;
align-items: center;
list-style-type: none;
width: 420px;
padding: 0;
margin-top: 10px;
margin-bottom: 0px;
border: solid 1px #f1a6b9;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

& :last-of-type{
    border:none;
}

`

export const StatisticsItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-right: solid 2px #f1a6b9;
   background-color: ${({ id }) => {
  if (id === 'id-1') {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  } else {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
  }
}};
  &:hover,
  &:focus {
    background-color: #f1a6b9
  }
 
`

export const StatisticsLabel = styled.span`
     margin-bottom: 10px;
    font-weight: 500;
`

export const StatisticsPer = styled.span`
    margin-bottom: 10px;
    font-weight: 500; 
`
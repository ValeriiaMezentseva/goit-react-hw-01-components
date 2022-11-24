import styled from "@emotion/styled";

export const ProfileCard = styled.div`
   display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: black;
  flex-direction: column;
`
export const ProfileInfo = styled.div`
   display: flex;
    width: 420px;
    height: 620px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: solid 1px gray;
    background-color: #eeeeeebb;
     box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`
export const ProfileImage = styled.img`
   padding-top: 10px;
   margin-top: 15px;
   margin-left: 10px;
   margin-right: 10px;
   margin-bottom: 40px;
   border: solid 1px gray;
   border-radius: 50%;
`
export const ProfileName = styled.p`
    margin-bottom: 30px;
    margin-top: 0;
    font-size: 40px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;

`
export const ProfileTag = styled.p`
  margin-bottom: 10px;
  margin-top: 0;  
  color: gray;
&:hover,
&:focus {
    color: #f1a6b9
  }
`

export const ProfileLocation = styled.p`
    margin-bottom: 10px;
    margin-top: 0;  
     color: gray;
     &:hover,
      &:focus {
    color: #f1a6b9
  }
`

export const StatsList = styled.ul`
display: flex;
justify-content: center;
align-items: center;
list-style-type: none;
width: 420px;
padding: 0;
margin-top: 10px;
margin-bottom: 0px;
border: solid 1px gray; 
background-color: #dcdbdbca; 
 box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
& :last-of-type{
    border:none;
}

`

export const StatsItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-right: solid 1px black;

  &:hover,
  &:focus {
    background-color: #f1a6b9
  }
`

export const StatsLabel = styled.span`
    margin-bottom: 10px;
    font-weight: 500;
    margin-right: 10px;
`

export const StatsQuantity = styled.span`
  margin-right: 10px;

`
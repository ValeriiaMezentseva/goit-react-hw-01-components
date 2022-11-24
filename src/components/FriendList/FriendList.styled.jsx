import styled from "@emotion/styled";

export const List = styled.ul`
    list-style-type: none;
    width: 320px;
    margin: 0;
    padding: 0;
`

export const FriendListItem = styled.li`
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 20px;
  display: block;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    &:hover,
    &:focus {
    background-color: #f1a6b9
  }
`

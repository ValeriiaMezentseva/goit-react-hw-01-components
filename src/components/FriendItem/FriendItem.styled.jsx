import styled from "@emotion/styled";

export const FriendCard = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
`

export const FriendOnline = styled.span`
width: 20px;
height: 20px;
margin-right: 20px;
border-radius: 50%;
background-color: ${({ isOnline }) => {
    if (isOnline) {
        return 'green';
    } else {
        return 'red'
    }
}
    };
`
export const FriendImage = styled.img`
    margin-right: 20px;
` 

export const FriendName = styled.p`
    font-size: 32px;
`
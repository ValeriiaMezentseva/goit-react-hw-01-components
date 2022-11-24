import PropTypes from 'prop-types';
import { FriendCard, FriendOnline, FriendImage, FriendName } from './FriendItem.styled';

export const FriendItem = ({ avatar, name, isOnline }) => {
    return (
        <FriendCard>
            <FriendOnline isOnline={isOnline}></FriendOnline>
            <FriendImage src={avatar} alt="User avatar" width="48" />
            <FriendName>{name}</FriendName>
        </FriendCard>)
}

FriendItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
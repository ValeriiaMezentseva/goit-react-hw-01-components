import PropTypes from 'prop-types';
import { FriendItem } from 'components/FriendItem/FriendItem';
import { FriendListItem, List } from './FriendList.styled';


export const FriendList = ({ friends }) => {
    return (
        <List>
            {friends.map(friend => {
                return (<FriendListItem key={friend.id}>
                    <FriendItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline} />
                </FriendListItem>
                );
            })}
        </List>
    )
};

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,

}

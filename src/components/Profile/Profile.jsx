import PropTypes from 'prop-types';
import { ProfileCard, ProfileInfo, ProfileImage, ProfileName, ProfileTag, ProfileLocation, StatsList, StatsItem, StatsLabel, StatsQuantity  } from './profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return <ProfileCard>
        <ProfileInfo>
        <ProfileImage src={avatar} alt="User avatar" width="200" />
            <ProfileName>{username}</ProfileName>
            <ProfileTag>@{tag}</ProfileTag>
            <ProfileLocation>{location}</ProfileLocation>
        </ProfileInfo>
        <StatsList>
            <StatsItem>
                <StatsLabel>Followers</StatsLabel>
                <StatsQuantity>{stats.followers}</StatsQuantity>
            </StatsItem>
            <StatsItem>
                <StatsLabel>Views</StatsLabel>
                <StatsQuantity>{stats.views}</StatsQuantity>
            </StatsItem>
            <StatsItem>
                <StatsLabel>Likes</StatsLabel>
                <StatsQuantity>{stats.likes}</StatsQuantity>
            </StatsItem>
        </StatsList>
    </ProfileCard>
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
}; 
import PropTypes from 'prop-types';
import { StatisticsTitle, Container, StatisticsList, StatisticsItem, StatisticsLabel, StatisticsPer} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return <Container>
        {title && <StatisticsTitle>{title}</StatisticsTitle>}
        <StatisticsList>
            {stats.map(stat => (
                <StatisticsItem key={stat.id}>
                    <StatisticsLabel>{stat.label}</StatisticsLabel>
                    <StatisticsPer>{stat.percentage}</StatisticsPer>
                </StatisticsItem>
            ))}
        </StatisticsList>
    </Container>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })
    ),
};
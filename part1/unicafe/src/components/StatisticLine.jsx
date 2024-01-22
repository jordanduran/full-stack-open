import PropTypes from 'prop-types';

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>
        {text} {value}
      </td>
    </tr>
  );
};

StatisticLine.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default StatisticLine;

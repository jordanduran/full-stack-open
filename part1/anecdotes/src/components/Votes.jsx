import PropTypes from 'prop-types';

const Votes = ({ votes, selected }) => {
  return <p>has {votes[selected]} votes</p>;
};

Votes.propTypes = {
  votes: PropTypes.array.isRequired,
  selected: PropTypes.number.isRequired,
};

export default Votes;

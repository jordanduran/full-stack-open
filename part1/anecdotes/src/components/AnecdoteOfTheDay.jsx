import PropTypes from 'prop-types';
import Votes from './Votes';

const AnecdoteOfTheDay = ({ anecdotes, selected, votes }) => {
  return (
    <>
      <h1>Anecdote Of The Day</h1>
      <p>{anecdotes[selected]}</p>
      <Votes votes={votes} selected={selected} />
    </>
  );
};

AnecdoteOfTheDay.propTypes = {
  anecdotes: PropTypes.array.isRequired,
  selected: PropTypes.number.isRequired,
  votes: PropTypes.array.isRequired,
};

export default AnecdoteOfTheDay;

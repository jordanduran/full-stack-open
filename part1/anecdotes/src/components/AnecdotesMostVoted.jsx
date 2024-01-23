import PropTypes from 'prop-types';

const AnecdotesMostVoted = ({ anecdotes, votes }) => {
  const mostVoted = Math.max(...votes);
  const index = votes.indexOf(mostVoted);

  if (!mostVoted) {
    return <p>No votes have been made</p>;
  }

  return (
    <>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[index]}</p>
    </>
  );
};

AnecdotesMostVoted.propTypes = {
  anecdotes: PropTypes.array.isRequired,
  votes: PropTypes.array.isRequired,
};

export default AnecdotesMostVoted;

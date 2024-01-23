import { useState } from 'react';
import Button from './components/Button';
import AnecdoteOfTheDay from './components/AnecdoteOfTheDay';
import AnecdotesMostVoted from './components/AnecdotesMostVoted';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const handleRandomAnecdote = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    if (random === selected) {
      setSelected(random + 1);
    } else {
      setSelected(random);
    }
  };

  const handleVote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  console.log(votes);

  return (
    <div>
      <AnecdoteOfTheDay
        anecdotes={anecdotes}
        selected={selected}
        votes={votes}
      />
      <div>
        <Button onClick={handleVote} text='vote' />
        <Button onClick={handleRandomAnecdote} text='next anecdote' />
      </div>
      <div>
        <AnecdotesMostVoted
          anecdotes={anecdotes}
          votes={votes}
          selected={selected}
        />
      </div>
    </div>
  );
};

export default App;

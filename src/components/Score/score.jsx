const Score = (props) => {
  return ( 
  <div>
  {props.scores.map(score =>
    <p> {score.score} {score.date} </p>
    
    )}

  </div>

  );
}

export default Score;

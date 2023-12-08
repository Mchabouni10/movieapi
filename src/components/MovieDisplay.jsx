import React from 'react';

const MovieDisplay = (props) => {
  const { currentMovie } = props;

  const loaded = () => (
    <div className='Display'>
      <div className="left-column">
      <h1>{currentMovie.Title}</h1>
        <img className='imageCover' src={currentMovie.Poster} alt={currentMovie.Title} />
        
      </div>

      <div className="right-column">
        <h2>Details:</h2>
        <ul>
          {Object.entries(currentMovie).map(([key, value]) => (
            <li key={key}>
              <strong className='detailsMovie'>{key}:</strong> {typeof value === 'object' ? JSON.stringify(value) : value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const loading = () => <h1>Buffering...</h1>;

  return props.currentMovie ? loaded() : loading();
};

export default MovieDisplay;
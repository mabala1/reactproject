import React from 'react';
import { connect } from 'react-redux';
import { setWordHinted } from '../actions';
import './WordList.css';
import Menu from '../Menu/Menu';
import Grid from '../Grid/Grid';
import Card from '@material-ui/core/Card';
import Sound from 'react-sound';


export function WordList({ words, showWordHints, setWordHinted }) {
  console.log(words)
  console.log(showWordHints)
  console.log(setWordHinted)
  setWordHinted = showWordHints ? setWordHinted : (() => null);

  return (
    <div>
      <Grid />
    <ul className="WordList">

      {words.map(({ word, hinted, solved }) => (
        <li key={word}
            className={((hinted ? 'hinted ' : ' ') + (solved ? 'solved' : '')).trim()}
            onMouseOut={() => setWordHinted(word, false)}
            onMouseOver={() => setWordHinted(word, true)}>
          {word}
        </li>))}
    </ul>
    
    </div>
  );
}

function mapStateToProps({ settings, words }) {
  return {
    showWordHints: settings.showWordHints,
    words: Object.values(words)
  };
}

export default connect(mapStateToProps, { setWordHinted })(WordList);

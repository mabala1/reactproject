import React from 'react';
import { connect } from 'react-redux';
import { mergeSettings } from '../actions';
import './Menu.css';
import Button from '@material-ui/core/Button';


export function Menu({ settings, mergeSettings }) {
  const { expandMenu, showWordList, showWordHints } = settings;

  const handleShowHideClick = () => {
    mergeSettings({ expandMenu: !expandMenu });
  }

  const handleShowWordListChange = event => {
    mergeSettings({ showWordList: event.target.checked });
  }

  const handleShowWordHintsChange = event => {
    mergeSettings({ showWordHints: event.target.checked });
  }

  return (
    <div className={'Menu' + (expandMenu ? ' expanded' : '')}>
      <nav>
        <Button variant="contained" color="primary" style={{backgroundColor:"#ff33bb"}}  onClick={handleShowHideClick}>
          {expandMenu ? 'close' : 'menu'}
        </Button>
      </nav>

      {expandMenu &&
        <div>
          <div>
            <input type="checkbox"
                   id="show-word-list"
                   onChange={handleShowWordListChange}
                   checked={showWordList} />
            <label htmlFor="show-word-list">Show word list</label>
          </div>

          {showWordList && 
            <div>
              <input type="checkbox"
                     id="show-word-hints"
                     onChange={handleShowWordHintsChange}
                     checked={showWordHints} />
              <label htmlFor="show-word-hints">
                Touch or hover over a word to highlight its location
              </label>
            </div>}
        </div>}
    </div>
  );
}

function mapStateToProps({ settings }) {
  return { settings };
}

export default connect(mapStateToProps, { mergeSettings })(Menu);

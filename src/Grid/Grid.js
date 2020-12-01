import React from 'react';
import { connect } from 'react-redux';
import { attemptSolution } from '../actions';
import _ from 'lodash';
import './Grid.css';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Menu from '../Menu/Menu';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Box from '@material-ui/core/Box';
import WordList from '../WordList/WordList';



const CELL_WIDTH = 30;
const CELL_HEIGHT = 30;
const CELL_FONT_SIZE = 24;
const CELL_PADDING_Y = CELL_HEIGHT - CELL_FONT_SIZE;

export class Grid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      proposedSolution: null,
      hoverCell: null
    };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchCancel = this.handleTouchCancel.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
  }

  startSelection(event) {
    const coords = {
      x: event.clientX - this.svg.getBoundingClientRect().left,
      y: event.clientY - this.svg.getBoundingClientRect().top
    };
    this.setState({
      proposedSolution: {
        start: coords,
        end: coords
      }});
  }


  updateSelection(event) {
    // Update hoverCell in order to highlight the cell that the
    // mouse is currently in, and also update proposedSolution
    // if the user is in the process of making a selection.
    const coords = {
      x: event.clientX - this.svg.getBoundingClientRect().left,
      y: event.clientY - this.svg.getBoundingClientRect().top
    };
    const cellCoords = {
      x: Math.floor(coords.x / 30),
      y: Math.floor(coords.y / 30)
    };
    this.setState(prevState => {
      const state = { hoverCell: cellCoords };
      if (prevState.proposedSolution) {
        state.proposedSolution = {
          start: prevState.proposedSolution.start,
          end: coords
        };
      }
      return state;
    });
  }



  finishSelection() {
    if (!this.state.proposedSolution) {
      return;
    }

    this.props.attemptSolution(
    {
      x: Math.floor(this.state.proposedSolution.start.x / 30),
      y: Math.floor(this.state.proposedSolution.start.y / 30)
    },
    {
      x: Math.floor(this.state.proposedSolution.end.x / 30),
      y: Math.floor(this.state.proposedSolution.end.y / 30)
    }
    );
    this.setState({ proposedSolution: null });
  }

  handleMouseDown(event) {
    if (this.state.proposedSolution) {
      // The user already clicked on the grid earlier to start a
      // selection; we'll complete their selection on the next
      // mouseup event.
      return;
    }

    this.startSelection(event);
    event.preventDefault();
  }

  handleMouseMove(event) {
    this.updateSelection(event);
    event.preventDefault();
  }

  handleMouseUp(event) {
    if (this.state.proposedSolution) {
      const { start, end } = this.state.proposedSolution;
      // If the mouse hasn't moved since the mousedown event,
      // we'll assume the user just clicked to choose their starting
      // point and wants to click again to choose the ending point.
      // Otherwise, the user has either finished dragging from the
      // start to the end point, or they've finished clicking to
      // indicate the end point, so it's time to check whether
      // they've actually found a word.
      if (!_.isEqual(start, end)) {
        this.finishSelection();
        event.preventDefault();
      }
    }
  }

  handleMouseLeave() {
    this.setState({ hoverCell: null });
  }

  handleTouchStart(event) {
    this.startSelection(event.touches[0]);
    event.preventDefault();
  }

  handleTouchMove(event) {
    this.updateSelection(event.touches[0]);
    event.preventDefault();
  }

  handleTouchCancel() {
    this.setState({ proposedSolution: null, hoverCell: null });
  }

  handleTouchEnd(event) {
    this.finishSelection();
    this.setState({ proposedSolution: null, hoverCell: null });
    event.preventDefault();
  }

  render() {
    const { grid, words } = this.props;
    return (
     <Card style={{border: 0,
      borderRadius: 10,
      borderColor:"black",
      width:"70%",
      height:"400px", 
      marginLeft:"15%",
      marginTop:"5%",
      backgroundColor:"#66b3ff"
    }}  elevation={10} >
    <Card style={{ position: 'absolute',
    top: '90px',
    left: '135px',
    width:90,
    height:400,
    marginLeft:"67.5%",
    marginTop:"3%",
    backgroundColor: ' #ff33bb',
    color:"white",
  }} elevation={10} >
  <CardActionArea>
  <CardContent>
 <Typography style={{marginTop:""}}>Hi</Typography>
  <Typography>Run</Typography>
   <Typography>Trip</Typography>
    <Typography>How</Typography>
     <Typography>Rum</Typography>


  </CardContent>
  </CardActionArea>
  </Card>
  <CardActionArea>
  <CardContent>
  <div style={{display:"flex"}}>
  <Typography style={{color:"white",marginLeft:"10%",fontSize:"25px"}}>Web Search Game.</Typography>
    </div>
  <svg xmlns="http://www.w3.org/2000/svg"
  width={30*grid[0].length} height={30*grid.length}
  className="Grid"
  onMouseDown={this.handleMouseDown}
  onMouseMove={this.handleMouseMove}
  onMouseUp={this.handleMouseUp}
  onMouseLeave={this.handleMouseLeave}
  onTouchStart={this.handleTouchStart}
  onTouchMove={this.handleTouchMove}
  onTouchCancel={this.handleTouchCancel}
  onTouchEnd={this.handleTouchEnd}
  style={{marginTop:"50px",marginLeft:"30%"}}
  ref={svg => this.svg = svg} >

  {this.state.hoverCell &&
    <rect className="hover"
    x={this.state.hoverCell.x * CELL_WIDTH}
    y={this.state.hoverCell.y * CELL_HEIGHT}
    width={CELL_WIDTH}
    height={CELL_HEIGHT} />}
    {grid.map((row, y) =>
      row.map((letter, x) => (
        <text key={[x, y]}
        x={x * CELL_WIDTH + (CELL_WIDTH / 2)}
        y={(y + 1) * CELL_HEIGHT - CELL_PADDING_Y}
        fontSize={CELL_FONT_SIZE}
        textAnchor="middle">
         <rect className="hover"/>
        {letter}
        </text>)))}


        {words.filter(word => word.hinted || word.solved)
          .map(({word, start, end, hinted, solved}) => (
          <line className={hinted ? 'hinted' : 'solved'}
          key={word}
          x1={start.x * CELL_WIDTH + (CELL_WIDTH / 2)}
          y1={start.y * CELL_HEIGHT + (CELL_HEIGHT / 2)}
          x2={end.x * CELL_WIDTH + (CELL_WIDTH / 2)}
          y2={end.y * CELL_HEIGHT + (CELL_HEIGHT / 2)} />))}

          {this.state.proposedSolution &&
            <line className="solved"
            key="_proposed_solution"
            x1={this.state.proposedSolution.start.x}
            x2={this.state.proposedSolution.end.x}
            y1={this.state.proposedSolution.start.y}
            y2={this.state.proposedSolution.end.y} />}
            </svg>
            </CardContent>
            <Button  style={{marginTop:"5%",marginLeft:"5%",backgroundColor:"#ff33bb"}}variant="contained" color="primary"  >
            Start
            </Button>
            </CardActionArea>  
            </Card>




            );
          }
        }

        const mapStateToProps = ({ grid, words }) => ({ grid, words: Object.values(words) });

        function mapDispatchToProps(dispatch) {
          return {
            attemptSolution: (start, end) => dispatch(attemptSolution(start, end))
          };
        }

        export default connect(mapStateToProps, mapDispatchToProps)(Grid);

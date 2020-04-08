import React from 'react'
import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

class CardItems extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
 
  componentDidMount() {
    axios
      .get(`https://api.github.com/users/1devhall/followers`)
      .then(res => this.setState(res));
  }
  
  render() {
    // const { classes } = this.props;
    console.log(this.state.login);

    return this.state.data.map(e => {
      return (
        <div>
          <img src={e.avatar_url} />
        {/* <Card className={this.classes.root}> */}
          {/* <CardActionArea> */}
            {/* <CardMedia 
              className={this.classes.media}
              image={e.avatar_url} 
          /> */}

            <p>{e.login}</p>
          {/* </CardActionArea> */}

              <p>{e.html_url}</p>
              <p>Site Type: {e.type}</p>
        {/* </Card> */}
        </div>
      );
    });
  }
}

export default (CardItems)
// export default makeStyles(useStyles)(CardItems)
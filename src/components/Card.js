import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import MuiCard from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: '400px',
  },
}));

const Card = props => {
  const classes = useStyles();
  const { entry, image } = props;

  return (
    <MuiCard className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={entry.image}
          height="160px"
          src={image}
          title={entry.head}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {entry.head}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            {entry.subhead}
          </Typography>
          <Typography variant="body2" component="p">
            {entry.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {entry.link ? (
          <Button size="small" color="secondary" href={entry.link}>
            Learn More
          </Button>
        ) : null}
      </CardActions>
    </MuiCard>
  );
};

export default Card;

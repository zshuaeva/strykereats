
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './RecipeList.css'
import { ClassNames } from '@emotion/react';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  useEffect(() => {
    fetch('http://localhost:8000/api/recipes/')
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="recipeApp">
      <h1>Recipe List</h1>
        {recipes.map((recipe, index) => (
          <li key={index}>
            {/* <h3>{recipe.recipe_title}</h3>
            <p>Recipe made for  {recipe.cook_type}</p>
            <p>Cooktime: {recipe.recipe_length} Minutes</p>
            <p>recipe added: {recipe.date_added} </p> */}



<Card sx={{ maxWidth: 345 }} className="card-container">
<CardHeader className="cardhead"
  avatar={
    <Avatar sx={{ bgcolor: red[0] }} aria-label="recipe">
      Eat
    </Avatar>
  }
  action={
    <IconButton aria-label="settings">
      <MoreVertIcon />
    </IconButton>
  }
  title= {recipe.recipe_title}
  subheader={recipe.cook_type}
/>
<CardMedia
className="cardmedia"
  component="img"
  height="194"
  image="/static/images/cards/paella.jpg"
  alt="photo api search string go here"
/>
<CardContent className="card-content">
  <Typography className="typo1"
  variant="body2">
loren ipsum mothafucking dish description go here and loren ipsum and shit
  </Typography>
</CardContent>
<CardActions disableSpacing>
  <IconButton aria-label="add to favorites">
    <FavoriteIcon />
  </IconButton>
  <IconButton aria-label="share">
    <ShareIcon />
  </IconButton>
  <ExpandMore
    expand={expanded}
    onClick={handleExpandClick}
    aria-expanded={expanded}
    aria-label="show more"
  >
    <ExpandMoreIcon />
  </ExpandMore>
</CardActions>
<Collapse in={expanded} timeout="auto" unmountOnExit>
  <CardContent>
    <Typography paragraph>Recipe Directions:</Typography>
    <Typography paragraph>
    loren ipsum mothafucking dish directions go here and loren ipsum and shit
    </Typography>
    <Typography paragraph>
    loren ipsum mothafucking dish directions go here and loren ipsum and shitloren ipsum mothafucking dish directions go here and loren ipsum and shitloren ipsum mothafucking dish directions go here and loren ipsum and shitloren ipsum mothafucking dish directions go here and loren ipsum and shitloren ipsum mothafucking dish directions go here and loren ipsum and shitloren ipsum mothafucking dish directions go here and loren ipsum and shitloren ipsum mothafucking dish directions go here and loren ipsum and shitloren ipsum mothafucking dish directions go here and loren ipsum and shitloren ipsum mothafucking dish directions go here and loren ipsum and shitloren ipsum mothafucking dish directions go here and loren ipsum and shit
    </Typography>
    <Typography paragraph>
      Add rice and stir very gently to distribute. Top with artichokes and
      peppers, and cook without stirring, until most of the liquid is absorbed,
      15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
      mussels, tucking them down into the rice, and cook again without
      stirring, until mussels have opened and rice is just tender, 5 to 7
      minutes more. (Discard any mussels that don&apos;t open.)
    </Typography>
    <Typography>
      Set aside off of the heat to let rest for 10 minutes, and then serve.
    </Typography>
  </CardContent>
</Collapse>
</Card>
</li>
        ))}
</div>
);//end of return
}; //end of function

export default RecipeList;


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
  const [imageURLs, setImageURLs] = useState({});


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  useEffect(() => {
    fetch('http://localhost:8000/api/recipes/')
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    const getImageURLs = async () => {
      const imageURLs = {};
      for (const recipe of recipes) {
        try {
          const url = await fetchPexelsImage(recipe.recipe_title);
          imageURLs[recipe.recipe_title] = url;
        } catch (error) {
          console.error('Error fetching image from Pexels:', error);
        }
      }
      setImageURLs(imageURLs);
    };

    getImageURLs();
  }, [recipes]);



  const fetchPexelsImage = async (searchTerm) => {
    const apiKey = 'kuiZ1yQM5BWjKufVXL9LeVhvpfcD2kIjpQvFl1kOG8fYD7u54zYDeqsh';
    const apiUrl = `https://api.pexels.com/v1/search?query=${encodeURIComponent(searchTerm)}`;
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `${apiKey}`,
      },
    });
    const data = await response.json();
    return data.photos[0].src.medium;
  };




    return (
      <div className="recipeApp">
        {recipes.map((recipe, index) => (
          <div className="new-card" key={index}>
            <Card sx={{ maxWidth: 345 }} className="card-container">
              <CardHeader
                className="cardhead"
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
                title={recipe.recipe_title}
                subheader={recipe.cook_type}
              />

<div className="soloCard">
<CardMedia
  className="cardmedia"
  component="img"
  height="194"
  image={imageURLs[recipe.recipe_title]}
  alt="API Photo"
/>
</div>
<CardContent className="card-content">
  <Typography className="typo1"
  variant="body2">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Typography>
    <Typography paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Typography>
    <Typography paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Typography>
    <Typography>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Typography>
  </CardContent>
</Collapse>
</Card>
</div>
        ))}
</div>
);//end of return
}; //end of function

export default RecipeList;

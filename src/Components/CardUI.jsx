import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'

const CardUI = (props) => {
  const { meme } = props
  const navigate = useNavigate()
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="340"
        image={meme.url}
      />
      <CardActions>
        <Button onClick={() => navigate(`/edit?url=${meme.url}`)} variant="outlined" size="small">Navigate</Button>
      </CardActions>
    </Card>
  );
}

export default CardUI
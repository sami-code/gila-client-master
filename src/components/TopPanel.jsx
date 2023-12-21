import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const TopPanel = () => {

  return (

    <Paper className='top-panel submission-paper' elevation={7} sx={{ bgcolor: '#fff' }}>
      <Link to="/">
        <Button variant="text" size="small" sx={{ color: '#3A3799', width: '15%', border: '2px solid #3A3799' }}>Send Message</Button>
      </Link>
      <Link to="/logs">
        <Button variant="contained" size="small" sx={{ bgcolor: '#3A3799', width: '15%', marginLeft: '1.4%', ':hover': { bgcolor: '#3A3799' } }}>
          Log History
        </Button>
      </Link>

    </Paper>
  );
}

export default TopPanel;

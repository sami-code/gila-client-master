import { Typography } from "@mui/material";

const Title = ({ text }) => {
  return (
    <div className='submission-title'>
      <Typography variant='subtitle'>{text}</Typography>
    </div>
  );
}

export default Title;

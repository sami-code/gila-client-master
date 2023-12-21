import * as React from 'react';
import Paper from '@mui/material/Paper';
import ChannelOptions from './ChannelOptions';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import MessageText from './MessageText';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { ThemeProvider } from '@mui/material/styles';
import purpleTheme from './themes/purpleTheme';
import Title from './Title';
import MessageService from '../Services/MessageService';


const categories = ['SPORTS', 'FINANCE', 'MOVIES'];

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert color="purple" elevation={6} ref={ref} variant="filled" {...props} />;
});

function SubmissionForm() {

  const [selectedCategory, setSelectedCategory] = React.useState(0);
  const [message, setMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [alert, setAlert] = React.useState('');
  const [severity, setSeverity] = React.useState('warning');

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = () => {
    if (message === '') {
      setAlert('Message cannot be empty');
      setSeverity('warning');
      handleClick();
      return;
    }

    MessageService.sendmessage({ category: categories[selectedCategory], message: message }).then((response) => {
      setAlert('Messages Sent');
      setSeverity('success');
      setOpen(true);
    }
    ).catch((error) => {
      setAlert('Error sending message');
      setSeverity('error');
      console.log(error);
    }
    );

  }

  return (
    <>
      <Paper className='submission-paper' elevation={6}>
        <Title text={'Send Message'} />

        <div className='submission-form-main'>
          <ChannelOptions options={categories} selectedIndex={selectedCategory} setSelectedIndex={setSelectedCategory} type={'Category'} />
          <MessageText message={message} setMessage={setMessage} />

          <div className='submit-btn'>
            <Button variant="contained" endIcon={<SendIcon />} onClick={handleSubmit}>
              Send
            </Button>
          </div>
        </div>
      </Paper >
      <ThemeProvider theme={purpleTheme}>

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{
          vertical: 'top', horizontal: 'right'
        }}>
          <Alert onClose={handleClose} severity={severity} sx={{ width: '100%', backgrounColor: 'white' }}>
            {alert}
          </Alert>
        </Snackbar>
      </ThemeProvider>
    </>
  );
}

export default SubmissionForm;

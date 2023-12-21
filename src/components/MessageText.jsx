import TextField from '@mui/material/TextField';

const MessageText = ({ message, setMessage }) => {
  return (<div className='submission-form'>
    <TextField
      id="outlined-multiline-static"
      label="Message"
      multiline
      rows={5}
      className='submission-text-container'
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    />
  </div>);
}

export default MessageText;

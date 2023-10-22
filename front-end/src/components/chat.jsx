import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Grid } from '@mui/material';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleNewMessage = (e) => {
    setNewMessage(e.target.value);
  };

  const sendMessage = () => {
    if (newMessage) {
      setMessages([...messages, { text: newMessage, user: 'You' }]);
      setNewMessage('');
    }
  };

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <div className="chat-container">
            {messages.map((message, index) => (
              <div key={index} className="chat-message">
                <strong>{message.user}:</strong> {message.text}
              </div>
            ))}
          </div>
        </Grid>
        <Grid item xs={10}>
          <TextField
            fullWidth
            variant="outlined"
            value={newMessage}
            onChange={handleNewMessage}
            placeholder="Type your message..."
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={sendMessage}
            style={{ height: '100%' }}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Chat;

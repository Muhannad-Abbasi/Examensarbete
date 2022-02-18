import { Button, Card, CircularProgress, TextField } from '@mui/material';
import React, { useState } from 'react';
import CelebrationIcon from '@mui/icons-material/Celebration';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsLoading(true);
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <Card
      sx={{
        marginTop: 10,
        maxWidth: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: '24px'
      }}>
      <h3 style={{ color: '#004e31', marginTop: '0', textAlign: 'center' }}>Contact us and we will tell you more</h3>
      {isSubmitted ? (
        <div style={{ textAlign: 'center' }}>
          <CelebrationIcon fontSize="large" sx={{ color: '#004F34' }} />
          <br />
          Thank you, we will get back to you soon!!
        </div>
      ) : (
        <div style={{ width: '260px' }}>
          <TextField
            sx={{ display: 'block', mb: '16px' }}
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            sx={{ display: 'block', mb: '16px' }}
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            sx={{ display: 'block', mb: '16px' }}
            label="Phone"
            variant="outlined"
            fullWidth
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
          <Button
            sx={{ width: '100%', backgroundColor: '#004F34' }}
            variant="contained"
            onClick={submitForm}
            disabled={isLoading}>
            Submit
            {isLoading && <CircularProgress size={20} sx={{ position: 'absolute' }} />}
          </Button>
        </div>
      )}
    </Card>
  );
}

import React from 'react'

import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#357960',
  textAlign: 'center',
  borderRadius: '5px',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function GameOver({ word }) {
  const [open, setOpen] = React.useState(true)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          You lost!
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Correct word: { word }
        </Typography>
        <div onClick={ () => window.location.reload(true)}>Play another game!</div>
      </Box>
    </Modal>
  )
}
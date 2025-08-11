import { Box, CircularProgress, Typography } from '@mui/material'

const LoadingSpinner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: 'background.default'
      }}
    >
      <CircularProgress size={60} thickness={4} />
      <Typography variant="body1" sx={{ mt: 2 }} color="text.secondary">
        Chargement...
      </Typography>
    </Box>
  )
}

export default LoadingSpinner
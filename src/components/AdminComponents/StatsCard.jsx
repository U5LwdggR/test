import { Card, CardContent, Typography, Box, Avatar } from '@mui/material'
import {
  People as PeopleIcon,
  TrendingUp as TrendingUpIcon,
  Analytics as AnalyticsIcon,
  Euro as EuroIcon
} from '@mui/icons-material'

const iconMap = {
  people: PeopleIcon,
  trending_up: TrendingUpIcon,
  analytics: AnalyticsIcon,
  euro: EuroIcon
}

const colorMap = {
  primary: '#1976D2',
  success: '#4CAF50',
  warning: '#FF9800',
  secondary: '#DC004E'
}

const StatsCard = ({ title, value, icon, color = 'primary' }) => {
  const IconComponent = iconMap[icon] || PeopleIcon
  const iconColor = colorMap[color] || colorMap.primary

  return (
    <Card
      sx={{
        height: '100%',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.95) 100%)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.2)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)'
        }
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h4" fontWeight={700} color="text.primary">
              {value}
            </Typography>
          </Box>
          <Avatar
            sx={{
              bgcolor: iconColor,
              width: 56,
              height: 56,
              boxShadow: `0 8px 24px ${iconColor}30`
            }}
          >
            <IconComponent sx={{ fontSize: 28 }} />
          </Avatar>
        </Box>
      </CardContent>
    </Card>
  )
}

export default StatsCard
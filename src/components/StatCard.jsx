import React from 'react';
import { Card, CardContent, Typography, Box, Avatar } from '@mui/material';

const StatCard = ({ title, value, subtitle, icon, color = 'primary', trend }) => {
  return (
    <Card 
      elevation={0}
      sx={{ 
        height: '100%',
        border: '1px solid #e0e0e0',
        borderRadius: 3,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
        }
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'text.secondary',
                fontWeight: 500,
                mb: 1
              }}
            >
              {title}
            </Typography>
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 700,
                color: 'text.primary',
                mb: 0.5
              }}
            >
              {value}
            </Typography>
            {subtitle && (
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'text.secondary',
                  fontSize: '0.875rem'
                }}
              >
                {subtitle}
              </Typography>
            )}
            {trend && (
              <Typography 
                variant="caption" 
                sx={{ 
                  color: trend.positive ? 'success.main' : 'error.main',
                  fontWeight: 600,
                  mt: 0.5,
                  display: 'block'
                }}
              >
                {trend.value}
              </Typography>
            )}
          </Box>
          
          <Avatar
            sx={{
              backgroundColor: `${color}.light`,
              width: 56,
              height: 56,
              '& .MuiSvgIcon-root': {
                color: `${color}.main`,
                fontSize: '1.5rem'
              }
            }}
          >
            {icon}
          </Avatar>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatCard;
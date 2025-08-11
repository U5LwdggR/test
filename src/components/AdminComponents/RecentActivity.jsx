import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Chip,
  Box
} from '@mui/material'
import {
  PersonAdd as PersonAddIcon,
  TrendingUp as TrendingUpIcon,
  Edit as EditIcon
} from '@mui/icons-material'

const activities = [
  {
    id: 1,
    type: 'add',
    title: 'Nouvel actionnaire ajouté',
    description: 'Sophie Bernard a été ajoutée avec 12 000 actions',
    time: 'Il y a 2 heures',
    icon: PersonAddIcon,
    color: 'success'
  },
  {
    id: 2,
    type: 'emission',
    title: 'Émission d\'actions',
    description: '5 000 nouvelles actions émises pour Pierre Legrand',
    time: 'Il y a 1 jour',
    icon: TrendingUpIcon,
    color: 'primary'
  },
  {
    id: 3,
    type: 'edit',
    title: 'Modification actionnaire',
    description: 'Mise à jour des informations de Jean Dupont',
    time: 'Il y a 3 jours',
    icon: EditIcon,
    color: 'warning'
  },
  {
    id: 4,
    type: 'add',
    title: 'Nouvel actionnaire ajouté',
    description: 'Marie Martin a rejoint avec 18 000 actions',
    time: 'Il y a 1 semaine',
    icon: PersonAddIcon,
    color: 'success'
  }
]

const RecentActivity = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" fontWeight={600}>
            Activité Récente
          </Typography>
          <Chip
            label={`${activities.length} activités`}
            size="small"
            color="primary"
            variant="outlined"
          />
        </Box>
        
        <List sx={{ p: 0 }}>
          {activities.map((activity, index) => {
            const IconComponent = activity.icon
            return (
              <ListItem
                key={activity.id}
                sx={{
                  px: 0,
                  ...(index !== activities.length - 1 && { borderBottom: '1px solid', borderColor: 'divider' })
                }}
              >
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      bgcolor: `${activity.color}.main`,
                      width: 40,
                      height: 40
                    }}
                  >
                    <IconComponent sx={{ fontSize: 20 }} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="body2" fontWeight={500}>
                      {activity.title}
                    </Typography>
                  }
                  secondary={
                    <Box>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                        {activity.description}
                      </Typography>
                      <Typography variant="caption" color="text.disabled">
                        {activity.time}
                      </Typography>
                    </Box>
                  }
                />
              </ListItem>
            )
          })}
        </List>
      </CardContent>
    </Card>
  )
}

export default RecentActivity
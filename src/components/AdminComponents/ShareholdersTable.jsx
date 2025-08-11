import {
  Delete as DeleteIcon,
  Description as DescriptionIcon,
  Edit as EditIcon,
  MoreVert as MoreVertIcon,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useData } from "../../contexts/DataContext";

const typeColors = {
  Fondateur: "primary",
  Investisseur: "success",
  Employé: "warning",
};

const ShareholdersTable = ({ showActions = false }) => {
  const { shareholders, deleteShareholder } = useData();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedShareholder, setSelectedShareholder] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleMenuOpen = (event, shareholder) => {
    setAnchorEl(event.currentTarget);
    setSelectedShareholder(shareholder);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedShareholder(null);
  };

  const handleDelete = () => {
    if (selectedShareholder) {
      deleteShareholder(selectedShareholder.id);
      handleMenuClose();
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const displayedShareholders = shareholders.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Card>
      <CardContent sx={{ p: 0 }}>
        <Box sx={{ p: 3, pb: 0 }}>
          <Typography variant="h6" fontWeight={600}>
            Liste des Actionnaires
          </Typography>
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Actionnaire</TableCell>
                <TableCell align="right">Actions</TableCell>
                <TableCell align="right">Pourcentage</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Date d'entrée</TableCell>
                {showActions && <TableCell align="center">Actions</TableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
              {displayedShareholders.map((shareholder) => (
                <TableRow key={shareholder.id} hover>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar
                        sx={{
                          mr: 2,
                          bgcolor: "primary.main",
                          width: 40,
                          height: 40,
                        }}
                      >
                        {shareholder.name.charAt(0)}
                      </Avatar>
                      <Box>
                        <Typography variant="body2" fontWeight={500}>
                          {shareholder.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {shareholder.email}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="body2" fontWeight={500}>
                      {shareholder.shares.toLocaleString()}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="body2" fontWeight={500}>
                      {shareholder.percentage}%
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={shareholder.type}
                      color={typeColors[shareholder.type] || "default"}
                      size="small"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">
                      {new Date(shareholder.dateJoined).toLocaleDateString(
                        "fr-FR"
                      )}
                    </Typography>
                  </TableCell>
                  {showActions && (
                    <TableCell align="center">
                      <IconButton
                        size="small"
                        onClick={(e) => handleMenuOpen(e, shareholder)}
                      >
                        <MoreVertIcon />
                      </IconButton>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={shareholders.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Lignes par page:"
          labelDisplayedRows={({ from, to, count }) =>
            `${from}-${to} sur ${count !== -1 ? count : `plus de ${to}`}`
          }
        />

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>
            <ListItemIcon>
              <EditIcon fontSize="small" />
            </ListItemIcon>
            Modifier
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <ListItemIcon>
              <DescriptionIcon fontSize="small" />
            </ListItemIcon>
            Certificat
          </MenuItem>
          <MenuItem onClick={handleDelete} sx={{ color: "error.main" }}>
            <ListItemIcon>
              <DeleteIcon fontSize="small" />
            </ListItemIcon>
            Supprimer
          </MenuItem>
        </Menu>
      </CardContent>
    </Card>
  );
};

export default ShareholdersTable;

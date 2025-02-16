import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

interface UserMenuProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  onClose: () => void;
}

export default function UserMenu({ anchorEl, open, onClose }: UserMenuProps) {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      onClick={onClose}
      style={{ top: '48px' }}
      transformOrigin={{ horizontal: 'center', vertical: 'bottom' }} // Позиция относительно кнопки
      anchorOrigin={{ horizontal: 'center', vertical: 'top' }} // Позиция меню
    >
      <MenuItem onClick={onClose}>
        <Avatar /> Profile
      </MenuItem>
      <MenuItem onClick={onClose}>
        <Avatar /> My account
      </MenuItem>
      <Divider />
      <MenuItem onClick={onClose}>
        <ListItemIcon>
          <PersonAdd fontSize="small" />
        </ListItemIcon>
        Add another account
      </MenuItem>
      <MenuItem onClick={onClose}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem onClick={onClose}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
}
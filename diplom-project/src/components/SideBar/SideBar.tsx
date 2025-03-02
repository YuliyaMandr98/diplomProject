import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import RestoreIcon from '@mui/icons-material/Restore';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import { NavLink } from 'react-router-dom';

interface SideBarProps {
    open: boolean;
    onClose: () => void;
}

export default function SideBar({ open, onClose }: SideBarProps) {
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={onClose}>
            <List>
                {['Статистика', 'История', 'Операции'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        {text === 'История' ? (
                            <NavLink to="/history" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <ShowChartIcon color={'primary'} /> : <RestoreIcon color={'primary'} />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </NavLink>
                        ) : (
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <ShowChartIcon color={'primary'} /> : <RestoreIcon color={'primary'} />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        )}
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {["Изменить тему"].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <ToggleOffIcon color={'primary'} /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Drawer open={open} onClose={onClose}>
            {DrawerList}
        </Drawer>
    );
}


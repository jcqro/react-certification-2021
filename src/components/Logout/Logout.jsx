import React, { useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DataContext from '../../context/DataContext';

export default function Logout() {
  const { setHasLoggedOut } = useContext(DataContext);
  const logout = () => {
    localStorage.removeItem('user');
    setHasLoggedOut(true);
  };

  return (
    <IconButton onClick={logout}>
      <Tooltip title="Logout" aria-label="Logout">
        <ExitToAppIcon color="secondary" />
      </Tooltip>
    </IconButton>
  );
}

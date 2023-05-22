import React, { useContext } from 'react';
import { When } from 'react-if';

import { createStyles, Button, getStylesRef, rem } from '@mantine/core';
import {
  IconLogout,
} from '@tabler/icons-react';

import { LoginContext } from '../../Context/Auth';
import LoginModal from './LoginModal.jsx';
import SignupModal from './SignupModal.jsx';

const useStyles = createStyles((theme) => ({
  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,

      [`& .${getStylesRef('icon')}`]: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef('icon'),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
      [`& .${getStylesRef('icon')}`]: {
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
      },
    },
  },
}));

function Login(){
  
  // eslint-disable-next-line
  const { classes, cx } = useStyles();

  const {state, login, logout, signup} = useContext(LoginContext);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [role, setRole] = React.useState('user');

  const handleChange = (e) =>{
    // console.log(e)
    if (e.target.name === 'username'){
      setUsername(e.target.value)
    }
    else if (e.target.name === 'password'){
      setPassword(e.target.value)
    }
    // console.log(username, password)
  }

  const handleSubmit = (e, callback) => {
    e.preventDefault();
    callback(username, password, role);
  };

    return (
      <>
        <When condition={state.loggedIn}>
        <Button onClick={logout} >
          <IconLogout />
          <span>Logout</span>
          </Button>
        </When>

        <When condition={!state.loggedIn}>
          <LoginModal 
          handleChange={handleChange} handleSubmit={handleSubmit}
          login={login} classes={classes} state={state}/>


        <SignupModal 
        signup={signup} classes={classes} handleChange={handleChange} handleSubmit={handleSubmit} setRole={setRole}
        />
        </When>
      </>
    );
  }

export default Login;
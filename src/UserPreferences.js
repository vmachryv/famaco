import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const trigger = (
  <span> <AccountCircleIcon /> </span>
)

const options = [
  {
    key: 'user',
    text: (
      <span>
        Signed in as <strong>Bob Smith</strong>
      </span>
    ),
    disabled: true,
  },
  { key: 'profile', text: 'Your Profile' },
  { key: 'stars', text: 'Your Stars' },
  { key: 'explore', text: 'Explore' },
  { key: 'integrations', text: 'Integrations' },
  { key: 'help', text: 'Help' },
  { key: 'settings', text: 'Settings' },
  { key: 'sign-out', text: 'Sign Out' },
]

const DropdownUserMenu = () => (
  <Dropdown trigger={trigger} options={options} />
)

export default DropdownUserMenu
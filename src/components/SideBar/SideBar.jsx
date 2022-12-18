import React from 'react'
import { Container } from './styled'
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import { IconOption } from './IconOption';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

export const SideBar = (props) => {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const loginRequest = async() => {
    return await axios.post(process.env.REACT_APP_API_URL+'/sign-in', {
      email,
      password
    },{
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY
      }
    });
  }

  return (
    <Container>
        <TwitterIcon className='twiiter-logo'/>
        <IconOption active text={"Home"} Icon={HomeIcon}/>
        <IconOption text={"Explore"} Icon={SearchIcon}/>
        <IconOption text={"Notifications"} Icon={NotificationsNoneIcon}/>
        <IconOption text={"Message"} Icon={MailOutlineIcon}/>
        <IconOption text={"Bookmarks"} Icon={BookmarksIcon}/>
        <IconOption text={"Lists"} Icon={ListAltIcon}/>
        <IconOption text={"Profile"} Icon={PermIdentityIcon}/>
        <IconOption text={"More"} Icon={MoreHorizIcon}/>
        {
          props.token === "" ? 
          <Button variant='contained' fullWidth onClick={handleClickOpen}>Login</Button>:
          <Button variant='contained' fullWidth>Tweet</Button>
        }
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Test Credentials
            Email: clone@twitter.com
            Password: 123456789
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            onChange={(event)=>{
              setEmail(event.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            onChange={(event)=>{
              setPassword(event.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={async()=> {
            try{
              const response = await loginRequest();
              props.setToken(response.data.token);
              alert(response.data.message);
              handleClose();
            }catch{
              alert("Username or password wrong");
            }
          }}>Login</Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

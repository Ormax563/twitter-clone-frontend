import React from 'react'
import { Box, Div, Avatar, Form, DivBox } from './styled';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import GifIcon from '@mui/icons-material/Gif';
import { Button } from '@mui/material';
import axios from 'axios';

export const TweetBox = (props) => {
 const [tweet, setTweet] = React.useState("");
 const createTweet = async() => {
    if(tweet === ""){
        alert("Tweet cannot be empty");
        return;
    }else{
        return await axios.post(process.env.REACT_APP_API_URL+'/create-tweet', {
            token: props.token,
            tweet
          },{
            headers: {
              'x-api-key': process.env.REACT_APP_API_KEY
            }
          });
    }
 } 
 return (
    <Box>
        <Form>
            <Div>
                <Avatar src= "https://randomuser.me/api/portraits/men/1.jpg" alt=""/>
                <div className='columns'>
                    <input 
                        text="text" 
                        placeholder="What's happening?" 
                        onChange={(event)=>{
                            setTweet(event.target.value);
                        }}
                    />
                </div>
            </Div>
            <Div style={{
                display: 'block'
            }}>
                <DivBox style={{
                    float: 'left',
                    marginLeft: '50px'
                }}>
                    <AddPhotoAlternateIcon sx={{ fontSize: 40 }}/>
                    <GifIcon  sx={{ fontSize: 40 }}/>
                </DivBox>
                
                <Button onClick={async()=> {
                    if(props.token === ""){
                        alert("You have to sign-in");
                        return;
                    }
                    try{
                        const response = await createTweet();
                        if (response) alert("Tweet created successfully");
                        props.getTweets();
                    }catch{
                        alert("Something went wrong, please try again later.");
                    }
                }}>Tweet</Button>
                
            </Div>
        </Form>
        
     </Box>
  )
}

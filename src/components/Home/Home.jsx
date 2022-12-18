import { Container, Header } from "./styled";
import { TweetBox } from "./TweetBox";
import React from 'react'
import { Posts } from "./Posts";
import axios from 'axios';

export const Home = (props) => {
  const [tweets, setTweets] = React.useState([]);
  const getTweets = () => {
    axios.post(process.env.REACT_APP_API_URL+'/scan-tweets', {
      limit: 10
    },{
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY
      }
    }).then((res) =>{
      setTweets(res.data.tweets
        .sort((a,b) => new Date(a["createdAt"]["S"]) - new Date(b["createdAt"]["S"])));
    });
  }
  React.useEffect(() => {
    getTweets();
  },[]);
  return (
    <Container>
      <Header><h2>Home</h2></Header>
      <TweetBox token={props.token} setToken={props.setToken} getTweets={getTweets}/>
      {
        tweets
        .sort((a,b) => new Date(a["createdAt"]) - new Date(b["createdAt"]))
        .map((tweet, idx) => (<Posts user={tweet.nickname} tweet={tweet.tweet} key={idx} />))
        .reverse()
      }
    </Container>
  )
}

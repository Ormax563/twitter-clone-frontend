import React from 'react'
import { DivPosts, Avatar, PostBody, PostDescription, Images, PostFooter} from './styled';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

export const Posts = ({user, tweet}) => {
  return (
    <div>
        <DivPosts>
          <div className='post_avatar'>
            <Avatar src="https://randomuser.me/api/portraits/women/90.jpg"/>
          </div>
          <PostBody>
            <div>
              <div>
                <h3>{user}
                  <span>
                    <VerifiedUserIcon className='post_icon'/>
                    @{user}
                  </span>
                  
                  <PostDescription>
                    <p>{tweet}</p>
                  </PostDescription>
                </h3>
              </div>
              <Images src="" />
              <PostFooter>
                <ChatBubbleIcon fontSize='small'/>
                <RepeatIcon fontSize='small'/>
                <FavoriteBorderIcon fontSize='small'/>
                <PublishIcon fontSize='small'/>
              </PostFooter>
            </div>
          </PostBody>
        </DivPosts>
    </div>
  )
}

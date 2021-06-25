import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { reactionAdded } from '../../features/post/postsSlice'

const reactionEmoji = {
  thumbsUp: '👍',
  // heart: '❤️',
}

const Button = styled.button`
  margin: 8px 8px 8px 0;
  border: none;
  border-radius: 4px;
  background-color: rgba(75, 180, 255, 0.8);
  color: white;
`

export const LikeButton = ({ post }) => {
  const dispatch = useDispatch()

  const userlogged = useSelector((state) => state.userlogged)

  const users = useSelector((state) =>
  state.users.find((user) => user.username === userlogged[0].username )
)

  const likeButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <Button
        key={name}
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name , user: users.id}))
        }
      >
        {emoji} {post.reactions[name]}
      </Button>
    )
  })
  
  return <div>{likeButtons}</div>
}

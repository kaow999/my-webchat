
import React from 'react'
import { useSelector } from 'react-redux'

import { PostAuthor } from './PostAuthor'
import { LikeButton } from '../Button/LikeButton'
import { Commentbox } from './AddCommentForm'
import styled from 'styled-components'

const Container = styled.div`
  background-color: rgba(	51, 162, 255, .2);
  padding: 20px 320px;
  border-radius: 4px;
  width: 100vw;
`

const PostContent = styled.div`
 background-color: rgba(	51, 162, 255, .9);
  font-size: 36px;
  margin: 0 0 8px 0;
  padding: 20px;
  color: white;
  border-radius: 4px;
`

export const ViewPost = ({ match }) => {
  const { postId } = match.params

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  )

  if (!post) {
    return (
        <h2>Post not found!</h2>
    )
  }

  return (
    <Container>
        <PostContent>
          {post.content}
          <PostAuthor userId={post.user} />
        </PostContent> 
          <LikeButton post={post} />
          <Commentbox post={post} />
    </Container>
  )
}

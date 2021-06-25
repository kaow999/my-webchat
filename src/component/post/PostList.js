import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Icon } from "@blueprintjs/core";
import { postDeleted } from '../../features/post/postsSlice'

import { PostAuthor } from './PostAuthor'
import { LikeButton } from '../Button/LikeButton'
import { CommentList } from '../../features/post/CommentList'

const Container = styled.div`
  margin: 24px 0 0 0;
  background-color: rgba(	51, 162, 255, .2);
  padding: 20px 80px;
  border-radius: 4px;
`

const PostContent = styled.div`
 background-color: rgba(	51, 162, 255, .9);
  font-size: 36px;
  margin: 0 0 8px 0;
  padding: 20px;
  color: white;
  border-radius: 4px;
`

const style = {
  cursor: 'pointer',
  display: 'flex',
  margin: '8px 0',
  justifyContent: 'flex-end',
}

export const PostsList = () => {

  const posts = useSelector((state) => state.posts)

  const dispatch = useDispatch()

  const userlogged = useSelector((state) => state.userlogged)

  const users = useSelector((state) =>
  state.users.find((user) => user.username === userlogged[0].username )
)

  const renderedPosts = posts.map((post) => {

    const handleClicked = () => {
      dispatch(postDeleted({postId: post.id}))
      console.log("postidส่ง",post.id)

  }
  
    if(post){
      if( post.user === users.id ){
        return (
          <Container key={post.id}>
          <Icon icon="cross" iconSize={20} onClick={handleClicked} style={style} />
            <PostContent>
              {post.content}
              <PostAuthor userId={post.user} />
            </PostContent> 
            <LikeButton post={post} />
            <CommentList post={post} />
            <Link to={`/posts/${post.id}`} >
                <Icon icon="comment" iconSize={32} style={style}/>
            </Link>
          </Container>
        )
      } else {
        return (
          <Container key={post.id}>
            <PostContent>
              {post.content}
              <PostAuthor userId={post.user} />
            </PostContent> 
            <LikeButton post={post} />
            <CommentList post={post} />
            <Link to={`/posts/${post.id}`} >
                <Icon icon="comment" iconSize={32} style={style}/>
            </Link>
          </Container>
        )
      }
    }
})
  
 console.log('post', posts)
  return (
    <>
      <h1>{renderedPosts}</h1>
    </>
  )
}

import React, { useState }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
import { commentAdded } from '../../features/post/postsSlice'
import { CommentList } from '../../features/post/CommentList'

const Container = styled.div``
const Form = styled.form``
const Input = styled.textarea`
padding: 20px 0 40px 16px;
margin: 0 0 8px 0;
border: 2px solid #ccc;
border-radius: 4px;
font-size: 20px;
width: 97.5%;
height: 20px;
  :focus{
    padding:20px 0px 40px 16px;
    
  }
`
const Button = styled.button`
  margin: 16px 0;
  background-color: steelblue;
  border-radius: 4px;
  padding: 16px 32px;
  border: none;
  float: right;
  cursor: pointer;
`

export const Commentbox = ({ post }) => {
  const [comment, setComment] = useState('')
  
  const dispatch = useDispatch()

  const handleChange = (e) => setComment(e.target.value)

  const userlogged = useSelector((state) => state.userlogged)

  const users = useSelector((state) =>
  state.users.find((user) => user.username === userlogged[0].username )
)

  const handleClick = () => {
    if (comment) {
      dispatch(commentAdded({ postId: post.id,  comment: comment  , userComment: users.id }))
      setComment('')
    }
  }

    return(
      <Container>
       <CommentList post={post} />
        <Form>
          <Input
            type="text"
            id="CommentContent"
            name="CommentContent"
            value={comment}
            onChange={handleChange}
          />
          <Button type="button" onClick={handleClick}>
          Comment
          </Button>
        </Form>
    </Container>
    )
  }

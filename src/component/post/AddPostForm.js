import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { postAdded } from '../../features/post/postsSlice'


const Form = styled.form`
  padding: 20px;
  margin: 0 0 4rem 0;
`

const Input = styled.textarea`
  padding: 20px 0 40px 16px;
  margin: 0 0 8px 0;
  border: 1 solid #cccccc;
  font-size: 20px;
  width: 97.5%;
  height: 20px;
  border-style: none none solid none;
`

const Button = styled.button`
  margin: 16px 0;
  background-color: steelblue;
  border-radius: 4px;
  padding: 16px 32px;
  border: none;
  float: right;
  cursor: pointer;
  color: white;
`

export const AddPostForm = () => {
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  const userlogged = useSelector((state) => state.userlogged)

  const users = useSelector((state) =>
  state.users.find((user) => user.username === userlogged[0].username )
)

  const handleChange = (e) => setContent(e.target.value)

  const handleClicked = () => {
    if (content) {
      dispatch(postAdded( content , users.id))
      setContent('')
    }
  }
                                                                                        
  return (
    <>
      <Form>
        <Input
          placeholder="Add a New Post"
          id="postContent"
          type="text"
          name="postContent"
          value={content}
          onChange={handleChange}
          style={{ minHeight: 10, }}
        />
        <Button type="button" onClick={handleClicked}>
          Post
        </Button>
      </Form>
    </>
  )
}

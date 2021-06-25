import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Author = styled.div`
  display: flex;
  justify-content:flex-end;
  font-size: 16px;
`

export const PostAuthor = ({ userId }) => {

const author = useSelector((state) =>
  state.users.find((user) => user.id === userId)
)

  return <Author>by {author ? author.name : 'Unknown'}</Author>
}

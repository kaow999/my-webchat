import styled from 'styled-components'
import { PostAuthor } from './PostAuthor'

const CommentContainer = styled.div`
background-color: rgba(	51, 162, 255, .5);
border-radius: 4px;
margin: 8px 0 4px 0 ;
padding: 12px;
`
const Comment = styled.div`
margin: 4px 0 4px 0 ;
font-size: 24px;
`
const style = {
  cursor: 'pointer',
  margin: '0 0 0 0',
  display: 'flex',
  justifyContent: 'flex-end'
}

export const CommentList = ({ post }) => {

  const renderedComments = post.comments.map((comment) => {
    if(comment.commentcontents){
    return (
    <CommentContainer>
      <Comment>{comment.commentcontents}</Comment>
      <PostAuthor userId={comment.userComments} style={style}/> 
    </CommentContainer>
  )} 
})
return(
  <>
    {renderedComments}
  </>
  )
}

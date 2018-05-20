import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const READ_COMMENT = gql`
   query($id: ID!) {
      Comment(id: $id) {
         id
         text
         isPositive
         author {
            name
         }
         createdAt
      }
   }
`;

const CommentInfo = ({ match }) => (
   <Query query={READ_COMMENT} variables={{ id: match.params.commentId }}>
      {({ data, loading }) => {
         if (loading) return 'Loading...';
         return <div>{data.Comment.text}</div>;
      }}
   </Query>
);

export default CommentInfo;

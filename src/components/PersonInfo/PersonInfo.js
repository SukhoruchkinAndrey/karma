//@flow
import React, { Fragment, Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ListContainer from '../ListContainer/ListContainer';

const READ_PERSON = gql`
   query($id: ID!) {
      Person(id: $id) {
         id
         name
         comments {
            commentType
            text
            author {
               name
            }
            createdAt
            id
         }
      }
   }
`;

const columns = [
   {
      field: 'author',
      title: 'Автор'
   },
   {
      field: 'createdAt',
      title: 'Дата',
      canSort: true
   },
   {
      field: 'text',
      title: 'Комментарий'
   },
   {
      field: 'isPositive',
      title: 'минусики'
   }
];

class PersonInfo extends Component {
   handleRowClick = item => {
      this.props.history.push('/comment/' + item.id);
   };

   prepareItems = comments => {
      return comments.map(comment => ({
         ...comment,
         author: comment.author.name,
         createdAt: new Date(comment.createdAt)
      }));
   };

   render() {
      const { match } = this.props;
      return (
         <Query query={READ_PERSON} variables={{ id: match.params.userId }}>
            {({ data, loading }) => {
               if (loading) return 'Loading...';
               return (
                  <Fragment>
                     <div className="PersonInfo__personName">
                        {data.Person.name}
                     </div>
                     <ListContainer
                        handleRowClick={this.handleRowClick}
                        items={this.prepareItems(data.Person.comments)}
                        columns={columns}
                     />
                  </Fragment>
               );
            }}
         </Query>
      );
   }
}

export default PersonInfo;

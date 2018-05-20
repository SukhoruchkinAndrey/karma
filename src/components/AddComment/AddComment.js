import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const CREATE_COMMENT = gql`
   mutation createComment(
      $text: String!
      $isPositive: Boolean!
      $authorId: ID!
      $personId: ID!
   ) {
      createComment(
         text: $text
         isPositive: $isPositive
         authorId: $authorId
         personId: $personId
      ) {
         id
         text
      }
   }
`;

class AddComment extends Component<any, any> {
   constructor(props) {
      super(props);

      this.textArea = React.createRef();
   }

   handleSubmit = addComment => {
      addComment({
         variables: {
            text: this.textArea.current.value,
            isPositive: true,
            authorId: 'cjhesfeuuilt20177b2wn1up6',
            personId: 'cjhetndz46ovs0197rv58ed16'
         }
      }).then(result => {
         console.log(result);
      });
   };

   render() {
      return (
         <Mutation mutation={CREATE_COMMENT}>
            {(addComment, { error }) => {
               if (error) return <div>Ошибка</div>;
               return (
                  <form
                     onSubmit={event => {
                        event.preventDefault();
                        this.handleSubmit(addComment);
                     }}
                  >
                     <textarea ref={this.textArea} />
                     <button type="submit">Отправить отзыв</button>
                  </form>
               );
            }}
         </Mutation>
      );
   }

   componentDidMount() {
      this.textArea.current.focus();
   }

   componentWillUnmount() {
      this.textArea = null;
   }
}

export default AddComment;

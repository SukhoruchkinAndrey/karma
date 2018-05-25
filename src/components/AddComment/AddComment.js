import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const CREATE_COMMENT = gql`
   mutation createComment(
      $text: String!
      $commentType: Boolean!
      $authorId: ID!
      $personId: ID!
   ) {
      createComment(
         text: $text
         commentType: $commentType
         authorId: $authorId
         personId: $personId
      ) {
         id
         text
         commentType
         authorId
         personId
      }
   }
`;

const CREATE_PERSON = gql`
   mutation createPerson($name: String!) {
      createPerson(name: $name) {
         id
         name
      }
   }
`;

class AddComment extends Component<any, any> {
   constructor(props) {
      super(props);

      this.commentField = React.createRef();
      this.personField = React.createRef();
   }

   handleSubmit = (addComment, createPerson) => {
      createPerson({
         variables: {
            name: this.personField.current.value
         }
      }).then(({ data }) => {
         addComment({
            variables: {
               text: this.commentField.current.value,
               commentType: true,
               authorId: 'cjhezauylk3kl0177c6cnq0um',
               personId: data.createPerson.id
            }
         });
      });
   };

   render() {
      return (
         <Mutation mutation={CREATE_PERSON}>
            {(createPerson, { error }) => {
               if (error) return 'Ошибка при создании person';
               return (
                  <Mutation mutation={CREATE_COMMENT}>
                     {(addComment, { error }) => {
                        if (error) return <div>Ошибка</div>;
                        return (
                           <form
                              onSubmit={event => {
                                 event.preventDefault();
                                 this.handleSubmit(addComment, createPerson);
                              }}
                           >
                              <input
                                 ref={this.personField}
                                 type="text"
                                 required
                              />
                              <textarea ref={this.commentField} required />
                              <button type="submit">Отправить отзыв</button>
                           </form>
                        );
                     }}
                  </Mutation>
               );
            }}
         </Mutation>
      );
   }

   componentDidMount() {
      this.commentField.current.focus();
   }

   componentWillUnmount() {
      this.commentField = null;
   }
}

export default AddComment;

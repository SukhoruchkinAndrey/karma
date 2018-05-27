import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { Query } from 'react-apollo';
import './AddComment.css';
import CommentForm from '../CommenForm/CommentForm';

const CREATE_COMMENT = gql`
   mutation createComment(
      $text: String!
      $commentType: CommentType!
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
         author {
            id
         }
         person {
            id
         }
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

const READ_PERSONS = gql`
   query {
      allPersons {
         id
         name
      }
   }
`;

class AddComment extends Component<any, any> {
   constructor(props) {
      super(props);

      this.state = {
         newPerson: false
      };
   }

   handleSubmit = (addComment, createPerson) => {
      if (this.state.newPerson) {
         createPerson({
            variables: {
               name: this.state.personSecondName + ' ' + this.state.personName // todo
            }
         }).then(({ data }) => {
            //todo: to function !!! WARNING DUPLICATE !!!
            addComment({
               variables: {
                  text: this.state.comment,
                  commentType: 'NEGATIVE',
                  authorId: 'cjhezauylk3kl0177c6cnq0um',
                  personId: data.createPerson.id
               }
            });
         });
      } else {
         // data - id from combobox
         //todo: to function // !!! WARNING DUPLICATE !!!
         /*addComment({
            variables: {
               text: this.commentField.current.value,
               commentType: 'NEGATIVE',
               authorId: 'cjhezauylk3kl0177c6cnq0um',
               personId: data.createPerson.id
            }
         });*/
      }
   };

   handleAddPersonClick = () => {
      this.setState({
         newPerson: true
      });
   };

   personNameChange = event => {
      this.setState({
         personName: event.target.value
      });
   };

   personSecondNameChange = event => {
      this.setState({
         personSecondName: event.target.value
      });
   };

   commentChange = event => {
      this.setState({
         comment: event.target.value
      });
   };

   render() {
      const { newPerson } = this.state;
      return (
         <Query query={READ_PERSONS}>
            {({ data, loading }) => {
               if (loading) return 'Loading...';
               return (
                  <Mutation mutation={CREATE_PERSON}>
                     {(createPerson, { error }) => {
                        if (error) return 'Ошибка при создании person';
                        return (
                           <Mutation mutation={CREATE_COMMENT}>
                              {(addComment, { error }) => {
                                 if (error) return <div>Ошибка</div>;
                                 return (
                                    <CommentForm
                                       newPerson={newPerson}
                                       handleAddPersonClick={
                                          this.handleAddPersonClick
                                       }
                                       personNameChange={this.personNameChange}
                                       personSecondNameChange={
                                          this.personSecondNameChange
                                       }
                                       commentChange={this.commentChange}
                                       handleSubmit={() =>
                                          this.handleSubmit(
                                             addComment,
                                             createPerson
                                          )
                                       }
                                    />
                                 );
                              }}
                           </Mutation>
                        );
                     }}
                  </Mutation>
               );
            }}
         </Query>
      );
   }

   componentDidMount() {
      // this.commentField.current.focus();
   }
}

export default AddComment;

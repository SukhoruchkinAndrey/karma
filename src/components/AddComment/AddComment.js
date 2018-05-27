import React, { Component, Fragment } from 'react';
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
         isValid: true,
         newPerson: false,
         comment: '',
         personName: '',
         personSecondName: '',
         selectedPerson: null,
         commentType: 'NEGATIVE'
      };
   }

   handleSubmit = (addComment, createPerson) => {
      const {
         commentType,
         comment,
         personSecondName,
         personName,
         newPerson,
         selectedPerson
      } = this.state;

      if (!this.validate()) {
         this.setState({ isValid: false });
         return;
      }
      if (newPerson) {
         createPerson({
            variables: {
               name: personSecondName + ' ' + personName
            }
         }).then(({ data }) => {
            addComment({
               variables: {
                  text: comment,
                  commentType: commentType,
                  authorId: 'cjhezauylk3kl0177c6cnq0um',
                  personId: data.createPerson.id
               }
            }).then(() => this.props.history.push('/'));
         });
      } else {
         addComment({
            variables: {
               text: comment,
               commentType: commentType,
               authorId: 'cjhezauylk3kl0177c6cnq0um',
               personId: selectedPerson.id
            }
         }).then(() => this.props.history.push('/'));
      }
   };

   handleAddPersonClick = () => {
      this.setState({
         newPerson: true
      });
   };

   personNameChange = event => {
      this.setState({
         personName: event.target.value.trim()
      });
   };

   personSecondNameChange = event => {
      this.setState({
         personSecondName: event.target.value.trim()
      });
   };

   commentChange = event => {
      this.setState({
         comment: event.target.value
      });
   };

   comboboxSelectHandler = item => {
      this.setState({
         selectedPerson: item
      });
   };

   radioChangeHandler = id => {
      this.setState({
         commentType: id
      });
   };

   validate = () => {
      const {
         comment,
         personSecondName,
         personName,
         newPerson,
         selectedPerson
      } = this.state;

      return (
         comment &&
         (newPerson ? personSecondName && personName : selectedPerson)
      );
   };

   render() {
      const { newPerson, isValid } = this.state;
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
                                    <Fragment>
                                       <CommentForm
                                          newPerson={newPerson}
                                          handleAddPersonClick={
                                             this.handleAddPersonClick
                                          }
                                          personNameChange={
                                             this.personNameChange
                                          }
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
                                          comboboxData={data.allPersons}
                                          comboboxSearchProperty="name"
                                          comboboxSelectHandler={
                                             this.comboboxSelectHandler
                                          }
                                          radioChangeHandler={
                                             this.radioChangeHandler
                                          }
                                          defaultChecked=""
                                       />
                                       {!isValid && <div>Невалидная форма</div>}
                                    </Fragment>
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
}

export default AddComment;

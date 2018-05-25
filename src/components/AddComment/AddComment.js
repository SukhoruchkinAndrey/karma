import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { Query } from 'react-apollo';
import './AddComment.css';

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

      this.commentField = React.createRef();
      this.personName = React.createRef();
      this.personSecondName = React.createRef();
      this.state = {
         newPerson: false
      };
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
               commentType: 'NEGATIVE',
               authorId: 'cjhezauylk3kl0177c6cnq0um',
               personId: data.createPerson.id
            }
         });
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
                                    <form
                                       className="addComment__form"
                                       onSubmit={event => {
                                          event.preventDefault();
                                          this.handleSubmit(
                                             addComment,
                                             createPerson
                                          );
                                       }}
                                    >
                                       <div className="">
                                          <h5>Выберите челобасика:</h5>

                                          <button>Добавить челобасика</button>
                                       </div>
                                       <div className="addComment__nameBlock">
                                          <h5>Имя:</h5>
                                          <input
                                             ref={this.personName}
                                             type="text"
                                             className="AddComment__nameField"
                                             required
                                          />
                                       </div>
                                       <div className="addComment__nameBlock">
                                          <h5>Фамилия:</h5>
                                          <input
                                             ref={this.personSecondName}
                                             type="text"
                                             className="AddComment__nameField"
                                             required
                                          />
                                       </div>
                                       <h5>Отзыв</h5>
                                       <textarea
                                          className="AddComment__commentField"
                                          ref={this.commentField}
                                          required
                                       />
                                       <button type="submit">
                                          Оставить отзыв
                                       </button>
                                    </form>
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

   componentWillUnmount() {
      this.commentField = null;
   }
}

export default AddComment;

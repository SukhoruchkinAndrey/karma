import React, { Fragment } from 'react';

const CommentForm = ({
   newPerson,
   handleSubmit,
   handleAddPersonClick,
   personNameChange,
   commentChange,
   personSecondNameChange
}) => (
   <div className="addComment__form">
      {!newPerson && (
         <div className="">
            <h5>Выберите челобасика:</h5>

            <button onClick={handleAddPersonClick}>Добавить челобасика</button>
         </div>
      )}
      {newPerson && (
         <Fragment>
            <div className="addComment__nameBlock">
               <h5>Имя:</h5>
               <input
                  type="text"
                  onChange={personNameChange}
                  className="AddComment__nameField"
               />
            </div>
            <div className="addComment__nameBlock">
               <h5>Фамилия:</h5>
               <input
                  onChange={personSecondNameChange}
                  type="text"
                  className="AddComment__nameField"
               />
            </div>
         </Fragment>
      )}

      <textarea className="AddComment__commentField" onChange={commentChange} />
      <button
         onClick={event => {
            event.preventDefault();
            handleSubmit();
         }}
      >
         Оставить отзыв
      </button>
   </div>
);

export default CommentForm;

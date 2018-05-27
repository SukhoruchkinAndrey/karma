import React, { Fragment } from 'react';
import Combobox from '../Combobox/Combobox';
import RadioGroup from '../RadioGroup/RadioGroup';

const radioItems = [
   {
      id: 'POSITIVE',
      title: '+карма'
   },
   {
      id: 'NEGATIVE',
      title: '-карма'
   }
   //todo: feature
   /*,
   {
      id: 'ROFL',
      title: 'рофляночка'
   }*/
];

const CommentForm = ({
   newPerson,
   handleSubmit,
   handleAddPersonClick,
   personNameChange,
   commentChange,
   personSecondNameChange,
   comboboxData,
   comboboxSearchProperty,
   comboboxSelectHandler,
   radioChangeHandler,
   isValid
}) => (
   <div className="addComment__form">
      {!newPerson && (
         <div className="">
            <h5>Выберите челобасика:</h5>
            <Combobox
               selectHandler={comboboxSelectHandler}
               items={comboboxData}
               searchProperty={comboboxSearchProperty}
            />
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
      <RadioGroup
         items={radioItems}
         changeHandler={radioChangeHandler}
         defaultChecked="NEGATIVE"
      />
      <textarea className="AddComment__commentField" onChange={commentChange} />
      <button onClick={handleSubmit}>Оставить отзыв</button>
   </div>
);

export default CommentForm;

import React, { Fragment } from 'react';

const RadioGroup = ({
   items,
   idProperty = 'id',
   displayProperty = 'title',
   changeHandler,
   defaultChecked
}) => {
   const groupName = new Date();
   return (
      <div>
         {items.map(item => (
            <Fragment key={item[idProperty]}>
               <input
                  onChange={() => changeHandler(item[idProperty])}
                  type="radio"
                  id={item[idProperty]}
                  name={groupName}
                  defaultChecked={item[idProperty] === defaultChecked}
               />
               <label htmlFor={item[idProperty]}>{item[displayProperty]}</label>
            </Fragment>
         ))}
      </div>
   );
};
export default RadioGroup;

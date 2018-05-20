//@flow
import React from 'react';

const PersonInfo = ({
   match
}: {
   match: {
      params: {
         userId: number
      }
   }
}) => <div>{match.params.userId}</div>;

export default PersonInfo;

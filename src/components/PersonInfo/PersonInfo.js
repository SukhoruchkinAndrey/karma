import React from 'react';

const PersonInfo = ({ match }) => <div>{match.params.userId}</div>;

export default PersonInfo;

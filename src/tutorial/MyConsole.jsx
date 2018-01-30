import React from 'react';
export let logs = [];
export default msg => {
  console.log(msg);
  logs.push(<pre>{JSON.stringify(msg)}</pre>);
};
export const getLogs = () => logs;

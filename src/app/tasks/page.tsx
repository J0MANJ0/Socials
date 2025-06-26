import React from 'react';

async function page() {
  const response = await fetch('http://localhost:3000/api/tasks');

  console.log(response);
  return <div>Taskpage</div>;
}

export default page;

import React from 'react';

const validation = (email, password, name) => {
  const emailIsValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const passwordIsValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const nameIsValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

  if (!emailIsValid) {
    return 'Please enter a valid email address.';
  }

  if (!passwordIsValid) {
    return 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.';
  }

  // if (!nameIsValid) {
  //   return 'Please enter a valid name.';
  // }

  return null;
};

export default validation;
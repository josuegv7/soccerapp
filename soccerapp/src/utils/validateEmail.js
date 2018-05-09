const regularExperss =
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default ( emails ) =>{
  const emailsArray =  emails
    .split(',')
    .map(email => email.trim())
    .filter(email => regularExperss.test(email) === false )

  if ( emailsArray.length) {
    return `Emails are invalid: ${emailsArray}`;
  }
  return null;
};

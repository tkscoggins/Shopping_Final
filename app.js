/* validate an email address */ 

function isValidEmail(email){
    return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
}
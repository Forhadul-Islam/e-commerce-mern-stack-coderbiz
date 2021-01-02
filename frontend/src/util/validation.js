export const nameValidator  = (name) =>{
    const validName = typeof name === 'string' && name.length > 0 ? name : false;
    return validName;
}
export const emailValidator  = (email) =>{
    const validEmail = typeof email === 'string' && email.length > 5 ? email : false;
    return validEmail;
  
}
export const phoneValidator  = (phone) =>{
    const number = parseInt(phone)
    const validPhone = typeof number === 'number' && phone.length == 11 ? phone : false;
    return validPhone;
}
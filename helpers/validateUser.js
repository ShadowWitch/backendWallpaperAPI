const validateUser = (user) =>{
    const userArr = Object.values(user);
    const result = userArr.filter(user => user.trim().length <= 2)

    if(result.length === 0) return true;
    return false;
}

module.exports = {
    validateUser
}
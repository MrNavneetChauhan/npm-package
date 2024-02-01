module.exports = (str) => {
  if (str.length == 1) {
    return true;
  } else if (str.length == 2) {
    if (str[0] === str[1]) {
      return true;
    }
    return false
  }
  else if(str.length === 3){
    if(str[0] === str[2]){
        return true
    }
    return false;
  }
  else{
    for(let i = 0; i < str.length ; i++){
        if(str[i] !== str[str.length-1-i]){
            return false;
        }
    }
    return true;
  }
};

function isValid(str) {
    let stack = [];
    let pattern = {
      '(': ')',
      '{': '}',
      '[': ']'
    }
  
    for (let i = 0; i < str.length; i++) {
      let item = str[i];
  
      if (pattern[item]) {
        stack.push(pattern[item]);
      } else {
        if (item !== stack.pop()) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }


  console.log(isValid('[{)]'))
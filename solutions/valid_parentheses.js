function validParentheses(expression) {

    const stack = [];
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            console.log(stack.pop() !== pairs[char]);
            if (stack.pop() !== pairs[char]) {
                return false;
            }
 
        }

    }if (stack.length > 0) {
        return false;
    }
    return true;

}

validParentheses(")"); // false

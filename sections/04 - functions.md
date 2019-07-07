# Netlify functions

This assumes that you still have the netlify dev server still running, if not, run `netlify dev --live` from the project directory.

1. Open `src/lambda/hello.js` in your code editor
2. Modify `body.msg` in the callback function to return a custom message
3. Reload the function URL
4. create a new function by running `netlify functions:create`
5. Select any function scaffold and it will be added to your project
6. real use case:
   - https://github.com/futuregerald/functions-react-mongo/blob/master/src/lambda/get-user-details.js
   - https://github.com/futuregerald/functions-react-mongo/blob/master/src/lambda/validate-user.go

Resources: https://serverless.css-tricks.com/

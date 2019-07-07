# Netlify redirects

1. Create a branch with a `_redirects` file in the publish directory with the following contents:
   ```
    /beta/* https://identity-example-update-user.netlify.com/cookie.html 200!
   ```
2. Add the following 301 rule:

   ```
   /css/* https://css-tricks.com/ 301
   ```

3. Add the following additional 301 rule:
   ```
   /admin/* https://css-tricks.com/ 301
   ```
4. Add a custom 404 route:
   ```
   /* /notfound.html 404
   ```
5. Add a language based redirect redirect:
   ```
   /* /about 301 Language=en
   ```

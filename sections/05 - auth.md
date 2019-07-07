# Authentication and Authorization

1. Replace the code in your `_redirects` file with the following:
   ```
   /* 200! Role=member
   ```
2. Visit your site and see what happens
3. Copy `login.html` from this repos `05` directory to your repos `/static` directory so it'll be deployed as-is. Also add the following line to your `_redirects` file:
   ```
   /* /login.html 404!
   ```
4. Identity is Netlify's authentication provider. Now when you visit any page it should send you to our custom (ugly) login page since you aren't authorized.
5. Visit https://app.netlify.com/sites/$SITE_NAME/settings/identity and change the following:

   - Registration preferences: Open
   - External providers: Google
   - Webhook URL: "/.netlify/functions/addrole"
   - Webhook Events: signup

6. Copy `addrole.js` from `05` to your repos `/src/lambda` directory and deploy.
7. Visit your site again, signup and then reload your home page
8. How does the auth redirect work? (review role based access control via redirects)
9. How was the role assigned? (review addrole.js function)
10. Now visit https://github.com/futuregerald/identity-test-functions so we can learn about identity

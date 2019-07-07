# Authentication and Authorization

## Site-wide password

1. Visit https://app.netlify.com/sites/$SITE_NAME/settings/access and set a password
2. Visit your site

Site-wide passwords are good for testing but bad for production because of poor performance and lack of granular access controls.

## Role based access control

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

## How to protect functions with Identity

1. Copy `userinfo.js` from `05` to your repos `/src/lambda` directory
2. Copy `func.html from`05`to your repos`/static` directory
3. Deploy
4. Visit `/func.html` on your live site and click "Trigger protected function"
5. Try triggering that same function directly by going to `/.netlify/functions/userinfo`

## Protecting a third party API

1. Create a temporary requestbin from https://requestbin.com, make it public which doens't require a login.
2. Delete your `_redirects` file
3. Add the following to your netlify.toml that's in the root of your repo, setting the "to" in the top rool to the URL for your request bin:
   ```
   [[redirects]]
    from = "/api"
    to = "https://enxbp9nwdqaqb.x.pipedream.net"
    status = 200
    force = true
    signed = "JWS_KEY_NAME"
   [[redirects]]
    from = "/*"
    status = 200
    conditions = {Role = ["member"]}
    force = true
   [[redirects]]
    from = "/*"
    to = "/login.html"
    status = 404
    force = true
   ```
4. On https://app.netlify.com/sites/$SITE_NAME/settings/deploys#environment add the following environment variable:
   ```
   JWS_KEY_NAME=y0u261uDFoH1h
   ```
5. Deploy the site and visit `/api` in production
6. find the `x-nf-sign` header on the requestbin inbound header
7. Check the content of the token on jwt.io

# Netlify dev

1. Clone your repo for the `gatsby-starter-netlify-cms` with the following command:
   ```
   git clone git@github.com:GITHUB_ACCOUNT/gatsby-starter-netlify-cms.git
   ```
2. CD in to repo directory and run:
   ```
   netlify link
   ```
   Link using the method that works for you, I recommend site ID
3. Add the following to the `netlify.toml` in the root of the repo:
   ```
   [dev]
    command = "yarn develop"
    port = 8000
    publish = "public"
   ```
4. run `yarn` to install dependencies
5. run `netlify dev` to run the local dev server
6. exit the current server and then run `netlify dev --live`
7. make a change to one of your files in development
8. trigger `/hello` function by appending `/.netlify/functions/hello` to the end of your live URL or on localhost

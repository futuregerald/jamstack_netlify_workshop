# Netlify JAMstack Workshop

## Prerequisites & Setup Steps

1. **Install the latest LTS version of [Node](https://nodejs.org/)**. [How to install Node](https://docs.npmjs.com/getting-started/installing-node).
2. **Verify you have [git](https://git-scm.com/downloads) on your machine**

   Most machines come pre-loaded with git. 🎉

   To verify you have `git`, open up your terminal and run:

   ```bash
   which git
   ```

   This should return a path of where git is installed. If the command returns `git not found`, we will need to install git on your machine.

3. **Setup a Netlify account**.

   If you don't already have a Netlify account, let's get one setup.

   [Click here to setup a free Netlify account](https://app.netlify.com/)

   It's recommended to not use pre-existing AWS account running production code.

   Make sure you add valid billing information and verify your account.

4. **[Install the Netlify CLI](https://github.com/netlify/cli)**

   Open up your terminal and run:

   ```bash
   npm install netlify-cli -g
   ```

5. **[Install the serverless CLI](https://serverless.com/framework/docs/getting-started/)**

   Open up your terminal and run:

   ```bash
   npm install serverless -g
   ```

6. **Connect the serverless CLI with your AWS account credentials**.

   [See the docs](https://serverless.com/framework/docs/providers/aws/guide/credentials/) or [watch the video](https://www.youtube.com/watch?v=KngM5bfpttA)

7. **Login to your netlify account in the CLI**

   Open up your terminal and run:

   ```
   netlify login
   ```

8. Join https://jamstack.slack.com and DM `@futuregerald` for an invite to the private channel

# Deploys and Split Testing

1. Quickest way to deploy:

   <a href="https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/gatsby-starter-netlify-cms&amp;stack=cms"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

2. Enable branch deploys for all branches on the netlify site's Deploy Context settings at `https://app.netlify.com/sites/$SITE_NAME/settings/deploys#deploy-contexts`
3. Make an edit to a file in the repo in a new branch
4. From `https://app.netlify.com/sites/$SITE_NAME/splits` enable split testing between the two branches
5. visit your site and check for `nf_ab` cookie

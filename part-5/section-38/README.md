# Deployment with Vercel

## Vercel documentation

You can find documentation on Vercel [HERE](https://vercel.com/)

## How

- Create a Vercel user

- You can connect your Github account to your user on vercel.

- And from there you can click the Add new... button,

- and connect to one of your Github repositories.

- When you have filled it the information,

- you click the deploy button

## Remember to

1. Update the project environment variables in vercel
   1.1. NEXTAUTH_URL has to be updated to the new vercel address for your project (!! do not end with /)
   1.2. Redeploy your application

2. Update your Credentials at Google development area
   2.1 Add the new URL for Authorized JavaScript origins
   2.2 Add the new URL for the Authorized redirect URIs
   2.3 Click save button

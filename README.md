# Atyls Assignment

## Demo

> [!NOTE]
> The Demo gif is compressed, so it doesn't display the actual UI properly. Check [Live Preview]([https://](https://atlys-visa-assignment.vercel.app/))

![web-demo](/assets/assignment-demo.gif)

## Usage
1. `/signin` - Signin page

    Shows signin form

2. `/signup` - Signup page

    Shows signup form

3. `/posts` - Posts page
    
    Shows all the posts. You can create post as well. When you try to create a post, Signup Modal opens and shows option if you want to login instead of signing up.

## Structure

1. `public`: Contains all the public assets for the app
   1. `icons`: Contains all the icons that are used in the app.
   2. `images`: Contains sample avatar images for posts
2. `src`: Contains all the source code
   1. `actions`: Contains all the server actions for server component
   2. `app`: Contains the routes of the App as AppRouter is used with Next14.
   3. `components`: Contains the components used in the App.
      1. `common`: Contains common components used across the App. Ex: Input, Button, etc.
      2. `...others`: Rest folders are used as Custom Reusable Components which can be used across the App.
   4. `models`: Contains the models used in the App i.e constants, interfaces.
   5. `utils`: Contains util function that are used within the App.
   6. `paths.ts`: Contains all the paths that are defined for our App.
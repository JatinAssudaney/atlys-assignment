# Atyls Assignment (Mobile Responsive)

## Tech Stack
![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB)
![Typescript](https://img.shields.io/badge/Typescript-007acc?style=for-the-badge&labelColor=black&logo=typescript&logoColor=007acc)
![Javascript](https://img.shields.io/badge/Javascript-F0DB4F?style=for-the-badge&labelColor=black&logo=javascript&logoColor=F0DB4F)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-092749?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4&labelColor=000000)
![Zod](https://img.shields.io/badge/Zod-000000?style=for-the-badge&logo=zod&logoColor=3068B7)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![VSCode](https://img.shields.io/badge/Visual_Studio-0078d7?style=for-the-badge&logo=visual%20studio&logoColor=white)

## Demo

> [!NOTE]
> The Demo gif is compressed, so it doesn't display the actual UI properly. Check [Live Preview](https://atlys-visa-assignment.vercel.app/)

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

## Validation
> [!NOTE]
> Validation are added in signin and signup forms using [zod](https://zod.dev/)

### Existing Validations
1. Signin Form
   1.  Email/Username must be at least 3 characters long
   2.  Password must be at least 8 characters long
2.  Signup Form
    1.  Email validation using zod
    2.  Username must be at least 3 characters long
    3.  Username must be no more than 20 characters long
    4.  Username can only contain letters, numbers, underscores, and periods
    5.  Password must be at least 8 characters long


> [!NOTE]
> Some password validations have been commented for ease of use for demo
## Commented Validations
1. Password must contain at least one uppercase letter
2. Password must contain at least one lowercase letter
3. Password must contain at least one number
4. Password must contain at least one special character
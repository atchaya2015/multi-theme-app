# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
PixelForge: Elevate Your Gaming Experience
Welcome to PixelForge, your ultimate destination for enhancing your gaming setup! This project is a dynamic React application designed to showcase premium gaming peripherals (like wireless controllers and headsets) while offering a unique theme-switching experience that allows you to customize your website's look and feel.

Features
Dynamic Theming: Seamlessly switch between multiple predefined themes (Theme 1: Minimal, Theme 2: Dark Sidebar, Theme 3: Colorful Grid) that instantly change the entire aesthetic of the website, including colors, fonts, and layout.

Theme Persistence: Your chosen theme is remembered across refreshes within the current browser session (it resets to Theme 1 on a full new session, as per your recent request).

Product Display: Browse a curated selection of gaming products, currently sourced from a reliable fake store API.

API Integration: Fetches product data from https://api.escuelajs.co/api/v1/products, demonstrating robust data fetching and error handling.

Image Fallback: Handles broken or missing product images gracefully by displaying a placeholder, ensuring a smooth user experience.

Responsive Layouts: Adapts the user interface for optimal viewing on various screen sizes, from desktops to mobile devices.

Modular Component Design: Built with reusable React components for maintainability and scalability.

React Router: Provides smooth client-side navigation between different pages (Home, About, Contact).

Global State Management: Manages theme state efficiently using React Context API.

Tech Stack
React: A JavaScript library for building user interfaces.

TypeScript: Adds static type checking to JavaScript, improving code quality and maintainability.

Axios: A promise-based HTTP client for making API requests.

React Router DOM: For declarative routing in React applications.

CSS Modules: For component-scoped styling, preventing style conflicts.

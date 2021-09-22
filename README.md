<img src="https://github.com/hanlinc27/spacestagram/blob/main/illustration.gif" alt="planet" style="width:200px;"/>

# Spacestagram

Welcome to Spacestagram! This project was built for Shopify's Winter 2022 Frontend Internship challenge. The deployed link for the application can be viewed [here](https://spacestagram-shopify-2728.herokuapp.com/)
This web application pulls from NASA's [Image and Video Library API](https://api.nasa.gov/) photos taken of the universe for viewers to "like" and "share"! The app was built with React and TypeScript using hooks for data fetching and component state management. 

## ⚡️ Quickstart
To clone and run this application, you'll need [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) installed on your computer. From the command line:
```Bash
# Clone this repository
$ git clone 
# Go to the repository
$ cd 
# Install package dependencies
$ yarn
```

In the project's root directory, you can run:

`yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and is ready to be deployed!

## 🔨 Features at a Glance
### 💻 Technical Requirements
1. Fetches image data from NASA API to be displayed and returns to user the
    - image
    - date (values converted to non-numerical)
    - title
    - description
2. Users can like and unlike one or many image cards
### 📒 Additional 
1. 🔄A loading indicator at the top of the screen as we wait for NASA's API to fetch image data
2. ❤️ A delightful heart animation when "liking" the photo
3. 📋 Copy to clipboard shareable links of each image
4. 🎨 MaterialUI design components for a simple user interface and quick building
5. 🎬 Prettier and ESlint for code-formatting
5. ✔️CI/CD on a Heroku Dyno on each change

![screenrecording](https://github.com/hanlinc27/spacestagram/blob/main/spacestagram_recording.gif)

## 🧩 Credits
This software uses the following open source packages: 
- [Styled components](https://github.com/styled-components/styled-components)
- [SWR React Hooks](https://github.com/vercel/swr) 
- [React Animated Heart](https://github.com/ShaunLWM/react-animated-heart)
- [React Copy to Clipboard](https://www.npmjs.com/package/react-copy-to-clipboard)


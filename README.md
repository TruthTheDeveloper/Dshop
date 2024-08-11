This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.



# Dshop App

This React Native application allows users to browse products, view product details, add products to favorites, and manage their favorite products list.


## Features

1. User Authentication
   - Login
   - Registration
   - Logout
2. Product Listing
   - Infinite scrolling product list
   - Product details view
3. Favorites Management
   - Add/Remove products from favorites
   - View favorite products list
4.Product Details
   - View product details
   - Add/Remove products from favorites
   - View favorite products list



## Screens

Login Screen

Allows users to log in with their username and password
Validates credentials against stored user data
Navigates to Product Listing Screen on successful login

Registration Screen
Allows new users to create an account
Stores user data in AsyncStorage
Navigates to Login Screen after successful registration

Product Listing Screen
Displays a list of products with infinite scrolling
Each product shows an image, title, and price
Allows navigation to Product Details Screen
Includes a "View Favorites" button and a Logout button

Product Details Screen
Shows detailed information about a selected product
Allows users to add/remove the product from favorites
Includes a "Add to Favorites" button and a "Remove from Favorites" button

Favorite Products Screen
Displays a list of favorite products
Allows navigation to Product Details Screen
Includes a "Logout" button


## State Management

- The app uses local state management with React's useState hook

- AsyncStorage is used for persisting user data and favorite products


## Styling
- Styles are defined in separate style files for each component
Global styles are used for consistent theming across the app


## Future Improvements
Implement proper state management (e.g., Redux) for better data flow
Add error handling and loading states for API calls
Implement user profile management
Add search functionality to the product listing
Implement product categories and filtering
This README provides an overview of the app's structure and functionality. For more detailed information, refer to the individual component files and their comments.
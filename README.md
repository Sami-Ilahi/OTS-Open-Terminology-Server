This is a [Next.js](https://nextjs.org/), Typescript, and Taillwind CSS project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Live Search App Documentation

## Introduction

This documentation provides a detailed guide on how to use and understand the features and functionalities of the Live Search App. This web application allows users to perform live searches on a server and provides various filtering, sorting, and display options. The app is responsive and user-friendly, making it suitable for a wide range of screen sizes.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Live Search](#live-search)
3. [Search Validation](#search-validation)
4. [Additional Search Parameters](#additional-search-parameters)
5. [Load More Results](#load-more-results)
6. [Display Options](#display-options)
7. [Result Details](#result-details)
8. [Responsive Design](#responsive-design)

## 1. Getting Started <a name="getting-started"></a>

To start using Live Search App, you should have Node.js and npm (Node Package Manager) installed. Follow these steps to get the app up and running:

1. Clone the project from the repository.

```bash
   git clone https://github.com/Sami-Ilahi/

   cd livesearch-app
```

First, run to install dependencies.

```bash
npm install

```

Then, run the development server:

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 2. Live Search <a name="live-search"></a>

The main feature of the app is the live search functionality. To search for items, type your query into the search bar. The app will fetch results from the server as you type and display them in real-time.

## 3. Search Validation <a name="search-validation"></a>

To ensure a meaningful search, the app enforces the following validation rules:

Search only begins when typing more than 3 letters or numbers.The minimum length of the query is set at three characters for better results.
Special characters are automatically filtered out and will not be part of the query.

## 4. Additional Search Parameters <a name="additional-search-parameters"></a>

Apart from the text search bar, you can utilize additional search parameters by selecting options from a list. These parameters refine your search and help you find relevant results.The available search parameters are:

- Text Search (default)
- ProblemNameCodeList
- LocationCodeList

## 5. Load More Results <a name="load-more-results"></a>

To load more search results, simply click the "Load More" button. The app will fetch an additional 20 results each time you click, allowing you to explore more options.

## 6. Display Options <a name="display-options"></a>

You can customize how search results are displayed using the radio buttons. The available display options are:

- Preferred Name (default)
- Display Name PGO Med Mij
- Fully Specified Name

Select the option that suits your preferences, and the results will be sorted accordingly.

## 7. Result Details <a name="result-details"></a>

The total number of search matches is displayed in the Results section. Each search result is displayed in a card format. To access more details about a particular result, click the "Info" button on the card. A detailed card will appear next to the search results, providing additional information in a table format.

You can easily close the details card and click on another result to view its details. Clicking on the "Info" button for a different result will update the details card with the new information related to the newly selected search result.

## 8. Responsive Design <a name="responsive-design"></a>

Live Search App is responsive and adapts to various screen sizes and devices. Whether you're using a desktop computer, tablet, or smartphone, the app will provide a seamless user experience.

That's it! You are now ready to use the Live Search App with all its features and functionalities. Enjoy searching, exploring, and finding the information you need in an efficient and user-friendly manner.

## 9. App Dependencies <a name="app-dependencies"></a>

The app uses the following dependencies and devDependencies, each chosen for a specific purpose:

#### Dependencies:

- next: As the core framework for building the web application.
- react and react-dom: For creating the user interface.
- axios: For making HTTP requests to fetch data from the server.
- lodash.debounce: To debounce user input for efficient live searching.
- react-icons: To easily include icons in the user interface.

#### Dev Dependencies:

- typescript: For adding static types to the project.
- @types/lodash.debounce: Type definitions for lodash debounce.
- @types/node: Type definitions for Node.js.
- @types/react and @types/react-dom: Type definitions for React and React DOM.
- tailwindcss: A utility-first CSS framework for styling the app.
- autoprefixer: To process CSS and add vendor prefixes.
- postcss: For processing CSS with JavaScript.

These dependencies were chosen to provide the necessary tools and functionality for building a robust and efficient Live Search App.

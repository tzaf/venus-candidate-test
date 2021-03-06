<p align="center">
  <a href="https://www.taboola.com">
    <img alt="Taboola" src="https://www.taboola.com/wp-content/uploads/2020/03/svg6.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Venus Candidate Test
</h1>

## Location

Sandbox link - https://codesandbox.io/s/taboola-venus-candidate-task-lj1of
Please fork from this sandbox.

## Summary đ¤

The objective of this assignment is to test your skills as a frontend developer.
There is no time limit for this task and you can hand it in whenever you like. Our estimated time investment is up to 6-8 hours.
You are free to use whichever 3rd party libraries you desire.

You are provided with a project containing a [GatsbyJS](https://gatsbyjs.com/) / [React](https://reactjs.org/) based application, which you will be required to change/add code to according to the instructions below.

## Overview đĒ

The project you are provided with is a simple blog website containing several blog posts.
The content is written in [Markdown](https://www.markdownguide.org/) and is sourced through local [_.mdx_](https://www.gatsbyjs.com/docs/glossary/mdx/) files. It is built using similar infrastructure our team works with on a daily basis.

Your task will be to implement a React component that can be used in-content, which given a country displays some Covid-19 case data in a simple chart.

## Setup âī¸

(use this if working locally, otherwise codesandbox does this for you)
1. clone/unzip the repo from the above url
2. run `npm install` from the root folder (`/venus-candidate-test`)
3. run `npm start` to initialize the development server
   1. You can view the UI in the browser by accessing `localhost:8000`
4. You can run `npm run clean` to clear any generated files by the system when needed
5. Finally, before handing in the project, run `npm run build && npm run serve` to locally serve the production version of the website. Access `localhost:9000/` to make sure it is loaded as expected

## Task Details âšī¸

Your goal is to implement the Covid19Chart component found in `/src/component/covid19-chart.js`.
The input for this component will be a single prop - `country`.
The output is expected to be a simple line chart which displays the number of live Covid19 cases in the past year.

A blog post that utilizes this component was already created for you, and can be found in `/content/blog/covid19/index.mdx` (will currently display _NO DATA_ instead).
You can view the empty blog post in the browser after starting the dev server locally, by accessing `localhost:8000/covid19/`.

Data should be taken from [covid19api.com](https://covid19api.com) (free for use).

_Recommended_ - Data can also be taken as from the [taboola-cdn](https://cdn.taboola.com/covid19/covid19-country-data.json) in JSON format.

### **Please note** đ:
1. You are encouraged to send a short implementation plan after going over the requirements and code, and before starting the actual development. This can potentially save you time and help you focus on the key concepts of this task. 
2. Page performance and speed **will be examined and are important**. Try your best to take advantage of the provided infrastructure abilities, to make the browsing and rendering experience slick and smooth.
3. the charts may be extremely simple, however should still be very easy to read and understand. If you make them pretty, that`s ok too :)
4. The final version of the site should work in production mode(i.e after build).

### Additional Resources

here are some GatsbyJS guides that can be very helpful for this task, though not mandatory.
Expected reading time is around 35m.

1. [Building with Components](https://www.gatsbyjs.com/docs/conceptual/building-with-components/)
2. [GraphQL Concepts](https://www.gatsbyjs.com/docs/conceptual/graphql-concepts/)
3. [Overview of the Gatsby Build Process](https://www.gatsbyjs.com/docs/conceptual/overview-of-the-gatsby-build-process/)
4. [Rendering Options](https://www.gatsbyjs.com/docs/conceptual/rendering-options/)
5. [Build Time and Client Runtime Data Fetching](https://www.gatsbyjs.com/docs/conceptual/data-fetching/)
6. [Gatsby Core Philosophy](https://www.gatsbyjs.com/docs/conceptual/gatsby-core-philosophy/)
7. [Understanding React Hydration](https://www.gatsbyjs.com/docs/conceptual/react-hydration/)


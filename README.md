<p align="center">
  <a href="https://www.taboola.com">
    <img alt="Taboola" src="https://www.taboola.com/wp-content/uploads/2020/03/svg6.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Venus Candidate Test
</h1>

## Summary 🤏

The objective of this assignment is to test your skills as a frontend developer.
There is no time limit for this task and you can hand it in whenever you like. Our estimated time investment is up to 8 hours.
You are free to use whichever 3rd party libraries you desire.

You are provided with a git repository containing a [GatsbyJS](https://gatsbyjs.com/) / [React](https://reactjs.org/) based project, which you will be required to change/add code to according to the instructions below.

## Overview 🪟

The project you are provided with is a simple blog website containing several blog posts.
The content is written in [Markdown](https://www.markdownguide.org/) and is sourced through local _.mdx_ files. It is built using similar infrastructure our team works with on a daily basis.

Your task will be to implement a React component that can be used in-content, which given a country displays some Covid-19 case data in a simple chart.

## Setup ⚙️

1. clone/unzip the repo from the above url
2. run `npm install` from the root folder (`/venus-candidate-test`)
3. run `npm start` to initialize the development server
   1. You can view the UI in the browser by accessing `localhost:8000`
4. You can run `npm run clean` to clear any generated files by the system when needed
5. Finally, before handing in the project, run `npm run build && npm run serve` to locally serve the production version of the website. Access `localhost:9000/` to make sure it is loaded as expected

## Task Details ℹ️

Your goal is to implement the Covid19Chart component found in /src/component/covid19-chart.js.
The input for this component will be a single prop - `country`.
The output is expected to be a simple line chart which displays the number of live Covid19 cases in the past year.

A blog post that utilizes this component was already created for you, and can be found in `/content/blog/covid19/index.mdx` (will currently display _NO DATA_ instead).
You can view the empty blog post in the browser after starting the dev server locally, by accessing `localhost:8000/covid19/`.

Data should be taken from [covid19api.com](https://covid19api.com) (free for use).

### **Please note** 📝:
1. You will not be tested on how “pretty” your charts look, but a well presentable UI is definitely expected.
2. Page performance and speed will be examined and are important. Try your best to take advantage of the provided infrastructure abilities, to make the browsing and rendering experience slick and smooth.
3. The final version of the site should work in production mode(i.e after build).

## Contact Us ☎️
Feel free to contact us with any questions or further instructions.

Tzafrir Harazy - tzafrir.h@taboola.com
Nitzan Volman - nitzan.v@taboola.com


// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

let counter = 0;

const onRouteUpdate = () => {
  counter += 1;

  if (counter > 1 && counter % 2 === 1) {
    throw new Error('***** Hey You, Can you fix this unnecessary error? *****');
  }
}

export { onRouteUpdate };

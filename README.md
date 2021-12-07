# slugger

A module to provide slugs for websites/webapps and CMS for usage in parameters.

# about the module

this module is ideal for working with endpoints.
example usage: CMS.
you would have noticed that a blog with heading Learn Javascript will likely have a slug `/learn-javascript` in it's URL.

**slugs help in identifying unique objects/identities in complex applications. like in: e-comm, blogging sites etc...**

- params : String
- return type : String,standardized into lowercase and words joined by a hyphen.
- example:

```js
slugger("Hello World");

// will return: hello-world
```

# installation and setup

- installation
  ` npm i slugger`

- setup, after installation

```js
//common js
const slugger = require("slugger");

//es6 import
import slugger from "slugger";
```

# usage

```js
console.log(slugger("Welcome Developer"));
// welcome-developer

let slug = slugger("Open Source Module");
console.log(slug);
// open-source-module
```

# feedbacks / complaints / issues?

- [reach me anywhere from here](https://www.linkfolio-dee.netlify.app)
- find the repo : [here](https://github.com/Dtech-Dbug/slugger)

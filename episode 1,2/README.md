# REACT tutorial

# Key takeaways :

# npm does not has any abbreviations, it doesn't stand for node package manager

# --------------------------------------------------------

# npm init command creates a package.json file which will handle/manage our package

# --------------------------------------------------------

# To create an app ready for production...we need to do so many things, such as remove comments, optimise code, shorten the code before actually proceeding for production

# This work is done by bundlers such as webpack, parcel or vite

# --------------------------------------------------------

# Bundlers are tools that take your code and its dependencies, then bundle them together into a smaller set of files, often optimized for production. These files are usually in the form of JavaScript, CSS, or HTML, and are intended to be served to users more efficiently.

# --------------------------------------------------------

# Key Functions of Bundlers:

Combining Files: Bundlers combine multiple files (JavaScript, CSS, images, etc.) into one or a few files to reduce the number of HTTP requests needed to load a webpage.

Dependency Management: They automatically handle dependencies in your project, making sure that files are included in the right order.

Code Splitting: Some bundlers can split your code into smaller chunks that are only loaded when needed, improving initial load time.

Minification: Bundlers can minify (reduce the size of) your code by removing unnecessary characters (like whitespaces, newlines, and comments) without changing its functionality.

Transpiling: They can convert modern JavaScript (ES6+) into a version that is compatible with older browsers, using tools like Babel.

Hot Module Replacement (HMR): During development, bundlers can automatically update your application in the browser when you make changes to the code, without requiring a full page reload.


# --------------------------------------------------

# PARCEL
- DEV Build
- Local Server
- HMR = Hot Module Replacement
- File matching algorithm -> written in cpp
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error handling
- HTTPs
- Tree Shaking algo - remove unused code
- Different dev and prod bundles


# --------------------------------------------------

# npm install -D parcel => -D flag is for using parcel as devDependencies {required only during development phase}

# Dependencies => required during production also

# --------------------------------------------------------

# What is package.json
it's a configuration for npm. It keeps a track of what version of  that package is installed into our system and it can have carat or tilde which help in upgrade of the package

# What is package-lock.json
its keeps the track of exact version that is being installed into the system

# What is node modules
node modules is like a database it contains the actual data of the dependencies of the package the projects need basically it is a collection of dependencies

# What is transitive dependency
when a package like parcel have its own dependencies and those dependencies can have its own dependencies 

# What is carat(^) or tilda(~) in package.json
carat automatically upgrades to the new minor version and tilda upgrades to the new major version but it's always afe to use only carat



# npx parcel index.html =>IGNITING THE APP => npx : executes a package => development build command 
- index.html is the entry(source) point 
- Add script to package.json => npm run start {since start is an inbuilt command in npm, we can simply write npm start}

# npx parcel build index.html => prod build command {"remove main from package.json"} => parcel will generate 3 files one each of html css and js in dist folder which is the same code but after optimisation => dist folder and parcel-cache is not needed to be pushed as this commands can regenerate this folders
- Added script to package.json => npm run build {npm build won't work}

# browsereslist.dev check

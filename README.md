## Website Performance Optimization project

This is the Project of the Udacity Website Performance Optimization class. Visit the [Site](https://leviisfool.github.io/WebsiteOptimization/).
### Getting started
1. Get the code:

    git clone https://github.com/leviisfool/WebsiteOptimization.git

2. Run the code:

    python -m http.server 8080

### Optimize list
#### Requirement 1: Critical Rendering Path
1. Compresse images.
2. Add async on script analytics.js and perfmatters.js.
3. Download the font file as font.css.
4. Inline style.css
5. Use Web Font Loader to load font.
6. Add cache-control on head.
7. Add media on print.css.

#### Requirement 2: Eliminate lags
##### Frame Speed
1. Use getElementById instead of querySelector.
2. Reduce pizzas' number.
3. Get mover items only once.
4. Calculate positions outside the for loop.
5. User transform instead of left.

##### Calculate Efficiency
1. Use getElementById instead of querySelector.
2. Get element only once.
3. Optimize the formula.


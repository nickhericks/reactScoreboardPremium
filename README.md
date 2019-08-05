# React exercise - Full Stack JavaScript Techdegree

### Scoreboard (Premium) application
This project is built using React to create a scoreboard application that includes a stopwatch component.

***
## View project
:mag: Live version available at [nickhericks.github.io/reactScoreboardPremium/](https://nickhericks.github.io/reactScoreboardPremium/)

<img src="https://res.cloudinary.com/dtqevfsxh/image/upload/v1565020758/portfolio/scoreboardPremium.png" width="899px">

<!-- ## Project objective
This project was built as I was learning about the Express web framework and the Pug templating engine. Through this project I learned about the request and response objects, body-parser, routes, templates, middleware, cookies (cookie-parser) redirects, error handling, modularizing routes, route parameters and query strings, serving static assets with a static server, and much more. :) -->

<!-- ## Techniques and concepts
- Express web framework
- Pug templating engine -->

## Code example
```javascript
// Begin interval for tick()
  componentDidMount() {
    console.log('stopwatch mounted')
    this.intervalID = setInterval(() => this.tick(), 100)
  }

  // Do not leak memory if stopwatch is removed from page
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick = () => {
    console.log('ticking...')
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState( prevState => ({
        previousTime: now,
        elapsedTime: prevState.elapsedTime + (now - this.state.previousTime)
      }));
    }
  }
```

## Acknowledgements
This project was built as part of the [Full Stack JavaScript Techdegree](https://join.teamtreehouse.com/techdegree/) offered by [Treehouse](https://teamtreehouse.com) :raised_hands:

if (process.env.NODE_ENV === 'development') {
  module.exports = require('./decorators/PageDecoratorInvariant').default
} else {
  module.exports = () => Page => Page
}

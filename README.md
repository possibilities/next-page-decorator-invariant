# Next.js page decorator invariant helper [![CircleCI](https://circleci.com/gh/possibilities/next-page-decorator-invariant.svg?style=svg)](https://circleci.com/gh/possibilities/next-page-decorator-invariant)

A decorator that warns developers about incorrect usage of [Next.js](https://github.com/zeit/next.js) page decorators

## Summary

When developing reusable decorators that target Next.js pages (which may or may not have a `getInitialProps`) it's useful to assert that the wrapped components is a page and not an ordinary component. For improved developer experience wrap any reusable page decorator with `PageDecoratorInvariant` and an error will be emitted when the decorator is improperly used.

## Usage

1. Install into your reusable component

    ```
    yarn add next-page-decorator-invariant
    ```

1. Use the decorator

    Configure the decorator and use it inside your decorator

    ```
    // decorators/FooDecorator.js
    import PageDecoratorInvariant from 'next-page-decorator-invariant'
    const pageDecoratorInvariant = PageDecoratorInvariant('FooDecorator')

    default export Page => {
      const WrappedPage = pageDecoratorInvariant(Page)
      return props => <WrappedPage {...props} />
    }
    ```

# Gatsby Theme Insta Grid

A Gatsby theme to add a grid of Instagram images to your Gatsby site. Gatsby Theme Insta Grid gives you a customisable grid component to easily add a collection of images from either an Instagram account or hashtag to your site.

An online demo of the theme can be viewed [here](https://gatsby-theme-insta-grid.netlify.app/)

## Installation

To use the insta grid theme in your Gatsby site, add the theme as a dependency:

```sh
yarn add @melanienolan/gatsby-theme-insta-grid
```

Add it to your `gatsby-config.js`:

```js
module.exports = {
  plugins: [
    {
      resolve: "@melanienolan/gatsby-theme-insta-grid",
      options: {
        // type defaults to 'account'
        type: "account",
        // add the instagram user name here
        username: "username",
      },
    },
  ],
};
```

And start your site:

```sh
gatsby develop
```

## Usage

To show the insta grid, import the `InstaGrid` component from the insta grid theme and use it as you would any other component:

```jsx
import { InstaGrid } from "gatsby-theme-insta-grid";

export default () => {
  return (
    <div>
      <InstaGrid></InstaGrid>
    </div>
  );
};
```

## Card Types

There are two different types of card:

- `basic` (default) card shows just the image with an overlay on hover showing the number of likes and comments.
- `complex` card shows the image with the number of likes and comments underneath and an option to display the image caption.

### Basic

![Basic cards](./images/basic-cards.png)

Example usage:

```jsx
import { InstaGrid } from "gatsby-theme-insta-grid";

export default () => {
  return (
    <div>
      <InstaGrid></InstaGrid>
    </div>
  );
};
```

### Complex

The complex cards show the images as well as the number of likes and an option to display the image caption.

![Complex cards](./images/complex-cards.png)

Example usage:

To opt for `complex` cards, add the `cardType` prop to your implementation of the `InstaGrid` component and set it to `'complex'`:

```jsx
import { InstaGrid } from "gatsby-theme-insta-grid";

export default () => {
  return (
    <div>
      <InstaGrid cardType="complex"></InstaGrid>
    </div>
  );
};
```

To add the image caption to the complex card, add the `showCaptions` prop to your implementation of the `InstaGrid` component and set it to `true`:

```jsx
import { InstaGrid } from "gatsby-theme-insta-grid";

export default () => {
  return (
    <div>
      <InstaGrid cardType="complex" showCaptions={true}></InstaGrid>
    </div>
  );
};
```

Note that captions are only intended to be used with complex cards.

### Configuration

The Insta Grid theme can be configured to display images from either an Instagram user account or an Instagram hashtag. The theme uses [Gatsby Source Instagram](https://www.gatsbyjs.org/packages/gatsby-source-instagram/) at its core, and so the options available look quite similar.

These can be configured in your site's `gatsby-config.js` by changing the `options` `type` value to either `account` or `hashtag`. Depending on your choice, you will need to add either the `username` or `hashtag` value.

If no `type` value is provided, the default value will be `account`.

#### Theme Options

| Key        | Default value | Description                                                                      |
| ---------- | ------------- | -------------------------------------------------------------------------------- |
| `type`     | `account`     | The type of query you want to make, available values are `account` and `hashtag` |
| `username` | `nasa`        | The Instagram username you want to use                                           |
| `hashtag`  | `undefined`   | The Instagram hashtag you want to use                                            |

#### Instagram Account example

```js
module.exports = {
  plugins: [
    {
      resolve: "@melanienolan/gatsby-theme-insta-grid",
      options: {
        // type defaults to 'account'
        type: "account",
        // add the instagram user name here
        username: "nasa",
      },
    },
  ],
};
```

#### Instagram Hashtag example

```js
module.exports = {
  plugins: [
    {
      resolve: "@melanienolan/gatsby-theme-insta-grid",
      options: {
        type: "hashtag",
        // add the hashtag name here
        hashtag: "photooftheday",
      },
    },
  ],
};
```

### Overriding the theme

This theme uses [Theme UI](https://theme-ui.com/) for styling, so it is possible to customise the grid according to your site's own theme. To customise the styles for the grid, first create a `gatsby-plugin-theme-ui` folder inside your project's `src` folder and create a file called `index.js`:

In that file (`your-site/src/gatsby-plugin-theme-ui/index.js`), import the `baseTheme` from `gatsby-theme-insta-grid` and use it to create your own theme as follows:

```
import baseTheme from '@melanienolan/gatsby-theme-insta-grid/src/gatsby-plugin-theme-ui';

export default {
  ...baseTheme,
  fonts: {
    ...baseTheme.fonts,
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    ...baseTheme.colors,
    text: "#222222",
    background: "#ffffff",
    primary: "#3D5A80",
  }
};

```

Since the styling has been done using Theme UI, it is possible to customise the grid itself as well as the cards.

The grid is essentially a Theme UI Flex component with a variant and can be edited at `styles.Flex.insta`, other editable components and their variants are:

Theme UI Flex components:

- `styles.Flex.insta` - the grid container
- `styles.Flex.overlay` - the basic card overlay, appears on hover

Theme UI Card components:

- `cards.basic` - the basic card component
- `cards.complex` - the complex card component

Theme UI Text components:

- `text.caption` - the caption text shown on complex cards
- `text.numbers` - the numbers of likes and comments

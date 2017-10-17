---
layout: post
title: Building Design Systems with Tachyons and React
demo: https://winkervsbecks.github.io/grid-experiments
source: https://github.com/winkerVSbecks/grid-experiments
classes: bg-animate hover-bg-purple
style: dark
published: false
---

## Intro

basscss, tachyons, etc.
Functional CSS is an extreme form of OOCSS which relies on small, single property, immutable classes that can be composed into a larger component in HTML.


Basscss borrows many ideas from OOCSS while attempting to address common product design considerations through a balance of consistency and flexibility.

 small, single property, immutable classes that can be composed into a larger component in HTML.

Avoid styles that require overrides elsewhere or are highly specific to context.

This looks like a terrible idea?
  see: 1, 2, 3

Immutable Utilities

Utilities provide the backbone for typography and layout and, once set, should never be changed or extended. Each utility should contain as few CSS properties as possible, generally just one or two. Utilities should do one thing and do it well, they should be simple and obvious to use, and they should operate independently.

The values used for utilities, such as white space scales, may change over time, but the utilities themselves and their naming conventions should not.

https://github.com/winkerVSbecks/awesome-functional-css
https://github.com/chibicode/react-functional-css-protips
tachyons theory https://github.com/dwyl/learn-tachyons#immutable-gem-gem-gem

> Small, clear, easy to read classes that are easy to apply and do one thing.
Having small classes means it's easy to make a set of consistent spacing and type rules - you end up forcing a beautiful type scale & rhythm on your design.

> Immutable 💎 💎 💎

> In Functional languages declaring a property means it will never get overwritten, something known as Immutability - i.e it can't ever be changed (or mutated). A huge benefit you gain from immutability is that code is easier to reason about (you don't have to go on a hunt to find where something might have been changed).

> CSS on the other hand is inherently mutable (it's the "C" in CSS - the Cascade)! But because fcss (functional CSS) classes are single responsibility, they aren't at risk of overriding each other. This almost eliminates the problems of the cascade (changing a property somewhere won't break your code elsewhere).

> Another extremely useful property you gain from immutability is something called Referential Transparency. In other words: A thing does exactly what it says on the tin!

> We know with a fair amount of confidence what our button will look like just from reading the classes:

> <button class="pa2 br2 bg-green tc tracked">
> but with .btn & .btn-dwyl classes, for all we know our button could look like:


## foundation / Design System Scales / Tachyons Design System

> Prior to beginning this design sprint, we had already created a basic style guide, that we called the foundation. This foundation loosely defined our typography, colors, icons, spacing and information architecture. The foundation proved essential for guiding our work in a unified direction while allowing room for us to individually explore creative design solutions.

+ Background Colour
+ Text Colour
+ [Spacing: Padding & Margin](https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62)
+ Sizing: Width & Height
+ Border: Colour, Width & Radius
+ Type Scale, Line Height & Font Weight

## Components

What is a component?
Everything

building a neighbourhood and starting at the brick level.
Rebass


## Building Components 🛠️ Using the Design System
+ Organisms Domain specific instances or composition of molecules
+ Molecules Composition of atoms – focused on generic UI patterns
+ Atoms Focused purely on visual aspect of the design system

## Atoms

Typography Components
• <Heading> for h1, h2, h3…
• <Text> for paragraphs
• <Solid> for span or inline text

## v1 with `className={`avenir fw7 lh-title f1 dark-gray ${className}`}`
{...props}
extending classes

## v2 with [classNames](github.com/JedWatson/classnames)
+ defaults
+ Props get converted in classname
+ Use props to drive styles!


## Props ➡️ className
+ We repeat this pattern a lot!
+ What about media queries?
+ Can we type check these values?
+ It enforces only a subset of the design system


## v3 Design System as Props
+ HOC
+ Prop Transformers! `const hoc = Component => props => <Component {transform(props)} />;`

```js
function withTypography(ComposedComponent) {
  function WithTypography({
    f = 5,
    lh = 'copy',
    fw = 4,
    className,
    ...passThroughProps
  }) {
    const props = {
      classNames: className(`f${f} lh-${lh} fw${fw}`, className),
      ...passThroughProps,
    };

    return <WithTypography {...props} />;
  }

  WithTypography.displayName = `WithTypography(${getDisplayName(
    ComposedComponent,
  )})`;

  return WithTypography;
}
```

<table style={{ fontSize: '1.25rem', width: '100%' }}>
  <thead style={{ backgroundColor: '#ddd' }}>
    <tr>
      <th style={{ padding: '1rem', width: '25%' }}>Props</th>
      <th style={{ padding: '1rem' }}>Domain</th>
      <th style={{ padding: '1rem 4rem' }} />
      <th style={{ padding: '1rem 2rem' }}>HOC</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ padding: '1rem', textAlign: 'left' }}>
        <code>bg</code>, <code>color</code>
      </td>
      <td style={{ padding: '1rem' }}>Colours</td>
      <td rowSpan="7">➡️</td>
      <td rowSpan="7">
        <code>withDesignSystem()</code>
      </td>
    </tr>
    <tr>
      <td style={{ padding: '1rem', textAlign: 'left' }}>
        <code>f</code>, <code>fw</code>, <code>lh</code>
      </td>
      <td style={{ padding: '1rem' }}>Typography</td>
    </tr>
    <tr>
      <td style={{ padding: '1rem', textAlign: 'left' }}>
        <code>tc</code>, <code>tl</code>, <code>tr</code>
      </td>
      <td style={{ padding: '1rem' }}>Text Alignment</td>
    </tr>
    <tr>
      <td style={{ padding: '1rem', textAlign: 'left' }}>
        <code>ma</code>, <code>mv</code>, <code>mh</code>, <code>mt</code>,{' '}
        <code>mr</code>, <code>mb</code>, <code>ml</code>, <code>pa</code>,{' '}
        <code>pv</code>, <code>ph</code>,
        <code>pt</code>, <code>pr</code>, <code>pb</code>, <code>pl</code>
      </td>
      <td style={{ padding: '1rem' }}>Maring & Padding</td>
    </tr>
    <tr>
      <td style={{ padding: '1rem', textAlign: 'left' }}>
        <code>w</code>, <code>h</code>
      </td>
      <td style={{ padding: '1rem' }}>Sizing</td>
    </tr>
    <tr>
      <td style={{ padding: '1rem', textAlign: 'left' }}>
        <code>ba</code>, <code>bt</code>, <code>br</code>, <code>bb</code>,{' '}
        <code>bl</code>
      </td>
      <td style={{ padding: '1rem' }}>Border</td>
    </tr>
    <tr>
      <td style={{ padding: '1rem', textAlign: 'left' }}>
        <code>radius</code>
      </td>
      <td style={{ padding: '1rem' }}>Border Radius</td>
    </tr>
  </tbody>
</table>


### Higher Order Components
+ withDesignSystem() design system as props
+ withBaseStyles() applies a set of base classes always
+ defaultProps() provide default values for props

### Typography Components with HOC

```js
export const Heading = compose(
  defaultProps({
    level: 1, f: 1, fw: 7, lh: 'title', color: 'dark-gray',
  }),
  withBaseStyles('avenir'),
  withDesignSystem,
)(({ level, ...props }) => {
  const Tag = `h${level}`;
  return <Tag {...props} />;
});
```

### Block

```js
const Block = withDesignSystem('div');
Block.displayName = 'Block';
```

### Flow Types


### Full Example
https://hoc-design-system.glitch.me
https://glitch.com/edit/#!/hoc-design-system?path=src/main.js


## The Future
Tachyons generator

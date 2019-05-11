---
layout: post
title: "Why Not Both?"
bgImage: /img/why-not-both.jpg
bgPosition: 100% 50%
bgSize: 200px 150px
bgColor: '#fff'
style: light
---

The web is defined by the interplay of various components: back-end technologies such as servers and databases to support the website itself, client-side technologies to present content and provide interactivity, and the network to deliver the website to the user.

While there are a lot of layers to this medium I want to focus on the presentation layer — HTML, CSS & JS. In this article I am going to be using the shorthand _web_ to refer to this presentational layer. (I realize that is inaccurate but, I don't have a better word for it.)

## The Medium of the Web

Bret Victor in his talk [Stop Drawing Dead Fish](https://vimeo.com/64895205) differentiates computers from other mediums such as drawing, photography or animation. In his opinion, what makes computers different from all these other mediums is the fact that you can create simulations and add interactivity. It is not just a drawing of a fish or an animated fish but, an interactive simulation.

<div style="padding:56.25% 0 0 0;position:relative;margin-bottom: 2em;"><iframe src="https://player.vimeo.com/video/64895205" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

Frank Chimero explored the medium of the web in his article [The Web's Grain](https://frankchimero.com/writing/the-webs-grain/). What makes the web truly different from anything else. What are its intrinsic properties? He summarizes it as "an edgeless surface of unknown proportions, comprised of small, individual, and variable elements from multiple vantages assembled into a readable whole that documents a moment."

For me, the intrinsic qualities of the web are fluidity, responsiveness and dynamism. Or as Jen Simmons puts it much more eloquently:

1. Mix fluid with fixed
2. Four stages of squishiness
3. Truly two-dimensional layouts
4. Nested contexts
5. Ways to contract and expand content
6. Media queries, as needed

## Design in the Medium

In the past couple of years, we've gone from being excited about CSS Grid Layout to using it in production. However, it seems that there is a bit of inertia when it comes to designers adopting it.

Jen Simmons often speaks about how everything about web design just changed. We are no longer limited to fixed or fluid column-based layouts. Instead, we can design truly two-dimensional layouts. But, do we actually have any tools that allow us to design that way?

<script async class="speakerdeck-embed" data-slide="53" data-id="492fb00803b144aba89a2d9dfeeca2fc" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

When we design in Sketch or Figma, we are designing a snapshot in time and space. You have to create multiple *snapshots* to describe the responsive behaviour of one screen. Now imagine designing responsive two-dimensional layouts with multiple states and variants: quite tedious.

So what is the answer? Design in the medium. You need to be able to code to design in the medium. Arguably, this barrier to entry is too high. What if you could design in the browser without needing to code?

Tools like [Framer](https://www.framer.com/features/react/), [Modulz](https://www.modulz.app/), [Alva](https://meetalva.io/) and [Playroom](https://github.com/seek-oss/playroom) are bridging this divide. Framer in particular is quite exciting. It allows you to import code components and mix them with design components. You can extend design components with code or even build a custom UI to interact with them.

<blockquote style="margin-bottom: 2em;">
  <p>Designers are equipped with tools that focus on communicating design aesthetic, and developer tools are more geared toward controlling behaviour and functionality.</p>
  <cite>
    &mdash; Alan B Smith,
    <a href="https://medium.com/@_alanbsmith/component-based-design-168811e0c4ab">
      Component-Based Design
    </a>
  </cite>
</blockquote>

Fundamentally these are still design tools. They are visual code editors with the purpose of building living prototypes not the actual application itself. They don't allow you to define behaviour and functionality. They are not meant to replace any development tools.

<p>
  <img style="max-width: 350px; margin: 0 auto;" alt="Why not both?" src="/img/why-not-both.gif" />
</p>

My hope is that we will get something like [Unity](https://unity.com/) for the web. Something that both developers and designers can use. A tool that allows us to define both aesthetic and functionality with an intuitive interface. That interface is going to be some combination of GUI and code editor.

## Generative Design

The convergence of design and development tools will allow us to discover new and more innovative ways of working. Code is not the most expressive or performative of platforms. In my opinion, describing visual characteristics in code is tedious and not-intuitive. For example, designing an animation with the After Effects timeline panel is a much better experience than doing the same with CSS or a JS library. You can visualize the timeline, adjust curves and iterate much faster.

The [Compositor](http://compositor.io/) team has been working on some truly interesting tools. Modifying the UI directly or dragging components to create layouts is again a much better developer experience. It also allows you to explore and iterate with very little friction.

<div class="flex-ns items-center">
  <blockquote class="twitter-tweet" data-conversation="none"><p lang="und" dir="ltr">🙀 <a href="https://t.co/q0BqSsTRHi">pic.twitter.com/q0BqSsTRHi</a></p>&mdash; Compositor (@getcompositor) <a href="https://twitter.com/getcompositor/status/931592802697469953?ref_src=twsrc%5Etfw">November 17, 2017</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

  <div class="w1-ns"></div>

  <blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr">Making progress <a href="https://t.co/IGrZWzqqbT">pic.twitter.com/IGrZWzqqbT</a></p>&mdash; Compositor (@getcompositor) <a href="https://twitter.com/getcompositor/status/929689837971623936?ref_src=twsrc%5Etfw">November 12, 2017</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

[Project Phoebe](https://medium.com/project-phoebe) was a brief attempt at using mutative design for UI and Adobe seems to be [exploring](https://www.fastcompany.com/3068884/adobe-is-building-an-ai-to-automate-web-design-should-you-worry) this space too. But, we are just scratching the surface. What would the UI design equivalent of [Real Time Topology Optimization](https://www.frustum.com/) look like? Can we define a set of constraints, allow the UI to morph around it and iterate?

You can start leveraging the power of the medium. You don't have to manually create all the possible layouts. You have the ingredients. You can define a recipe and explore all the possible permutations.

<blockquote style="margin-bottom: 2em;">
  <p>Generative design mimics nature’s evolutionary approach to design. Designers or engineers input design goals into generative design software, along with parameters such as materials, manufacturing methods, and cost constraints. The software explores all the possible permutations of a solution, quickly generating design alternatives. It tests and learns from each iteration what works and what doesn’t.</p>
  <cite>
    &mdash;
    <a href="https://www.autodesk.com/solutions/generative-design">
      Autodesk Generative Design
    </a>
  </cite>
</blockquote>

Let's focus on one category — layout. Much of web design is stuck in the mindset of fixed or fluid columns where content shifts around at breakpoints, almost completely ignoring the two-dimensional nature with the possibility of overlapping content.

Frank describes web design as "creating assemblages of elements, then associating them with the appropriate space". I did an experiment very much inspired by that statement. Start by defining a high level fluid grid, say 6x4. Take a document and slice up the different sections into components, give them random grid sizing and drop them into the layout. The user can then lock items and continue regenerating the grid until they find a satisfying layout. You can try it yourself in this [CodeSandbox](https://codesandbox.io/s/8r6k4j9k2).

<div class="flex-l items-stretch">
  <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Playing with the idea of procedurally generated layout grids.<a href="https://t.co/yAsPbkpDZJ">https://t.co/yAsPbkpDZJ</a> <a href="https://t.co/bHQIvlF9nC">pic.twitter.com/bHQIvlF9nC</a></p>&mdash; Varun Vachhar (@winkerVSbecks) <a href="https://twitter.com/winkerVSbecks/status/1095479837534441474?ref_src=twsrc%5Etfw">February 13, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

  <div class="w1-l"></div>

  <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Continuing with generative grid experiments. Took one of the <a href="https://twitter.com/tachyons_css?ref_src=twsrc%5Etfw">@tachyons_css</a> examples, sliced up the different sections into components and randomly sizing them in the container. You can then lock items and continue regenerating the grid until you find an interesting layout. <a href="https://t.co/1cUSnz9VRN">pic.twitter.com/1cUSnz9VRN</a></p>&mdash; Varun Vachhar (@winkerVSbecks) <a href="https://twitter.com/winkerVSbecks/status/1101502912675627014?ref_src=twsrc%5Etfw">March 1, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

The results were a lot better than I expected. It has been hard to break out of the twelve column mindset for me. This helped.

These are just a first steps. We could get people to rate these layouts on a scale of 1-10 and use that data to train a machine learning model which could then in-turn generate layouts for us. There is a lot more to explore in the world of generative design. I’m excited to see what else the web design and development community comes up with. Perhaps generative design will be the bridge between design and code?
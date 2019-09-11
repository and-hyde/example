# Example Blog for Gatsby & Hyde

# Goal

Have a blogging support system that aims to be as simple as Jeykll, but with the underlying power of Gatsby.

There is a high-level goal of supporting all of the features that have been built into the Artsy blog over the last
7 years incrementally.

# This Repo

This repo serves as the example blog for development of the system. We can build out the blog generically, then switch
it to be a  [gatsby-themes][themes] so that anyone can base their blog on it.

# Features TODO

These are the goals, not where it is at today:

- [x] TypeScript support
- [x] TS Types for queries
- [x] Archived pages
- [ ] Author pages - [mine][author]
- [ ] Category pages - [GraphQL][graphql]
- [ ] Site series - [React Native at Artsy][rnaa]
- [ ] Multi-author posts - [Pair Programming][pp]
- [ ] [GitHub Issue Powered Comments][ghc]
- [ ] Real-time [search][search] on the static pages
- [ ] Static stand-alone Pages - [Artsy x React Native][x-rn]

# Aim

You as a user would have a blog with a `blog` folder, in that folder you could have:

```sh
$ tree blog

[...] # Your gatsby stuff
content/
├── assets
│   ├── gatsby-icon.png
│   └── profile-pic.jpg
├── blog
│   ├── archives
│   │   ├── 2011-12-25-creating-rebase.md
│   │   ├── 2011-12-26-the-godaddy-kerfuffle.md
│   │   └── 2011-12-27-barriers-of-entry-to-photography.md
│   ├── my-first-post
│   │   ├── index.mdx
│   │   └── hello-world.jpg
│   └── my-second-post
│       └── index.mdx
│   
└── pages
   └── cool-lib
        └── index.mdx
```

Should generate the following resources:

```
/assets/gatsby-icon.png
/assets/profile-pic.jpg
/blog/creating-rebase/index.html
/blog/the-godaddy-kerfuffle/index.html
/blog/barriers-of-entry-to-photography/index.html
/blog/my-first-post/index.html
/blog/my-first-post/hello-world.jpg
/blog/my-second-post/index.html
/cool-lib/index.html
```

## How do I contribute?

Right now we have the above TODO list. You can clone this repo, run `yarn install` and start trying to build out some 
of the features in that list into the main site. We can figure out how to transform it into a theme once themes are 
more stable.

```sh
git clone https://github.com/and-hyde/example.git gatsby-and-hyde
cd gatsby-and-hyde
cd example
yarn install
yarn type-check
yarn start
```


[themes]: https://medium.com/@kyle.robert.gill/a-simple-guide-to-gatsbyjs-themes-a4f9765c5ac7
[author]: /author/orta/
[ghc]: https://artsy.github.io/blog/2017/07/15/Comments-are-on/
[graphql]: https://artsy.github.io/blog/categories/graphql/
[pd]: https://github.com/artsy/artsy.github.io/issues/355#issuecomment-315605280
[pp]: https://artsy.github.io/blog/2018/10/19/pair-programming/
[rnaa]: https://artsy.github.io/series/react-native-at-artsy/
[search]: https://github.com/artsy/artsy.github.io/pull/332
[x-rn]: https://artsy.github.io/artsy-x-react-native.html

# tree-like-timeline-vue2

A lightweight tree-like timeline component base on **Vue2** without any dependency.

## Features

- Lightweight (without any dependency)
- Mobile friendly (RWD)
- Automatically sort by time and split into left and right sides
- Customize your content flexibly

## Layout

![Screenshot](https://i.imgur.com/Hgir36b.png)

## Mobile friendly

[Screenshot](https://i.imgur.com/zJHxxs9.gif)

![Screenshot](https://i.imgur.com/397ERgE.gif)

## Install

```shell
npm install tree-like-timeline-vue2
```

## Quick Start

Import `tree-like-timeline-vue2` component

```js
import TreeLikeTimeline from "tree-like-timeline-vue2";
export default {
  components: {
    TreeLikeTimeline,
  },
};
```

Import `tree-like-timeline-vue2.css` file

```css
<style>
@import "tree-like-timeline-vue2/dist/tree-like-timeline-vue2.css";
</style>
```

Or
Import `tree-like-timeline-vue2.css` in your main js or ts file

```js
import "tree-like-timeline-vue2/dist/tree-like-timeline-vue2.css";
```

Vue template

```html
<TreeLikeTimeline :data="list">
  <template v-slot="{ item }">
    <article>
      <time>{{ item.time }}</time>
      <h3>{{ item.title }}</h3>
      <p>{{ item.content }}</p>
    </article>
  </template>
</TreeLikeTimeline>
```

Data

```js
export default {
  data() {
    return {
      list: [
        {
          time: "2013-04",
          title: "What is Lorem Ipsum?",
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          time: "2014-03",
          title: "What is Lorem Ipsum?",
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          time: "2014-05",
          title: "What is Lorem Ipsum?",
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          offsetTop: "120px"
        },
        {
          time: "2014-07",
          title: "What is Lorem Ipsum?",
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          time: "2014-11",
          title: "What is Lorem Ipsum?",
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          time: "2015-01",
          title: "What is Lorem Ipsum?",
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
      ]
    }
  }
}
```

## Options

### timeKey

Pick a key as time (default as `time`).

```html
<TreeLikeTimeline :data="list" time-key="date">
  <template v-slot="{ item }">
    <time>{{ item.date }}</time>
  </template>
</TreeLikeTimeline>
```

```js
export default {
  data() {
    return {
      list: [
        {
          date: "2013-04",
        },
      ],
    };
  },
};
```

### offsetTop

When the content of the nodes on both sides is completely side by side, you can independently adjust the node to be shifted downward.

```html
<TreeLikeTimeline :data="list">
  <template v-slot="{ item }">
    <time>{{ item.time }}</time>
  </template>
</TreeLikeTimeline>
```

```js
export default {
  data() {
    return {
      list: [
        {
          time: "2014-03",
          title: "Where does it come from?",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          time: "2014-05",
          title: "Where can I get some?",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          time: "2014-07",
          title: "translation by H. Rackham",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          time: "2014-11",
          title: "de Finibus Bonorum et Malorum",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          offsetTop: "100px",
        },
      ],
    };
  },
};
```

![Screenshot](https://i.imgur.com/57lFLu9.png)

### dividerLabel

You can format timenode label by using `divider-label` attribute.

```html
<TreeLikeTimeline :data="list" :divider-label="formatDividerLabel">
  <template v-slot="{ item }">
    <time>{{ item.time }}</time>
  </template>
</TreeLikeTimeline>
```

```js
export default {
  methods: {
    formatDividerLabel(timeValue) {
      return new Date(timeValue).getFullYear();
    },
  },
};
```

### Theme and Text Color

You can custom theme color by using `theme` attribute.
Also, change text color of timeline node by using `text-color`.

```html
<TreeLikeTimeline :data="list" theme="#738bff" text-color="#fffff">
  <template v-slot="{ item }">
    <time>{{ item.time }}</time>
  </template>
</TreeLikeTimeline>
```

### Custom Your content style

You can access the class `.tree-like-timeline-vue2__node_item` to custom content style

HTML

```html
<TreeLikeTimeline :data="list">
  <template v-slot="{ item }">
    <article>
      <time>{{ item.time }}</time>
      <h3>{{ item.title }}</h3>
      <p>{{ item.content }}</p>
    </article>
  </template>
</TreeLikeTimeline>
```

CSS

```css
/* Left side */
.tree-like-timeline-vue2__node_item:nth-of-type(even) {
  article {
    background: yellow;
    border: 5px double red;
  }
}
/* Right side */
.tree-like-timeline-vue2__node_item:nth-of-type(odd) {
  article {
    background: pink;
    border: 3px dashed blue;
  }
}
```

Result
![Screenshot](https://i.imgur.com/L0RbK53.png)

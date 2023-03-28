# tree-like-timeline-vue22

A lightweight tree-like timeline component base on **Vue2** without any dependency.

## Features

- Lightweight (without any dependency)
- Mobile friendly (RWD)
- Customize your content flexibly

## Layout

![Screenshot](https://i.imgur.com/gMcEI7V.png)

## Mobile friendly

![Screenshot](https://i.imgur.com/coUSmsJ.gif)

## Install

```
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
Import `tree-like-timeline-vue2.css` by webpack

```js
import "tree-like-timeline-vue2/dist/tree-like-timeline-vue2.css";
```

Vue template

```html
<TreeLikeTimeline :data="list">
	<template v-slot="{ item }">
		<article class="timeline__node">
			<time>{{ item.time }}</time>
			<p>{{ item.title }}</p>
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
          title: "成功推出256×360 pixel size指紋辨識感測IC。"
        },
        {
          time: "2014-03",
          title: "成功推出160×160 pixel size指紋辨識感測IC。"
        },
        {
          time: "2014-05",
          title: "成功推出208×288 pixel size指紋辨識感測IC。"
          offsetTop: "120px"
        },
        {
          time: "2014-07",
          title: "獲得新竹科學工業園區管理局MG+4C垂直整合推動專案計畫補助「用於智慧型手持設備支具防偽功能指紋感測裝置」開發案。"
        },
        {
          time: "2014-11",
          title: "成功推出第二代160×160 pixel size指紋辨識感測IC，適用於智慧型手持設備。"
        },
        {
          time: "2015-01",
          title: "成功推出指紋辨識感測IC結合controller之解決方案。"
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

When the content of the nodes on both sides are completely side by side, you can independently adjust the node to be shifted downward.

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
					time: "2013-04",
				},
				{
					time: "2013-05",
					offsetTop: "50px",
				},
			],
		};
	},
};
```

![Screenshot](https://i.imgur.com/OLybsL3.png)

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
Also change text color of timeline node by using `text-color`.

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
			<img :src="item.thumb" :alt="item.title" :width="item.thumb_size" />
			<time>{{ timeFilter(item.time) }}</time>
			<p>{{ item.title }}</p>
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
![Screenshot](https://i.imgur.com/qE1zpN3.png)

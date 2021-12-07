# tree-like-timeline-vue

## Project setup
```
npm install tree-like-timeline-vue -S
```

### Quick Start
Import `tree-like-timeline-test` component
```js
import TreeLikeTimeline from "tree-like-timeline-test";
export default {
    components: {
        TreeLikeTimeline
    }
}
```

Import `tree-like-timeline-vue.css` file
```css
<style>
@import "tree-like-timeline-test/dist/tree-like-timeline-vue.css";
</style>
```

Or
Import `tree-like-timeline-vue.css` by webpack
```js
import "tree-like-timeline-test/dist/tree-like-timeline-vue.css";
```

Vue template
```html
<TreeLikeTimeline :data="list">
    <template v-slot="{item}">
        <article class="timeline__node">
            <time>{{item.time}}</time>
            <p>{{item.title}}</p>
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

### timeKey
Pick a key as time（default as `time`）
```html
<TreeLikeTimeline :data="list" time-key="date">
    <template v-slot="{item}">
        <time>{{item.date}}</time>
    </template>
</TreeLikeTimeline>
```
```js
export default {
    data() {
        return {
            list: [
                {
                    date: "2013-04"
                }
            ]
        }
    }
}
```

### offsetTop
When the content of the nodes on both sides are completely side by side, you can independently adjust the node to be shifted downward.
```html
<TreeLikeTimeline :data="list" time-key="date">
    <template v-slot="{item}">
        <time>{{item.date}}</time>
    </template>
</TreeLikeTimeline>
```
```js
export default {
    data() {
        return {
            list: [
                {
                    date: "2013-04"
                },
                {
                    date: "2013-05",
                    offsetTop: "50px"
                }
            ]
        }
    }
}
```
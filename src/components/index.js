import Timeline from "./Timeline.vue";
Timeline.install = function (Vue) {
	Vue.component("tree-like-timeline-vue", Timeline);
}
export default Timeline;
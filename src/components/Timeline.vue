<template>
	<section class="timeline" style="padding:0;">
		<div class="timeline__nodes">
			<template v-for="(item, i) in sortedList">
				<span v-if="item.divider" class="timeline__node_divider" :key="`${item[timeKey]}-${i}`" :data-year="item[timeKey] | yearFilter" />
				<div v-else class="timeline__node_item" ref="timeline__node_item" :style="{ marginTop: is_mobile ? '' : item.offsetTop }" :key="`${item[timeKey]}-${i}`">
					<slot :item="item" :index="i">{{item}}</slot>
				</div>
			</template>
		</div>
	</section>
</template>

<script>
import moment from "moment-timezone";
export default {
	props: {
		data: {
			type: Array,
			required: true,
		},
		timeKey: {
			type: String,
			default: () => "time"
		},
	},
	data() {
		return {
			is_mobile: true,
		}
	},
	computed: {
		sortedList() {
			return this.data
				.reduce((a, b) => {
					const time = moment(b[this.timeKey]).tz("Asia/Taipei").format("YYYY");
					if (!a.find(item => moment(item[this.timeKey]).tz("Asia/Taipei").format("YYYY") == time)) a.push({ [this.timeKey]: time, divider: true });
					a.push(b);
					return a;
				}, new Array)
				.sort((a, b) => {
					return moment(a[this.timeKey]).tz("Asia/Taipei").unix() - moment(b[this.timeKey]).tz("Asia/Taipei").unix();
				});
		}
	},
	filters: {
		yearFilter(val) {
			return moment(val).tz("Asia/Taipei").format("YYYY");
			// return moment(val).tz("Asia/Taipei").year() - 1911; // 民國年
		}
	},
	methods: {
		initRWD() {
			this.is_mobile = window.innerWidth <= 768;
		},
	},
	mounted() {
		this.$nextTick(() => {
			this.initRWD();
			window.addEventListener("resize", this.initRWD);
		})
	},
}
</script>

<style lang="scss" scoped>
$connect_line: 5em; // 左右兩邊與中間連接線之寬度
$divider_size: 4em; // 年份分界節點之寬高
$point_size: 1em; // 左右兩邊對中線的圓點之寬高
$theme: #000; // 主題顏色
.timeline {
	position: relative;
	margin-top: #{$divider_size * 0.5} !important;

	// 中線
	&::before {
		content: "";
		display: block;
		height: 100%;
		width: 1px;
		background: $theme;
		position: absolute;
		top: 0;
		left: 50%;
		height: 100%;
		transform: translateX(-50%);
		@media screen and (max-width: 768px) {
			transform: none;
			left: #{$divider_size * 0.5};
		}
	}

	// 年份節點
	.timeline__node_divider {
		clear: both;
		width: 100%;
		display: block;
		position: relative;
		&::after {
			content: attr(data-year);
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: $divider_size;
			height: $divider_size;
			border-radius: 100%;
			background: $theme;
			color: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
			@media screen and (max-width: 768px) {
				left: 0;
				transform: translateY(-50%);
			}
		}
	}

	// 節點
	.timeline__node_item {
		position: relative;
		width: calc(50% - #{$connect_line});

		&:not(:last-child) {
			margin-bottom: 20px;
		}

		// 左右兩邊對中線的連接線
		&::before {
			content: "";
			display: block;
			width: $connect_line;
			height: 2px;
			background: $theme;
			position: absolute;
			top: 30%;
			transform: translateY(-50%);
		}

		// 左右兩邊對中線的圓點
		&::after {
			content: "";
			box-sizing: border-box;
			display: block;
			width: $point_size;
			height: $point_size;
			background: #fff;
			color: #fff;
			border: 3px solid $theme;
			position: absolute;
			top: 30%;
			transform: translateY(-50%);
			border-radius: 100%;
		}

		// 左邊
		&:nth-of-type(even) {
			float: left;
			clear: left;

			// 左邊連接線
			&::before {
				left: 100%;
			}
			// 左邊對中線的圓點
			&::after {
				left: calc(100% + #{$connect_line - $point_size * 0.5});
			}
		}

		// 右邊
		&:nth-of-type(odd) {
			float: right;
			clear: right;

			// 右邊連接線
			&::before {
				right: 100%;
			}
			// 右邊對中線的圓點
			&::after {
				right: calc(100% + #{$connect_line - $point_size * 0.5});
			}
		}

		@media screen and (max-width: 768px) {
			width: calc(100% - #{$connect_line});
			float: right !important;
			// 全部對中線的連接線
			&::before {
				left: unset !important;
				right: 100% !important;
				width: #{$connect_line - ($divider_size * 0.5)};
			}
			// 全部對中線的圓點
			&::after {
				left: unset !important;
				right: calc(
					100% + #{$connect_line - $divider_size * 0.5 - $point_size *
						0.5}
				) !important;
			}
		}
		@media screen and (min-width: 769px) {
			// 右邊整體向下位移（避免１st跟２nd並排）
			&:nth-of-type(even) {
				// margin-top: 50px;
			}
		}
	}

	// 最後清除 float
	&::after {
		content: "";
		display: block;
		clear: both;
	}
}
</style>

<template>
	<section class="tree-like-timeline-vue2" :style="cssVars">
		<div class="tree-like-timeline-vue2__nodes">
			<template v-for="(item, i) in sortedList">
				<span
					v-if="item.divider"
					:key="`${item[timeKey]}-${i}`"
					:data-year="yearFilter(item[timeKey])"
					class="tree-like-timeline-vue2__node_divider"
				/>
				<div
					v-else
					:key="`${item[timeKey]}-${i}`"
					:style="{ marginTop: is_mobile ? '' : item.offsetTop }"
					class="tree-like-timeline-vue2__node_item"
					ref="tree-like-timeline-vue2__node_item"
				>
					<slot :item="item" :index="i">{{ item }}</slot>
				</div>
			</template>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		data: {
			type: Array,
			required: true,
		},
		timeKey: {
			type: String,
			default: () => "time",
		},
		theme: {
			type: String,
			default: () => "rgb(200, 200, 200)",
		},
		textColor: {
			type: String,
			default: () => "#000",
		},
		dividerLabel: Function,
	},
	data() {
		return {
			is_mobile: true,
		};
	},
	computed: {
		sortedList() {
			return this.data
				.reduce((a, b) => {
					const time = new Date(b[this.timeKey]).getFullYear().toString();
					if (
						!a.find(
							(item) =>
								new Date(item[this.timeKey]).getFullYear().toString() == time
						)
					)
						a.push({ [this.timeKey]: time, divider: true });
					a.push(b);
					return a;
				}, new Array())
				.sort((a, b) => {
					return (
						new Date(a[this.timeKey]).getTime() -
						new Date(b[this.timeKey]).getTime()
					);
				});
		},
		cssVars() {
			return {
				"--tree-like-timeline-vue2_theme": this.theme,
				"--tree-like-timeline-vue2_text-color": this.textColor,
			};
		},
	},
	methods: {
		yearFilter(val) {
			return (
				(this.dividerLabel && this.dividerLabel(val)) ||
				new Date(val).getFullYear()
			);
		},
		initRWD() {
			this.is_mobile = window.innerWidth <= 768;
		},
	},
	mounted() {
		this.$nextTick(() => {
			this.initRWD();
			window.addEventListener("resize", this.initRWD);
		});
	},
};
</script>

<style lang="scss">
$--tree-like-timeline-vue2_connect_line: 5em; // 左右兩邊與中間連接線之寬度
$--tree-like-timeline-vue2_divider_size: 4em; // 年份分界節點之寬高
$--tree-like-timeline-vue2_point_size: 1em; // 左右兩邊對中線的圓點之寬高
.tree-like-timeline-vue2 {
	padding: 0;
	position: relative;
	margin-top: #{$--tree-like-timeline-vue2_divider_size * 0.5} !important;

	// 中線
	&::before {
		content: "";
		display: block;
		height: 100%;
		width: 1px;
		background: var(--tree-like-timeline-vue2_theme);
		position: absolute;
		top: 0;
		left: 50%;
		height: 100%;
		transform: translateX(-50%);
		@media screen and (max-width: 768px) {
			transform: none;
			left: #{$--tree-like-timeline-vue2_divider_size * 0.5};
		}
	}

	// 年份節點
	.tree-like-timeline-vue2__node_divider {
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
			width: $--tree-like-timeline-vue2_divider_size;
			height: $--tree-like-timeline-vue2_divider_size;
			border-radius: 100%;
			background: var(--tree-like-timeline-vue2_theme);
			color: var(--tree-like-timeline-vue2_text-color);
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
	.tree-like-timeline-vue2__node_item {
		position: relative;
		width: calc(50% - #{$--tree-like-timeline-vue2_connect_line});

		&:not(:last-child) {
			margin-bottom: 20px;
		}

		// 左右兩邊對中線的連接線
		&::before {
			content: "";
			display: block;
			width: $--tree-like-timeline-vue2_connect_line;
			height: 2px;
			background: var(--tree-like-timeline-vue2_theme);
			position: absolute;
			top: 30%;
			transform: translateY(-50%);
		}

		// 左右兩邊對中線的圓點
		&::after {
			content: "";
			box-sizing: border-box;
			display: block;
			width: $--tree-like-timeline-vue2_point_size;
			height: $--tree-like-timeline-vue2_point_size;
			background: #fff;
			color: #fff;
			border: 3px solid var(--tree-like-timeline-vue2_theme);
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
				left: calc(
					100% + #{$--tree-like-timeline-vue2_connect_line -
						$--tree-like-timeline-vue2_point_size * 0.5}
				);
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
				right: calc(
					100% + #{$--tree-like-timeline-vue2_connect_line -
						$--tree-like-timeline-vue2_point_size * 0.5}
				);
			}
		}

		@media screen and (max-width: 768px) {
			width: calc(100% - #{$--tree-like-timeline-vue2_connect_line});
			float: right !important;
			// 全部對中線的連接線
			&::before {
				left: unset !important;
				right: 100% !important;
				width: #{$--tree-like-timeline-vue2_connect_line -
					($--tree-like-timeline-vue2_divider_size * 0.5)};
			}
			// 全部對中線的圓點
			&::after {
				left: unset !important;
				right: calc(
					100% + #{$--tree-like-timeline-vue2_connect_line -
						$--tree-like-timeline-vue2_divider_size * 0.5 -
						$--tree-like-timeline-vue2_point_size * 0.5}
				) !important;
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

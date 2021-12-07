<template>
	<Timeline :data="list">
		<template v-slot="{item}">
			<article class="tree-like-timeline-vue__node">
				<img :src="item.thumb" :alt="item.title" :width="item.thumb_size">
				<time>{{timeFilter(item.time)}}</time>
				<p>{{item.title}}</p>
			</article>
		</template>
	</Timeline>
</template>

<script>
import Timeline from "./components/Timeline.vue";
import moment from "moment-timezone";
export default {
	name: "App",
	components: {
		Timeline
	},
	data() {
		return {
			list: [
				{
					time: "2011-07",
					title: "映智科技股份有限公司設立",
					thumb: "/assets/overview1.png",
					thumb_size: "30%",
				},
				{
					time: "2013-04",
					title: "成功推出256×360 pixel size指紋辨識感測IC。",
					thumb: "/assets/overview2.png",
					thumb_size: "40%",
				},
				{
					time: "2014-03",
					title: "成功推出160×160 pixel size指紋辨識感測IC。",
					thumb: "/assets/overview3.png",
					thumb_size: "40%",
				},
				{
					time: "2014-05",
					title: "成功推出208×288 pixel size指紋辨識感測IC。",
					thumb: "/assets/overview4.png",
					thumb_size: "40%",
					offsetTop: "120px"
				},
				{
					time: "2014-07",
					title: "獲得新竹科學工業園區管理局MG+4C垂直整合推動專案計畫補助「用於智慧型手持設備支具防偽功能指紋感測裝置」開發案。",
					thumb: "/assets/overview5.png",
					thumb_size: "30%",
				},
				{
					time: "2014-11",
					title: "成功推出第二代160×160 pixel size指紋辨識感測IC，適用於智慧型手持設備。",
					thumb: "/assets/overview6.png",
					thumb_size: "40%",
				},
				{
					time: "2015-01",
					title: "成功推出指紋辨識感測IC結合controller之解決方案。",
					thumb: "/assets/overview7.png",
					thumb_size: "30%",
				},
				{
					time: "2015-07",
					title: "成功推出指紋辨識感測IC結合安全晶片之解決方案，並獲得工業級平板製造商之採納。",
					thumb: "/assets/overview8.png",
					thumb_size: "30%",
					offsetTop: "150px"
				},
				{
					time: "2015-11",
					title: "獲財團法人中華民國證券櫃檯買賣中心核准公開發行（104.11.18），股票代號6563。",
					thumb: "/assets/overview9.png",
					thumb_size: "30%",
				},
				{
					time: "2016-05",
					title: "成功推出指紋辨識感測IC結合MUC之解決方案，並順利打入電子鎖供應鏈。",
					thumb: "/assets/overview10.png",
					thumb_size: "30%",
				},
				{
					time: "2016-09",
					title: "導入瑞典演算法大廠Precise Biometrics AB演算法。",
					thumb: "/assets/overview11.png",
					thumb_size: "40%",
					offsetTop: "100px"
				},
				{
					time: "2017-01",
					title: "成功推出192×256 pixel size指紋辨識感測IC，主供智能家居市場。",
					thumb: "/assets/overview12.png",
					thumb_size: "40%",
				},
				{
					time: "2017-11",
					title: "SF302系列產品獲得FBI所頒發的PIV（Personal Identity Verification）認證。",
					thumb: "/assets/overview13.png",
					thumb_size: "25%",
					offsetTop: "100px"
				},
				{
					time: "2018-06",
					title: "推出內建Touch IC之指紋辨識感測器，有效降低客戶導入之成本與提升產品效能。",
					thumb: "/assets/overview14.png",
					thumb_size: "35%",
				},
				{
					time: "2019-11",
					title: "成功推出玻璃感測技術專用之ASIC IC─iG101。",
					thumb: "/assets/overview15.png",
					thumb_size: "25%",
				},
				{
					time: "2020-04",
					title: "成功推出第一顆玻璃感測IC─GF601BD，並獲得FBI所頒發的PIV認證。",
					thumb: "/assets/overview16.png",
					thumb_size: "25%",
				},
				{
					time: "2020-07",
					title: "推出大尺寸市占主要尺寸FAP 10之玻璃感測產品SF302G，並亦取得PIV認證。",
					thumb: "/assets/overview15.png",
					thumb_size: "25%",
					offsetTop: "140px",
				},
				{
					time: "2020-10",
					title: "推出次世代卡片用低功號指紋感測IC─SF803。",
					thumb: "/assets/overview17.png",
					thumb_size: "40%",
				},
				{
					time: "2020-12",
					title: "正式取得ISO 9001:2015 認證。",
					thumb: "/assets/overview18.png",
					thumb_size: "25%",
				},
			],
		}
	},
	methods: {
		timeFilter(val) {
			return moment(val).tz("Asia/Taipei").format("YYYY-MM-DD");
		}
	}
}
</script>

<style lang="scss" scoped>
.tree-like-timeline-vue {
	max-width: 900px;
	margin: auto;
}
.tree-like-timeline-vue__node {
	border: 1px solid #000;
	padding: 5%;
	display: flex;
	flex-direction: column;

	img {
		align-self: flex-end;
	}

	time {
		font-size: 1.5em;
		letter-spacing: 2px;
	}

	h1,
	p {
		margin-top: 0;
	}
}
</style>

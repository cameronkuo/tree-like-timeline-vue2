<template>
	<Timeline :data="list" theme="#738bff" text-color="rgb(255,255,255)">
		<template v-slot="{ item }">
			<article class="tree-like-timeline-vue2__node">
				<img
					v-if="item.thumb"
					:src="item.thumb"
					:alt="item.title"
					style="width: 100%"
				/>
				<time>{{ timeFilter(item.time) }}</time>
				<p>{{ item.title }}</p>
			</article>
		</template>
	</Timeline>
</template>

<script>
import Timeline from "./components/Timeline.vue";
export default {
	name: "App",
	components: {
		Timeline,
	},
	data() {
		return {
			list: [
				{
					time: "1965",
					title:
						"Walt Disney unveils plans to build a theme park in Central Florido.",
					thumb: require("@/assets/images/1965.png"),
				},
				{
					time: "1971",
					title:
						"Magic Kingdom Park opens with a grand celebration that features a parade of Disney characters and 76 trombones. Opening-day attractions included The Haunted Mansion, Mad Tea Cups, and Mr. Toad's Wild Ride, among others.",
					thumb: require("@/assets/images/1971.png"),
				},
				{
					time: "1973",
					title: "Pirates of the Caribbean is added to Adventureland.",
					thumb: require("@/assets/images/1973.png"),
				},
				{
					time: "1974",
					title: "Hoop-Dee Doo Musical Revue debuts at Pioneer Hall.",
					offsetTop: "30px",
				},
				{
					time: "1975",
					title: "Space Mountain makes its first launch Jan. 15.",
					offsetTop: "30px",
				},
				{
					time: "1975",
					title:
						"Magic Kingdom Park celebrates the nation's Bicentennial in America on Porade.",
					thumb: require("@/assets/images/1975.png"),
					offsetTop: "50px",
				},
				{
					time: "1976",
					title:
						"River Country, Disney's first water park (more like an ol'fashioned swimming hole), opens June 20.",
					offsetTop: "30px",
				},
				{
					time: "1977",
					title:
						"The Main Street Electrical Parade debuts on June 11. The first nighttime Disney parade wows guests by bringing Disney fairytales to life in glittering light.",
					thumb: require("@/assets/images/1977.png"),
				},
				{
					time: "1982",
					title:
						"EPCOT Center debuts Oct. I. inspired by Walt Disney's Experimental Prototype Community of Tomorrow. Opening attractions included Spaceship Earth, The American Adven ture. Universe of Energy, and Kitchen Kabaret.",
					thumb: require("@/assets/images/1982.png"),
				},
				{
					time: "1983",
					title:
						"Guests get to know Figment at Journey Into Imagination, and venture into the future at Horizons.",
					thumb: require("@/assets/images/1983.png"),
				},
				{
					time: "1986",
					title: "Captain EO, the park's first 4-D film, debuts at Epcot.",
					offsetTop: "30px",
				},
				{
					time: "1988",
					title:
						"Mickey's Birthdayland opens at Magic Kingdom Park in honor of the Mouse's 60th birthday",
					thumb: require("@/assets/images/1988.png"),
				},
				{
					time: "1989",
					title: "Disney-MGM Studios and Pleasure Island open May I.",
					thumb: require("@/assets/images/1989_1.png"),
				},
				{
					time: "1989",
					title:
						"Guests begin braving Mount Moydoy at Disney's Typhoon Lagoon June 1.",
					thumb: require("@/assets/images/1989_2.png"),
					offsetTop: "50px",
				},
				{
					time: "1989",
					title:
						'Feature Animation Florida opens, and would produce the full-length animated features "Mulan." *Lilo & Stitch and "Brother Bear."',
					thumb: require("@/assets/images/1989_3.png"),
				},
				{
					time: "1990",
					title:
						"Sorcery in the Sky fireworks blast off at the Disney-MGM Studios.",
					thumb: require("@/assets/images/1990.png"),
				},
				{
					time: "1991",
					title:
						"The resort morked its 20th anniversary with a new daily procession called the Surprise Celebration Parade.",
					thumb: require("@/assets/images/1991.png"),
				},
				{
					time: "1994",
					title:
						"The first guests take the plunge on The Twilight Zone™ Tower of Terror July 22",
					thumb: require("@/assets/images/1994.png"),
				},
				{
					time: "1995",
					title: "Disney's Blizzard Beach opens on April Fools Day.",
					thumb: require("@/assets/images/1995.png"),
				},
				{
					time: "1996",
					title:
						"Magic Kingdom Park marks its 25th anniversary by turning Cinderella Castle into an 18-story birthday cake.",
					thumb: require("@/assets/images/1996.png"),
				},
				{
					time: "1998",
					title:
						"Disney's Animal Kingdom Theme Park opens. In addition to attractions that focus on thrilling animal observation, the park also features the first Walt Disney World attraction inspired by a Pixar film at It's Tough to Be A Bug!",
					thumb: require("@/assets/images/1998.png"),
				},
				{
					time: "1998",
					title:
						"Buzz Lightyear's Space Ranger Spin opens to new Star Command recruits at Magic Kingdom Park.",
					offsetTop: "30px",
				},
				{
					time: "1999",
					title: "Disney's FASTPASS Service debuts.",
					offsetTop: "40px",
				},
				{
					time: "1999",
					title:
						"Disney's Animal Kingdom Theme Park expands with the addition of a new land. Asia.",
					offsetTop: "60px",
				},
				{
					time: "2001",
					title:
						"The Magic Carpets of Aladdin whisks guests away on a magical flights beginning May 23.",
					offsetTop: "30px",
				},
				{
					time: "2003",
					title:
						"Donald Duck takes quests along for adventure at Mickey's PhilharMagic.",
					thumb: require("@/assets/images/2003_1.png"),
				},
				{
					time: "2003",
					title:
						"Tufani, the first baby elephant born at Disney's Animal Kingdom Theme Park, arrives May 22.",
					thumb: require("@/assets/images/2003_2.png"),
					offsetTop: "70px",
				},
				{
					time: "2003",
					title:
						"Wishes nighttime fireworks spectacular dozzles Guests for the first time at Magic Kingdom Park.",
					thumb: require("@/assets/images/2003_3.png"),
				},
				{
					time: "2003",
					title:
						"Guests blast off on Epcot's Mission: SPACE for the first time Aug. 15.",
					thumb: require("@/assets/images/2003_4.png"),
					offsetTop: "100px",
				},
				{
					time: "2005",
					title:
						"Soarin' debuts at Epcot, and Lights. Motors. Action! Extreme Stunt Show revs up at the Disney-MGM Studios",
					thumb: require("@/assets/images/2005.png"),
				},
				{
					time: "2006",
					title:
						"Guests embark on the first runway train through the Himalayas at Expedition Everest on April 7.",
					offsetTop: "30px",
				},
				{
					time: "2006",
					title:
						"New Audio-Animatronics of Jack Sparrow and Captain Barbossa are added to Pirates of the Caribbean.",
					offsetTop: "70px",
				},
				{
					time: "2007",
					title:
						"Monsters, Inc. Laugh Floor collects belly laughs at Magic Kingdom Park.",
					offsetTop: "30px",
				},
				{
					time: "2008",
					title:
						"Disney-MGM Studios becomes Disney's Hollywood Studios in January.",
					offsetTop: "30px",
				},
				{
					time: "2009",
					title:
						'Leaders announce a major expansion of Fantasy land at Magic Kinadom Park.It will nearly double the size of the existing area with new attractions based on "Beauty and the Beast. "Snow White and "The Little Mermaid."',
				},
				{
					time: "2010",
					title: "Captain EO returns to Epcot.",
					thumb: require("@/assets/images/2010.png"),
				},
				{
					time: "2011",
					title:
						"For the first time, Guests can get a FASTPASS ticket to see Mickey Mouse at Magic Kingdom Park.",
					thumb: require("@/assets/images/2011_1.png"),
				},
				{
					time: "2011",
					title:
						"Walt Disney's Enchanted Tiki Room reopens at Magic Kingdom Park.",
					thumb: require("@/assets/images/2011_2.png"),
					offsetTop: "100px",
				},
				{
					time: "2011",
					title:
						"Star Tours: The Adventures Continue opens at Disnev's Hallwwood Studios.",
				},
				{
					time: "2011",
					title:
						'Plans were announced to add a new land based on the film "Avetor" at Disnev\'s Animal Kingdom Theme Pork.',
					offsetTop: "30px",
				},
			],
		};
	},
	methods: {
		timeFilter(val) {
			const date = new Date(val);
			return `${date.getFullYear()}-${date.getMonth() + 1}`;
		},
	},
};
</script>

<style lang="scss" scoped>
.tree-like-timeline-vue2 {
	max-width: 900px;
	margin: auto;
}
.tree-like-timeline-vue2__node {
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

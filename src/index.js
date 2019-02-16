const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

const mapWidth = 100;
const mapHeight = 100;
const tilesPerHeight = 10;
const tileSize = window.innerHeight / tilesPerHeight;

const mapTypes = [];
for (let y = 0; y < mapWidth; y++) {
	for (let x = 0; x < mapHeight; x++) {
		mapTypes.push(1);
	}
}

const tileSample = $("<img>").css({
		width: tileSize,
		height: tileSize,
		position: 'absolute'
	})
	.attr('src', "https://cdna.artstation.com/p/assets/images/images/006/295/124/large/sergiu-matei-grass-tile-pixel-art-rpg-top-view-indie-game-dev-matei-sergiu.jpg");

const now = new Date()

const container = $("#container")
mapTypes.forEach((type, index) => {
	const top = Math.floor(index / mapHeight) * tileSize
	const left = index % mapHeight * tileSize
	if (top < screenHeight && left < screenWidth) {
		const img = tileSample.clone().css({
			top: top,
			left: left,
		})
		container.append(img);
	}
})

console.log((new Date() - now) + "ms")
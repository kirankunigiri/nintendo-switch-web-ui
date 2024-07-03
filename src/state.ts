import { proxy } from 'valtio';

const state = proxy({
	selectedTitle: null as null | number,
});

export default state;

const IMAGE_RES = 512;
const IMAGE_RES_STR = `${IMAGE_RES}/${IMAGE_RES}`;
export const tiles = [
	{ img: `https://tinfoil.media/ti/01007EF00011E000/${IMAGE_RES_STR}`, title: 'The Legend of Zelda: Breath of the Wild' },
	{ img: `https://tinfoil.media/ti/01006A800016E000/${IMAGE_RES_STR}`, title: 'Super Smash Bros. Ultimate' },
	{ img: `https://tinfoil.media/ti/0100000000010000/${IMAGE_RES_STR}`, title: 'Super Mario Odyssey' },
	{ img: `https://tinfoil.media/ti/01006F8002326000/${IMAGE_RES_STR}`, title: 'Animal Crossing: New Horizons' },
	{ img: `https://tinfoil.media/ti/01006FE013472000/${IMAGE_RES_STR}`, title: 'Mario Party Superstars' },
	{ img: `https://tinfoil.media/ti/0100152000022000/${IMAGE_RES_STR}`, title: 'Mario Kart 8 Deluxe' },
	{ img: `https://tinfoil.media/ti/0100C1F0051B6000/${IMAGE_RES_STR}`, title: 'Donkey Kong Country: Tropical Freeze' },
	{ img: `https://tinfoil.media/ti/0100535012974000/${IMAGE_RES_STR}`, title: 'Hades' },
	{ img: `https://tinfoil.media/ti/0100DCA0064A6000/${IMAGE_RES_STR}`, title: 'Luigi\'s Mansion 3' },
	{ img: `https://tinfoil.media/ti/010019401051C000/${IMAGE_RES_STR}`, title: 'Mario Strikers: Battle League' },
	{ img: `https://tinfoil.media/ti/0100B7C00933A000/${IMAGE_RES_STR}`, title: 'Pikmin 4' },
	{ img: `https://tinfoil.media/ti/010028600EBDA000/${IMAGE_RES_STR}`, title: 'Super Mario 3D World + Bowser\'s Fury' },
	{ img: `https://tinfoil.media/ti/01004D300C5AE000/${IMAGE_RES_STR}`, title: 'Kirby and the Forgotten Land' },
	{ img: `https://tinfoil.media/ti/0100ABD01785C000/${IMAGE_RES_STR}`, title: 'Portal 2' },
	{ img: `https://tinfoil.media/ti/01004EA00DF70000/${IMAGE_RES_STR}`, title: 'Pico Park' },
	{ img: `https://tinfoil.media/ti/01008C0016544000/${IMAGE_RES_STR}`, title: 'Sea of Stars' },
	{ img: `https://tinfoil.media/ti/010049900F546000/${IMAGE_RES_STR}`, title: 'Super Mario 3D All-Stars' },
];

import { EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import { useEffect, useState } from 'react';

const IMAGE_RES = 512;
const IMAGE_RES_STR = `${IMAGE_RES}/${IMAGE_RES}`;

const removeExcessiveScroll = (emblaApi: EmblaCarouselType) => {
	emblaApi.on('scroll', (emblaApi) => {
		const {
			limit,
			target,
			location,
			scrollTo,
			translate,
			scrollBody,
		} = emblaApi.internalEngine();

		let edge: number | null = null;

		if (location.get() >= limit.max) edge = limit.max;
		if (location.get() <= limit.min) edge = limit.min;

		if (edge !== null) {
			location.set(edge);
			target.set(edge);
			translate.to(edge);
			translate.toggleActive(false);
			scrollBody.useDuration(0).useFriction(0);
			scrollTo.distance(0, false);
		} else {
			translate.toggleActive(true);
		}
	});
};

// TODO: On scroll start, remove selectedIndex
// TODO: Allow moving to edge first, before starting scrolling
const keyboardControl = (emblaApi: EmblaCarouselType, setSelectedTile: React.Dispatch<React.SetStateAction<number | null>>) => {
	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'ArrowLeft' && emblaApi.canScrollPrev()) {
			setSelectedTile(prev => prev !== null ? prev - 1 : null);
			emblaApi.scrollPrev();
		} else if (event.key === 'ArrowRight' && emblaApi.canScrollNext()) {
			setSelectedTile(prev => prev !== null ? prev + 1 : null);
			emblaApi.scrollNext();
		}
	};
	document.addEventListener('keydown', handleKeyDown);
	return () => document.removeEventListener('keydown', handleKeyDown);
};

export function Carousel() {
	// Custom offset
	const customAlign = (viewSize: number, snapSize: number) => viewSize - snapSize;

	// Setup Embla
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, skipSnaps: true, align: customAlign }, [WheelGesturesPlugin({ target: document.body, forceWheelAxis: 'y' })]);

	// Selected tile
	const [selectedTile, setSelectedTile] = useState<null | number>(null);

	useEffect(() => {
		if (emblaApi) {
			console.log(emblaApi.slideNodes());
			removeExcessiveScroll(emblaApi);
			return keyboardControl(emblaApi, setSelectedTile);
		}
	}, [emblaApi]);

	const tiles = [
		{ img: `https://tinfoil.media/ti/01007EF00011E000/${IMAGE_RES_STR}`, title: 'BotW' },
		{ img: `https://tinfoil.media/ti/01006A800016E000/${IMAGE_RES_STR}`, title: 'Smash Bros Ultimate' },
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

	const tileClicked = (index: number) => {
		console.log(index);
		setSelectedTile(index); // Update selectedTile state
	};

	return (
		// <div className="mt-[-0.2em] h-[27em] overflow-hidden px-[10em]" ref={emblaRef}>
		<div className=" left-0 z-10 mt-[-0.2em] h-[27em] w-screen px-[10em]" ref={emblaRef}>
			<div className="flex size-full items-center gap-[1.3em]">
				{tiles.map((tile, index) => (
					<div
						onClick={() => tileClicked(index)}
						className="relative aspect-square h-[24em] shrink-0 overflow-visible bg-[#151515]"
						key={tile.img}
					>
						{/* Tile image */}
						<img src={tile.img} alt="" />
						{/* Selected tile border */}
						{selectedTile === index && (
							<div className="animate-borderColor pointer-events-none absolute inset-[-.95em] rounded-[.2em] border-[.5em]"></div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}

export default Carousel;

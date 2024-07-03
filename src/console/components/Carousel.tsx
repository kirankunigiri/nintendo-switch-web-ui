import { EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import { useEffect } from 'react';
import { useSnapshot } from 'valtio';

import state, { tiles } from '../../state';

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
const keyboardControl = (emblaApi: EmblaCarouselType) => {
	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'ArrowLeft' && emblaApi.canScrollPrev()) {
			state.selectedTitle = state.selectedTitle !== null ? state.selectedTitle - 1 : null;
			emblaApi.scrollPrev();
		} else if (event.key === 'ArrowRight' && emblaApi.canScrollNext()) {
			state.selectedTitle = state.selectedTitle !== null ? state.selectedTitle + 1 : null;
			emblaApi.scrollNext();
		}
	};
	document.addEventListener('keydown', handleKeyDown);
	return () => document.removeEventListener('keydown', handleKeyDown);
};

export function Carousel() {
	const snap = useSnapshot(state);

	// Custom offset
	const customAlign = (viewSize: number, snapSize: number) => viewSize - snapSize;

	// Setup Embla
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, skipSnaps: true, align: customAlign }, [WheelGesturesPlugin({ target: document.body, forceWheelAxis: 'y' })]);

	useEffect(() => {
		if (emblaApi) {
			console.log(emblaApi.slideNodes());
			removeExcessiveScroll(emblaApi);
			return keyboardControl(emblaApi);
		}
	}, [emblaApi]);

	const tileClicked = (index: number) => {
		state.selectedTitle = index;
	};

	return (
		// <div className="mt-[-0.2em] h-[27em] overflow-hidden px-[10em]" ref={emblaRef}>
		<div className=" left-0 z-10 mt-[-0.2em] h-[27em] w-screen px-[10em] " ref={emblaRef}>
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
						{snap.selectedTitle === index && (
							<div className="animate-borderColor pointer-events-none absolute inset-[-.95em] rounded-[.2em] border-[.5em]"></div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}

export default Carousel;

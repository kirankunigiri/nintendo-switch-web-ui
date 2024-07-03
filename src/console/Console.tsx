import { useBattery } from '@uidotdev/usehooks';
import { useSnapshot } from 'valtio';

import battery from '/battery.svg';
import album from '/buttons/album.svg';
import controllers from '/buttons/controllers.svg';
import news from '/buttons/news.svg';
import online from '/buttons/online.svg';
import settings from '/buttons/settings.svg';
import shop from '/buttons/shop.svg';
import sleep from '/buttons/sleep.svg';
import aButton from '/controls/a.svg';
import plusButton from '/controls/plus.svg';
import profile1 from '/profile1.jpeg';
import profile2 from '/profile2.jpeg';
import profile3 from '/profile3.jpeg';
import wifi from '/wifi.svg';

import state, { tiles } from '../state';
import Carousel from './components/Carousel';
import useDimensions from './useDimensions';
import useLiveTime from './useLiveTime';

function Console() {
	const snap = useSnapshot(state);
	const dimensions = useDimensions();

	// Create profile pictures @ https://switchprofile.netlify.app/
	const profilePictures = [profile1, profile2, profile3];
	// Options buttons from Figma
	const optionButtons = [online, news, shop, album, controllers, settings, sleep];

	// Battery
	const { level } = useBattery();
	const batteryText = level ? Math.round(level * 100) : 88;
	const time = useLiveTime();

	return (
		<div className="h-screen w-screen overflow-hidden">

			{/* Container with aspect ratio */}
			<div
				className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2D2D2D]"
				style={{
					width: `${dimensions.width}px`,
					height: `${dimensions.height}px`,
					fontSize: `${dimensions.fontSize}px`,
				}}
			>

				{/* Top Row */}
				<div className="ml-[5.5em] mt-[3.3em] flex justify-between">

					{/* Profile Pictures */}
					<div className="flex gap-[1.2em]">
						{profilePictures.map(picture => (
							<img
								key={picture}
								src={picture}
								alt="Profile"
								className="size-[5.6em] rounded-full border-[.25em] border-[#504F4E] shadow-md"
							/>
						))}
					</div>

					{/* Status Bar */}
					<div className="mr-[5.9em] flex w-[22em] items-center justify-between gap-[1.2em] text-white">
						{/* Time */}
						<div className="text-[2.1em]">{time}</div>
						{/* Internet */}
						<img src={wifi} className="size-[2.8em]" />
						{/* Battery Percent */}
						<div className="text-[2.1em]">{batteryText}<span className="text-[.6em]">%</span></div>
						{/* Battery Icon */}
						<img src={battery} className="size-[3.2em]" />
					</div>
				</div>

				{/* Game Title */}
				<div className="ml-[6em] mt-[4em] text-[#2DB4EA]">
					{/* Place image here */}
					<div className="h-[1.5em] text-[2.7em]">{snap.selectedTitle !== null ? tiles[snap.selectedTitle].title : ''}</div>
				</div>

				{/* Carousel */}
				<Carousel />

				{/* Option Buttons */}
				<div className="mt-[3.4em] flex justify-center gap-[2.1em]">
					{optionButtons.map(button => (
						<div key={button} className="flex size-[6.7em] items-center justify-center rounded-full bg-[#505050] text-[1.2em] shadow-md first:bg-[#E70013]">
							<img src={button} className="size-[6.2em]" />
						</div>
					))}
				</div>

				{/* Divider Line */}
				<div className="mx-[3em] mt-[5.4em] h-[.15em] bg-[#BCBCBC]" />

				{/* Controls */}
				<div className="float-right mr-[6em] mt-[2em] flex items-center justify-center gap-[1.2em]">
					<img src={aButton} className="size-[2.2em]" />
					<p className="text-[1.9em] text-white">Continue</p>
					<img src={plusButton} className="ml-[1.2em] size-[2.2em]" />
					<p className=" text-[1.9em] text-white">Start</p>
				</div>
			</div>
		</div>
	);
}

export default Console;

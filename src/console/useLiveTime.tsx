import { useEffect, useState } from 'react';

function format12HourTime(date: Date): string {
	let hours: number = date.getHours();
	const minutes: number = date.getMinutes();
	const ampm: string = hours >= 12 ? 'PM' : 'AM';

	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'

	const strHours: string = hours < 10 ? `0${hours}` : `${hours}`;
	const strMinutes: string = minutes < 10 ? `0${minutes}` : `${minutes}`;

	return `${strHours}:${strMinutes}`;
}

export default function useLiveTime(): string {
	const [time, setTime] = useState<string>(format12HourTime(new Date()));

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(format12HourTime(new Date()));
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	return time;
}

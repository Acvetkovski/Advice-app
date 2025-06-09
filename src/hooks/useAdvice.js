// Import hooks from react.
import { useEffect, useState } from "react";

export default function useAdvice() {
	const [advice, setAdvice] = useState({ id: "", advice: "" });

	async function fetchAdvice() {
		try {
			const res = await fetch("https://api.adviceslip.com/advice");
			const data = await res.json();
			setAdvice(data.slip);
		} catch (err) {
			alert("Something went wrong while fetching advice");
		}
	}

	useEffect(() => {
		fetchAdvice();
	}, []);

	return { advice, fetchAdvice };
}

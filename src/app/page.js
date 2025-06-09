"use client";

import { useState } from "react";
// Import css module file.
import styles from "./page.module.css";

// Import useAdvice
import useAdvice from "@/hooks/useAdvice";

export default function Home() {
	const [copyAdvice, setCopyAdvice] = useState("");
	const { advice, fetchAdvice } = useAdvice();

	function copyToClipboard() {
		const textToCopy = advice.advice;

		navigator.clipboard
			.writeText(textToCopy)
			.then(() => {
				setCopyAdvice("Advice has been copied!");
				setTimeout(() => {
					setCopyAdvice("");
				}, 3000);
			})
			.catch(err => {
				console.error("Unable to copy text to clipboard", err);
			});
	}

	return (
		<>
			{copyAdvice && <p className={styles.copy_advice}>{copyAdvice}</p>}
			<div className={styles.landingpage_container}>
				<h1>Advice app</h1>
				<div className={styles.card}>
					<p className={styles.number}>Advice: #{advice.id}</p>
					<h3 className={styles.advice}>{advice.advice}</h3>
					<div className={styles.btn_wrapper}>
						<button className={styles.btn} onClick={fetchAdvice}>
							Get new advice
						</button>
						<button className={styles.btn} onClick={copyToClipboard}>
							Copy advice
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

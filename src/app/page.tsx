"use client";
import React, { useState } from "react";

import Button from "@/components/Button";
import Card from "@/components/Card";

import { useQuoteStyles } from "./hooks/use-quote-style";

export default function Home() {
	const { state, error, quote, fetchQuoteStyles } = useQuoteStyles();
	return (
		<main>
			<Button onClick={fetchQuoteStyles}>Get Random Quote</Button>
			<Card textColor={"aliceBlue"} backgroundColor={"mediumBlue"}>
				{quote}
			</Card>
		</main>
	);
}

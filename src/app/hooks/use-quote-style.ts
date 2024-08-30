import { useState } from "react";

type Status = "idle" | "loading" | "error";

export function useQuoteStyles() {
	const [quote, setQuote] = useState<string>("No quotes yet");
	const [state, setState] = useState<Status>("idle");
	const [error, setError] = useState<string>("");

	const fetchQuoteStyles = async () => {
		setState("loading");

		try {
			const quote = await fetch("/api/get-quote-styles");

			if (!quote.ok) {
				throw new Error("Quote Response is not ok");
			}

			const json: { quote: string } = await quote.json();
			if (!json?.quote) {
				throw new Error("Malformed response");
			}

			console.log(json);
			setQuote(json.quote);
			setState("idle");
		} catch (error) {
			setState("error");
			setError(error?.toString() || "Err");
			console.error(error?.toString());
		}
	};

	return { state, error, quote, fetchQuoteStyles };
}

import { useCallback, useState } from "react";

export default function useHttp() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const request = useCallback(
		async (url, method = "GET", body = null, headers = {}) => {
			setLoading(true);
			try {
				if (body) {
					body = JSON.stringify(body);
					headers["Content-Type"] = "application/json";
				}
				const response = await fetch(url, {
					method,
					body,
					headers,
				});
				const data = await response.json();
				if (!response.ok) {
					throw new Error(`❌ Request error: ${data.message}`);
				}
				setLoading(false);
				return data;
			} catch (err) {
				setLoading(false);
				setError(err.message);
				throw err;
			}
		},
		[]
	);

	return { loading, request, error };
}

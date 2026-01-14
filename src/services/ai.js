/**
 * AI Service
 * Abstracting the interaction with the LLM backend.
 * 
 * In Production (Netlify): Calls /.netlify/functions/gemini
 * In Local Dev: Calls /.netlify/functions/gemini (requires `netlify dev` or proxy)
 */

export const AI = {
    /**
     * Generates a structural blueprint based on the user's prompt.
     * @param {string} prompt - The full system prompt constructed by the UI.
     * @returns {Promise<string>} - The generated markdown plan.
     */
    async generateBlueprint(prompt) {
        // The endpoint matches the file path in netlify/functions/gemini.js
        const endpoint = '/.netlify/functions/gemini';

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt }),
            });

            if (!response.ok) {
                throw new Error(`AI Service Error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            return data.text;

        } catch (error) {
            console.error('AI Service Failed:', error);
            // Return a user-friendly error string that the UI can render
            return "⚠️ Connection Error: Unable to reach the Quantum Core. Please try again later.";
        }
    }
};

export async function getData() {
    try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        
        return data;
    } catch (err) {
        console.error('An error occurred:', err);
        throw err; // Rethrow the error to handle it elsewhere if needed
    }
}

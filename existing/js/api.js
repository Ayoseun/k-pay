export async function APICall(url, method = 'POST', body = null) {
    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: body ? JSON.stringify(body) : undefined // Serialize body only if it's provided
        });

        console.log('API response status:', response.status);
        
        if (!response.ok) {
            const errorBody = await response.text(); // Get response body for better error handling
            throw new Error(`HTTP error! Status: ${response.status}. Body: ${errorBody}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error making API call:', error);
        throw error;
    }
}

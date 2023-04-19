import axios from 'axios';

export default async (req, res) => {
    try {
        // Make GET request to the API endpoint
        const response = await axios.get('https://horizon.stellar.org/liquidity_pools', {
            headers: {
                'Accept': 'application/json'
            }
        });

        // Extract the relevant data from the response
        const { _embedded: { records }, _links: { self, next, prev } } = response.data;

        // Send the extracted data as the API response
        res.status(200).json({ records, self, next, prev });
    } catch (error) {
        // Handle error
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

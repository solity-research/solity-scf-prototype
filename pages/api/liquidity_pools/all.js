import axios from 'axios';

export default async (req, res) => {
    try {
        // Extract the "limit" query parameter from the request
        const { limit } = req.query;

        // Make GET request to the API endpoint
        // docs for the call -> there are some additional query parameters that can be used:
        // https://developers.stellar.org/api/resources/list-liquidity-pools
        const response = await axios.get('https://horizon.stellar.org/liquidity_pools', {
            headers: {
                'Accept': 'application/json'
            },
            params: {
                limit: limit || 10 // Set a default value for "limit" if not provided in the query parameter
            }
        });

        // Extract the relevant data from the response
        // we can iterate with next and prev
        const { _embedded: { records }, _links: { self, next, prev } } = response.data;

        // Send the extracted data as the API response
        res.status(200).json({ records, self, next, prev });
    } catch (error) {
        // Handle error
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

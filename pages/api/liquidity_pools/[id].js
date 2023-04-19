export default async (req, res) => {
    const { id } = req.query;
    try {
        // docs -> https://developers.stellar.org/api/resources/retrieve-a-liquidity-pool
        const response = await fetch(`https://horizon.stellar.org/liquidity_pools/${id}`, {
            headers: {
                'Accept': 'application/json'
            }
        });
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch liquidity pool data' });
    }
};

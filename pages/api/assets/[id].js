import { AssistantDirectionRounded } from "@mui/icons-material";

export default async (req, res) => {
    const { id } = req.query;
    console.log(id)
    const [assetCode, assetIssuer] = id.split(':')
    try {
        // docs -> https://developers.stellar.org/api/resources/assets/object
        var url = `https://horizon.stellar.org/assets?asset_code=${assetCode}&asset_issuer=${assetIssuer}`
        console.log(url)
        const response = await fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        });
        const data = await response.json();
        res.status(200).json(data._embedded.records);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch liquidity pool data' });
    }
};

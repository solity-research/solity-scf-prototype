import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import Link from "@solity/components/Link";

export default function About() {
  return (
    <Container>
      <Card>
        <CardHeader title="About Us" />
        <CardContent>
          <Stack spacing={2}>
            <Typography>
              Welcome to Solity Network, the AI-powered risk infrastructure for
              the financial world of tomorrow. We provide the infrastructure for
              Decentralized Finance (DeFi) to enable real-time processing of
              risk across chains, protocols, and liquidity pools. Our powerful,
              transparent, and simple approach helps mitigate the complexity of
              DeFi and the newly introduced technical-fundamental risks.
            </Typography>
            <Typography>
              As DeFi spreads across different L1/L2 chains, the space becomes
              increasingly fragmented and opaque, making liquidity provision
              more complex. Technical-fundamental risks in blockchain-based
              financial ecosystems are a newly introduced risk dimension,
              requiring a new approach to risk assessment in this frontier
              market.
            </Typography>
            <Typography>
              Solity Network's approach is to quantify fundamental risks and
              identify risk-adjusted returns in real-time. We provide a
              comprehensive view of DeFi-specific risk dimensions across chains,
              protocols, and liquidity pools. Our processing infrastructure
              enables real-time execution of advanced Machine Learning, Deep
              Learning models, and generative AI processing, and our modular
              architecture allows output customization in terms of immutability,
              decentralization, privacy, and delivery.
            </Typography>
            <Typography>
              Our customers leverage our risk infrastructure to optimize
              portfolio and vault rebalancing, react to sudden changes, bring
              intelligence to their protocols, and gain in-depth understanding
              of DeFi building blocks. We provide insights, observe, and create
              transparency by monitoring in real-time metrics on blockchains and
              DeFi protocols.
            </Typography>
            <Typography>
              At Solity Network, we're here to support you every step of the
              way. Our guidance equips you to mitigate risks and seize
              opportunities in even the most complex environments. Trust us to
              help you build a solid foundation for your business and drive
              growth globally.
            </Typography>
            <Button>
              <Link href="https://solity.network" target="_blank">
                Visit Us
              </Link>
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}

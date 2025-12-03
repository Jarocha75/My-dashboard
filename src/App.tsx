import { Button, Card, Typography } from "@mui/material";

export default function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Vision UI Test
      </Typography>

      <Button variant="contained" color="primary">
        Vision Button
      </Button>

      <Card style={{ marginTop: "2rem" }}>
        <Typography variant="h6">Vision UI Card</Typography>
        <Typography variant="body2">
          Toto je štýl Vision UI v MUI theme.
        </Typography>
      </Card>
    </div>
  );
}

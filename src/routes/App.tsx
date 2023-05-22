import "../App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
      }}
      templateColumns={{
        base: "1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
    </Grid>
  );
}

export default App;

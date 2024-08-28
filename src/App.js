import { ThemeProvider } from "styled-components";
import { ArrowLeft, ArrowRight, Heart, Music, Pause, Play, Search, SkipLeft, SkipRight, Users, Volume } from "components/ui/Icons";
import { ButtonText, MainTitle, SectionSubtitle, SectionTitle, SubText, Text } from "components/ui/Typography";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;

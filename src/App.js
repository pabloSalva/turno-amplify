import { NuevoTurno, NuevoTurnoCollection } from "../src/ui-components";

import { Flex } from "@aws-amplify/ui-react";
// import Amplify from "aws-amplify";
// import awsExports from "./aws-exports";
// Amplify.configure(awsExports);

function App() {
  return (
    <Flex justifyContent={"center"}>
      <NuevoTurno />
      <NuevoTurnoCollection />
    </Flex>
  );
}

export default App;

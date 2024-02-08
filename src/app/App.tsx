import { FC } from "react";
import { RoutesApp } from "@/app/providers/routes/routesConfig.tsx";

interface Props {}

const App: FC<Props> = () => {
  const render = () => {
    return <RoutesApp />;
  };

  return <div className={"App"}>{render()}</div>;
};

export default App;

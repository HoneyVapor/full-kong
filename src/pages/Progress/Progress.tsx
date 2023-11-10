import React, { useState } from "react";

import { ProgressStadistics } from "./ProgressStadistics/ProgressStadistics";

export const Progress = () => {
  const [actualProgressComp, setActualProgressComp] = useState<number>(0);

  const progressComponents: React.ReactNode[] = [<ProgressStadistics />];

  return <>{progressComponents[actualProgressComp]}</>;
};


import React from "react";

import { getUser } from "@/app/dashboard/(api)/user";
import GetStartedLayout from "./getStartedForm/get-started-layout";

export default async function GetStarted() {
  const userData = await getUser();

  return <GetStartedLayout userData={userData} />
}

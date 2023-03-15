import React from "react";

import {Form,Trips} from "../components/exports";

function LandingPage() {
  return (
    <main className="landing-page">
      <Trips/>
      <Form/>
    </main>
  )
}

export default LandingPage;
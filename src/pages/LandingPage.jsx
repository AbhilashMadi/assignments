import React from "react";

import {Form,Trips} from "../components/exports";

function LandingPage() {
  return (
    <main>
      <div className="landing-page">
      <Trips />
      <Form />
      </div>
    </main>
  );
}

export default LandingPage;
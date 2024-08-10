import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Form />
      </main>
      <Footer />
    </div>
  );
};

export default App;

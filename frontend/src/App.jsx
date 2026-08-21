import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import WhatWeDoPage from "./pages/WhatWeDo";
import ImpactPage from "./pages/Impact";
import GetInvolvedPage from "./pages/GetInvolved";
import MediaPage from "./pages/Media";
import ContactPage from "./pages/Contact";

// Temporary placeholder for unbuilt pages
const PagePlaceholder = ({ title }) => (
  <div className="py-28 px-6 max-w-[1280px] mx-auto text-center">
    <span className="inline-block px-4 py-1.5 rounded-full bg-blef-green/10 text-blef-green-dark text-xs font-semibold uppercase tracking-widest">
      Better Life Foundation
    </span>
    <h1 className="mt-4 text-4xl font-extrabold text-blef-charcoal">{title}</h1>
    <p className="mt-3 text-neutral-600">This section is currently under active assembly.</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About/>} />
          <Route path="what-we-do" element={<WhatWeDoPage/>} />
          <Route path="what-we-do/:slug" element={<WhatWeDoPage />} />
          <Route path="impact" element={<ImpactPage/>} />
          <Route path="get-involved" element={<GetInvolvedPage/>} />
          <Route path="media" element={<MediaPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="donate" element={<PagePlaceholder title="Donate to BLEF" />} />
          <Route path="*" element={<PagePlaceholder title="404 - Page Not Found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
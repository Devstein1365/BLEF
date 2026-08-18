import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";

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
          <Route path="what-we-do" element={<PagePlaceholder title="What We Do" />} />
          <Route path="what-we-do/:slug" element={<PagePlaceholder title="Thematic Area Detail" />} />
          <Route path="impact" element={<PagePlaceholder title="Impact & Reports" />} />
          <Route path="get-involved" element={<PagePlaceholder title="Get Involved / Partner" />} />
          <Route path="media" element={<PagePlaceholder title="News & Media" />} />
          <Route path="contact" element={<PagePlaceholder title="Contact Us" />} />
          <Route path="donate" element={<PagePlaceholder title="Donate to BLEF" />} />
          <Route path="*" element={<PagePlaceholder title="404 - Page Not Found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
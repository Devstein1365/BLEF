import { useEffect } from "react";
import { useParams } from "react-router-dom";
import WhatWeDoHero from "../components/WhatWeDo/WhatWeDoHero";
import PillarsOfSuccess from "../components/Whatwedo/PillarOfSuccess";
import ThematicAreasDetail from "../components/Whatwedo/ThematicAreas";
import WhoWeServe from "../components/Whatwedo/WhoWeServe";
import PeerAccountability from "../components/Whatwedo/PeerAccountability";


const WhatWeDoPage = () => {
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      const element = document.getElementById(slug);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [slug]);

  return (
    <>
      <WhatWeDoHero />
      <PillarsOfSuccess />
      <ThematicAreasDetail activeSlug={slug} />
      <WhoWeServe />
      <PeerAccountability />
    </>
  );
};

export default WhatWeDoPage;
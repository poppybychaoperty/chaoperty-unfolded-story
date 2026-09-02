import { createFileRoute } from "@tanstack/react-router";

import { Audience } from "@/components/landing/audience";
import { Ecosystem } from "@/components/landing/ecosystem";
import { FinalCta, SiteFooter } from "@/components/landing/final-cta";
import { Hero } from "@/components/landing/hero";
import { Problems } from "@/components/landing/problems";
import { ProductChaoperty } from "@/components/landing/product-chaoperty";
import { ProductDchao } from "@/components/landing/product-dchao";
import { ProductDwork } from "@/components/landing/product-dwork";
import { ProductPopspace } from "@/components/landing/product-popspace";
import { ProductTamtam } from "@/components/landing/product-tamtam";
import { SiteNav } from "@/components/landing/site-nav";
import { SocialChannels } from "@/components/landing/social-channels";
import { SocialProof } from "@/components/landing/social-proof";
import { Tiers } from "@/components/landing/tiers";
import { TrustBar } from "@/components/landing/partners";
import { Workflow } from "@/components/landing/workflow";
import { WixManageBanner } from "@/components/wix-manage-banner";

const TITLE = "Chaoperty · ระบบบริหารพื้นที่เช่าเชิงพาณิชย์ครบวงจร";
const DESCRIPTION =
  "Commercial Property Management System สำหรับตลาด คอมมูนิตี้มอลล์ และอาคารสำนักงาน — Chaoperty (เกิน 200 ยูนิต), dChao (ไม่เกิน 200 ยูนิต), dWork งานซ่อมบำรุง, Tamtam CRM ลูกค้าหน้าร้าน และ PopSpace จองล็อกอีเวนต์";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Chaoperty",
          alternateName: "เช่าเพอร์ตี้",
          url: "https://www.chaoperty.com/",
          description: DESCRIPTION,
          sameAs: [
            "https://www.youtube.com/@chaoperty",
            "https://www.tiktok.com/@chaoperty",
            "https://www.facebook.com/ChaopertyApp/",
          ],
          makesOffer: [
            { "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: "Chaoperty", applicationCategory: "BusinessApplication", operatingSystem: "Web", url: "https://www.chaoperty.com/" } },
            { "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: "dChao", applicationCategory: "BusinessApplication", operatingSystem: "Web", url: "https://dchao.chaoperty.com/" } },
            { "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: "dWork", applicationCategory: "BusinessApplication", operatingSystem: "Web", url: "https://dwork.chaoperty.com/" } },
            { "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: "Tamtam", applicationCategory: "BusinessApplication", operatingSystem: "Web", url: "https://tamtam.chaoperty.com/" } },
            { "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: "PopSpace", applicationCategory: "BusinessApplication", operatingSystem: "Web", url: "https://popspace-spot-finder.lovable.app/" } },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <WixManageBanner />
      <SiteNav />
      <main>
        <Hero />
        <TrustBar />
        <Workflow />
        <Ecosystem />
        <Problems />
        <SocialProof />
        <Tiers />
        <ProductChaoperty />
        <ProductDchao />
        <ProductDwork />
        <ProductTamtam />
        <ProductPopspace />
        <Audience />
        <SocialChannels />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}

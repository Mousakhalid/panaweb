import Banner from "@/components/Banner/Banner";
import Section from "@/components/Section/Section";
import SectionNuts from "@/components/Section2/SectionNuts";
import Section3 from "@/components/Section3/Section3";
import Section4 from "@/components/Section4/Section4";
import Section5 from "@/components/Section5/Section5";
import Section6 from "@/components/Section6/Section6";
import SectionLearn from "@/components/Section6/SectionLearn";
import React from "react";

function MainPage() {
  return (
    <div>
      <Banner />
      <Section />
      <SectionNuts />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <SectionLearn />
    </div>
  );
}

export default MainPage;

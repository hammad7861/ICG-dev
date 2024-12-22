import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ExploreMore.module.css";

const industries = [
  {
    title: "Automotive",
    img: "./assets/pexels-maltelu-2244746.png",
    icon: "./assets/gis_car.png",
    link: "/Automotive",
  },
  {
    title: "Printing and Packaging",
    img: "./assets/printing.png",
    icon: "./assets/iconoir_printing-page (1).png",
    link: "/Printing",
  },
  {
    title: "Agriculture, Feed, and Food",
    img: "./assets/agriculture.png",
    icon: "/assets/SVG (9).png",
    link: "/AgriculturePage",
  },
  {
    title: "Electronics",
    img: "./assets/electronics.png",
    icon: "./assets/SVG (10).png",
    link: "/Electronics",
  },
  {
    title: "Personal and Home Care",
    img: "./assets/homebeauty.png",
    icon: "./assets/SVG14.png",
    link: "/HomeCare",
  },
  {
    title: "Adhesives and Sealants",
    img: "./assets/adhesive.png",
    icon: "./assets/Vector (1).png",
    link: "/Adhesive",
  },
  {
    title: "Paints and Coating",
    img: "./assets/paints.png",
    icon: "./assets/Vector (2).png",
    link: "/PaintCoating",
  },
  {
    title: "Building and Construction",
    img: "./assets/construction.png",
    icon: "./assets/SVG (7).png",
    link: "/construction",
  },
  {
    title: "Medical and Pharmaceutical",
    img: "./assets/medical.png",
    icon: "./assets/SVG14.png",
    link: "/Medical",
  },
];

const categories = [
  {
    title: "Antioxidants",
    img: "./assets/attachment6.png",
    link: "/AntiOxidants",
  },
  {
    title: "UV-absorbers",
    img: "./assets/uvab.png",
    link: "/Absorber",
  },
  {
    title: "Flame retardants",
    img: "./assets/fkamere.png",
    link: "/FlameRetardants",
  },
  {
    title: "Optical Brightners",
    img: "./assets/opti.png",
    link: "/OpticalBrightners",
  },
  {
    title: "Pigments and Dyes",
    img: "./assets/pigmentsdyes.png",
    link: "/PigmentsDyes",
  },
  {
    title: "HALS",
    img: "./assets/hoc.png",
    link: "/HALS",
  },
  {
    title: "Antiblocks",
    img: "./assets/Anti-Block-Masterbatch-scaled1.png",
    link: "/AntiBlocks",
  },
  {
    title: "Polymers and Resins",
    img: "./assets/polymers.png",
    link: "/PolymersAndResins",
  },
  {
    title: "Plasticizers",
    img: "./assets/Plastic_Additives_430C_647x3291.png",
    link: "/Plasticizers",
  },
  {
    title: "Nucleating Agent",
    img: "./assets/csm_lohtragon-nucleating-agents_923ddb98fc1.png",
    link: "/NucleatingAgents",
  },
  {
    title: "Polymer Processing Additives",
    img: "./assets/polymer-chemistry1.png",
    link: "/PolymerProcessingAdditives",
  },
  {
    title: "Masterbatches",
    img: "./assets/mast.png",
    link: "/MasterBatches",
  },
  {
    title: "Compounds",
    img: "./assets/compounds.png",
    link: "/Compounds",
  },
];

const ExploreMore = () => {
  const [activeTab, setActiveTab] = useState("industries");

  return (
    <div className={styles.exploreContainer}>
      <h2 className={styles.exploreTitle}>Explore Our Expertise</h2>
      <div className={styles.exploreButtons}>
        <button
          className={`${styles.tabButton} ${activeTab === "industries" ? styles.active : ""}`}
          onClick={() => setActiveTab("industries")}
        >
          Industries
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === "solutions" ? styles.active : ""}`}
          onClick={() => setActiveTab("solutions")}
        >
          Categories
        </button>
      </div>

      {activeTab === "industries" && (
        <div className={styles.industriesGrid}>
          {industries.map((industry, index) => (
            <div
              className={styles.industryCard}
              key={index}
              onClick={() => (window.location.href = industry.link)}
            >
              <div
                className={styles.cardBackground}
                style={{ backgroundImage: `url(${industry.img})` }}
              >
                <div className={styles.cardOverlay}>
                  <div className={styles.iconCircle}>
                    <img
                      src={industry.icon}
                      alt={`${industry.title} icon`}
                      className={styles.cardIcon}
                    />
                  </div>
                  <h3 className={styles.industryTitle}>{industry.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "solutions" && (
        <div className={styles.industriesGrid}>
          {categories.map((category, index) => (
            <div
              className={styles.industryCard}
              key={index}
              onClick={() => (window.location.href = category.link)}
            >
              <div
                className={styles.cardBackground}
                style={{ backgroundImage: `url(${category.img})` }}
              >
                <div className={styles.cardOverlay}>
                  <h3 className={styles.industryTitle}>{category.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

ExploreMore.propTypes = {
  activeTab: PropTypes.string,
  setActiveTab: PropTypes.func,
};

export default ExploreMore;

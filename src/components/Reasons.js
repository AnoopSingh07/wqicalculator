const Reasons = [
    // {
    //   parameter: "pH",
    //   probableReasons: "pH levels may be influenced by the presence of acidic or alkaline substances in the water, such as acid mine drainage or the discharge of alkaline chemicals used in mining operations.",
    //   explanation: "Acid mine drainage (AMD) is a common issue in coal mines, where sulfur-bearing minerals react with water and air to produce sulfuric acid, lowering the pH of the water. Alkaline chemicals used in water treatment processes can also elevate pH levels.",
    //   potentialSolutions: "Implement measures to neutralize acidic mine drainage, such as limestone or lime dosing. Adjust water treatment processes to control pH levels within the permissible range."
    // },
    {
      parameter: "Total Dissolved Solids (TDS)",
      probableReasons: "High TDS levels can result from the dissolution of minerals and salts in the surrounding geological formations or from the discharge of industrial effluents containing dissolved solids.",
      explanation: "In mining areas, water may come into contact with mineral deposits, leaching dissolved solids into the water. Additionally, water treatment processes may not effectively remove all dissolved solids.",
      potentialSolutions: "Improve water treatment processes to reduce TDS levels. Implement measures to minimize the leaching of minerals into the water, such as lining storage areas to prevent runoff."
    },
    // {
    //   parameter: "Electrical Conductivity (EC)",
    //   probableReasons: "Elevated EC levels often indicate high concentrations of dissolved ions in the water, which can result from mining activities, such as the leaching of salts and minerals.",
    //   explanation: "Water in mining areas may come into contact with various chemicals and minerals, increasing its conductivity. Poorly treated effluents may also contribute to elevated EC levels.",
    //   potentialSolutions: "Enhance water treatment processes to reduce the concentration of dissolved ions. Implement measures to minimize the discharge of untreated or poorly treated effluents."
    // },
    {
      parameter: "Total Suspended Solids (TSS)",
      probableReasons: "High TSS levels can result from erosion and sedimentation in mining areas, as well as from the discharge of untreated or poorly treated effluents.",
      explanation: "Mining activities can disturb the soil and expose it to erosion, leading to the transport of sediment into water bodies. Inadequate sedimentation basins in water treatment plants may also fail to remove suspended solids effectively.",
      potentialSolutions: "Implement erosion control measures in mining areas to minimize sedimentation. Upgrade sedimentation basins in water treatment plants to improve the removal of suspended solids."
    },
    // {
    //   parameter: "Dissolved Oxygen (DO)",
    //   probableReasons: "Low DO levels may result from organic pollution, such as the discharge of untreated sewage or organic matter from mining activities.",
    //   explanation: "Decomposition of organic matter consumes oxygen in water bodies, leading to hypoxic conditions. Inefficient aeration in water treatment processes can also contribute to low DO levels.",
    //   potentialSolutions: "Improve sewage treatment processes to reduce the discharge of organic pollutants. Enhance aeration systems in water treatment plants to increase DO levels."
    // },
    {
      parameter: "Biochemical Oxygen Demand (BOD)",
      probableReasons: "Elevated BOD levels indicate the presence of organic matter in the water, which can result from sewage discharge, agricultural runoff, or organic pollutants from mining activities.",
      explanation: "Organic matter consumes oxygen during decomposition, leading to oxygen depletion and adverse effects on aquatic life. Inefficient treatment of organic pollutants in water treatment plants can also contribute to high BOD levels.",
      potentialSolutions: "Upgrade sewage treatment systems to reduce the discharge of organic pollutants. Enhance biological treatment processes in water treatment plants to improve the removal of organic matter."
    },
    {
      parameter: "Oil Content",
      probableReasons: "High oil content in water can result from leaks or spills of lubricants, fuels, or other petroleum-based products used in mining operations.",
      explanation: "Improper storage, handling, or disposal of petroleum-based products can lead to contamination of water bodies. Inadequate containment measures may allow oils to enter water sources directly.",
      potentialSolutions: "Implement measures to prevent leaks and spills of petroleum-based products. Install containment systems, such as oil-water separators, to intercept and remove oils from wastewater streams."
    },
    {
      parameter: "Total Hardness",
      probableReasons: "Elevated hardness levels can result from the presence of dissolved calcium and magnesium ions in the water, which may originate from geological formations or mining activities.",
      explanation: "Water in mining areas may come into contact with mineral deposits rich in calcium and magnesium, increasing its hardness. Inadequate treatment processes may fail to remove these ions effectively.",
      potentialSolutions: "Implement water softening techniques to reduce hardness levels. Enhance treatment processes to remove calcium and magnesium ions from water sources."
    },
    {
      parameter: "Chemical Oxygen Demand (COD)",
      probableReasons: "Elevated COD levels indicate the presence of oxidizable compounds in the water, which can result from the discharge of organic pollutants, industrial effluents, or chemicals used in mining processes.",
      explanation: "Oxidizable compounds consume oxygen during chemical reactions, leading to oxygen depletion in water bodies. Inefficient treatment processes may fail to adequately remove these compounds.",
      potentialSolutions: "Improve treatment processes to reduce the discharge of oxidizable compounds. Implement advanced oxidation techniques or biological treatment methods to enhance COD removal."
    },
    {
      parameter: "Sulphate",
      probableReasons: "Elevated sulphate levels can result from the oxidation of sulphide minerals present in the rock strata or from the discharge of acidic mine drainage containing sulphuric acid.",
      explanation: "Mining activities can expose sulphide minerals to air and water, leading to the release of sulphate ions. Acidic mine drainage containing sulphuric acid can also contribute to elevated sulphate levels.",
      potentialSolutions: "Implement measures to prevent the oxidation of sulphide minerals, such as covering exposed rock surfaces. Treat acidic mine drainage to reduce sulphate concentrations before discharge."
    },
    {
      parameter: "Residual Chlorine",
      probableReasons: "Elevated residual chlorine levels may result from the use of chlorine-based disinfectants in water treatment processes or from the discharge of chlorinated compounds used in mining activities.",
      explanation: "Chlorine-based disinfectants are commonly used in water treatment to control microbial growth. However, excess residual chlorine can have adverse effects on aquatic ecosystems.",
      potentialSolutions: "Optimize chlorine dosing in water treatment processes to minimize residual chlorine levels. Implement alternative disinfection methods, such as UV irradiation or ozone treatment, to reduce reliance on chlorine."
    }
  ];
  
  export default Reasons;
  
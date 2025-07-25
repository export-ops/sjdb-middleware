
const employees = {
  "C-XXX": {
    name: "JUAN M. DELA CRUZ",
    position: "ADMINISTRATOR",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-XXX&entry.1045781291=JUAN&entry.880133861=M.&entry.1414103043=DELA%20CRUZ&entry.1166974658=ADMINISTRATOR&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
  "P-001": {
    name: "ATTY. PAUL JOSEPH N. UNTARAN",
    position: "MUNICIPAL MAYOR I",
    department: "MO - Mayor's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-013&entry.1045781291=EMMYLOU&entry.880133861=D.&entry.1414103043=CRUZAT&entry.1166974658=LIBRARIAN%20I&entry.1320481221=MO%20-%20Mayor's%20Office"
  },
  "P-013": {
    name: "EMMYLOU D. CRUZAT",
    position: "LIBRARIAN I",
    department: "MO - Mayor's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-001&entry.1045781291=ATTY.%20PAUL%20JOSEPH&entry.880133861=%20N.&entry.1414103043=UNTARAN&entry.1166974658=MUNICIPAL%20MAYOR%20I&entry.1320481221=MO%20-%20Mayor's%20Office"
  },
  "P-014": {
    name: "GINA V. ZAPANZA",
    position: "ADMINISTRATIVE AIDE VI (CLERK III)",
    department: "MO - Mayor's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-014&entry.1045781291=GINA&entry.880133861=V.&entry.1414103043=ZAPANSA&entry.1166974658=ADMIN.%20AIDE%20VI%20(CLERK%20III)&entry.1320481221=MO%20-%20Mayor's%20Office"
  },
  "P-015": {
    name: "SHIRLEY J. PETATE",
    position: "ADMINISTRATIVE AIDE VI (CLERK III)",
    department: "MO - Mayor's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-015&entry.1045781291=SHIRLEY&entry.880133861=J.&entry.1414103043=PETATE&entry.1166974658=ADMIN.%20AIDE%20VI%20(CLERK%20III)&entry.1320481221=MO%20-%20Mayor's%20Office"
  },
  "P-016": {
    name: "GERALYN H. AGDALIPE",
    position: "ADMINISTRATIVE AIDE VI (CLERK III)",
    department: "MO - Mayor's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-016&entry.1045781291=GERALYN&entry.880133861=H.&entry.1414103043=AGDALIPE&entry.1166974658=ADMIN.%20AIDE%20VI%20(CLERK%20III)&entry.1320481221=MO%20-%20Mayor's%20Office"
  },
  "P-017": {
    name: "KECCYLEN MAE ELIZALDE",
    position: "ADMINISTRATIVE AIDE IV (CLERK II)",
    department: "MO - Mayor's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-017&entry.1045781291=KECCYLEN%20MAE&entry.880133861=&entry.1414103043=ELIZALDE&entry.1166974658=ADMIN.%20AIDE%20IV%20(CLERK%20II)&entry.1320481221=MO%20-%20Mayor's%20Office"
  },
  "P-018": {
    name: "REY A. DELOS SANTOS",
    position: "PHOTOGRAPHER II",
    department: "MO - Mayor's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-018&entry.1045781291=REY&entry.880133861=A.&entry.1414103043=DELOS%20SANTOS&entry.1166974658=PHOTOGRAPHER%20II&entry.1320481221=MO%20-%20Mayor's%20Office"
  },
  "P-019": {
    name: "LILY S. TURRECHA",
    position: "COOPERATIVES DEVELOPMENT SPECIALIST I",
    department: "MO - Mayor's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-019&entry.1045781291=LILY&entry.880133861=S.&entry.1414103043=TURRECHA&entry.1166974658=COOPERATIVES%20DEVELOPMENT%20SPECIALIST%20I&entry.1320481221=MO%20-%20Mayor's%20Office"
  },
  "P-020": {
    name: "CARLA G. MARZOÑA",
    position: "TOURISM OPERATIONS ASSISTANT",
    department: "MO - Mayor's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-020&entry.1045781291=CARLA&entry.880133861=G.&entry.1414103043=MARZO%C3%91A&entry.1166974658=TOURISM%20OPERATIONS%20ASSISTANT&entry.1320481221=MO%20-%20Mayor's%20Office"
  },
  "C-251": {
    name: "CHARLES C. CULAS",
    position: "WATCHMAN II",
    department: "MO - Mayor's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C%20-%20251&entry.1045781291=CHARLES&entry.880133861=C.&entry.1414103043=CULAS&entry.1166974658=WATCHMAN%20II&entry.1320481221=MO%20-%20Mayor's%20Office"
  },
  "C-252": {
    name: "JOLLY ROY B. AMARAN",
    position: "SEMS/MENRO-DESIGNATE",
    department: "MO - Mayor's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C%20-%20252&entry.1045781291=JOLLYROY&entry.880133861=B.&entry.1414103043=AMARAN&entry.1166974658=SEMS/MENRO-DESIGNATE&entry.1320481221=MO%20-%20Mayor's%20Office"
  },
  "C-287": {
    name: "MIKO MA. F. ESTARIS",
    position: "INFORMATION TECHNOLOGY OFFICER I",
    department: "MO - Mayor's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C%20-%20287&entry.1045781291=MIKO%20MA.&entry.880133861=F.&entry.1414103043=ESTARIS&entry.1166974658=INFORMATION%20TECHNOLOGY%20OFFICER%20I&entry.1320481221=MO%20-%20Mayor's%20Office"
  },
  "C-256": {
    name: "MARDY L. UNTALAN",
    position: "ADMINISTRATIVE AIDE IV (HUMAN RESOURCE MANAGEMENT AIDE)",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-256&entry.1045781291=MARDY&entry.880133861=L.&entry.1414103043=UNTALAN&entry.1166974658=ADMINISTRATIVE%20AIDE%20IV%20(HUMAN%20RESOURCE%20MANAGEMENT%20AIDE)&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
};

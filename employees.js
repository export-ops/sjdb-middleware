
const employees = {
  /*Sample Employee*/
  "C-XXX": {
    name: "JUAN M. DELA CRUZ",
    position: "ADMINISTRATOR",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-XXX&entry.1045781291=JUAN&entry.880133861=M.&entry.1414103043=DELA%20CRUZ&entry.1166974658=ADMINISTRATOR&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
  /*Mayor's Office*/
  "P-001": {
    name: "ATTY. PAUL JOSEPH N. UNTARAN",
    position: "MUNICIPAL MAYOR I",
    department: "MO - Mayor's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-001&entry.1045781291=ATTY.%20PAUL%20JOSEPH&entry.880133861=%20N.&entry.1414103043=UNTARAN&entry.1166974658=MUNICIPAL%20MAYOR%20I&entry.1320481221=MO%20-%20Mayor's%20Office"
  },
  "P-013": {
    name: "EMMYLOU D. CRUZAT",
    position: "LIBRARIAN I",
    department: "MO - Mayor's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-013&entry.1045781291=EMMYLOU&entry.880133861=D.&entry.1414103043=CRUZAT&entry.1166974658=LIBRARIAN%20I&entry.1320481221=MO%20-%20Mayor's%20Office"
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
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-251&entry.1045781291=CHARLES&entry.880133861=C.&entry.1414103043=CULAS&entry.1166974658=WATCHMAN%20II&entry.1320481221=MO%20-%20Mayor's%20Office"
  },
  "C-252": {
    name: "JOLLY ROY B. AMARAN",
    position: "SEMS/MENRO-DESIGNATE",
    department: "MO - Mayor's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-252&entry.1045781291=JOLLYROY&entry.880133861=B.&entry.1414103043=AMARAN&entry.1166974658=SEMS/MENRO-DESIGNATE&entry.1320481221=MO%20-%20Mayor's%20Office"
  },
  "C-287": {
    name: "MIKO MA. F. ESTARIS",
    position: "INFORMATION TECHNOLOGY OFFICER I",
    department: "MO - Mayor's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-287&entry.1045781291=MIKO%20MA.&entry.880133861=F.&entry.1414103043=ESTARIS&entry.1166974658=INFORMATION%20TECHNOLOGY%20OFFICER%20I&entry.1320481221=MO%20-%20Mayor's%20Office"
  },
  /*Sangguniang Bayan Office*/
  "P-002": {
    name: "CRIS JOHN P. BANUSING II",
    position: "MUNICIPAL VICE MAYOR I",
    department: "SBO - Sangguniang Bayan Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-002&entry.1045781291=CRIS%20JOHN&entry.880133861=P.&entry.1414103043=BANUSING%20II&entry.1166974658=MUNICIPAL%20VICE%20MAYOR%20I&entry.1320481221=SBO%20-%20Sangguniang%20Bayan%20Office"
  },
  "P-003": {
    name: "LESLEY JANE C. LOTILLA",
    position: "SANGGUNIANG BAYAN MEMBER I",
    department: "SBO - Sangguniang Bayan Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-003&entry.1045781291=LESLEY%20JANE&entry.880133861=C.&entry.1414103043=%20LOTILLA&entry.1166974658=SANGGUNIANG%20BAYAN%20MEMBER%20I&entry.1320481221=SBO%20-%20Sangguniang%20Bayan%20Office"
  },
  "P-004": {
    name: "AIMEE JO P. TIDON",
    position: "SANGGUNIANG BAYAN MEMBER I",
    department: "SBO - Sangguniang Bayan Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-004&entry.1045781291=AIMEE%20JO&entry.880133861=P.&entry.1414103043=TIDON&entry.1166974658=SANGGUNIANG%20BAYAN%20MEMBER%20I&entry.1320481221=SBO%20-%20Sangguniang%20Bayan%20Office"
  },
  "P-005": {
    name: "ERECH M. ALOCILJA",
    position: "SANGGUNIANG BAYAN MEMBER I",
    department: "SBO - Sangguniang Bayan Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-005&entry.1045781291=ERECH&entry.880133861=M.&entry.1414103043=ALOCILJA&entry.1166974658=SANGGUNIANG%20BAYAN%20MEMBER%20I&entry.1320481221=SBO%20-%20Sangguniang%20Bayan%20Office"
  },
  "P-006": {
    name: "APRIL DAGNY B. LITERATUS",
    position: "SANGGUNIANG BAYAN MEMBER I",
    department: "SBO - Sangguniang Bayan Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-006&entry.1045781291=APRIL%20DAGNY&entry.880133861=B.&entry.1414103043=LITERATUS%20&entry.1166974658=SANGGUNIANG%20BAYAN%20MEMBER%20I&entry.1320481221=SBO%20-%20Sangguniang%20Bayan%20Office"
  },
  "P-007": {
    name: "JOEY L. MOLINA",
    position: "SANGGUNIANG BAYAN MEMBER I",
    department: "SBO - Sangguniang Bayan Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-007&entry.1045781291=JOEY&entry.880133861=L.&entry.1414103043=MOLINA&entry.1166974658=SANGGUNIANG%20BAYAN%20MEMBER%20I&entry.1320481221=SBO%20-%20Sangguniang%20Bayan%20Office"
  },
  "P-008": {
    name: "JO REUEL C. GALINDO",
    position: "SANGGUNIANG BAYAN MEMBER I",
    department: "SBO - Sangguniang Bayan Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-008&entry.1045781291=JO%20REUEL&entry.880133861=C.&entry.1414103043=GALINDO&entry.1166974658=SANGGUNIANG%20BAYAN%20MEMBER%20I&entry.1320481221=SBO%20-%20Sangguniang%20Bayan%20Office"
  },
  "P-009": {
    name: "RONALD V. GAYATIN",
    position: "SANGGUNIANG BAYAN MEMBER I",
    department: "SBO - Sangguniang Bayan Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-009&entry.1045781291=RONALD&entry.880133861=V.&entry.1414103043=GAYATIN&entry.1166974658=SANGGUNIANG%20BAYAN%20MEMBER%20I&entry.1320481221=SBO%20-%20Sangguniang%20Bayan%20Office"
  },
  "P-010": {
    name: "FERDINAND L. VIESCA",
    position: "SANGGUNIANG BAYAN MEMBER I",
    department: "SBO - Sangguniang Bayan Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-010&entry.1045781291=FERDINAND&entry.880133861=L.&entry.1414103043=VIESCA&entry.1166974658=SANGGUNIANG%20BAYAN%20MEMBER%20I&entry.1320481221=SBO%20-%20Sangguniang%20Bayan%20Office"
  },
  "P-011": {
    name: "VICTORINO M. ALOJIPAN, JR.",
    position: "SANGGUNIANG BAYAN MEMBER I (LIGA PRESIDENT)",
    department: "SBO - Sangguniang Bayan Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-011&entry.1045781291=VICTORINO&entry.880133861=M.&entry.1414103043=ALOJIPAN,%20JR.&entry.1166974658=SANGGUNIANG%20BAYAN%20MEMBER%20I%20%20%20%20%20%20%20%20%20%20%20%20%20%20(LIGA%20PRESIDENT)&entry.1320481221=SBO%20-%20Sangguniang%20Bayan%20Office"
  },
  "P-012": {
    name: "E JULIUS VINCENT T. SALVANI",
    position: "SANGGUNIANG BAYAN MEMBER I (SK FEDERATION PRESIDENT)",
    department: "SBO - Sangguniang Bayan Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-012&entry.1045781291=E%20JULIUS%20VINCENT&entry.880133861=T.&entry.1414103043=SALVANI&entry.1166974658=SANGGUNIANG%20BAYAN%20MEMBER%20I%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20(SK%20FEDERATION%20PRESIDENT)&entry.1320481221=SBO%20-%20Sangguniang%20Bayan%20Office"
  },
  "P-022": {
    name: "MA. SOLEDAD JANET R. SALAZAR",
    position: "MUN. GOV'T DEPARTMENT HEAD I (SECRETARY TO THE SANGGUNIAN)",
    department: "SBO - Sangguniang Bayan Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-022&entry.1045781291=MA.%20SOLEDAD%20JANET&entry.880133861=R.&entry.1414103043=SALAZAR&entry.1166974658=MUN.%20GOV'T%20DEPARTMENT%20HEAD%20I%20%20%20%20%20(SECRETARY%20TO%20THE%20SANGGUNIAN)&entry.1320481221=SBO%20-%20Sangguniang%20Bayan%20Office"
  },
  "P-023": {
    name: "EMPRESS M. EDROSOLANO",
    position: "LOCAL LEGISLATIVE STAFF ASSISTANT II",
    department: "SBO - Sangguniang Bayan Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-023&entry.1045781291=EMPRESS&entry.880133861=M.&entry.1414103043=EDROSOLANO&entry.1166974658=LOCAL%20LEGISLATIVE%20STAFF%20ASSISTANT%20II&entry.1320481221=SBO%20-%20Sangguniang%20Bayan%20Office"
  },
  "P-024": {
    name: "MICAH JOY C. PESONGCO",
    position: "ADMINISTRATIVE AIDE VI (CLERK III)",
    department: "SBO - Sangguniang Bayan Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-024&entry.1045781291=MICAH%20JOY&entry.880133861=C.&entry.1414103043=PESONGCO&entry.1166974658=ADMIN.%20AIDE%20VI%20(CLERK%20III)&entry.1320481221=SBO%20-%20Sangguniang%20Bayan%20Office"
  },
  "P-025": {
    name: "ALBIN BOY B. ZAMORA",
    position: "ADMINISTRATIVE AIDE IV (DRIVER II)",
    department: "SBO - Sangguniang Bayan Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-025&entry.1045781291=ALBIN%20BOY&entry.880133861=B.&entry.1414103043=ZAMORA&entry.1166974658=ADMIN.%20AIDE%20IV%20(DRIVER%20II)&entry.1320481221=SBO%20-%20Sangguniang%20Bayan%20Office"
  },
  "C-253": {
    name: "EMILENE A. DAYRIT",
    position: "LOCAL LEGISLATIVE STAFF I",
    department: "SBO - Sangguniang Bayan Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-253&entry.1045781291=EMILENE&entry.880133861=A.&entry.1414103043=DAYRIT&entry.1166974658=LOCAL%20LEGISLATIVE%20STAFF%20I&entry.1320481221=SBO%20-%20Sangguniang%20Bayan%20Office"
  },
  /*Municipal Planning and Development Office*/
  "P-026": {
    name: "ENGR. JOSE O. MAGBANUA",
    position: "MUNICIPAL GOVERNMENT DEPARTMENT HEAD I (MUNICIPAL PLANNING AND DEVELOPMENT COORDINATOR)",
    department: "MPDO - Municipal Planning and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-026&entry.1045781291=ENGR.%20JOSE&entry.880133861=O.&entry.1414103043=MAGBANUA&entry.1166974658=MUNICIPAL%20GOVERNMENT%20DEPARTMENT%20HEAD%20I%20(MUNICIPAL%20PLANNING%20AND%20DEVELOPMENT%20COORDINATOR)&entry.1320481221=MPDO%20-%20Municipal%20Planning%20and%20Development%20Office"
  },
  "P-027": {
    name: "ENGR. JESSE O. SENIEL",
    position: "DRAFTSMAN II",
    department: "MPDO - Municipal Planning and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-027&entry.1045781291=ENGR.%20JESSE&entry.880133861=O.&entry.1414103043=SENIEL&entry.1166974658=PROJECT%20DEVELOPMENT%20OFFICER%20II&entry.1320481221=MPDO%20-%20Municipal%20Planning%20and%20Development%20Office"
  },
  "P-028": {
    name: "FLORENCIO N. ARNAEZ JR.",
    position: "PROJECT DEVELOPMENT OFFICER II",
    department: "MPDO - Municipal Planning and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-028&entry.1045781291=FLORENCIO&entry.880133861=N.&entry.1414103043=ARNAEZ%20JR.&entry.1166974658=DRAFTSMAN%20II&entry.1320481221=MPDO%20-%20Municipal%20Planning%20and%20Development%20Office"
  },
  "P-029": {
    name: "FEB LEDEMAR S. NABOR",
    position: "PROJECT DEVELOPMENT OFFICER II",
    department: "MPDO - Municipal Planning and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-029&entry.1045781291=FEB%20LEDEMAR&entry.880133861=S.&entry.1414103043=NABOR&entry.1166974658=ECONOMIC%20RESEARCHER&entry.1320481221=MPDO%20-%20Municipal%20Planning%20and%20Development%20Office"
  },
  "P-030": {
    name: "ALVIN M. PECAOCO",
    position: "ADMININISTRATIVE AIDE VI (DATA CONTROLLER I)",
    department: "MPDO - Municipal Planning and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-030&entry.1045781291=ALVIN&entry.880133861=M.&entry.1414103043=PECAOCO&entry.1166974658=ADMINISTRATIVE%20AIDE%20VI%20(DATA%20CONTROLLER%20I)&entry.1320481221=MPDO%20-%20Municipal%20Planning%20and%20Development%20Office"
  },
  "P-031": {
    name: "KARL ERIC V. MOSCOSO",
    position: "ADMINISTRATIVE ASSISTANT III (COMPUTER OPERATOR II)",
    department: "MPDO - Municipal Planning and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-031&entry.1045781291=KARL%20ERIC&entry.880133861=V.&entry.1414103043=MOSCOSO&entry.1166974658=ADMINISTRATIVE%20ASSISTANT%20III%20(COMPUTER%20OPERATOR%20II)&entry.1320481221=MPDO%20-%20Municipal%20Planning%20and%20Development%20Office"
  },
  "C-285": {
    name: "YVES LYLE P. DELA SERNA",
    position: "ADMINISTRATIVE AIDE IV",
    department: "MPDO - Municipal Planning and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-285&entry.1045781291=YVES%20LYLE&entry.880133861=P.&entry.1414103043=DELA%20SERNA&entry.1166974658=ADMINISTRATIVE%20AIDE%20IV&entry.1320481221=MPDO%20-%20Municipal%20Planning%20and%20Development%20Office"
  },
  /*Municipal Registrar's Office*/
  "P-032": {
    name: "MA. FE T. SALVANI",
    position: "MUNICIPAL GOVERNMENT DEPARTMENT HEAD I (MUNICIPAL CIVIL REGISTRAR)",
    department: "MCR - Municipal Civil Registrar's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-032&entry.1045781291=MA.%20FE&entry.880133861=T.&entry.1414103043=SALVANI&entry.1166974658=MUNICIPAL%20GOVERNMENT%20DEPARTMENT%20HEAD%20I%0A(MUNICIPAL%20CIVIL%20REGISTRAR)&entry.1320481221=MCR%20-%20Municipal%20Civil%20Registrar's%20Office"
  },
  "P-033": {
    name: "MARY GRACE S. MONTECLARO",
    position: "ASSISTANT REGISTRATION OFFICER",
    department: "MCR - Municipal Civil Registrar's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-033&entry.1045781291=MARY%20GRACE&entry.880133861=S.&entry.1414103043=MONTECLARO&entry.1166974658=ASSISTANT%20REGISTRATION%20OFFICER&entry.1320481221=MCR%20-%20Municipal%20Civil%20Registrar's%20Office"
  },
  "P-034": {
    name: "RAYZAN A. LAGUNDAY",
    position: "ADMINISTRATIVE AIDE IV (CLERK II)",
    department: "MCR - Municipal Civil Registrar's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-034&entry.1045781291=RAYZAN&entry.880133861=A.&entry.1414103043=LAGUNDAY&entry.1166974658=ADMINISTRATIVE%20AIDE%20IV%20(CLERK%20II)&entry.1320481221=MCR%20-%20Municipal%20Civil%20Registrar's%20Office"
  },
  "P-035": {
    name: "SHYRELL Q. VILLAVERT",
    position: "ADMINISTRATIVE AIDE IV (CLERK II)",
    department: "MCR - Municipal Civil Registrar's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-035&entry.1045781291=SHYRELL&entry.880133861=Q.&entry.1414103043=VILLAVERT&entry.1166974658=ADMINISTRATIVE%20AIDE%20IV%20(CLERK%20II)&entry.1320481221=MCR%20-%20Municipal%20Civil%20Registrar's%20Office"
  },
  "C-262": {
    name: "JENNIFER N. PATIÑO",
    position: "ADMINISTRATIVE AIDE IV",
    department: "MCR - Municipal Civil Registrar's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-262&entry.1045781291=JENNIFER&entry.880133861=N.&entry.1414103043=PATI%C3%91O&entry.1166974658=ADMINISTRATIVE%20AIDE%20IV&entry.1320481221=MCR%20-%20Municipal%20Civil%20Registrar's%20Office"
  },
  /*Municipal Budget Office*/
  "P-059": {
    name: "MAUREEN D. CASACLANG",
    position: "MUNICIPAL GOVERNMENT DEPARTMENT HEAD I (MUNICIPAL BUDGET OFFICER)",
    department: "MBO - Municipal Budget Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-059&entry.1045781291=MAUREEN&entry.880133861=D.&entry.1414103043=CASACLANG&entry.1166974658=MUNICIPAL%20GOVERNMENT%20DEPARTMENT%20HEAD%20I%0A(MUNICIPAL%20BUDGET%20OFFICER)&entry.1320481221=MBO%20-%20Municipal%20Budget%20Office"
  },
  "P-060": {
    name: "EDA HOPE D. GUMAWA",
    position: "ADMINISTRATIVE OFFICER IV (BUDGET OFFICER II)",
    department: "MBO - Municipal Budget Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-060&entry.1045781291=EDA%20HOPE&entry.880133861=D.&entry.1414103043=GUMAWA&entry.1166974658=ADMINISTRATIVE%20OFFICER%20IV%20(BUDGET%20OFFICER%20II)&entry.1320481221=MBO%20-%20Municipal%20Budget%20Office"
  },
  "C-259": {
    name: "ANNAVELLE S. HIÑOSA",
    position: "ADMINISTRATIVE AIDE IV",
    department: "MBO - Municipal Budget Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-259&entry.1045781291=ANNAVELLE&entry.880133861=S.&entry.1414103043=HI%C3%91OSA&entry.1166974658=ADMINISTRATIVE%20AIDE%20IV&entry.1320481221=MBO%20-%20Municipal%20Budget%20Office"
  },
  /*Municipal Accounting Office*/
  "P-061": {
    name: "KRISTINE DIANE C. ALOJIPAN, CPA",
    position: "ADMINISTRATIVE OFFICER IV (ACCOUNTANT II) *ACTING MUNICIPAL ACCOUNTANT*",
    department: "MACCO - Municipal Accounting Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-061&entry.1045781291=KRISTINE%20DIANE&entry.880133861=C.&entry.1414103043=ALOJIPAN,%20CPA&entry.1166974658=ADMINISTRATIVE%20OFFICER%20IV%20(ACCOUNTANT%20II)%0A*ACTING%20MUNICIPAL%20ACCOUNTANT*&entry.1320481221=MACCO%20-%20Municipal%20Accounting%20Office"
  },
  "P-062": {
    name: "GABRIEL D. DELA SERNA",
    position: "ADMINISTRATIVE ASSISTANT II (BOOKKEEPER I)",
    department: "MACCO - Municipal Accounting Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-062&entry.1045781291=GABRIEL&entry.880133861=D.&entry.1414103043=DELA%20SERNA&entry.1166974658=ADMINISTRATIVE%20ASSISTANT%20II%20(BOOKKEEPER%20I)&entry.1320481221=MACCO%20-%20Municipal%20Accounting%20Office"
  },
  "P-063": {
    name: "GLENDA C. VARGAS",
    position: "ADMINISTRATIVE ASSISTANT II (BOOKKEEPER I)",
    department: "MACCO - Municipal Accounting Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-063&entry.1045781291=GLENDA&entry.880133861=C.&entry.1414103043=VARGAS&entry.1166974658=ADMINISTRATIVE%20ASSISTANT%20II%20(BOOKKEEPER%20I)&entry.1320481221=MACCO%20-%20Municipal%20Accounting%20Office"
  },
  "P-064": {
    name: "ROSALYN S. CAPADOCIA",
    position: "ADMINISTRATIVE AIDE VI (ACCOUNTING CLERK II)",
    department: "MACCO - Municipal Accounting Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-064&entry.1045781291=ROSALYN&entry.880133861=S.&entry.1414103043=CAPADOCIA&entry.1166974658=ADMINISTRATIVE%20AIDE%20VI%20(ACCOUNTING%20CLERK%20II)&entry.1320481221=MACCO%20-%20Municipal%20Accounting%20Office"
  },
  "P-065": {
    name: "RITA C. MACATANA",
    position: "ADMINISTRATIVE AIDE VI (ACCOUNTING CLERK II)",
    department: "MACCO - Municipal Accounting Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-065&entry.1045781291=RITA&entry.880133861=C.&entry.1414103043=MACATANA&entry.1166974658=ADMINISTRATIVE%20AIDE%20VI%20(ACCOUNTING%20CLERK%20II)&entry.1320481221=MACCO%20-%20Municipal%20Accounting%20Office"
  },
  "P-066": {
    name: "MA. LOURDES G. REGONDON, MPA",
    position: "ADMINISTRATIVE AIDE IV (ACCOUNTING CLERK I)",
    department: "MACCO - Municipal Accounting Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-066&entry.1045781291=MA.%20LOURDES&entry.880133861=G.&entry.1414103043=REGONDON,%20MPA&entry.1166974658=ADMINISTRATIVE%20AIDE%20IV%20(ACCOUNTING%20CLERK%20I)&entry.1320481221=MACCO%20-%20Municipal%20Accounting%20Office"
  },
  "P-067": {
    name: "MONICA LANIE B. DELOS SANTOS",
    position: "ADMINISTRATIVE AIDE IV (ACCOUNTING CLERK I)",
    department: "MACCO - Municipal Accounting Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-067&entry.1045781291=MONICA%20LANIE&entry.880133861=B.&entry.1414103043=DELOS%20SANTOS&entry.1166974658=ADMINISTRATIVE%20AIDE%20IV%20(ACCOUNTING%20CLERK%20I)&entry.1320481221=MACCO%20-%20Municipal%20Accounting%20Office"
  },
  "P-068": {
    name: "SHERYL C. FLORES, MPA",
    position: "ADMINISTRATIVE OFFICER IV (MANAGEMENT AND AUDIT ANALYST II)",
    department: "MACCO - Municipal Accounting Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-068&entry.1045781291=SHERYL&entry.880133861=CHONG&entry.1414103043=FLORES,%20MPA&entry.1166974658=ADMINISTRATIVE%20OFFICER%20IV%20(MANAGEMENT%20AND%20AUDIT%20ANALYST%20II)&entry.1320481221=MACCO%20-%20Municipal%20Accounting%20Office"
  },
  "C-271": {
    name: "RONIE A. GALEDO",
    position: "ADMINISTRATIVE AIDE IV",
    department: "MACCO - Municipal Accounting Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-271&entry.1045781291=RONIE&entry.880133861=A.&entry.1414103043=GALEDO&entry.1166974658=ADMINISTRATIVE%20AIDE%20IV&entry.1320481221=MACCO%20-%20Municipal%20Accounting%20Office"
  },
  "C-272": {
    name: "JOSETTA T. HIÑOSA",
    position: "ADMINISTRATIVE AIDE IV",
    department: "MACCO - Municipal Accounting Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-272&entry.1045781291=JOSETTA&entry.880133861=T.&entry.1414103043=HI%C3%91OSA&entry.1166974658=ADMINISTRATIVE%20AIDE%20IV&entry.1320481221=MACCO%20-%20Municipal%20Accounting%20Office"
  },
  "C-273": {
    name: "JOYCE G. VIESCA",
    position: "ADMINISTRATIVE AIDE IV",
    department: "MACCO - Municipal Accounting Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-273&entry.1045781291=JOYCE&entry.880133861=G.&entry.1414103043=VIESCA&entry.1166974658=ADMINISTRATIVE%20AIDE%20IV&entry.1320481221=MACCO%20-%20Municipal%20Accounting%20Office"
  },
  /*Municipal Treasurer's Office*/
  "P-069": {
    name: "GENEVIEVE S. UY",
    position: "MUNICIPAL GOVERNMENT DEPARTMENT HEAD I (MUNICIPAL TREASURER)",
    department: "MTO - Municipal Treasurer's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-069&entry.1045781291=GENEVIEVE&entry.880133861=S.&entry.1414103043=UY&entry.1166974658=MUNICIPAL%20GOVERNMENT%20DEPARTMENT%20HEAD%20I%20(MUNICIPAL%20TREASURER)&entry.1320481221=MTO%20-%20Municipal%20Treasurer's%20Office"
  },
  "P-070": {
    name: "VICTORIA H. MADREDANO",
    position: "LOCAL REVENUE COLLECTION OFFICER III",
    department: "MTO - Municipal Treasurer's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-070&entry.1045781291=VICTORIA&entry.880133861=H.&entry.1414103043=MADREDANO&entry.1166974658=LOCAL%20REVENUE%20COLLECTION%20OFFICER%20III&entry.1320481221=MTO%20-%20Municipal%20Treasurer's%20Office"
  },
  "P-071": {
    name: "FAITH MARIE T. VICENTE",
    position: "LOCAL TREASURY OPERATIONS OFFICER I",
    department: "MTO - Municipal Treasurer's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-071&entry.1045781291=FAITH%20MARIE&entry.880133861=T.&entry.1414103043=VICENTE&entry.1166974658=LOCAL%20TREASURY%20OPERATIONS%20OFFICER%20I&entry.1320481221=MTO%20-%20Municipal%20Treasurer's%20Office"
  },
  "P-072": {
    name: "DEBBIE S. ALTARES",
    position: "ADMINISTRATIVE OFFICER I (CASHIER I)",
    department: "MTO - Municipal Treasurer's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-072&entry.1045781291=DEBBIE&entry.880133861=S.&entry.1414103043=ALTARES&entry.1166974658=ADMINISTRATIVE%20OFFICER%20I%20(CASHIER%20I)&entry.1320481221=MTO%20-%20Municipal%20Treasurer's%20Office"
  },
  "P-073": {
    name: "DELIA K. ALIAN",
    position: "ADMINISTRATIVE ASSISTANT II (DISBURSING OFFICER I)",
    department: "MTO - Municipal Treasurer's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-073&entry.1045781291=DELIA&entry.880133861=K.&entry.1414103043=ALIAN&entry.1166974658=ADMINISTRATIVE%20ASSISTANT%20II%20(DISBURSING%20OFFICER%20I)&entry.1320481221=MTO%20-%20Municipal%20Treasurer's%20Office"
  },
  "P-074": {
    name: "LJ IMEE B. DELGADO",
    position: "LOCAL REVENUE COLLECTION OFFICER I",
    department: "MTO - Municipal Treasurer's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-074&entry.1045781291=LJ%20IMEE&entry.880133861=B.&entry.1414103043=DELGADO&entry.1166974658=LOCAL%20REVENUE%20COLLECTION%20OFFICER%20I&entry.1320481221=MTO%20-%20Municipal%20Treasurer's%20Office"
  },
  "P-075": {
    name: "ARMAN S. NARANJO",
    position: "LOCAL REVENUE COLLECTION OFFICER I",
    department: "MTO - Municipal Treasurer's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-075&entry.1045781291=ARMAN&entry.880133861=S.&entry.1414103043=NARANJO&entry.1166974658=LOCAL%20REVENUE%20COLLECTION%20OFFICER%20I&entry.1320481221=MTO%20-%20Municipal%20Treasurer's%20Office"
  },
  "P-076": {
    name: "MONICA M. REBOTE",
    position: "REVENUE COLLECTION CLERK II",
    department: "MTO - Municipal Treasurer's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-076&entry.1045781291=MONICA&entry.880133861=M.&entry.1414103043=REBOTE&entry.1166974658=REVENUE%20COLLECTION%20CLERK%20II&entry.1320481221=MTO%20-%20Municipal%20Treasurer's%20Office"
  },
  "P-077": {
    name: "LINDA I. GENTOVA",
    position: "REVENUE COLLECTION CLERK II",
    department: "MTO - Municipal Treasurer's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-077&entry.1045781291=LINDA&entry.880133861=I.&entry.1414103043=GENTOVA&entry.1166974658=REVENUE%20COLLECTION%20CLERK%20II&entry.1320481221=MTO%20-%20Municipal%20Treasurer's%20Office"
  },
  "P-078": {
    name: "EDUARDO S. DE JUAN",
    position: "REVENUE COLLECTION CLERK II",
    department: "MTO - Municipal Treasurer's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-078&entry.1045781291=EDUARDO&entry.880133861=S.&entry.1414103043=DE%20JUAN&entry.1166974658=REVENUE%20COLLECTION%20CLERK%20II&entry.1320481221=MTO%20-%20Municipal%20Treasurer's%20Office"
  },
  "P-079": {
    name: "CLAIRE P. OROSCO",
    position: "REVENUE COLLECTION CLERK II",
    department: "MTO - Municipal Treasurer's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-079&entry.1045781291=CLAIRE&entry.880133861=P.&entry.1414103043=OROSCO&entry.1166974658=REVENUE%20COLLECTION%20CLERK%20II&entry.1320481221=MTO%20-%20Municipal%20Treasurer's%20Office"
  },
  "P-080": {
    name: "EVELYN C. MOLINA",
    position: "REVENUE COLLECTION CLERK II",
    department: "MTO - Municipal Treasurer's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-080&entry.1045781291=EVELYN&entry.880133861=C.&entry.1414103043=MOLINA&entry.1166974658=REVENUE%20COLLECTION%20CLERK%20II&entry.1320481221=MTO%20-%20Municipal%20Treasurer's%20Office"
  },
  "P-081": {
    name: "DIOSCORA D. PE",
    position: "REVENUE COLLECTION CLERK II",
    department: "MTO - Municipal Treasurer's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-081&entry.1045781291=DIOSCORA&entry.880133861=D.&entry.1414103043=PE&entry.1166974658=REVENUE%20COLLECTION%20CLERK%20II&entry.1320481221=MTO%20-%20Municipal%20Treasurer's%20Office"
  },
  "P-082": {
    name: "MYLENE M. LANARIO",
    position: "REVENUE COLLECTION CLERK II",
    department: "MTO - Municipal Treasurer's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-082&entry.1045781291=MYLENE&entry.880133861=M.&entry.1414103043=LANARIO&entry.1166974658=REVENUE%20COLLECTION%20CLERK%20II&entry.1320481221=MTO%20-%20Municipal%20Treasurer's%20Office"
  },
  "P-083": {
    name: "CHITA S. ORIEL",
    position: "REVENUE COLLECTION CLERK II",
    department: "MTO - Municipal Treasurer's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-083&entry.1045781291=CHITA&entry.880133861=S.&entry.1414103043=ORIEL&entry.1166974658=REVENUE%20COLLECTION%20CLERK%20II&entry.1320481221=MTO%20-%20Municipal%20Treasurer's%20Office"
  },
  "P-084": {
    name: "EMPRESS JONE E. ATALO",
    position: "REVENUE COLLECTION CLERK I",
    department: "MTO - Municipal Treasurer's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-084&entry.1045781291=EMPRESS%20JONE&entry.880133861=E.&entry.1414103043=ATALO&entry.1166974658=REVENUE%20COLLECTION%20CLERK%20I&entry.1320481221=MTO%20-%20Municipal%20Treasurer's%20Office"
  },
  "P-085": {
    name: "MARIA ROSELIA V. CONLU",
    position: "REVENUE COLLECTION CLERK I",
    department: "MTO - Municipal Treasurer's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-085&entry.1045781291=MARIA%20ROSELIA&entry.880133861=V.&entry.1414103043=CONLU&entry.1166974658=REVENUE%20COLLECTION%20CLERK%20I&entry.1320481221=MTO%20-%20Municipal%20Treasurer's%20Office"
  },
  "P-086": {
    name: "ZARAH ANDREA S. ALTARES",
    position: "REVENUE COLLECTION CLERK II",
    department: "MTO - Municipal Treasurer's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-086&entry.1045781291=ZARAH%20ANDREA&entry.880133861=S.&entry.1414103043=ALTARES&entry.1166974658=REVENUE%20COLLECTION%20CLERK%20II&entry.1320481221=MTO%20-%20Municipal%20Treasurer's%20Office"
  },
  "P-087": {
    name: "GLORIA P. JUALA",
    position: "REVENUE COLLECTION CLERK I",
    department: "MTO - Municipal Treasurer's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-087&entry.1045781291=GLORIA&entry.880133861=P.&entry.1414103043=JUALA&entry.1166974658=REVENUE%20COLLECTION%20CLERK%20I&entry.1320481221=MTO%20-%20Municipal%20Treasurer's%20Office"
  },
  "P-088": {
    name: "MERYL ADA R. BUNGCASAN",
    position: "DATA ENCODER",
    department: "MTO - Municipal Treasurer's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-088&entry.1045781291=MERYL%20ADA&entry.880133861=R.&entry.1414103043=BUNGCASAN&entry.1166974658=DATA%20ENCODER&entry.1320481221=MTO%20-%20Municipal%20Treasurer's%20Office"
  },
  "P-089": {
    name: "EDGAR T. ECUBE",
    position: "ADMINISTRATIVE AIDE IV (CLERK II)",
    department: "MTO - Municipal Treasurer's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-089&entry.1045781291=EDGAR&entry.880133861=T.&entry.1414103043=ECUBE&entry.1166974658=ADMINISTRATIVE%20AIDE%20IV%20(CLERK%20II)&entry.1320481221=MTO%20-%20Municipal%20Treasurer's%20Office"
  },
  "P-090": {
    name: "RICKY A. CATALDAVAN",
    position: "REVENUE COLLECTION CLERK II",
    department: "MTO - Municipal Treasurer's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-090&entry.1045781291=RICKY&entry.880133861=A.&entry.1414103043=CATALDAVAN&entry.1166974658=REVENUE%20COLLECTION%20CLERK%20II&entry.1320481221=MTO%20-%20Municipal%20Treasurer's%20Office"
  },
  "C-267": {
    name: "FRANCIS JOHN M. MISSION",
    position: "BILL COLLECTOR",
    department: "MTO - Municipal Treasurer's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-267&entry.1045781291=FRANCIS%20JOHN&entry.880133861=M.&entry.1414103043=MISSION&entry.1166974658=BILL%20COLLECTOR&entry.1320481221=MTO%20-%20Municipal%20Treasurer's%20Office"
  },
  "C-268": {
    name: "REX M. MARFIL",
    position: "DRIVER",
    department: "MTO - Municipal Treasurer's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-268&entry.1045781291=REX&entry.880133861=M.&entry.1414103043=MARFIL&entry.1166974658=DRIVER&entry.1320481221=MTO%20-%20Municipal%20Treasurer's%20Office"
  },
  "C-269": {
    name: "NECO PHILIP F. BANDIOLA",
    position: "ADMINISTRATIVE ASSISTANT II",
    department: "MTO - Municipal Treasurer's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-269&entry.1045781291=NECO%20PHILIP&entry.880133861=F.&entry.1414103043=BANDIOLA&entry.1166974658=ADMINISTRATIVE%20ASSISTANT%20II&entry.1320481221=MTO%20-%20Municipal%20Treasurer's%20Office"
  },
  "C-270": {
    name: "ROVELYN F. ABAN",
    position: "ADMINISTRATIVE AIDE IV",
    department: "MTO - Municipal Treasurer's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-270&entry.1045781291=ROVELYN&entry.880133861=F.&entry.1414103043=ABAN&entry.1166974658=ADMINISTRATIVE%20AIDE%20IV&entry.1320481221=MTO%20-%20Municipal%20Treasurer's%20Office"
  },
  /*Municipal Assessor's Office*/
  "P-091": {
    name: "ARNULFO C. SERMENO",
    position: "MUNICIPAL GOVERNMENT DEPARTMENT HEAD I (MUNICIPAL ASSESSOR)",
    department: "MASSO - Municipal Assessor's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-091&entry.1045781291=ARNULFO&entry.880133861=C.&entry.1414103043=SERMENO&entry.1166974658=MUNICIPAL%20GOVERNMENT%20DEPARTMENT%20HEAD%20I%20(MUNICIPAL%20ASSESSOR)&entry.1320481221=MASSO%20-%20Municipal%20Assessor's%20Office"
  },
  "P-092": {
    name: "JUSTIN PAOLO P. SISON",
    position: "TAX MAPPER I",
    department: "MASSO - Municipal Assessor's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-092&entry.1045781291=JUSTIN%20PAOLO&entry.880133861=P.&entry.1414103043=SISON&entry.1166974658=TAX%20MAPPER%20I&entry.1320481221=MASSO%20-%20Municipal%20Assessor's%20Office"
  },
  "P-093": {
    name: "ARTHUR F. PETATE",
    position: "TAX MAPPING AIDE",
    department: "MASSO - Municipal Assessor's Office",
    form_url: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https%3A%2F%2Fexport-ops.github.io%2Fsjdb-middleware%2F%3Femp_id%3DP-094"
  },
  "P-094": {
    name: "ANNIE C. ALFUENTE",
    position: "LOCAL ASSESSMENT OPERATIONS OFFICER III",
    department: "MASSO - Municipal Assessor's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-094&entry.1045781291=ANNIE&entry.880133861=C.&entry.1414103043=ALFUENTE&entry.1166974658=LOCAL%20ASSESSMENT%20OPERATIONS%20OFFICER%20III&entry.1320481221=MASSO%20-%20Municipal%20Assessor's%20Office"
  },
  "P-095": {
    name: "BEVERLY D. REMEGIO",
    position: "ADMINISTRATIVE ASSISTANT I (BOOKBINDER III)",
    department: "MASSO - Municipal Assessor's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-095&entry.1045781291=BEVERLY&entry.880133861=D.&entry.1414103043=REMEGIO&entry.1166974658=ADMINISTRATIVE%20ASSISTANT%20I%20(BOOKBINDER%20III)&entry.1320481221=MASSO%20-%20Municipal%20Assessor's%20Office"
  },
  "P-202": {
    name: "RIZA B. PEROCHO",
    position: "ASSESSMENT CLERK II",
    department: "MASSO - Municipal Assessor's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-202&entry.1045781291=RIZA&entry.880133861=B.&entry.1414103043=PEROCHO&entry.1166974658=ASSESSMENT%20CLERK%20II&entry.1320481221=MASSO%20-%20Municipal%20Assessor's%20Office"
  },
  "C-260": {
    name: "SAHREN L. MONTAÑO",
    position: "ASSESSMENT CLERK I",
    department: "MASSO - Municipal Assessor's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-260&entry.1045781291=SAHREN&entry.880133861=L.&entry.1414103043=MONTA%C3%91O&entry.1166974658=ASSESSMENT%20CLERK%20I&entry.1320481221=MASSO%20-%20Municipal%20Assessor's%20Office"
  },
  "C-261": {
    name: "MA. LUZ D. GUANTIA",
    position: "ADMINISTRATIVE AIDE IV",
    department: "MASSO - Municipal Assessor's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-261&entry.1045781291=MA.%20LUZ&entry.880133861=D.&entry.1414103043=GUANTIA&entry.1166974658=ADMINISTRATIVE%20AIDE%20IV&entry.1320481221=MASSO%20-%20Municipal%20Assessor's%20Office"
  },
  /*Municipal General Services Office*/
  "P-036": {
    name: "DELIA ASUNCION V. JUALA",
    position: "MUNICIPAL GOVERNMENT DEPARTMENT HEAD I (MUNICIPAL GENERAL SERVICES OFFICER)",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-036&entry.1045781291=DELIA%20ASUNCION&entry.880133861=V.&entry.1414103043=JUALA&entry.1166974658=MUNICIPAL%20GOVERNMENT%20DEPARTMENT%20HEAD%20I%20%0A(MUNICIPAL%20GENERAL%20SERVICES%20OFFICER)&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
  "P-037": {
    name: "LORENZE G. GALLANO",
    position: "ADMINISTRATIVE OFFICER I (SUPPLY OFFICER I)",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-037&entry.1045781291=LORENZE&entry.880133861=G.&entry.1414103043=GALLANO&entry.1166974658=ADMINISTRATIVE%20OFFICER%20I%20(SUPPLY%20OFFICER%20I)&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
  "P-038": {
    name: "RODOLF JOSE D. MAZA",
    position: "INFORMATION SYSTEMS ANALYST I",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-038&entry.1045781291=RODOLF%20JOSE&entry.880133861=D.&entry.1414103043=MAZA&entry.1166974658=INFORMATION%20SYSTEMS%20ANALYST%20I&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
  "P-039": {
    name: "RAYMUNDA A. SINGURAN",
    position: "ADMINISTRATIVE AIDE III (LABORER II)",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-039&entry.1045781291=RAYMUNDA&entry.880133861=A.&entry.1414103043=SINGURAN&entry.1166974658=ADMINISTRATIVE%20AIDE%20III%20(LABORER%20II)&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
  "P-040": {
    name: "FELICIDAD V. ESPAÑOLA",
    position: "ADMINISTRATIVE AIDE III (LABORER II)",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-040&entry.1045781291=FELICIDAD&entry.880133861=V.&entry.1414103043=ESPA%C3%91OLA&entry.1166974658=ADMINISTRATIVE%20AIDE%20III%20(LABORER%20II)&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
  "P-041": {
    name: "ANN LESLIE D. JARANDILLO",
    position: "ADMINISTRATIVE AIDE III (LABORER II)",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-041&entry.1045781291=ANN%20LESLIE&entry.880133861=D.&entry.1414103043=JARANDILLO&entry.1166974658=ADMINISTRATIVE%20AIDE%20III%20(LABORER%20II)&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
  "P-042": {
    name: "ZENIA F. DALISAY",
    position: "ADMINISTRATIVE AIDE III (UTILITY WORKER II)",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-042&entry.1045781291=ZENIA&entry.880133861=F.&entry.1414103043=DALISAY&entry.1166974658=ADMINISTRATIVE%20AIDE%20III%20(UTILITY%20WORKER%20II)&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
  "P-043": {
    name: "ELSIE T. CONLU",
    position: "ADMINISTRATIVE ASSISTANT I (REPRODUCTION MACHINE OPERATOR III)",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-043&entry.1045781291=ELSIE&entry.880133861=T.&entry.1414103043=CONLU&entry.1166974658=ADMINISTRATIVE%20ASSISTANT%20I%20(REPRODUCTION%20MACHINE%20OPERATOR%20III)&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
  "P-044": {
    name: "ELMER G. ESPARAR",
    position: "ADMINISTRATIVE AIDE III (LABORER II)",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-044&entry.1045781291=ELMER&entry.880133861=G.&entry.1414103043=ESPARAR&entry.1166974658=ADMINISTRATIVE%20AIDE%20III%20(LABORER%20II)&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
  "P-045": {
    name: "ADELINA M. AGNAS",
    position: "ADMINISTRATIVE AIDE III (LABORER II)",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-045&entry.1045781291=ADELINA&entry.880133861=M.&entry.1414103043=AGNAS&entry.1166974658=ADMINISTRATIVE%20AIDE%20III%20(LABORER%20II)&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
  "P-046": {
    name: "JOSE A. BONIFACIO",
    position: "ADMINISTRATIVE AIDE III (LABORER II)",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-046&entry.1045781291=JOSE&entry.880133861=A.&entry.1414103043=BONIFACIO&entry.1166974658=ADMINISTRATIVE%20AIDE%20III%20(LABORER%20II)&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
  "P-047": {
    name: "SEVERINO N. GIMENO, JR.",
    position: "ADMINISTRATIVE AIDE III (UTILITY WORKER II)",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-047&entry.1045781291=SEVERINO&entry.880133861=N.&entry.1414103043=GIMENO,%20JR.&entry.1166974658=ADMINISTRATIVE%20AIDE%20III%20(UTILITY%20WORKER%20II)&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
  "P-048": {
    name: "LYZA GRACE C. SOMCIO",
    position: "ADMINISTRATIVE OFFICER V (HUMAN RESOURCE MANAGEMENT OFFICER III)",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-048&entry.1045781291=LYZA%20GRACE&entry.880133861=C.&entry.1414103043=SOMCIO&entry.1166974658=ADMINISTRATIVE%20OFFICER%20V%20(HUMAN%20RESOURCE%20MANAGEMENT%20OFFICER%20III)&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
  "P-049": {
    name: "FRED ROEL C. HIPONIA",
    position: "ADMINISTRATIVE AIDE III (UTILITY WORKER II)",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-049&entry.1045781291=FRED%20ROEL&entry.880133861=C.&entry.1414103043=HIPONIA&entry.1166974658=ADMINISTRATIVE%20AIDE%20III%20(UTILITY%20WORKER%20II)&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
  "P-050": {
    name: "FILIP L. VIESCA",
    position: "ADMINISTRATIVE AIDE III (UTILITY WORKER II)",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-050&entry.1045781291=FILIP&entry.880133861=L.&entry.1414103043=VIESCA&entry.1166974658=ADMINISTRATIVE%20AIDE%20III%20(UTILITY%20WORKER%20II)&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
  "P-051": {
    name: "JULITO M. MANJARES",
    position: "ADMINISTRATIVE AIDE III (UTILITY WORKER II)",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-051&entry.1045781291=JULITO&entry.880133861=M.&entry.1414103043=MANJARES&entry.1166974658=ADMINISTRATIVE%20AIDE%20III%20(UTILITY%20WORKER%20II)&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
  "P-052": {
    name: "RONALD Y. GALOPO",
    position: "ADMINISTRATIVE ASSISTANT II",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-052&entry.1045781291=RONALD&entry.880133861=Y.&entry.1414103043=GALOPO&entry.1166974658=ADMINISTRATIVE%20ASSISTANT%20II&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
  "P-053": {
    name: "JEAN T. ARDEÑO",
    position: "ADMINISTRATIVE AIDE IV (DRIVER II)",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-053&entry.1045781291=JEAN&entry.880133861=T.&entry.1414103043=ARDE%C3%91O&entry.1166974658=ADMINISTRATIVE%20AIDE%20IV%20(DRIVER%20II)&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
  "P-054": {
    name: "CAESARIENE R. MAGTULIS",
    position: "DATA ENCODER",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-054&entry.1045781291=CAESARIENE&entry.880133861=R.&entry.1414103043=MAGTULIS&entry.1166974658=DATA%20ENCODER&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
  "P-055": {
    name: "GLENN MARK M. DELLOSDE",
    position: "ADMINISTRATIVE AIDE IV (DRIVER II)",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-055&entry.1045781291=GLENN%20MARK&entry.880133861=M.&entry.1414103043=DELLOSDE&entry.1166974658=ADMINISTRATIVE%20AIDE%20IV%20(DRIVER%20II)&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
  "P-056": {
    name: "GINAH A. DELIMA",
    position: "ADMINISTRATIVE ASSISTANT II",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-056&entry.1045781291=GINAH&entry.880133861=A.&entry.1414103043=DELIMA&entry.1166974658=ADMINISTRATIVE%20ASSISTANT%20II&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
  "P-057": {
    name: "MA. CONCEPCION Y. NACIONALES",
    position: "ADMINISTRATIVE ASSISTANT II (HUMAN RESOURCE MANAGEMENT ASSISTANT)",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-057&entry.1045781291=MA.%20CONCEPCION&entry.880133861=Y.&entry.1414103043=NACIONALES&entry.1166974658=ADMINISTRATIVE%20ASSISTANT%20II%20(HUMAN%20RESOURCE%20MANAGEMENT%20ASSISTANT)&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
  "P-058": {
    name: "ALEN E. GUMAWA",
    position: "ADMINISTRATIVE AIDE IV (DRIVER II)",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-058&entry.1045781291=ALEN&entry.880133861=E.&entry.1414103043=GUMAWA&entry.1166974658=ADMINISTRATIVE%20AIDE%20IV%20(DRIVER%20II)&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
  "P-213": {
    name: "GLECERIE RUMBINES",
    position: "ADMINISTRATIVE AIDE III (UTILITY WORKER II)",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-213&entry.1045781291=GLECERIE&entry.880133861=&entry.1414103043=RUMBINES&entry.1166974658=ADMINISTRATIVE%20AIDE%20III%20(UTILITY%20WORKER%20II)&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
  "P-214": {
    name: "ROGELIO D. HUCALLA, JR.",
    position: "ADMINISTRATIVE AIDE III (UTILITY WORKER II)",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-214&entry.1045781291=ROGELIO&entry.880133861=D.&entry.1414103043=HUCALLA,%20JR.&entry.1166974658=ADMINISTRATIVE%20AIDE%20III%20(UTILITY%20WORKER%20II)&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
  "P-215": {
    name: "ROMEO C. VILLAVERT III",
    position: "ADMINISTRATIVE AIDE III (UTILITY WORKER II)",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-215&entry.1045781291=ROMEO&entry.880133861=C.&entry.1414103043=VILLAVERT%20III&entry.1166974658=ADMINISTRATIVE%20AIDE%20III%20(UTILITY%20WORKER%20II)&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
  "C-254": {
    name: "RHANIE O. BEDALLO",
    position: "ADMINISTRATIVE AIDE I (LABORER I)",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-254&entry.1045781291=RHANIE&entry.880133861=O.&entry.1414103043=BEDALLO&entry.1166974658=ADMINISTRATIVE%20AIDE%20I%20(LABORER%20I)&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
  "C-255": {
    name: "FLORANTE M. VILLAFLOR",
    position: "HEAVY EQUIPMENT OPERATOR I",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-255&entry.1045781291=FLORANTE&entry.880133861=M.&entry.1414103043=VILLAFLOR&entry.1166974658=HEAVY%20EQUIPMENT%20OPERATOR%20I&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
  "C-256": {
    name: "MARDY L. UNTALAN",
    position: "ADMINISTRATIVE AIDE IV (HUMAN RESOURCE MANAGEMENT AIDE)",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-256&entry.1045781291=MARDY&entry.880133861=L.&entry.1414103043=UNTALAN&entry.1166974658=ADMINISTRATIVE%20AIDE%20IV%20(HUMAN%20RESOURCE%20MANAGEMENT%20AIDE)&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
  "C-257": {
    name: "DIONESIO A. DELOS SANTOS, JR.",
    position: "ADMINISTRATIVE AIDE I (LABORER I)",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-257&entry.1045781291=DIONESIO&entry.880133861=A.&entry.1414103043=DELOS%20SANTOS,%20JR.&entry.1166974658=ADMINISTRATIVE%20AIDE%20I%20(LABORER%20I)&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
  "C-258": {
    name: "JUNE CARLO N. DEL ROSARIO",
    position: "ADMINISTRATIVE AIDE IV (BUYER I)",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-258&entry.1045781291=JUNE%20CARLO&entry.880133861=N.&entry.1414103043=DEL%20ROSARIO&entry.1166974658=ADMINISTRATIVE%20AIDE%20IV%20(BUYER%20I)&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
  "C-288": {
    name: "GLICERIA H. ANISCO",
    position: "ADMINISTRATIVE ASSISTANT II (HUMAN RESOURCE MANAGEMENT ASSISTANT)",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-288&entry.1045781291=GLICERIA&entry.880133861=H.&entry.1414103043=ANISCO&entry.1166974658=ADMINISTRATIVE%20ASSISTANT%20II%20(HUMAN%20RESOURCE%20MANAGEMENT%20ASSISTANT)&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
};

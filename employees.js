
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
  "C-256": {
    name: "MARDY L. UNTALAN",
    position: "ADMINISTRATIVE AIDE IV (HUMAN RESOURCE MANAGEMENT AIDE)",
    department: "MGSO - Municipal General Services Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-256&entry.1045781291=MARDY&entry.880133861=L.&entry.1414103043=UNTALAN&entry.1166974658=ADMINISTRATIVE%20AIDE%20IV%20(HUMAN%20RESOURCE%20MANAGEMENT%20AIDE)&entry.1320481221=MGSO%20-%20Municipal%20General%20Services%20Office"
  },
};

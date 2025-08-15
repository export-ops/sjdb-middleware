
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
  "C-289": {
    name: "JOANNA G. PANALIGAN",
    position: "PUBLIC SERVICES OFFICER III",
    department: "MO - Mayor's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-289&entry.1045781291=JOANNA&entry.880133861=G.&entry.1414103043=PANALIGAN&entry.1166974658=PUBLIC%20SERVICES%20OFFICER%20III&entry.1320481221=MO%20-%20Mayor's%20Office"
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
  /*Municipal Agriculturist's Office*/
  "P-148": {
    name: "MADELYN A. PAGUNSAN",
    position: "MUNICIPAL GOVERNMENT DEPARTMENT HEAD I (MUNICIPAL AGRICULTURIST)",
    department: "MAO - Municipal Agriculturist's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-148&entry.1045781291=MADELYN&entry.880133861=A.&entry.1414103043=PAGUNSAN&entry.1166974658=MUNICIPAL%20GOVERNMENT%20DEPARTMENT%20HEAD%20I%20(MUNICIPAL%20AGRICULTURIST)&entry.1320481221=MAO%20-%20Municipal%20Agriculturist's%20Office"
  },
  "P-149": {
    name: "LUCIA A. BANTOLO",
    position: "SENIOR AGRICULTURIST",
    department: "MAO - Municipal Agriculturist's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-149&entry.1045781291=LUCIA&entry.880133861=A.&entry.1414103043=BANTOLO&entry.1166974658=SENIOR%20AGRICULTURIST&entry.1320481221=MAO%20-%20Municipal%20Agriculturist's%20Office"
  },
  "P-150": {
    name: "JOHN PHILIP D. VICENTE",
    position: "AGRICULTURAL TECHNOLOGIST",
    department: "MAO - Municipal Agriculturist's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-150&entry.1045781291=JOHN%20PHILIP&entry.880133861=D.&entry.1414103043=VICENTE&entry.1166974658=AGRICULTURAL%20TECHNOLOGIST&entry.1320481221=MAO%20-%20Municipal%20Agriculturist's%20Office"
  },
  "P-151": {
    name: "JOSEPHINE B. DELGADO",
    position: "AGRICULTURAL TECHNOLOGIST",
    department: "MAO - Municipal Agriculturist's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-151&entry.1045781291=JOSEPHINE&entry.880133861=B.&entry.1414103043=DELGADO&entry.1166974658=AGRICULTURAL%20TECHNOLOGIST&entry.1320481221=MAO%20-%20Municipal%20Agriculturist's%20Office"
  },
  "C-265": {
    name: "GEO P. DERAMAS",
    position: "HEAVY EQUIPMENT OPERATOR I",
    department: "MAO - Municipal Agriculturist's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-265&entry.1045781291=GEO&entry.880133861=P.&entry.1414103043=DERAMAS&entry.1166974658=HEAVY%20EQUIPMENT%20OPERATOR%20I&entry.1320481221=MAO%20-%20Municipal%20Agriculturist's%20Office"
  },
  "C-265": {
    name: "REYBENSON A. BASAÑES",
    position: "FARM WORKER",
    department: "MAO - Municipal Agriculturist's Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-266&entry.1045781291=REYBENSON&entry.880133861=A.&entry.1414103043=BASA%C3%91ES&entry.1166974658=FARM%20WORKER&entry.1320481221=MAO%20-%20Municipal%20Agriculturist's%20Office"
  },
  /*Municipal Engineering's Office*/
  "P-152": {
    name: "ENGR. CHARLOTTE O. JUPLO",
    position: "MUNICIPAL GOVERNMENT DEPARTMENT HEAD I (MUNICIPAL ENGINEER)",
    department: "MEO - Municipal Engineering Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-152&entry.1045781291=ENGR.%20CHARLOTTE&entry.880133861=O.&entry.1414103043=JUPLO&entry.1166974658=MUNICIPAL%20GOVERNMENT%20DEPARTMENT%20HEAD%20I%20(MUNICIPAL%20ENGINEER)&entry.1320481221=MEO%20-%20Municipal%20Engineering%20Office"
  },
  "P-153": {
    name: "AR. NHEAL D. LABIAO",
    position: "ARCHITECT I",
    department: "MEO - Municipal Engineering Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-153&entry.1045781291=AR.%20NHEAL&entry.880133861=D.&entry.1414103043=LABIAO&entry.1166974658=ARCHITECT%20I&entry.1320481221=MEO%20-%20Municipal%20Engineering%20Office"
  },
  "P-154": {
    name: "RODOLFO E. JONIECA",
    position: "ADMINISTRATIVE AIDE III (UTILITY WORKER II)",
    department: "MEO - Municipal Engineering Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-154&entry.1045781291=RODOLFO&entry.880133861=E.&entry.1414103043=JONIECA&entry.1166974658=ADMINISTRATIVE%20AIDE%20III%20(UTILITY%20WORKER%20II)&entry.1320481221=MEO%20-%20Municipal%20Engineering%20Office"
  },
  "P-155": {
    name: "ARCHIE A. ARDEÑO",
    position: "ADMINISTRATIVE AIDE IV (DRIVER II)",
    department: "MEO - Municipal Engineering Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-155&entry.1045781291=ARCHIE&entry.880133861=A.&entry.1414103043=ARDE%C3%91O&entry.1166974658=ADMINISTRATIVE%20AIDE%20IV%20(DRIVER%20II)&entry.1320481221=MEO%20-%20Municipal%20Engineering%20Office"
  },
  "P-156": {
    name: "VON CARL LEWY M. ORDANEL",
    position: "ADMINISTRATIVE AIDE VI (CLERK III)",
    department: "MEO - Municipal Engineering Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-156&entry.1045781291=VON%20CARL%20LEWY&entry.880133861=M.&entry.1414103043=ORDANEL&entry.1166974658=ADMINISTRATIVE%20AIDE%20VI%20(CLERK%20III)&entry.1320481221=MEO%20-%20Municipal%20Engineering%20Office"
  },
  "P-157": {
    name: "JOHN PAUL A. LAGUNDAY",
    position: "ADMINISTRATIVE AIDE III (LABORER II)",
    department: "MEO - Municipal Engineering Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-157&entry.1045781291=JOHN%20PAUL&entry.880133861=A.&entry.1414103043=LAGUNDAY&entry.1166974658=ADMINISTRATIVE%20AIDE%20III%20(LABORER%20II)&entry.1320481221=MEO%20-%20Municipal%20Engineering%20Office"
  },
  "P-158": {
    name: "ENGR. RENZ JOSER A. MUSTACHO",
    position: "ENGINEER I",
    department: "MEO - Municipal Engineering Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-158&entry.1045781291=ENGR.%20RENZ%20JOSER&entry.880133861=A.&entry.1414103043=MUSTACHO&entry.1166974658=ENGINEER%20I&entry.1320481221=MEO%20-%20Municipal%20Engineering%20Office"
  },
  "P-159": {
    name: "ENGR. MARY QUEEN D. DE VERA",
    position: "ENGINEER II",
    department: "MEO - Municipal Engineering Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-159&entry.1045781291=ENGR.%20MARY%20QUEEN&entry.880133861=D.&entry.1414103043=DE%20VERA&entry.1166974658=ENGINEER%20II&entry.1320481221=MEO%20-%20Municipal%20Engineering%20Office"
  },
  "P-160": {
    name: "MA. JUNEZEN I. MARZOÑA",
    position: "ADMINISTRATIVE ASSISTANT II",
    department: "MEO - Municipal Engineering Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-160&entry.1045781291=MA.%20JUNEZEN&entry.880133861=I.&entry.1414103043=MARZO%C3%91A&entry.1166974658=ADMINISTRATIVE%20ASSISTANT%20II%20&entry.1320481221=MEO%20-%20Municipal%20Engineering%20Office"
  },
  "P-205": {
    name: "CHARLENE S. NIEVES",
    position: "ENGINEER I",
    department: "MEO - Municipal Engineering Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-205&entry.1045781291=CHARLENE&entry.880133861=S.&entry.1414103043=NIEVES&entry.1166974658=ENGINEER%20I&entry.1320481221=MEO%20-%20Municipal%20Engineering%20Office"
  },
  "P-206": {
    name: "JOVITO M. ISRAEL II",
    position: "ADMINISTRATIVE AIDE IV (DRIVER II)",
    department: "MEO - Municipal Engineering Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-206&entry.1045781291=JOVITO&entry.880133861=M.&entry.1414103043=ISRAEL%20II&entry.1166974658=ADMINISTRATIVE%20AIDE%20IV%20(DRIVER%20II)&entry.1320481221=MEO%20-%20Municipal%20Engineering%20Office"
  },
  "P-207": {
    name: "VINCENT LOUE A. DERAMAS",
    position: "ADMINISTRATIVE AIDE IV (DRIVER II)",
    department: "MEO - Municipal Engineering Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-207&entry.1045781291=VINCENT%20LOUE&entry.880133861=A.&entry.1414103043=DERAMAS&entry.1166974658=ADMINISTRATIVE%20AIDE%20IV%20(DRIVER%20II)&entry.1320481221=MEO%20-%20Municipal%20Engineering%20Office"
  },
  "C-274": {
    name: "SIDNEY M. FABILA",
    position: "ADMINISTRATIVE AIDE IV",
    department: "MEO - Municipal Engineering Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-274&entry.1045781291=SIDNEY&entry.880133861=M.&entry.1414103043=FABILA&entry.1166974658=ADMINISTRATIVE%20AIDE%20IV&entry.1320481221=MEO%20-%20Municipal%20Engineering%20Office"
  },
  "C-275": {
    name: "JOHN ARTHUR L. YOUNG",
    position: "ADMINISTRATIVE ASSISTANT I",
    department: "MEO - Municipal Engineering Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-275&entry.1045781291=JOHN%20ARTHUR&entry.880133861=L.&entry.1414103043=YOUNG&entry.1166974658=ADMINISTRATIVE%20ASSISTANT%20I&entry.1320481221=MEO%20-%20Municipal%20Engineering%20Office"
  },
  "C-276": {
    name: "ENGR. SHAIRA MIKAELA LOUISE C. FLORES",
    position: "ENGINEERING ASSISTANT",
    department: "MEO - Municipal Engineering Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-276&entry.1045781291=ENGR.%20SHAIRA%20MIKAELA%20LOUISE&entry.880133861=C.&entry.1414103043=FLORES&entry.1166974658=ENGINEERING%20ASSISTANT&entry.1320481221=MEO%20-%20Municipal%20Engineering%20Office"
  },
  /*Municipal Economic Enterprise Development Office*/
  "P-171": {
    name: "DARCY V. BUNGAY",
    position: "MUNICIPAL GOVERNMENT DEPARTMENT HEAD I (MUNICIPAL ECONOMIC ENTERPRISE DEVELOPMENT OFFICER)",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-171&entry.1045781291=DARCY&entry.880133861=V.&entry.1414103043=BUNGAY&entry.1166974658=MUNICIPAL%20GOVERNMENT%20DEPARTMENT%20HEAD%20I%20(MUNICIPAL%20ECONOMIC%20ENTERPRISE%20DEVELOPMENT%20OFFICER)&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "P-172": {
    name: "ELSIE E. ELIZALDE",
    position: "MUNICIPAL GOVERNMENT ASSISTANT DEPARTMENT HEAD I (SUPERVISING ADMINISTRATIVE OFFICER)",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-172&entry.1045781291=ELSIE&entry.880133861=E.&entry.1414103043=ELIZALDE&entry.1166974658=MUNICIPAL%20GOVERNMENT%20ASSISTANT%20DEPARTMENT%20HEAD%20I%20(SUPERVISING%20ADMINISTRATIVE%20OFFICER)%20%20%20%20%20%20%20%20%20&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "P-173": {
    name: "RHEA JOY A. SIBUGAN",
    position: "ENGINEER I",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-173&entry.1045781291=RHEA%20JOY&entry.880133861=A.&entry.1414103043=SIBUGAN&entry.1166974658=ENGINEER%20I&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "P-174": {
    name: "JOCELYN D. DOLOR",
    position: "ADMINISTRATIVE AIDE IV (CLERK II)",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-174&entry.1045781291=JOCELYN&entry.880133861=D.&entry.1414103043=DOLOR&entry.1166974658=ADMINISTRATIVE%20AIDE%20IV%20(CLERK%20II)&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "P-175": {
    name: "RONNIE B. ALIAN",
    position: "PROJECT DEVELOPMENT OFFICER I",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-175&entry.1045781291=RONNIE&entry.880133861=B.&entry.1414103043=ALIAN&entry.1166974658=PROJECT%20DEVELOPMENT%20OFFICER%20I&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "P-176": {
    name: "FLORDELIZA S. ORDANEL",
    position: "ADMINISTRATIVE AIDE IV (DRIVER II)",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-176&entry.1045781291=FLORDELIZA&entry.880133861=S.&entry.1414103043=ORDANEL&entry.1166974658=ADMINISTRATIVE%20AIDE%20IV%20(DRIVER%20II)&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "P-177": {
    name: "MARY ROSE ANGELIE N. NARANJO",
    position: "DEVELOPMENT MANAGEMENT OFFICER I",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-177&entry.1045781291=MARY%20ROSE%20ANGELIE&entry.880133861=N.&entry.1414103043=NARANJO&entry.1166974658=DEVELOPMENT%20MANAGEMENT%20OFFICER%20I&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "P-178": {
    name: "MICHAEL D. TONDING",
    position: "ADMINISTRATIVE ASSISTANT III (COMPUTER OPERATOR II)",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-178&entry.1045781291=MICHAEL&entry.880133861=D.&entry.1414103043=TONDING&entry.1166974658=ADMINISTRATIVE%20ASSISTANT%20III%20(COMPUTER%20OPERATOR%20II)&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "P-179": {
    name: "DESIREE CONCEPCION T. CABAÑERO",
    position: "ADMINISTRATIVE AIDE IV (BOOKBINDER II)",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-179&entry.1045781291=DESIREE%20CONCEPCION&entry.880133861=T.&entry.1414103043=CABA%C3%91ERO&entry.1166974658=ADMINISTRATIVE%20AIDE%20IV%20(BOOKBINDER%20II)&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "P-180": {
    name: "REYNALDO M. SAMULDE",
    position: "CONSTRUCTION AND MAINTENANCE GENERAL FOREMAN",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-180&entry.1045781291=REYNALDO&entry.880133861=M.&entry.1414103043=SAMULDE&entry.1166974658=CONSTRUCTION%20AND%20MAINTENANCE%20GENERAL%20FOREMAN&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "P-181": {
    name: "BEN HUR R. MAGTULIS",
    position: "MARKET SUPERVISOR I",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-181&entry.1045781291=BEN%20HUR&entry.880133861=R.&entry.1414103043=MAGTULIS&entry.1166974658=MARKET%20SUPERVISOR%20I&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "P-182": {
    name: "SALVADOR S. VILLAVERT, JR.",
    position: "MARKET SUPERVISOR I",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-182&entry.1045781291=SALVADOR&entry.880133861=S.&entry.1414103043=VILLAVERT%20JR.&entry.1166974658=MARKET%20SUPERVISOR%20I&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "P-183": {
    name: "JOSE NOEL G. CACERES",
    position: "ADMINISTRATIVE AIDE III (UTILITY WORKER II)",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-183&entry.1045781291=JOSE%20NOEL&entry.880133861=G.&entry.1414103043=CACERES&entry.1166974658=ADMINISTRATIVE%20AIDE%20III%20(UTILITY%20WORKER%20II)&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "P-184": {
    name: "FELIXBERTO M. TULONES",
    position: "ADMINISTRATIVE AIDE III (UTILITY WORKER II)",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-184&entry.1045781291=FELIXBERTO&entry.880133861=M.&entry.1414103043=TULONES&entry.1166974658=ADMINISTRATIVE%20AIDE%20III%20(UTILITY%20WORKER%20II)&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "P-185": {
    name: "EVELYN M. SAMULDE",
    position: "ADMINISTRATIVE AIDE III (UTILITY WORKER II)",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-185&entry.1045781291=EVELYN&entry.880133861=M.&entry.1414103043=SAMULDE&entry.1166974658=ADMINISTRATIVE%20AIDE%20III%20(UTILITY%20WORKER%20II)&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "P-186": {
    name: "WENIE L. AQUISA",
    position: "ADMINISTRATIVE AIDE III (UTILITY WORKER II)",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-186&entry.1045781291=WENIE&entry.880133861=L.&entry.1414103043=AQUISA&entry.1166974658=ADMINISTRATIVE%20AIDE%20III%20(UTILITY%20WORKER%20II)&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "P-187": {
    name: "MARK ANTHONY C. DELGADO",
    position: "ADMINISTRATIVE AIDE III (UTILITY WORKER II)",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-187&entry.1045781291=MARK%20ANTHONY&entry.880133861=C.&entry.1414103043=DELGADO&entry.1166974658=ADMINISTRATIVE%20AIDE%20III%20(UTILITY%20WORKER%20II)&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "P-188": {
    name: "LORENCE C. LAGORDO",
    position: "ADMINISTRATIVE AIDE III (UTILITY WORKER II)",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-188&entry.1045781291=LORENCE&entry.880133861=C.&entry.1414103043=LAGORDO&entry.1166974658=ADMINISTRATIVE%20AIDE%20III%20(UTILITY%20WORKER%20II)&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "P-189": {
    name: "OLIVER D. GANO",
    position: "ADMINISTRATIVE AIDE III (UTILITY WORKER II)",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-189&entry.1045781291=OLIVER&entry.880133861=D.&entry.1414103043=GANO&entry.1166974658=ADMINISTRATIVE%20AIDE%20III%20(UTILITY%20WORKER%20II)&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "P-190": {
    name: "GEORGE S. SARAGENA",
    position: "SLAUGHTERHOUSE MASTER I",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-190&entry.1045781291=GEORGE&entry.880133861=S.&entry.1414103043=SARAGENA&entry.1166974658=SLAUGHTERHOUSE%20MASTER%20I&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "P-191": {
    name: "DIVINE HOPE S. BANTOLO",
    position: "MEAT INSPECTOR II",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-191&entry.1045781291=DIVINE%20HOPE&entry.880133861=S.&entry.1414103043=BANTOLO&entry.1166974658=MEAT%20INSPECTOR%20II&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "P-192": {
    name: "EDCEL C. BASAÑES",
    position: "ADMINISTRATIVE AIDE III (LABORER II)",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-192&entry.1045781291=EDCEL&entry.880133861=C.&entry.1414103043=BASA%C3%91ES&entry.1166974658=ADMINISTRATIVE%20AIDE%20III%20(LABORER%20II)&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "P-193": {
    name: "REX BOMIN A. OBERES",
    position: "PARKING AIDE II",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-193&entry.1045781291=REX%20BOMIN&entry.880133861=A.&entry.1414103043=OBERES&entry.1166974658=PARKING%20AIDE%20II&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "P-194": {
    name: "VICENTE C. SALVANI III",
    position: "PARKING AIDE II",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-194&entry.1045781291=VICENTE&entry.880133861=C.&entry.1414103043=SALVANI%20III&entry.1166974658=PARKING%20AIDE%20II&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "P-195": {
    name: "JOHN GLOVILLE D. BUNGABONG",
    position: "PARKING AIDE II",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-195&entry.1045781291=JOHN%20GLOVILLE&entry.880133861=D.&entry.1414103043=BUNGABONG&entry.1166974658=PARKING%20AIDE%20II&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "P-196": {
    name: "CESAR E. GUANZON JR.",
    position: "PARKING AIDE II",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-196&entry.1045781291=CESAR&entry.880133861=E.&entry.1414103043=GUANZON%20JR.&entry.1166974658=PARKING%20AIDE%20II&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "P-197": {
    name: "ALEX S. SEGUISA",
    position: "ADMINISTRATIVE AIDE III (UTILITY WORKER II)",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-197&entry.1045781291=ALEX&entry.880133861=S.&entry.1414103043=SEGUISA&entry.1166974658=ADMINISTRATIVE%20AIDE%20III%20(UTILITY%20WORKER%20II)&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "P-198": {
    name: "RODEL A. JUMAGBAS",
    position: "ADMINISTRATIVE AIDE III (UTILITY WORKER II)",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-198&entry.1045781291=RODEL&entry.880133861=A.&entry.1414103043=JUMAGBAS&entry.1166974658=ADMINISTRATIVE%20AIDE%20III%20(UTILITY%20WORKER%20II)&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "P-199": {
    name: "ROSS FLORANTE V. JUALA",
    position: "MARKET INSPECTOR II",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-199&entry.1045781291=ROSS%20FLORANTE&entry.880133861=V.&entry.1414103043=JUALA&entry.1166974658=MARKET%20INSPECTOR%20II&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "P-201": {
    name: "RICARDO E. FALDAS JR.",
    position: "ADMINISTRATIVE AIDE III (LABORER II)",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-201&entry.1045781291=RICARDO&entry.880133861=E.&entry.1414103043=FALDAS%20JR.&entry.1166974658=ADMINISTRATIVE%20AIDE%20III%20(LABORER%20II)&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "P-209": {
    name: "JOSEPH C. MILLARES",
    position: "ADMINISTRATIVE AIDE VI (UTILITY FOREMAN)",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-209&entry.1045781291=JOSEPH&entry.880133861=C.&entry.1414103043=MILLARES&entry.1166974658=ADMINISTRATIVE%20AIDE%20VI%20(UTILITY%20FOREMAN)&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "P-210": {
    name: "GARRY C. EBRO",
    position: "ADMINISTRATIVE AIDE III (LABORER II)",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-210&entry.1045781291=GARRY&entry.880133861=C.&entry.1414103043=EBRO&entry.1166974658=ADMINISTRATIVE%20AIDE%20III%20(LABORER%20II)&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "P-211": {
    name: "ARMANDO V. ISRAEL",
    position: "ADMINISTRATIVE AIDE IV (DRIVER II)",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-211&entry.1045781291=ARMANDO&entry.880133861=V.&entry.1414103043=ISRAEL&entry.1166974658=ADMINISTRATIVE%20AIDE%20IV%20(DRIVER%20II)&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "P-212": {
    name: "JOVEN R. PETINGLAY",
    position: "WATCHMAN I",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-212&entry.1045781291=JOVEN&entry.880133861=R.&entry.1414103043=PETINGLAY&entry.1166974658=WATCHMAN%20I&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "C-277": {
    name: "ARFE MARIE M. IBALLA",
    position: "ADMINISTRATIVE AIDE IV (CASH CLERK I)",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-277&entry.1045781291=ARFE%20MARIE&entry.880133861=M.&entry.1414103043=IBALLA&entry.1166974658=ADMINISTRATIVE%20AIDE%20IV%20(CASH%20CLERK%20I)&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "C-278": {
    name: "ALMIRA MAE N. CABRERA",
    position: "ADMINISTRATIVE AIDE IV (CASH CLERK I)",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-278&entry.1045781291=ALMIRA%20MAE&entry.880133861=N.&entry.1414103043=CABRERA&entry.1166974658=ADMINISTRATIVE%20AIDE%20IV%20(CASH%20CLERK%20I)&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "C-279": {
    name: "PAUL ANTHONY B. MABUHAY",
    position: "ADMINISTRATIVE AIDE III",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-279&entry.1045781291=PAUL%20ANTHONY&entry.880133861=B.&entry.1414103043=MABUHAY&entry.1166974658=ADMINISTRATIVE%20AIDE%20III&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "C-280": {
    name: "FRANKY R. MOLINA",
    position: "ADMINISTRATIVE AIDE III",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-280&entry.1045781291=FRANKY&entry.880133861=R.&entry.1414103043=MOLINA&entry.1166974658=ADMINISTRATIVE%20AIDE%20III&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "C-281": {
    name: "MARY AN GRACE A. PATIÑO",
    position: "CASH CLERK I",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-281&entry.1045781291=MARY%20AN%20GRACE&entry.880133861=A.&entry.1414103043=PATI%C3%91O&entry.1166974658=CASH%20CLERK%20I&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "C-282": {
    name: "PHILIP DENNIS G. TANGHAL",
    position: "BUILDING HELPER",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-282&entry.1045781291=PHILIP%20DENNIS&entry.880133861=G.&entry.1414103043=TANGHAL&entry.1166974658=BUILDING%20HELPER&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "C-283": {
    name: "REYMEELEN L. SAMULDE",
    position: "ADMINISTRATIVE AIDE IV",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-283&entry.1045781291=REYMEELYN&entry.880133861=L.&entry.1414103043=SAMULDE&entry.1166974658=ADMINISTRATIVE%20AIDE%20IV&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
  },
  "C-284": {
    name: "JULIAN PAOLO D. PACIFICADOR VI",
    position: "MARKET INSPECTOR I",
    department: "MEEDO - Municipal Economic Enterprise Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-284&entry.1045781291=JULIAN%20PAOLO&entry.880133861=D.&entry.1414103043=PACIFICADOR%20VI&entry.1166974658=MARKET%20INSPECTOR%20I&entry.1320481221=MEEDO%20-%20Municipal%20Economic%20Enterprise%20Development%20Office"
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
    name: "VICTORINO M. ALOJIPAN JR.",
    position: "SANGGUNIANG BAYAN MEMBER I (LIGA PRESIDENT)",
    department: "SBO - Sangguniang Bayan Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-011&entry.1045781291=VICTORINO&entry.880133861=M.&entry.1414103043=ALOJIPAN,%20JR.&entry.1166974658=SANGGUNIANG%20BAYAN%20MEMBER%20I%20(LIGA%20PRESIDENT)&entry.1320481221=SBO%20-%20Sangguniang%20Bayan%20Office"
  },
  "P-012": {
    name: "E. JULIUS VINCENT T. SALVANI VI",
    position: "SANGGUNIANG BAYAN MEMBER I (SK FEDERATION PRESIDENT)",
    department: "SBO - Sangguniang Bayan Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-012&entry.1045781291=E.%20JULIUS%20VINCENT&entry.880133861=T.&entry.1414103043=SALVANI%20VI&entry.1166974658=SANGGUNIANG%20BAYAN%20MEMBER%20I%20(SK%20FEDERATION%20PRESIDENT)&entry.1320481221=SBO%20-%20Sangguniang%20Bayan%20Office"
  },
  "P-022": {
    name: "MA. SOLEDAD JANET R. SALAZAR",
    position: "MUNICIPAL GOVERNMENT DEPARTMENT HEAD I (SECRETARY TO THE SANGGUNIAN)",
    department: "SBO - Sangguniang Bayan Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-022&entry.1045781291=MA.%20SOLEDAD%20JANET&entry.880133861=R.&entry.1414103043=SALAZAR&entry.1166974658=MUNICIPAL%20GOVERNMENT%20DEPARTMENT%20HEAD%20I%20(SECRETARY%20TO%20THE%20SANGGUNIAN)&entry.1320481221=SBO%20-%20Sangguniang%20Bayan%20Office"
  },
  "P-023": {
    name: "EMPRESS M. EDROSOLANO",
    position: "LOCAL LEGISLATIVE STAFF ASSISTANT II",
    department: "SBO - Sangguniang Bayan Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-023&entry.1045781291=EMPRESS&entry.880133861=M.&entry.1414103043=EDROSOLANO&entry.1166974658=LOCAL%20LEGISLATIVE%20STAFF%20ASSISTANT%20II&entry.1320481221=SBO%20-%20Sangguniang%20Bayan%20Office"
  },
  "P-024": {
    name: "MICAH JOY P. TUA",
    position: "ADMINISTRATIVE AIDE VI (CLERK III)",
    department: "SBO - Sangguniang Bayan Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-024&entry.1045781291=MICAH%20JOY&entry.880133861=P.&entry.1414103043=TUA&entry.1166974658=ADMINISTRATIVE%20AIDE%20VI%20(CLERK%20III)&entry.1320481221=SBO%20-%20Sangguniang%20Bayan%20Office"
  },
  "P-025": {
    name: "ALBIN BOY B. ZAMORA",
    position: "ADMINISTRATIVE AIDE IV (DRIVER II)",
    department: "SBO - Sangguniang Bayan Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-025&entry.1045781291=ALBIN%20BOY&entry.880133861=B.&entry.1414103043=ZAMORA&entry.1166974658=ADMINISTRATIVE%20AIDE%20IV%20(DRIVER%20II)&entry.1320481221=SBO%20-%20Sangguniang%20Bayan%20Office"
  },
  "C-253": {
    name: "EMILENE A. DAYRIT",
    position: "LOCAL LEGISLATIVE STAFF I",
    department: "SBO - Sangguniang Bayan Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-253&entry.1045781291=EMILENE&entry.880133861=A.&entry.1414103043=DAYRIT&entry.1166974658=LOCAL%20LEGISLATIVE%20STAFF%20I&entry.1320481221=SBO%20-%20Sangguniang%20Bayan%20Office"
  },
  /*Municipal Health Office*/
  "P-096": {
    name: "DR. MELBA M. BILLONES",
    position: "MUNICIPAL GOVERNMENT DEPARTMENT HEAD I (MUNICIPAL HEALTH OFFICER)",
    department: "MHO - Municipal Health Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-096&entry.1045781291=DR.%20MELBA&entry.880133861=M.&entry.1414103043=BILLONES&entry.1166974658=MUNICIPAL%20GOVERNMENT%20DEPARTMENT%20HEAD%20I%20(MUNICIPAL%20HEALTH%20OFFICER)&entry.1320481221=MHO%20-%20Municipal%20Health%20Office"
  },
  "P-097": {
    name: "HUBERT SPENCER FRANCIS S. ANG",
    position: "MEDICAL TECHNOLOGIST I",
    department: "MHO - Municipal Health Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-097&entry.1045781291=HUBERT%20SPENCER%20FRANCIS&entry.880133861=S.&entry.1414103043=ANG&entry.1166974658=MEDICAL%20TECHNOLOGIST%20I&entry.1320481221=MHO%20-%20Municipal%20Health%20Office"
  },
  "P-098": {
    name: "MA. KATRINA N. UNTARAN-NIQUIA",
    position: "NURSE I",
    department: "MHO - Municipal Health Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-098&entry.1045781291=MA.%20KATRINA&entry.880133861=N.&entry.1414103043=UNTARAN-NIQUIA&entry.1166974658=NURSE%20I&entry.1320481221=MHO%20-%20Municipal%20Health%20Office"
  },
  "P-099": {
    name: "VIOLETA B. NACIONALES",
    position: "MIDWIFE II",
    department: "MHO - Municipal Health Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-099&entry.1045781291=VIOLETA&entry.880133861=B.&entry.1414103043=NACIONALES&entry.1166974658=MIDWIFE%20II&entry.1320481221=MHO%20-%20Municipal%20Health%20Office"
  },
  "P-100": {
    name: "MARIA EDEN L. ELIZALDE",
    position: "MIDWIFE II",
    department: "MHO - Municipal Health Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-100&entry.1045781291=MARIA%20EDEN&entry.880133861=L.&entry.1414103043=ELIZALDE&entry.1166974658=MIDWIFE%20II&entry.1320481221=MHO%20-%20Municipal%20Health%20Office"
  },
  "P-101": {
    name: "JINGQUE B. CORDERO",
    position: "MIDWIFE II",
    department: "MHO - Municipal Health Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-101&entry.1045781291=JINGQUE&entry.880133861=B.&entry.1414103043=CORDERO&entry.1166974658=MIDWIFE%20II&entry.1320481221=MHO%20-%20Municipal%20Health%20Office"
  },
  "P-102": {
    name: "MA. DOLORES A. ELIZALDE",
    position: "MIDWIFE II",
    department: "MHO - Municipal Health Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-102&entry.1045781291=MA.%20DOLORES&entry.880133861=A.&entry.1414103043=ELIZALDE&entry.1166974658=MIDWIFE%20II&entry.1320481221=MHO%20-%20Municipal%20Health%20Office"
  },
  "P-103": {
    name: "JOSIE S. ALIAN",
    position: "MIDWIFE II",
    department: "MHO - Municipal Health Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-103&entry.1045781291=JOSIE&entry.880133861=S.&entry.1414103043=ALIAN&entry.1166974658=MIDWIFE%20II&entry.1320481221=MHO%20-%20Municipal%20Health%20Office"
  },
  "P-104": {
    name: "LAARNI I. PAJARES",
    position: "MIDWIFE II",
    department: "MHO - Municipal Health Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-104&entry.1045781291=LAARNI&entry.880133861=I.&entry.1414103043=PAJARES&entry.1166974658=MIDWIFE%20II&entry.1320481221=MHO%20-%20Municipal%20Health%20Office"
  },
  "P-105": {
    name: "ZARAH Z. ARDEÑO",
    position: "MIDWIFE III",
    department: "MHO - Municipal Health Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-105&entry.1045781291=ZARAH&entry.880133861=Z.&entry.1414103043=ARDE%C3%91O&entry.1166974658=MIDWIFE%20III&entry.1320481221=MHO%20-%20Municipal%20Health%20Office"
  },
  "P-106": {
    name: "MARJORIE C. SALVADOR",
    position: "MIDWIFE II",
    department: "MHO - Municipal Health Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-106&entry.1045781291=MARJORIE&entry.880133861=C.&entry.1414103043=SALVADOR&entry.1166974658=MIDWIFE%20II&entry.1320481221=MHO%20-%20Municipal%20Health%20Office"
  },
  "P-107": {
    name: "NELRILYN JOY M. CORNEL",
    position: "MIDWIFE II",
    department: "MHO - Municipal Health Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-107&entry.1045781291=NELRILYN%20JOY&entry.880133861=M.&entry.1414103043=CORNEL&entry.1166974658=MIDWIFE%20II&entry.1320481221=MHO%20-%20Municipal%20Health%20Office"
  },
  "P-108": {
    name: "MERRYL JOY M. DELGADO",
    position: "MIDWIFE I",
    department: "MHO - Municipal Health Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-107&entry.1045781291=NELRILYN%20JOY&entry.880133861=M.&entry.1414103043=CORNEL&entry.1166974658=MIDWIFE%20II&entry.1320481221=MHO%20-%20Municipal%20Health%20Office"
  },
  "P-109": {
    name: "JAIME G. MERCADEJAS",
    position: "ADMINISTRATIVE AIDE IV (DRIVER II)",
    department: "MHO - Municipal Health Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-109&entry.1045781291=JAIME&entry.880133861=G.&entry.1414103043=MERCADEJAS&entry.1166974658=ADMINISTRATIVE%20AIDE%20IV%20(DRIVER%20II)&entry.1320481221=MHO%20-%20Municipal%20Health%20Office"
  },
  "P-110": {
    name: "DEBBIE S. ABIERA",
    position: "MIDWIFE I",
    department: "MHO - Municipal Health Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-110&entry.1045781291=DEBBIE&entry.880133861=S.&entry.1414103043=ABIERA&entry.1166974658=MIDWIFE%20I&entry.1320481221=MHO%20-%20Municipal%20Health%20Office"
  },
  "P-111": {
    name: "TEZA B. SORIANO",
    position: "MIDWIFE I",
    department: "MHO - Municipal Health Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-111&entry.1045781291=TEZA&entry.880133861=B.&entry.1414103043=SORIANO&entry.1166974658=MIDWIFE%20I&entry.1320481221=MHO%20-%20Municipal%20Health%20Office"
  },
  "P-112": {
    name: "RIZA R. ENDOSO",
    position: "MIDWIFE I",
    department: "MHO - Municipal Health Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-112&entry.1045781291=RIZA&entry.880133861=R.&entry.1414103043=ENDOSO&entry.1166974658=MIDWIFE%20I&entry.1320481221=MHO%20-%20Municipal%20Health%20Office"
  },
  "P-113": {
    name: "RICHEL M. JOSECO",
    position: "NURSE II",
    department: "MHO - Municipal Health Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-113&entry.1045781291=RICHEL&entry.880133861=M.&entry.1414103043=JOSECO&entry.1166974658=NURSE%20II&entry.1320481221=MHO%20-%20Municipal%20Health%20Office"
  },
  "P-114": {
    name: "OSCAR DELANO R. SALAZAR IV",
    position: "NURSE I",
    department: "MHO - Municipal Health Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-114&entry.1045781291=OSCAR%20DELANO&entry.880133861=R.&entry.1414103043=SALAZAR%20IV&entry.1166974658=NURSE%20I&entry.1320481221=MHO%20-%20Municipal%20Health%20Office"
  },
  "P-115": {
    name: "MA. CORAZON T. LOY",
    position: "ADMINISTRATIVE AIDE IV (CLERK II)",
    department: "MHO - Municipal Health Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-115&entry.1045781291=MA.%20CORAZON&entry.880133861=T.&entry.1414103043=LOY&entry.1166974658=ADMINISTRATIVE%20AIDE%20IV%20(CLERK%20II)&entry.1320481221=MHO%20-%20Municipal%20Health%20Office"
  },
  "P-116": {
    name: "PERPETUA E. PEÑARANDA",
    position: "NURSE I",
    department: "MHO - Municipal Health Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-116&entry.1045781291=PERPETUA&entry.880133861=E.&entry.1414103043=PE%C3%91ARANDA&entry.1166974658=NURSE%20I&entry.1320481221=MHO%20-%20Municipal%20Health%20Office"
  },
  "P-117": {
    name: "LYDELL B. LEDESMA",
    position: "NURSE I",
    department: "MHO - Municipal Health Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-117&entry.1045781291=LYDELL&entry.880133861=B.&entry.1414103043=LEDESMA&entry.1166974658=NURSE%20I&entry.1320481221=MHO%20-%20Municipal%20Health%20Office"
  },
  "P-118": {
    name: "KAREEN A. DELGADO",
    position: "NURSE I",
    department: "MHO - Municipal Health Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-118&entry.1045781291=KAREEN&entry.880133861=A.&entry.1414103043=DELGADO&entry.1166974658=NURSE%20I&entry.1320481221=MHO%20-%20Municipal%20Health%20Office"
  },
  "P-203": {
    name: "ANTHEA KATRINA A. PECHUECO",
    position: "SANITATION INSPECTOR I",
    department: "MHO - Municipal Health Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-203&entry.1045781291=ANTHEA%20KATRINA&entry.880133861=A.&entry.1414103043=PECHUECO&entry.1166974658=SANITATION%20INSPECTOR%20I&entry.1320481221=MHO%20-%20Municipal%20Health%20Office"
  },
  "P-204": {
    name: "DOHERME A. AGUILAR",
    position: "MIDWIFE I",
    department: "MHO - Municipal Health Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-204&entry.1045781291=DOHERME&entry.880133861=A.&entry.1414103043=AGUILAR&entry.1166974658=MIDWIFE%20I&entry.1320481221=MHO%20-%20Municipal%20Health%20Office"
  },
  "C-263": {
    name: "JEMMA M. BACONGALLO",
    position: "SANITARY INSPECTOR",
    department: "MHO - Municipal Health Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-263&entry.1045781291=JEMMA&entry.880133861=M.&entry.1414103043=BACONGALLO&entry.1166974658=SANITARY%20INSPECTOR&entry.1320481221=MHO%20-%20Municipal%20Health%20Office"
  },
  "C-264": {
    name: "MARIA UDINAH S. ECRAELA",
    position: "LABORATORY TECHNICIAN I",
    department: "MHO - Municipal Health Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-264&entry.1045781291=MARIA%20UDINAH&entry.880133861=S.&entry.1414103043=ECRAELA&entry.1166974658=LABORATORY%20TECHNICIAN%20I&entry.1320481221=MHO%20-%20Municipal%20Health%20Office"
  },
  /*Municipal Social Welfare and Development Office*/
  "P-119": {
    name: "MARICAR Q. SENIEL",
    position: "MUNICIPAL GOVERNMENT DEPARTMENT HEAD I (MUNICIPAL SOCIAL WELFARE AND DEVELOPMENT OFFICER)",
    department: "MSWDO - Municipal Social Welfare and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-119&entry.1045781291=MARICAR&entry.880133861=Q.&entry.1414103043=SENIEL&entry.1166974658=MUNICIPAL%20GOVERNMENT%20DEPARTMENT%20HEAD%20I%20(MUNICIPAL%20SOCIAL%20WELFARE%20AND%20DEVELOPMENT%20OFFICER)&entry.1320481221=MSWDO%20-%20Municipal%20Social%20Welfare%20and%20Development%20Office"
  },
  "P-120": {
    name: "CHARLOTTE S. MALAN",
    position: "SOCIAL WELFARE OFFICER I",
    department: "MSWDO - Municipal Social Welfare and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-120&entry.1045781291=CHARLOTTE&entry.880133861=S.&entry.1414103043=MALAN&entry.1166974658=SOCIAL%20WELFARE%20OFFICER%20I&entry.1320481221=MSWDO%20-%20Municipal%20Social%20Welfare%20and%20Development%20Office"
  },
  "P-121": {
    name: "AIKO G. MILLENDEZ",
    position: "SOCIAL WELFARE OFFICER I",
    department: "MSWDO - Municipal Social Welfare and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-121&entry.1045781291=AIKO&entry.880133861=G.&entry.1414103043=MILLENDEZ&entry.1166974658=SOCIAL%20WELFARE%20OFFICER%20I&entry.1320481221=MSWDO%20-%20Municipal%20Social%20Welfare%20and%20Development%20Office"
  },
  "P-122": {
    name: "FRANCO CARLO G. LOTILLA",
    position: "SOCIAL WELFARE ASSISTANT",
    department: "MSWDO - Municipal Social Welfare and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-122&entry.1045781291=FRANCO%20CARLO&entry.880133861=G.&entry.1414103043=LOTILLA&entry.1166974658=SOCIAL%20WELFARE%20ASSISTANT&entry.1320481221=MSWDO%20-%20Municipal%20Social%20Welfare%20and%20Development%20Office"
  },
  "P-123": {
    name: "LAURITA A. MORENO",
    position: "DAY CARE WORKER II",
    department: "MSWDO - Municipal Social Welfare and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-123&entry.1045781291=LAURITA&entry.880133861=A.&entry.1414103043=MORENO&entry.1166974658=DAY%20CARE%20WORKER%20II&entry.1320481221=MSWDO%20-%20Municipal%20Social%20Welfare%20and%20Development%20Office"
  },
  "P-124": {
    name: "EDEN M. TORENTE",
    position: "DAY CARE WORKER I",
    department: "MSWDO - Municipal Social Welfare and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-124&entry.1045781291=EDEN&entry.880133861=M.&entry.1414103043=TORENTE&entry.1166974658=DAY%20CARE%20WORKER%20I&entry.1320481221=MSWDO%20-%20Municipal%20Social%20Welfare%20and%20Development%20Office"
  },
  "P-125": {
    name: "AMYLOU A. CABELLO",
    position: "DAY CARE WORKER I",
    department: "MSWDO - Municipal Social Welfare and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-125&entry.1045781291=AMYLOU&entry.880133861=A.&entry.1414103043=CABELLO&entry.1166974658=DAY%20CARE%20WORKER%20I&entry.1320481221=MSWDO%20-%20Municipal%20Social%20Welfare%20and%20Development%20Office"
  },
  "P-126": {
    name: "JEAN P. HIPONIA",
    position: "DAY CARE WORKER I",
    department: "MSWDO - Municipal Social Welfare and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-126&entry.1045781291=JEAN&entry.880133861=P.&entry.1414103043=HIPONIA&entry.1166974658=DAY%20CARE%20WORKER%20I&entry.1320481221=MSWDO%20-%20Municipal%20Social%20Welfare%20and%20Development%20Office"
  },
  "P-127": {
    name: "REMEDIOS M. MONTEALTO",
    position: "DAY CARE WORKER I",
    department: "MSWDO - Municipal Social Welfare and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-127&entry.1045781291=REMEDIOS&entry.880133861=M.&entry.1414103043=MONTEALTO&entry.1166974658=DAY%20CARE%20WORKER%20I&entry.1320481221=MSWDO%20-%20Municipal%20Social%20Welfare%20and%20Development%20Office"
  },
  "P-128": {
    name: "SHEINA G. DESCALZO",
    position: "DAY CARE WORKER I",
    department: "MSWDO - Municipal Social Welfare and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-128&entry.1045781291=SHEINA&entry.880133861=G.&entry.1414103043=DESCALZO&entry.1166974658=DAY%20CARE%20WORKER%20I&entry.1320481221=MSWDO%20-%20Municipal%20Social%20Welfare%20and%20Development%20Office"
  },
  "P-129": {
    name: "RELYN R. BAILINGO",
    position: "DAY CARE WORKER I",
    department: "MSWDO - Municipal Social Welfare and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-129&entry.1045781291=RELYN&entry.880133861=R.&entry.1414103043=BAILINGO&entry.1166974658=DAY%20CARE%20WORKER%20I&entry.1320481221=MSWDO%20-%20Municipal%20Social%20Welfare%20and%20Development%20Office"
  },
  "P-130": {
    name: "DONNA MAE M. ANTONIO",
    position: "DAY CARE WORKER I",
    department: "MSWDO - Municipal Social Welfare and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-130&entry.1045781291=DONNA%20MAE&entry.880133861=M.&entry.1414103043=ANTONIO&entry.1166974658=DAY%20CARE%20WORKER%20I&entry.1320481221=MSWDO%20-%20Municipal%20Social%20Welfare%20and%20Development%20Office"
  },
  "P-131": {
    name: "BETH M. GERNADE",
    position: "DAY CARE WORKER I",
    department: "MSWDO - Municipal Social Welfare and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-131&entry.1045781291=BETH&entry.880133861=M.&entry.1414103043=GERNADE&entry.1166974658=DAY%20CARE%20WORKER%20I&entry.1320481221=MSWDO%20-%20Municipal%20Social%20Welfare%20and%20Development%20Office"
  },
  "P-132": {
    name: "MADELEINE O. SALVADOR",
    position: "DAY CARE WORKER I",
    department: "MSWDO - Municipal Social Welfare and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-132&entry.1045781291=MADELEINE&entry.880133861=O.&entry.1414103043=SALVADOR&entry.1166974658=DAY%20CARE%20WORKER%20I&entry.1320481221=MSWDO%20-%20Municipal%20Social%20Welfare%20and%20Development%20Office"
  },
  "P-133": {
    name: "TOMAS J. BAHIN III",
    position: "DAY CARE WORKER I",
    department: "MSWDO - Municipal Social Welfare and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-133&entry.1045781291=TOMAS&entry.880133861=J.&entry.1414103043=BAHIN%20III&entry.1166974658=DAY%20CARE%20WORKER%20I&entry.1320481221=MSWDO%20-%20Municipal%20Social%20Welfare%20and%20Development%20Office"
  },
  "P-135": {
    name: "DONICO B. AGUINIDO",
    position: "DAY CARE WORKER I",
    department: "MSWDO - Municipal Social Welfare and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-135&entry.1045781291=DONICO&entry.880133861=B.&entry.1414103043=AGUINIDO&entry.1166974658=DAY%20CARE%20WORKER%20I&entry.1320481221=MSWDO%20-%20Municipal%20Social%20Welfare%20and%20Development%20Office"
  },
  "P-136": {
    name: "OFELIA A. VICENTE",
    position: "DAY CARE WORKER I",
    department: "MSWDO - Municipal Social Welfare and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-136&entry.1045781291=OFELIA&entry.880133861=A.&entry.1414103043=VICENTE&entry.1166974658=DAY%20CARE%20WORKER%20I&entry.1320481221=MSWDO%20-%20Municipal%20Social%20Welfare%20and%20Development%20Office"
  },
  "P-137": {
    name: "CHARLENE B. DOLENDO",
    position: "DAY CARE WORKER I",
    department: "MSWDO - Municipal Social Welfare and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-137&entry.1045781291=CHARLENE%20MAE&entry.880133861=B.&entry.1414103043=DOLENDO&entry.1166974658=DAY%20CARE%20WORKER%20I&entry.1320481221=MSWDO%20-%20Municipal%20Social%20Welfare%20and%20Development%20Office"
  },
  "P-138": {
    name: "LORIE M. JUANITES",
    position: "DAY CARE WORKER I",
    department: "MSWDO - Municipal Social Welfare and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-138&entry.1045781291=LORIE&entry.880133861=M.&entry.1414103043=JUANITES&entry.1166974658=DAY%20CARE%20WORKER%20I&entry.1320481221=MSWDO%20-%20Municipal%20Social%20Welfare%20and%20Development%20Office"
  },
  "P-139": {
    name: "NANCY I. ESCARLAN",
    position: "DAY CARE WORKER I",
    department: "MSWDO - Municipal Social Welfare and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-139&entry.1045781291=NANCY&entry.880133861=I.&entry.1414103043=ESCARLAN&entry.1166974658=DAY%20CARE%20WORKER%20I&entry.1320481221=MSWDO%20-%20Municipal%20Social%20Welfare%20and%20Development%20Office"
  },
  "P-141": {
    name: "LOURDES G. ABIERA",
    position: "DAY CARE WORKER I",
    department: "MSWDO - Municipal Social Welfare and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-141&entry.1045781291=LOURDES&entry.880133861=G.&entry.1414103043=ABIERA&entry.1166974658=DAY%20CARE%20WORKER%20I&entry.1320481221=MSWDO%20-%20Municipal%20Social%20Welfare%20and%20Development%20Office"
  },
  "P-142": {
    name: "ALMA F. BORLAN",
    position: "DAY CARE WORKER I",
    department: "MSWDO - Municipal Social Welfare and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-142&entry.1045781291=ALMA&entry.880133861=F.&entry.1414103043=BORLAN&entry.1166974658=DAY%20CARE%20WORKER%20I&entry.1320481221=MSWDO%20-%20Municipal%20Social%20Welfare%20and%20Development%20Office"
  },
  "P-143": {
    name: "JOEL B. PACHECO",
    position: "DAY CARE WORKER I",
    department: "MSWDO - Municipal Social Welfare and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-143&entry.1045781291=JOEL&entry.880133861=B.&entry.1414103043=PACHECO&entry.1166974658=DAY%20CARE%20WORKER%20I&entry.1320481221=MSWDO%20-%20Municipal%20Social%20Welfare%20and%20Development%20Office"
  },
  "P-144": {
    name: "ELENA M. ARTEZA",
    position: "DAY CARE WORKER I",
    department: "MSWDO - Municipal Social Welfare and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-144&entry.1045781291=ELENA&entry.880133861=M.&entry.1414103043=ARTEZA&entry.1166974658=DAY%20CARE%20WORKER%20I&entry.1320481221=MSWDO%20-%20Municipal%20Social%20Welfare%20and%20Development%20Office"
  },
  "P-145": {
    name: "ALLEN JOY P. ORDANEL",
    position: "DAY CARE WORKER I",
    department: "MSWDO - Municipal Social Welfare and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-145&entry.1045781291=ALLEN%20JOY&entry.880133861=P.&entry.1414103043=ORDANEL&entry.1166974658=DAY%20CARE%20WORKER%20I&entry.1320481221=MSWDO%20-%20Municipal%20Social%20Welfare%20and%20Development%20Office"
  },
  "P-146": {
    name: "WENDA P. MINGOTE",
    position: "DAY CARE WORKER I",
    department: "MSWDO - Municipal Social Welfare and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-146&entry.1045781291=WENDA&entry.880133861=P.&entry.1414103043=MINGOTE&entry.1166974658=DAY%20CARE%20WORKER%20I&entry.1320481221=MSWDO%20-%20Municipal%20Social%20Welfare%20and%20Development%20Office"
  },
  "P-147": {
    name: "AILEN P. ABAJENZA",
    position: "DAY CARE WORKER I",
    department: "MSWDO - Municipal Social Welfare and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-147&entry.1045781291=AILEN&entry.880133861=P.&entry.1414103043=ABAJENZA&entry.1166974658=DAY%20CARE%20WORKER%20I&entry.1320481221=MSWDO%20-%20Municipal%20Social%20Welfare%20and%20Development%20Office"
  },
  "P-216": {
    name: "GERALYN S. HIPONIA",
    position: "DAY CARE WORKER I",
    department: "MSWDO - Municipal Social Welfare and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-216&entry.1045781291=GERALYN&entry.880133861=S.&entry.1414103043=HIPONIA&entry.1166974658=DAY%20CARE%20WORKER%20I&entry.1320481221=MSWDO%20-%20Municipal%20Social%20Welfare%20and%20Development%20Office"
  },
  "P-217": {
    name: "MA. KRISTELLE M. ARTEZA",
    position: "DAY CARE WORKER I",
    department: "MSWDO - Municipal Social Welfare and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-217&entry.1045781291=MA.%20KRISTELLE&entry.880133861=M.&entry.1414103043=ARTEZA&entry.1166974658=DAY%20CARE%20WORKER%20I&entry.1320481221=MSWDO%20-%20Municipal%20Social%20Welfare%20and%20Development%20Office"
  },
  "P-218": {
    name: "LALIE B. DAVO",
    position: "DAY CARE WORKER I",
    department: "MSWDO - Municipal Social Welfare and Development Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-218&entry.1045781291=LALIE&entry.880133861=B.&entry.1414103043=DAVO&entry.1166974658=DAY%20CARE%20WORKER%20I&entry.1320481221=MSWDO%20-%20Municipal%20Social%20Welfare%20and%20Development%20Office"
  },
  /*Municipal Disaster Risk Reduction and Management Office*/
  "P-161": {
    name: "ENGR. ALEX S. CRESPO",
    position: "MUNICIPAL GOVERNMENT DEPARTMENT HEAD I (LOCAL DISASTER RISK REDUCTION AND MANAGEMENT OFFICER)",
    department: "MDRRMO - Municipal Disaster Risk Reduction and Management Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-161&entry.1045781291=ENGR.%20ALEX&entry.880133861=S.&entry.1414103043=CRESPO&entry.1166974658=MUNICIPAL%20GOVERNMENT%20DEPARTMENT%20HEAD%20I%20(LOCAL%20DISASTER%20RISK%20REDUCTION%20AND%20MANAGEMENT%20OFFICER)%20%20%20%20%20%20%20%20%20&entry.1320481221=MDRRMO%20-%20Municipal%20Disaster%20Risk%20Reduction%20and%20Management%20Office"
  },
  "P-162": {
    name: "JOSEPH A. ALACAPA",
    position: "ADMINISTRATIVE AIDE VI (CLERK III)",
    department: "MDRRMO - Municipal Disaster Risk Reduction and Management Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-162&entry.1045781291=JOSEPH&entry.880133861=A.&entry.1414103043=ALACAPA&entry.1166974658=ADMINISTRATIVE%20AIDE%20VI%20(CLERK%20III)&entry.1320481221=MDRRMO%20-%20Municipal%20Disaster%20Risk%20Reduction%20and%20Management%20Office"
  },
  "P-163": {
    name: "MARK ALLEN V. MABUHAY",
    position: "ADMINISTRATIVE AIDE III (DRIVER I)",
    department: "MDRRMO - Municipal Disaster Risk Reduction and Management Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-163&entry.1045781291=MARK%20ALLEN&entry.880133861=V.&entry.1414103043=MABUHAY&entry.1166974658=ADMINISTRATIVE%20AIDE%20III%20(DRIVER%20I)&entry.1320481221=MDRRMO%20-%20Municipal%20Disaster%20Risk%20Reduction%20and%20Management%20Office"
  },
  "P-164": {
    name: "FE CORAZON MALAYA S. TACOGDOY",
    position: "MUNICIPAL GOVERNMENT ASSISTANT DEPARTMENT HEAD I (LOCAL DISASTER RISK REDUCTION AND MANAGEMENT OFFICER IV)",
    department: "MDRRMO - Municipal Disaster Risk Reduction and Management Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-164&entry.1045781291=FE%20CORAZON%20MALAYA&entry.880133861=S.&entry.1414103043=TACOGDOY&entry.1166974658=MUNICIPAL%20GOVERNMENT%20ASSISTANT%20DEPARTMENT%20HEAD%20I%20(LOCAL%20DISASTER%20RISK%20REDUCTION%20AND%20MANAGEMENT%20OFFICER%20IV)%20%20%20%20%20%20%20%20%20&entry.1320481221=MDRRMO%20-%20Municipal%20Disaster%20Risk%20Reduction%20and%20Management%20Office"
  },
  "P-165": {
    name: "MA. CLEOFE A. AMEDO",
    position: "LOCAL DISASTER RISK REDUCTION AND MANAGEMENT OFFICER II",
    department: "MDRRMO - Municipal Disaster Risk Reduction and Management Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-165&entry.1045781291=MA.%20CLEOFE&entry.880133861=A.&entry.1414103043=AMEDO&entry.1166974658=LOCAL%20DISASTER%20RISK%20REDUCTION%20AND%20MANAGEMENT%20OFFICER%20II&entry.1320481221=MDRRMO%20-%20Municipal%20Disaster%20Risk%20Reduction%20and%20Management%20Office"
  },
  "P-166": {
    name: "GODHEL S. BASAÑES",
    position: "LIFEGUARD",
    department: "MDRRMO - Municipal Disaster Risk Reduction and Management Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-166&entry.1045781291=GODHEL&entry.880133861=S.&entry.1414103043=BASA%C3%91ES&entry.1166974658=LIFEGUARD&entry.1320481221=MDRRMO%20-%20Municipal%20Disaster%20Risk%20Reduction%20and%20Management%20Office"
  },
  "P-167": {
    name: "RAMIL A. ONANAD",
    position: "LIFEGUARD",
    department: "MDRRMO - Municipal Disaster Risk Reduction and Management Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-167&entry.1045781291=RAMIL&entry.880133861=A.&entry.1414103043=ONANAD&entry.1166974658=LIFEGUARD&entry.1320481221=MDRRMO%20-%20Municipal%20Disaster%20Risk%20Reduction%20and%20Management%20Office"
  },
  "P-168": {
    name: "DELFIN R. ENCARNACION V",
    position: "NURSE I",
    department: "MDRRMO - Municipal Disaster Risk Reduction and Management Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-168&entry.1045781291=DELFIN&entry.880133861=R.&entry.1414103043=ENCARNACION%20V&entry.1166974658=NURSE%20I&entry.1320481221=MDRRMO%20-%20Municipal%20Disaster%20Risk%20Reduction%20and%20Management%20Office"
  },
  "P-169": {
    name: "ROEL PAOLO P. GABRIEL",
    position: "NURSE I",
    department: "MDRRMO - Municipal Disaster Risk Reduction and Management Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-169&entry.1045781291=ROEL%20PAOLO&entry.880133861=P.&entry.1414103043=GABRIEL&entry.1166974658=NURSE%20I&entry.1320481221=MDRRMO%20-%20Municipal%20Disaster%20Risk%20Reduction%20and%20Management%20Office"
  },
  "P-170": {
    name: "RHEY JOSE G. UMADHAY",
    position: "ADMINISTRATIVE AIDE III (DRIVER I)",
    department: "MDRRMO - Municipal Disaster Risk Reduction and Management Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-170&entry.1045781291=RHEY%20JOSE&entry.880133861=G.&entry.1414103043=UMADHAY&entry.1166974658=ADMINISTRATIVE%20AIDE%20III%20(DRIVER%20I)&entry.1320481221=MDRRMO%20-%20Municipal%20Disaster%20Risk%20Reduction%20and%20Management%20Office"
  },
  "P-208": {
    name: "EDWIN M. GARCIA",
    position: "ADMINISTRATIVE AIDE III (DRIVER I)",
    department: "MDRRMO - Municipal Disaster Risk Reduction and Management Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=P-208&entry.1045781291=EDWIN&entry.880133861=M.&entry.1414103043=GARCIA&entry.1166974658=ADMINISTRATIVE%20AIDE%20III%20(DRIVER%20I)&entry.1320481221=MDRRMO%20-%20Municipal%20Disaster%20Risk%20Reduction%20and%20Management%20Office"
  },
  "C-286": {
    name: "JERNIE VI S. GARCESA",
    position: "ADMINISTRATIVE AIDE IV",
    department: "MDRRMO - Municipal Disaster Risk Reduction and Management Office",
    form_url: "https://docs.google.com/forms/d/e/1FAIpQLSdqu-Ejmtq7GNXTeEAR7WYNJlK80lAtkuSxNTdiPjkdXzSv6g/viewform?usp=pp_url&entry.2005620554=C-286&entry.1045781291=JERNIE%20VI&entry.880133861=S.&entry.1414103043=GARCESA&entry.1166974658=ADMINISTRATIVE%20AIDE%20IV&entry.1320481221=MDRRMO%20-%20Municipal%20Disaster%20Risk%20Reduction%20and%20Management%20Office"
  },
};

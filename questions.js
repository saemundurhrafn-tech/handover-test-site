// KILROY Iceland Sales Manager Handbook — Training Module
// Question bank, organized by chapter. Each question is grounded in the handbook text.
// type: "mc" (multiple choice) or "tf" (true/false)
// For "mc": options array + correct index. For "tf": correct is true/false.

const CHAPTERS = [
  {
    id: 1,
    title: "Start of a New Month",
    blurb: "The fixed monthly rhythm and its non-negotiable deadlines.",
    questions: [
      {
        type: "mc",
        q: "By what date each month must salary input be provided to Íslensk Fjárfesting (ÍF)?",
        options: ["The 1st", "The 15th", "The 20th", "The last working day"],
        correct: 2,
        why: "Salary input to ÍF is due by the 20th of each month. Late input delays salary processing, which ÍF cannot recover without notice."
      },
      {
        type: "mc",
        q: "What does ÍF actually need from the SM each month?",
        options: [
          "A full payroll run for every employee",
          "Only input for anything that deviates from a normal full-salary month",
          "A signed timesheet for each staff member",
          "Nothing — payroll is fully automated"
        ],
        correct: 1,
        why: "ÍF only needs deviation-based input: holiday taken, bonuses, parental leave changes, new hires, departures, pension changes, or any other deviation from the standard run."
      },
      {
        type: "tf",
        q: "The Sales Manager operates the Kjarni payroll system directly.",
        correct: false,
        why: "The system used is Kjarni, but the SM does not operate it directly — ÍF (Sigga Rósa) handles the full payroll cycle."
      },
      {
        type: "mc",
        q: "Where are the two monthly group reporting artefacts found?",
        options: [
          "In Salesforce dashboards",
          "The 'KILROY Management New' channel, 'Monthly Reporting' folder",
          "Emailed directly by Finance in Denmark",
          "The Navigence Marketing-Sales folder"
        ],
        correct: 1,
        why: "Both the 'business performance — scoring' Excel sheet and the accompanying commentary PowerPoint live in the 'KILROY Management New' channel under 'Monthly Reporting'."
      },
      {
        type: "mc",
        q: "How does an invoice get into Rillion for the SM to approve?",
        options: [
          "The SM uploads it directly into Rillion",
          "The supplier loads it into Rillion themselves",
          "The SM forwards it to invoices@kilroy.net and Finance in Denmark loads it",
          "ÍF enters it during the payroll run"
        ],
        correct: 2,
        why: "Suppliers send invoices to the SM/KILROY, the SM forwards them to invoices@kilroy.net, and Finance in Denmark loads them into Rillion for the SM to approve."
      },
      {
        type: "tf",
        q: "KILROY Iceland is VSK-free, so invoices do not need to be checked for VSK treatment.",
        correct: true,
        why: "KILROY Iceland is VSK-free, so VSK reconciliation is not part of the invoice workflow."
      },
      {
        type: "mc",
        q: "When forwarding an invoice already paid by the company card, what should the SM note?",
        options: [
          "'VSK included'",
          "'Already paid by card'",
          "'Do not process'",
          "'Pending approval'"
        ],
        correct: 1,
        why: "For card-paid invoices, note 'already paid by card' when forwarding to invoices@kilroy.net so Finance can match it correctly."
      },
      {
        type: "mc",
        q: "Who maintains the Fríheilsa document (holiday and absence tracking)?",
        options: ["The SM", "The Team Leader (TL)", "Sigga Rósa at ÍF", "Finance in Denmark"],
        correct: 1,
        why: "The TL maintains the Fríheilsa document in Teams. The SM does not update it but glances at it monthly for pattern recognition — a five-minute check, not a deep audit."
      }
    ]
  },
  {
    id: 2,
    title: "HR",
    blurb: "The HR operating model — pay, pensions, leave, recruitment and the CBA.",
    questions: [
      {
        type: "mc",
        q: "What is the employer pension contribution set by the CBA (§9.4.2)?",
        options: ["8%", "10%", "11.5%", "12%"],
        correct: 2,
        why: "The employer lífeyrissjóður contribution is set by the CBA at 11.5% (§9.4.2)."
      },
      {
        type: "mc",
        q: "For séreign (supplementary pension), employees can contribute 2% or 4%. What is KILROY's mótframlag?",
        options: ["1%", "2% in either case", "4% matching", "Nothing — séreign is employee-only"],
        correct: 1,
        why: "Séreign is opt-in; employees elect 2% or 4%, and KILROY contributes a 2% mótframlag in either case (CBA §9.4.4)."
      },
      {
        type: "mc",
        q: "What dates define the orlof (holiday) year?",
        options: [
          "1 January to 31 December",
          "1 May to 30 April",
          "1 June to 31 May",
          "1 April to 31 March"
        ],
        correct: 1,
        why: "The orlof year runs from 1 May to 30 April."
      },
      {
        type: "mc",
        q: "When is the Orlofsuppbót paid each year?",
        options: ["1 May", "1 June", "By 15 December", "1 January"],
        correct: 1,
        why: "Orlofsuppbót is paid 1 June each year; Desemberuppbót is paid by 15 December. Both are fixed CBA amounts and staff do not need to claim them."
      },
      {
        type: "tf",
        q: "Sick leave entitlement is tracked on a calendar-year basis.",
        correct: false,
        why: "Sick leave tracking is on a 12-month rolling window, not a calendar year."
      },
      {
        type: "mc",
        q: "In the first year of employment, what is the paid sick leave entitlement (CBA §8.2)?",
        options: [
          "2 paid sick days per month worked",
          "2 months on a rolling basis",
          "12 days per year",
          "4 months"
        ],
        correct: 0,
        why: "First year: 2 paid sick days per month worked. After 1 year it becomes 2 months on a 12-month rolling basis, rising with tenure."
      },
      {
        type: "mc",
        q: "Who administers Iceland's parental leave (fæðingarorlof)?",
        options: [
          "KILROY's HR team",
          "ÍF / Sigga Rósa",
          "Fæðingarorlofssjóður",
          "The VR union"
        ],
        correct: 2,
        why: "Parental leave is administered by Fæðingarorlofssjóður, not KILROY. The employee applies directly; the SM logs start/end dates with Sigga Rósa so payroll is paused/resumed correctly."
      },
      {
        type: "mc",
        q: "Sick child leave (veikindi barna, CBA §8.5) grants how many days per year?",
        options: ["6 days", "10 days", "12 days", "20 days"],
        correct: 2,
        why: "CBA §8.5 grants 12 days per year for child illness (children under 13, or under 16 if hospitalized at least one day)."
      },
      {
        type: "tf",
        q: "Bonuses are paid monthly.",
        correct: false,
        why: "Bonuses are paid per tertial: January (previous year's T3), May (T1), and September (T2)."
      },
      {
        type: "mc",
        q: "Which tools make up the standard recruitment toolchain?",
        options: [
          "LinkedIn and Workday",
          "Alfreð.is to post and Varbi to receive/host applications",
          "Indeed and Greenhouse",
          "Salesforce and Navigator"
        ],
        correct: 1,
        why: "Alfreð.is posts the advertisement; applicants click through to Varbi (GDPR-compliant) to apply. The SM screens in Varbi and runs the process from there."
      },
      {
        type: "mc",
        q: "Under the CBA notice ladder (§12.1), what is the notice period from month 6 onwards?",
        options: ["1 week", "1 month", "3 months", "6 months"],
        correct: 2,
        why: "Notice is 1 week in the first 3 months, 1 month between months 3 and 6, and 3 months from month 6 onwards. The first 6 months act as a de facto probation period."
      },
      {
        type: "tf",
        q: "KILROY Iceland uses settlement agreements (starfslokasamningar) for departures.",
        correct: false,
        why: "KILROY Iceland does not use settlement agreements. Terminations follow the CBA notice ladder."
      },
      {
        type: "mc",
        q: "Within how many days can an employee request a meeting about the reasons for termination (CBA §12.2.2)?",
        options: ["Two days", "Four days", "One week", "Two weeks"],
        correct: 1,
        why: "CBA §12.2.2 gives an employee the right to a meeting about termination reasons if requested within four days, and to written reasons if requested at that meeting."
      },
      {
        type: "mc",
        q: "What is the term of the current VR–SA kjarasamningur?",
        options: [
          "1 January 2024 to 1 January 2027",
          "1 February 2024 to 1 February 2028",
          "1 May 2024 to 30 April 2028",
          "1 February 2023 to 1 February 2026"
        ],
        correct: 1,
        why: "The current agreement runs from 1 February 2024 to 1 February 2028."
      },
      {
        type: "mc",
        q: "How does the local flex-time / yfirvinna arrangement bank event hours worked outside hours?",
        options: [
          "At 1x (hour for hour)",
          "At 1.5x",
          "At 2x the hours worked",
          "It is paid out as overtime, not banked"
        ],
        correct: 2,
        why: "Yfirvinna worked at events outside hours is banked at 2x (e.g. working 20:00–22:00 banks 4 hours). It's a local KILROY practice, not paid time off or a CBA entitlement."
      },
      {
        type: "tf",
        q: "Work from home is allowed once per week after three months in role, subject to office staffing minimums.",
        correct: true,
        why: "Work from home is permitted once per week after three months in role, subject to office staffing minimums set in the Verklagsreglur."
      },
      {
        type: "mc",
        q: "How is the Nutcracker staff social fund funded each month?",
        options: [
          "Employee 1,000 ISK + KILROY 2,000 ISK per employee",
          "Employee 2,000 ISK + KILROY 1,000 ISK",
          "KILROY pays the full amount",
          "Employee 1,000 ISK only"
        ],
        correct: 0,
        why: "Each employee contributes 1,000 ISK per month and KILROY adds 2,000 ISK per employee per month. Participation is opt-in but most staff join."
      }
    ]
  },
  {
    id: 3,
    title: "Administration",
    blurb: "Premises, insurance, banking, invoices, expenses and statutory reporting.",
    questions: [
      {
        type: "mc",
        q: "Where is KILROY Iceland's office located?",
        options: [
          "Ground floor of Norðurturn",
          "11th floor of Norðurturn",
          "A standalone building owned by KILROY",
          "Shared SAF premises downtown"
        ],
        correct: 1,
        why: "KILROY rents office space on the 11th floor of Norðurturn, shared with other sub-companies under ÍF, who also majority-owns KILROY and acts as landlord."
      },
      {
        type: "mc",
        q: "Which insurer currently holds KILROY Iceland's policies?",
        options: ["VÍS", "Sjóvá", "TM", "Vörður"],
        correct: 2,
        why: "Insurance is held with TM, renewed annually, with the SM leading the renewal conversation."
      },
      {
        type: "mc",
        q: "What is the status of the SM's prókúra (signing authority) at handover?",
        options: [
          "It automatically transfers to the successor",
          "It is always cancelled at handover",
          "It is a deliberate decision to be made with the CBO and Finance, not defaulted by inertia",
          "It is held permanently by ÍF"
        ],
        correct: 2,
        why: "Whether prókúra transfers, remains with another party, or is restructured is a deliberate transition decision with the CBO and Finance — it should not default by inertia."
      },
      {
        type: "tf",
        q: "KILROY Iceland has a bimonthly VSK reporting obligation.",
        correct: false,
        why: "KILROY Iceland is VSK-free; there is no bimonthly VSK reporting obligation, which removes a layer of work the SM might otherwise expect."
      },
      {
        type: "mc",
        q: "Which three recurring statutory/external reporting obligations involve the SM (coordinated with Finance)?",
        options: [
          "VSK returns, payroll tax, and union dues",
          "Ársreikningur, Ferðamálastofa/Ferðatryggingasjóður, and Hagstofan",
          "Skatturinn audits, SAF levies, and TM claims",
          "Navigator reports, EST1, and EST2"
        ],
        correct: 1,
        why: "The three are: Ársreikningur (annual accounts sign-off), Ferðamálastofa annual obligations including Ferðatryggingasjóður, and Hagstofan periodic statistics. Finance leads each."
      },
      {
        type: "tf",
        q: "Mileage is a relevant expense category for KILROY Iceland.",
        correct: false,
        why: "Mileage is not a relevant cost category for KILROY Iceland. Staff submit expenses via the standard expense form."
      }
    ]
  },
  {
    id: 4,
    title: "External Contacts",
    blurb: "SA/SAF, ÍF, authorities, insurance and banking partners.",
    questions: [
      {
        type: "mc",
        q: "What is KILROY Iceland's kennitala, used as the reference for SA legal advice?",
        options: ["4109110350", "4201110350", "5403110350", "4109210360"],
        correct: 0,
        why: "The standing route for SA's free legal advice is sa@sa.is with reference to KILROY Iceland kennitala 4109110350."
      },
      {
        type: "tf",
        q: "SA membership includes free legal advice on employment law and the CBA.",
        correct: true,
        why: "SA membership includes free legal advice on employment law, the CBA, and broader labour matters via sa@sa.is, with typically prompt responses."
      },
      {
        type: "mc",
        q: "Which roles does ÍF play for KILROY Iceland?",
        options: [
          "Only salary administrator",
          "Landlord, majority owner, salary administrator, and legal sounding board",
          "Only landlord and insurer",
          "Auditor and tax filer"
        ],
        correct: 1,
        why: "ÍF is landlord for Norðurturn, majority owner of KILROY, salary administrator (Sigga Rósa), and a legal sounding board (Björn Þór)."
      },
      {
        type: "mc",
        q: "Who is the named key external industry relationship at Icelandair?",
        options: ["Björn Þór", "Sigga Rósa", "Sigga at Icelandair", "Lars Holst"],
        correct: 2,
        why: "Sigga at Icelandair is named as a key external industry relationship, introduced personally during handover."
      },
      {
        type: "mc",
        q: "Which industry body is KILROY Iceland a member of, and what is it part of?",
        options: [
          "VR, part of ASÍ",
          "SAF, part of SA (Samtök atvinnulífsins)",
          "Stjórnvísi, part of SAF",
          "Ferðamálastofa, part of Skatturinn"
        ],
        correct: 1,
        why: "KILROY Iceland is a member of Samtök ferðaþjónustunnar (SAF), which is part of Samtök atvinnulífsins (SA)."
      }
    ]
  },
  {
    id: 5,
    title: "Sales",
    blurb: "Group systems, monthly reporting, the budget cycle and local tracking.",
    questions: [
      {
        type: "mc",
        q: "Which system is the booking system and operational backend?",
        options: ["Navigence", "Navigator", "Sabre", "Miralix"],
        correct: 1,
        why: "Navigator is the booking system and operational backend. Navigence is the Excel-based reporting layer that draws data from Navigator."
      },
      {
        type: "mc",
        q: "Which system is the GDS used for flight ticketing?",
        options: ["Salesforce", "PowerBI", "Sabre", "Navigence"],
        correct: 2,
        why: "Sabre is the GDS for flight ticketing."
      },
      {
        type: "mc",
        q: "In the PowerBI P&L view, after which date of the month are figures available?",
        options: ["The 1st", "The 10th", "The 16th", "The 20th"],
        correct: 2,
        why: "PowerBI P&L figures (compared against EST1, EST2, Budget or Last Year) are available after the 16th of each month."
      },
      {
        type: "mc",
        q: "When is EST1 (the first estimate) prepared?",
        options: ["January", "April", "August", "October"],
        correct: 1,
        why: "EST1 is prepared in April; EST2 in August. The annual budget itself is prepared in autumn for the following year."
      },
      {
        type: "mc",
        q: "What closes the loop after the SM completes the FTE sheet in the budget cycle?",
        options: [
          "A board vote",
          "A Cap Cost meeting with Finance covering all costs and resulting EBITDA",
          "Sign-off by ÍF",
          "Submission to Hagstofan"
        ],
        correct: 1,
        why: "After the FTE sheet, a Cap Cost meeting with Finance closes the loop, covering all costs and resulting EBITDA."
      },
      {
        type: "tf",
        q: "Because staff have continuous visibility into their numbers via the local sales sheet, there is no separate bonus communication email at payout.",
        correct: true,
        why: "The internal sales sheet gives staff continuous visibility into their own performance, which is why the SM does not send separate bonus communication emails."
      },
      {
        type: "tf",
        q: "The SM must administer the group commercial systems (Navigator, Salesforce, PowerBI) themselves.",
        correct: false,
        why: "All group systems are operated by group with local users — the SM does not administer them, only uses them."
      }
    ]
  },
  {
    id: 6,
    title: "Meetings",
    blurb: "Meeting structure and the critical SM–Marketing Manager partnership.",
    questions: [
      {
        type: "tf",
        q: "There is a prescribed, mandatory meeting cadence the successor must follow.",
        correct: false,
        why: "There is no prescribed cadence — the successor is free to design their own structure. The handbook offers only a reasonable starting point."
      },
      {
        type: "mc",
        q: "Who does the local Marketing Manager report into?",
        options: [
          "The Sales Manager",
          "The Head of Marketing at group level",
          "The CBO",
          "The Team Leader"
        ],
        correct: 1,
        why: "The Marketing Manager reports into the Head of Marketing at group level, not into the SM. The relationship is a partnership between two local leads, not a reporting line."
      },
      {
        type: "mc",
        q: "How is the SM–Marketing Manager relationship best characterised?",
        options: [
          "A standard manager–direct report relationship",
          "A partnership the SM must initiate and protect, reviewing sales and marketing results together",
          "A purely social relationship with no commercial overlap",
          "An escalation-only relationship handled by the CBO"
        ],
        correct: 1,
        why: "Regular alignment is the SM's responsibility to initiate and protect; sales and marketing results are reviewed together, with disagreements worked out locally before escalating."
      },
      {
        type: "tf",
        q: "If the SM–Marketing Manager relationship strains, consequences show up in commercial results within a tertial.",
        correct: true,
        why: "The handbook states: if this relationship works, most things work; if it strains, the consequences show up in commercial results within a tertial."
      }
    ]
  },
  {
    id: 7,
    title: "End of the Year",
    blurb: "The year-end checklist — HR, finance, reporting and local events.",
    questions: [
      {
        type: "mc",
        q: "Why do holiday-related year-end tasks happen in December–January rather than before 31 December?",
        options: [
          "Because of the Christmas event timing",
          "Because the orlof year runs to 30 April, so tasks sit ahead of the 1 May reset",
          "Because ÍF closes in December",
          "Because the CBA requires it"
        ],
        correct: 1,
        why: "Iceland's orlof year runs 1 May to 30 April, so holiday-related year-end tasks happen in December–January ahead of the 1 May reset, not before 31 December."
      },
      {
        type: "mc",
        q: "When does the annual budget cycle for the following year begin?",
        options: ["August", "October", "December", "January"],
        correct: 1,
        why: "The annual budget cycle for the next year starts in October, communicated by Finance; the SM completes the FTE sheet and works through Cap Cost discussions."
      },
      {
        type: "tf",
        q: "There is a fixed annual salary review cycle that the SM must run for all staff.",
        correct: false,
        why: "Salary discussions are typically employee-initiated and can happen at any point; there is no fixed annual cycle, though the October budget process is a natural moment to consider increases."
      },
      {
        type: "mc",
        q: "Who leads the annual TM insurance renewal?",
        options: ["Finance", "ÍF", "The SM", "The CBO"],
        correct: 2,
        why: "The annual insurance renewal with TM is SM-led (in coordination with Finance and TM), reviewing headcount, coverage and scope changes."
      }
    ]
  },
  {
    id: 8,
    title: "Open Projects & Handover Items",
    blurb: "In-flight items, introductions, walkthroughs and transition decisions.",
    questions: [
      {
        type: "mc",
        q: "What is unresolved about the rent terms with ÍF?",
        options: [
          "The office location",
          "The lease requires finalization; VAT treatment sits outside contract scope and payment status needs reconciling",
          "The rent has not been paid for years",
          "ÍF wants to terminate the lease"
        ],
        correct: 1,
        why: "The lease arrangement requires finalization: VAT treatment currently sits outside the contract scope, and rent payment status needs to be reconciled."
      },
      {
        type: "mc",
        q: "The Groups bonus structure revision aims to adapt which principle into a Groups model?",
        options: [
          "The CBA bonus formula",
          "The Individual department's accounting principle",
          "The group EBITDA target",
          "The Navigence reporting structure"
        ],
        correct: 1,
        why: "It is an ongoing project to adapt the Individual department's accounting principle into a Groups bonus model, ideally completed in the successor's first tertial."
      },
      {
        type: "mc",
        q: "Which two items are flagged as explicit transition DECISIONS rather than defaults?",
        options: [
          "Insurance renewal and budget timing",
          "Prókúra (signing authority) and team structure",
          "Rent terms and Groups bonus",
          "Salesforce access and PowerBI filters"
        ],
        correct: 1,
        why: "Two items deserve explicit decisions: prókúra (whether it transfers/restructures, agreed with CBO and Finance) and team structure (the fluid 5+5 with TL layer, worth a deliberate review in the first 60–90 days)."
      },
      {
        type: "tf",
        q: "Logins such as Alfreð.is, Netgíró and Pei are handed over directly during transition rather than documented in writing.",
        correct: true,
        why: "Credentials for Alfreð.is, Netgíró, Pei and any others surfaced during walkthroughs are handed over directly during transition, not written down."
      }
    ]
  },
  {
    id: 9,
    title: "Recurring Obligations Calendar",
    blurb: "Every recurring deadline, organized by cadence.",
    questions: [
      {
        type: "mc",
        q: "On 24 December (Aðfangadagur) and 31 December (Gamlársdagur), when does dagvinna end?",
        options: ["10:00", "12:00", "14:00", "It is a full day off"],
        correct: 1,
        why: "On both Aðfangadagur (24 Dec) and Gamlársdagur (31 Dec), dagvinna ends at 12:00."
      },
      {
        type: "mc",
        q: "In which month does the launa- og forsendunefnd assess kauptaxtaauki and framleiðniauki triggers?",
        options: ["January", "March", "September", "October"],
        correct: 1,
        why: "In March, the launa- og forsendunefnd assesses kauptaxtaauki and framleiðniauki triggers — a potential mid-year wage adjustment if CBA conditions are met."
      },
      {
        type: "mc",
        q: "Which bonus payout falls in May?",
        options: [
          "T3 (previous year, Sept–Dec)",
          "T1 (Jan–Apr)",
          "T2 (May–Aug)",
          "There is no May payout"
        ],
        correct: 1,
        why: "May is the T1 payout (Jan–Apr). January pays T3 (previous year Sept–Dec); September pays T2 (May–Aug)."
      },
      {
        type: "mc",
        q: "Which events are triggered by occurrence rather than the calendar?",
        options: [
          "Bonus payouts and budget cycles",
          "New hire, departure, parental leave, extended sick leave, termination, and CBA renewal",
          "Orlofsuppbót and Desemberuppbót",
          "EST1 and EST2 preparation"
        ],
        correct: 1,
        why: "Event-triggered items include new hire, departure, parental leave, extended sick leave, termination, and CBA renewal (current agreement runs to 1 February 2028)."
      },
      {
        type: "tf",
        q: "The SAF Aðalfundur and SA Aðalfundur are mandatory for the SM to attend.",
        correct: false,
        why: "Both are optional but recommended. SAF Aðalfundur is in March, SA Aðalfundur in April — useful for network-building, especially in a first year."
      }
    ]
  },
  {
    id: 10,
    title: "Verklagsreglur (Appendix B)",
    blurb: "The local rules: lýðheilsutímar, frídagar, heimavinna, yfirvinna and flex.",
    questions: [
      {
        type: "mc",
        q: "How many lýðheilsutímar are available per week?",
        options: [
          "1 × 1-hour slot",
          "2 × 1-hour slots per week",
          "3 × 1-hour slots",
          "Unlimited, subject to booking"
        ],
        correct: 1,
        why: "Lýðheilsutímar are 2 × 1-hour slots per week, bookable via the dedicated 'Lýðheilsa og heimavinna' Teams channel and always subordinate to operational needs."
      },
      {
        type: "mc",
        q: "How must holidays (frídagar) be booked?",
        options: [
          "By email to the TL",
          "On Messenger",
          "By sending a meeting invite to repe@kilroy.is, marked 'Shown as free' and 'all day'",
          "Verbally to the SM"
        ],
        correct: 2,
        why: "Frí is booked by sending a meeting invite to repe@kilroy.is, choosing 'Shown as free' (not the default busy) and 'all day' for the correct dates. It cannot be requested by email or Messenger."
      },
      {
        type: "tf",
        q: "A lýðheilsutími can be booked on Messenger or outside working hours.",
        correct: false,
        why: "Lýðheilsutímar can only be booked via the dedicated Teams channel, no later than the day before, during working hours — never on Messenger or outside hours."
      },
      {
        type: "mc",
        q: "When can a staff member work from home?",
        options: [
          "From day one, any day",
          "Once per week after at least 3 months in role, if office staffing minimums are met",
          "Twice per week after 6 months",
          "Only with written CBO approval"
        ],
        correct: 1,
        why: "Heimavinna is permitted once per week after at least 3 months in role, and not if fewer than 2 are in IND and 1 in GRP at the office. It always yields to the best work arrangement."
      },
      {
        type: "tf",
        q: "Flex hours may be accumulated into whole and half days off.",
        correct: false,
        why: "It is not permitted to accumulate flex hours into whole and half days off. Flex should be used as soon as possible, with notice given on the Teams channel."
      },
      {
        type: "mc",
        q: "How are yfirvinna hours from events outside working time banked?",
        options: [
          "1x the hours worked",
          "1.5x the hours worked",
          "2x the hours worked",
          "They are paid out, not banked"
        ],
        correct: 2,
        why: "Yfirvinna hours accumulate at 2x the time worked — e.g. working 20:00–22:00 (2 hours) banks 4 hours."
      }
    ]
  }
];

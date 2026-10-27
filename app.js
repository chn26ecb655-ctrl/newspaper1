/* ================================================================
   THE CAMPUS CHRONICLE — app.js
   Interactive functionality — Frontend Demo Mode
   ================================================================ */

'use strict';

/* ================================================================
   DATA: ARTICLES
   ================================================================ */
const ARTICLES = [
  {
    id: 1,
    title: "TechFest 2026: Crestwood's Biggest Innovation Carnival Returns With AI, Robotics & More",
    summary: "Over 2,000 students from 40 universities converge on Crestwood's Innovation Hub as the annual technology festival kicks off with record-breaking participation. This year's theme, "Building Tomorrow," features 150+ project stalls, live hackathons, and keynote talks from industry legends.",
    content: `<p>Crestwood University's Innovation Hub buzzed with electricity this week as TechFest 2026 officially opened its doors to a record crowd of over 2,000 student innovators, researchers, and industry professionals from across 40 universities nationwide.</p>
<h4>A Festival Like No Other</h4>
<p>The four-day extravaganza, themed "Building Tomorrow," features more than 150 project stalls showcasing cutting-edge work in artificial intelligence, robotics, green energy, biotechnology, and quantum computing. The Main Pavilion alone boasts 60 interactive AI demonstrations, including an impressive autonomous vehicle prototype built entirely by Crestwood's own Mechanical Engineering department.</p>
<p>"This is the most ambitious TechFest we've ever organised," said Dr. Riya Patel, Director of the Innovation Hub. "The standard of student projects this year is genuinely world-class. We have teams solving real problems in healthcare, climate, and education using technologies that didn't even exist five years ago."</p>
<h4>Keynote Highlights</h4>
<p>Day one's opening keynote was delivered by renowned computer scientist Dr. Samuel Green, who called on student innovators to "solve problems that matter" and not merely chase trends. His address, titled "From Campus to Change," drew a standing ovation from the packed auditorium.</p>
<p>Later in the afternoon, startup founder Meera Nair demonstrated her company's AI-powered diagnostic tool, developed directly from her final-year project at Crestwood three years ago. "This room," she told the audience, "is where it all started for me. These walls hold the future."</p>
<h4>Hackathon Results & Winners</h4>
<p>The 24-hour Hackathon, which saw 300 coders tackle the challenge of "Accessible Technology for All," concluded with Team Nexus from Crestwood's CS department claiming first prize for their real-time sign-language translation app. Second place went to a cross-university team from Delhi and Bangalore whose rural telemedicine platform impressed judges with its offline-first architecture.</p>
<p>TechFest 2026 runs through November 2nd. Students can register for remaining workshops at the Innovation Hub front desk or via the campus app.</p>`,
    image: "img_techfest.png",
    category: "technology",
    author: "Priya Sharma",
    authorImg: "https://i.pravatar.cc/32?img=12",
    date: "Oct 27, 2026",
    dateISO: "2026-10-27",
    readTime: "6 min read",
    views: 8420,
    trending: true,
    mostRead: true,
    featured: true
  },
  {
    id: 2,
    title: "Eagles Soar to Historic Third Straight Championship Victory",
    summary: "The Crestwood Eagles football team clinched an unprecedented third consecutive Inter-University Championship title, defeating rivals St. Xavier's Lions 28-14 in a stunning final at Crestwood Stadium before a capacity crowd of 18,000.",
    content: `<p>In what is already being called the defining moment of Crestwood University's sporting history, the Eagles football team lifted the Inter-University Championship trophy for an unprecedented third year running, defeating St. Xavier's Lions 28-14 in a pulsating final played before an 18,000-strong crowd on Saturday evening.</p>
<h4>A Game for the Ages</h4>
<p>The Eagles dominated from the opening whistle, with star quarterback Jordan Hayes throwing two touchdown passes in the first half to build an insurmountable 21-0 lead. The Lions fought back admirably after the break, closing to 21-14, but a stunning 65-yard run from wide receiver Darius Cole in the final quarter sealed the victory and sent the stadium into delirium.</p>
<p>"I've never experienced anything like this," said Hayes, who was named the game's Most Valuable Player. "Three years, three titles. This team is a family. Every single player, every coach, every member of staff — this belongs to all of you."</p>
<h4>Coach Reflects on a Dynasty</h4>
<p>Head coach Sandra Kim, who has led the Eagles to all three titles, was visibly emotional during the post-match press conference. "When I took this job three years ago, I said we'd build something special. These kids have worked harder than I've ever seen anyone work. Today's result is a testament to that dedication."</p>
<p>The victory means the Eagles retain the coveted Stanley Cup of College Football and earn automatic qualification for next year's National Invitational Championship. The trophy, engraved with the names of all three winning squads, will be permanently displayed in the Student Sports Centre.</p>
<h4>Campus Celebrations</h4>
<p>Campus erupted in celebration following the final whistle, with students flooding the main quad in a spontaneous party that lasted well into the night. The Student Union has organised an official victory parade for Monday afternoon, departing from the Sports Centre at 3pm.</p>`,
    image: "img_football.png",
    category: "sports",
    author: "Marcus Thompson",
    authorImg: "https://i.pravatar.cc/32?img=33",
    date: "Oct 26, 2026",
    dateISO: "2026-10-26",
    readTime: "5 min read",
    views: 11250,
    trending: true,
    mostRead: true
  },
  {
    id: 3,
    title: "Meet Aria: The AI Campus Assistant Changing How Students Study",
    summary: "Crestwood University has launched 'Aria,' an AI-powered smart campus assistant designed to help students navigate academic resources, manage schedules, find library materials, and get instant answers to campus-related queries — all in natural language.",
    content: `<p>Crestwood University has officially launched Aria, an AI-powered campus assistant that promises to fundamentally transform how students interact with academic resources, campus services, and daily university life. Developed over two years by a joint team of Computer Science faculty and student researchers, Aria is now available as a mobile app and web platform to all 15,000 enrolled students.</p>
<h4>What Can Aria Do?</h4>
<p>At its core, Aria is a conversational AI trained on Crestwood's entire academic catalogue, library holdings, schedule systems, and campus maps. Students can ask questions in plain English — "Where is the quantum computing textbook?" or "When is my next assignment due?" — and receive accurate, personalised answers in seconds.</p>
<p>But Aria goes far beyond a simple chatbot. It can generate personalised study schedules, summarise lecture notes, suggest relevant research papers from the university's 2-million-book digital library, send assignment reminders, book study rooms, and even provide mental health resources during exam seasons.</p>
<h4>Student Reactions</h4>
<p>"It's like having a study buddy who knows everything about the university," said second-year Computer Science student Rohan Mehta, who participated in the beta trial. "I asked it to help me revise for my algorithms exam and it literally made me a revision plan, pulled relevant chapters, and quizzed me. I went from failing mock tests to getting an A."</p>
<p>Not everyone is entirely comfortable, however. Some students have raised questions about data privacy, given that Aria accesses personal academic records and schedules. "I want to understand exactly what data is stored and for how long," said philosophy student Sarah Okonkwo. "The university owes us transparency."</p>
<h4>University's Response on Privacy</h4>
<p>Chief Information Officer Dr. Asha Nair acknowledged the concerns and confirmed that a full data governance report will be published by end of November. "Aria processes data only within our secure university servers. No data is shared with third parties. Student privacy is non-negotiable," she said.</p>
<p>Aria is currently available for free on iOS and Android, and via aria.crestwood.edu.</p>`,
    image: "img_ai.png",
    category: "technology",
    author: "Neha Kapoor",
    authorImg: "https://i.pravatar.cc/32?img=47",
    date: "Oct 25, 2026",
    dateISO: "2026-10-25",
    readTime: "7 min read",
    views: 9340,
    trending: true,
    mostRead: true
  },
  {
    id: 4,
    title: "Rang Utsav 2026: A Kaleidoscope of Culture Descends on Campus",
    summary: "Crestwood University's beloved annual cultural festival 'Rang Utsav' returns November 15–17, promising three nights of music, dance, art, and cuisine from over 25 cultures. Organisers expect record footfall of 5,000+ as international student groups join for the first time.",
    content: `<p>The most colourful event on Crestwood's social calendar is back. Rang Utsav 2026, the university's annual celebration of cultural diversity, will transform the Main Amphitheatre and surrounding lawns into a vibrant tapestry of music, dance, art, and food from November 15th to 17th.</p>
<h4>Three Days, Infinite Stories</h4>
<p>This year's festival will feature performances from 32 student cultural societies, representing over 25 distinct traditions from South Asia, East Asia, Africa, Latin America, the Middle East, and Europe. For the first time, Rang Utsav will welcome participating groups from three international partner universities — adding a genuinely global dimension to the event.</p>
<p>"We've grown from a small dorm gathering ten years ago into something truly extraordinary," said festival director Priyanka Rao, a final-year student. "This year, I want every person who walks through those gates to discover something about the world they never knew before."</p>
<h4>Headline Acts</h4>
<p>The opening night will feature a classical Indian dance showcase by the Nritya Society, followed by a live fusion set blending jazz, flamenco, and Carnatic music — performed by a 15-piece cross-cultural student ensemble. Day two centres on "Food of the World," a curated street food market showcasing authentic dishes from 18 countries. The closing night gala features a 90-minute cultural variety show and the announcement of the Best Cultural Troupe award.</p>
<h4>Art Installations</h4>
<p>Scattered throughout the campus grounds, 12 interactive art installations created by students from the Fine Arts department will explore themes of identity, belonging, and shared humanity. One particularly anticipated installation, "Roots & Routes," uses 500 hand-drawn portraits of Crestwood students to create a mosaic of the university's cultural makeup.</p>
<p>Rang Utsav is free for all Crestwood students with their ID. General public tickets are ₹150 per day, available at the campus box office or online at campusevents.crestwood.edu.</p>`,
    image: "img_culture.png",
    category: "culture",
    author: "Ananya Iyer",
    authorImg: "https://i.pravatar.cc/32?img=56",
    date: "Oct 24, 2026",
    dateISO: "2026-10-24",
    readTime: "5 min read",
    views: 6780,
    trending: true,
    mostRead: false
  },
  {
    id: 5,
    title: "Crestwood Robotics Team Qualifies for National Finals After Stunning Regional Win",
    summary: "Team CrestBot, comprising six mechanical and computer engineering students, has qualified for the National Robotics Championship in December after finishing first at the Western Regional qualifiers with their autonomous sorting robot, 'Bolt X-1'.",
    content: `<p>Six Crestwood University engineering students have qualified for the National Robotics Championship after a dominant performance at the Western Regional Qualifiers held in San Francisco last weekend. Team CrestBot, led by fourth-year student Arjun Desai, finished top of the 28-team field with their autonomous industrial sorting robot, Bolt X-1.</p>
<h4>What Makes Bolt X-1 Special?</h4>
<p>Bolt X-1 is a compact, fully autonomous robot capable of identifying, sorting, and packaging objects of varying shapes, sizes, and materials at speeds matching professional industrial equipment — all at a fraction of the cost. The robot uses a custom-trained computer vision model combined with a six-axis articulated arm, capable of performing over 200 sort operations per minute with 99.4% accuracy.</p>
<p>"We built Bolt X-1 from scratch in 11 months," said Arjun Desai, the team's project lead. "Every component was designed and fabricated in our university lab. The chassis, the vision system, the control software — everything. It's been an incredibly intense year but we always believed in what we were building."</p>
<h4>A Team Effort</h4>
<p>Team CrestBot is composed of Arjun Desai (Mechanical Eng.), Riya Patel (Computer Science), Suresh Kumar (Electrical Eng.), Lisa Park (Robotics), Daniel Chen (AI & ML), and Fatima Al-Rashid (Industrial Design). Faculty advisor Professor Michael Lawson described the team as "the most dedicated students he has supervised in 20 years."</p>
<h4>National Finals — What's at Stake</h4>
<p>The National Robotics Championship will be held in Chicago on December 12–15. The winning team earns a $50,000 research grant and an invitation to demonstrate their technology at the prestigious International Engineering Expo in Tokyo in March 2027. Crestwood last reached the national finals in 2019, finishing third.</p>
<p>The team has launched a crowdfunding campaign to cover travel and equipment costs for Chicago. Donations can be made at crestwood.edu/support-crestbot.</p>`,
    image: "img_robotics.png",
    category: "technology",
    author: "James O'Brien",
    authorImg: "https://i.pravatar.cc/32?img=15",
    date: "Oct 22, 2026",
    dateISO: "2026-10-22",
    readTime: "6 min read",
    views: 5620,
    trending: false,
    mostRead: true
  },
  {
    id: 6,
    title: "Crestwood Students Clinch Top Honours at National Business Plan Competition",
    summary: "A four-member student team from Crestwood's School of Business won the coveted National Collegiate Business Plan Championship, beating 120 teams from across the country with their sustainable fintech startup concept, 'GreenLedger.'",
    content: `<p>A quartet of Crestwood University business students has brought national glory to the campus by winning the prestigious National Collegiate Business Plan Championship, held this month in New York City. The team, competing under the banner "GreenLedger," beat 120 rival teams from universities across the country to claim first place and a $25,000 seed prize.</p>
<h4>The GreenLedger Idea</h4>
<p>GreenLedger is a fintech application that gamifies sustainable consumer behaviour. Users link their bank accounts and receive real-time "carbon scores" based on their spending patterns. Sustainable purchases earn Green Points redeemable for discounts at eco-friendly businesses, public transport credits, and donations to verified climate charities.</p>
<p>"We started this as a class project in our entrepreneurship module," said team leader Sofia Reyes, a final-year Finance and Data Science student. "Our professor pushed us to enter the national competition and we thought, why not? None of us imagined we'd actually win."</p>
<h4>Judges' Praise</h4>
<p>Competition judges — a panel of venture capitalists and serial entrepreneurs — praised GreenLedger for its combination of behavioural economics, technical depth, and genuine scalability. "This is not a student project — this is a fundable company," said judge and Silicon Valley investor Thomas Grant. "I was impressed by their market research, their prototype, and most importantly, their passion."</p>
<h4>What's Next?</h4>
<p>The team has received informal interest from two venture capital firms and plans to formally incorporate GreenLedger as a company by January 2027. They will continue their studies alongside the startup, supported by Crestwood's Entrepreneurship Incubator, which has offered them free office space and mentorship for the next year.</p>
<p>Crestwood's Vice Chancellor Prof. David Hall said he was "enormously proud" of the achievement. "This is exactly the kind of enterprising spirit we aim to foster. Well done to Sofia, Rahul, Aiko, and Michael."</p>`,
    image: "img_competition.png",
    category: "campus-news",
    author: "Sofia Reyes",
    authorImg: "https://i.pravatar.cc/32?img=28",
    date: "Oct 20, 2026",
    dateISO: "2026-10-20",
    readTime: "5 min read",
    views: 7890,
    trending: true,
    mostRead: true
  },
  {
    id: 7,
    title: "Dean Announces Free Mental Health Initiative for All Students This Semester",
    summary: "Dean of Students Dr. Rachel Moore has announced a sweeping new mental health programme, offering free counselling sessions, peer support groups, and 24/7 crisis helpline access to all enrolled students — following a student welfare survey that highlighted growing anxiety on campus.",
    content: `<p>In a major policy announcement that has been welcomed by the student community, Dean of Students Dr. Rachel Moore unveiled a comprehensive mental health support initiative this week that will provide free access to professional counselling, peer-led support, and crisis intervention services for all of Crestwood's 15,000 students.</p>
<h4>What the Initiative Covers</h4>
<p>The Crestwood Wellbeing Programme — funded by a $2 million allocation from the university's student welfare budget — includes unlimited free sessions with qualified clinical psychologists and counsellors, eight weekly peer support group meetups, a 24/7 mental health crisis helpline (staffed by trained professionals), mindfulness and stress management workshops, and a new mental health companion app developed in partnership with the Computer Science department.</p>
<h4>Why Now?</h4>
<p>The initiative follows a university-wide student welfare survey conducted in August, which revealed that 67% of students reported experiencing significant anxiety during the academic year, while 41% said they had struggled with depression at some point during their studies. Only 23% of those who needed help had sought formal support.</p>
<p>"These numbers are deeply concerning and demand an urgent, meaningful response," said Dr. Moore. "No student should suffer in silence. This programme removes every barrier — cost, stigma, availability — that might stop someone from getting the help they need."</p>
<h4>Student Response</h4>
<p>The announcement has been broadly welcomed by the Student Union. "This is something we've been asking for for years," said Student Union President Tariq Hassan. "The university has listened and responded in a way that genuinely makes a difference. We're grateful."</p>
<p>The programme launches November 1st. Students can register via the Wellbeing Portal at wellbeing.crestwood.edu or walk into the Student Support Centre in Block C.</p>`,
    image: "img_competition.png",
    category: "campus-news",
    author: "James O'Brien",
    authorImg: "https://i.pravatar.cc/32?img=15",
    date: "Oct 18, 2026",
    dateISO: "2026-10-18",
    readTime: "5 min read",
    views: 6120,
    trending: false,
    mostRead: false
  },
  {
    id: 8,
    title: "Dorm Room Chef: How One Student's Cooking Channel Hit 500K Subscribers",
    summary: "Second-year hospitality student Maya Chen never expected her lockdown cooking videos to go viral. Today, 'Dorm Room Chef' has 500,000 YouTube subscribers, a book deal, and a sponsored product line — all while Maya maintains a 3.9 GPA.",
    content: `<p>Maya Chen, a second-year student in Crestwood's School of Hospitality Management, is living proof that creativity knows no bounds — even a 120-square-foot dorm room. Her YouTube channel, "Dorm Room Chef," crossed the 500,000 subscriber milestone last week, earning her a coveted Silver Play Button and a growing list of brand partnerships.</p>
<h4>How It Started</h4>
<p>Maya launched the channel during her first semester after a particularly bad experience with the university canteen's vegetarian options. "I grew up cooking with my family in Chengdu. The food here was... not inspiring," she laughs. "So I started cooking in my room with a single induction hob and posting it online, mostly to make my parents laugh."</p>
<p>Her first viral video — a 4-minute guide to making authentic mapo tofu with a rice cooker and a microwave — garnered 200,000 views in a week. Within a month, she had 50,000 subscribers. Twelve months later, that number has multiplied tenfold.</p>
<h4>The Secret Sauce</h4>
<p>Maya attributes her success to the genuine constraints she works within. Every recipe is made with a maximum of five ingredients, costing under $10, with only the equipment a typical student would own. "I have rules. No oven, no stand mixer, no expensive gadgets. If you can make it in a dorm, anyone can make it anywhere."</p>
<h4>Beyond YouTube</h4>
<p>Maya has signed a book deal with Penguin Random House for a debut cookbook, "The 5-Ingredient Dorm Cookbook," releasing spring 2027. She also has a line of compact, student-friendly kitchen tools launching on Amazon next month. Despite all this, she insists that her degree comes first. "I'm a student who makes videos, not a YouTuber who happens to be in college," she says firmly.</p>`,
    image: "img_culture.png",
    category: "student-life",
    author: "Ananya Iyer",
    authorImg: "https://i.pravatar.cc/32?img=56",
    date: "Oct 16, 2026",
    dateISO: "2026-10-16",
    readTime: "4 min read",
    views: 9100,
    trending: true,
    mostRead: true
  },
  {
    id: 9,
    title: "Women's Basketball Team Ends Season Undefeated, Eyes National Title",
    summary: "The Crestwood Lady Eagles have completed a flawless 22-0 regular season, setting a new university record, and are seeded first for the upcoming National Women's Collegiate Basketball Tournament. Coach Aisha Williams calls it 'the greatest squad I've ever coached.'",
    content: `<p>History has been made at Crestwood University's sports centre. The Lady Eagles women's basketball team concluded the regular season on Saturday night with a 78-56 victory over Pacific University, securing a perfect 22-0 record — the first undefeated regular season in the programme's 35-year history.</p>
<h4>A Record Season</h4>
<p>The Lady Eagles have been imperious all season, winning by an average margin of 22 points. Their hallmark has been an impenetrable zone defence, allowing a conference-low 47 points per game, combined with dynamic, fast-break offence led by star point guard Zara Williams, who is averaging 24 points and 8 assists per game.</p>
<p>"This team is different," said head coach Aisha Williams (no relation to Zara). "Every single player buys into the system. There's no ego, no selfishness. They play for each other and it shows every single night." The coach, in her seventh year at Crestwood, described this squad as "the greatest I have ever coached, without question."</p>
<h4>Tournament Outlook</h4>
<p>The Lady Eagles enter the National Women's Collegiate Basketball Tournament as the number one seed in the Western Division, earning home-court advantage through the regional rounds. Their first game is scheduled for November 8th at the Crestwood Sports Arena.</p>
<p>Zara Williams, widely tipped for the Collegiate Player of the Year award, said the team's focus is firmly on the national title. "Regular season records are nice. We want the championship. That's all we've talked about since October. Everything until that final buzzer is just a step on the road."</p>
<p>Tickets for home tournament games are available via the Sports Centre box office. Student entry is free with ID.</p>`,
    image: "img_football.png",
    category: "sports",
    author: "Marcus Thompson",
    authorImg: "https://i.pravatar.cc/32?img=33",
    date: "Oct 14, 2026",
    dateISO: "2026-10-14",
    readTime: "5 min read",
    views: 5440,
    trending: false,
    mostRead: false
  },
  {
    id: 10,
    title: "New Student-Run Café 'Grounds Zero' Opens in the Library Building",
    summary: "Operated entirely by a collective of 12 entrepreneurship students, 'Grounds Zero' has opened on the ground floor of Crestwood's main library. The café serves specialty coffee, locally sourced snacks, and donates 10% of profits to the Student Hardship Fund.",
    content: `<p>Coffee lovers on campus have a new favourite spot. Grounds Zero, a student-operated specialty café, opened its doors last Monday on the ground floor of Crestwood's Main Library — and if the queues snaking out the door are anything to go by, it's already a resounding success.</p>
<h4>A Student Dream Come True</h4>
<p>The café is run by a collective of 12 students from the School of Business's Entrepreneurship module, under the guidance of Professor Lisa Torres. It began as a final-year capstone project — design a viable, sustainable small business from scratch — but the quality of the concept convinced the university to turn it into reality.</p>
<p>"We spent a whole semester on market research, financial modelling, supply chain management — the works," said collective co-lead Jae-won Park, a third-year Business Administration student. "When the university offered us the space and a small startup grant, we couldn't believe it. We had to deliver."</p>
<h4>The Menu & Philosophy</h4>
<p>Grounds Zero focuses on quality and conscience. The coffee menu features single-origin beans sourced from three fair-trade roasters, including two run by former Crestwood alumni. Food options are simple but thoughtful — avocado toast, overnight oats, seasonal soup, and a rotating daily special with at least one vegan option always available.</p>
<p>Pricing is deliberately kept student-friendly: a flat white costs $2.50. "We did the numbers. We can sustain the business, pay ourselves a small wage, and still keep prices lower than any café in a three-mile radius," said financial lead Priti Shah.</p>
<h4>Giving Back</h4>
<p>True to their founding values, the collective donates 10% of all weekly profits to the Crestwood Student Hardship Fund. In their first week of operation, this amounted to $340. "That's real money for a student who's struggling," said Park. "It feels good."</p>`,
    image: "img_competition.png",
    category: "student-life",
    author: "Neha Kapoor",
    authorImg: "https://i.pravatar.cc/32?img=47",
    date: "Oct 12, 2026",
    dateISO: "2026-10-12",
    readTime: "4 min read",
    views: 4380,
    trending: false,
    mostRead: false
  },
  {
    id: 11,
    title: "Campus Sustainability Drive: 80% Plastic Elimination Target by Year End",
    summary: "Crestwood's Green Campus Committee has launched an ambitious initiative to eliminate 80% of single-use plastic from all university premises by December 2026, replacing canteen packaging with compostable alternatives and installing 40 new water-refill stations.",
    content: `<p>Crestwood University has set one of the most ambitious sustainability targets of any university on the West Coast, with the Green Campus Committee announcing a drive to eliminate 80% of single-use plastic from all campus premises by the end of December 2026.</p>
<h4>The Plan</h4>
<p>The initiative, backed by a $450,000 university sustainability grant, encompasses several major changes. All campus canteens and cafés will transition to fully compostable packaging by November 1st. Forty new filtered water refill stations will be installed across campus buildings by mid-November. The university shop will no longer stock single-use plastic water bottles. All student events must adhere to a zero-single-use-plastic policy.</p>
<p>The committee estimates these measures will prevent approximately 1.2 million pieces of single-use plastic from entering landfill every year.</p>
<h4>Student Response</h4>
<p>The initiative has been broadly praised. The Environment Society, which has campaigned for stronger sustainability measures for three years, described it as "a genuine breakthrough." Society president Lena Bauer said: "We've been pushing for this since 2023. The university has finally listened and the targets are genuinely transformational."</p>
<p>Not everyone is entirely satisfied. Some students argue the timeline is too long and that the university should ban all single-use plastic immediately. Others have questioned whether the compostable alternatives are genuinely more environmentally friendly when local composting infrastructure is considered.</p>
<h4>Looking Ahead</h4>
<p>The Green Campus Committee has also announced a longer-term target of carbon neutrality for all university operations by 2030, and is exploring installing 2,000 square metres of solar panels on campus rooftops next year.</p>`,
    image: "img_techfest.png",
    category: "campus-news",
    author: "Priya Sharma",
    authorImg: "https://i.pravatar.cc/32?img=12",
    date: "Oct 10, 2026",
    dateISO: "2026-10-10",
    readTime: "4 min read",
    views: 3960,
    trending: false,
    mostRead: false
  },
  {
    id: 12,
    title: "Independent Short Film 'Borderless' by Crestwood Students Wins at Mumbai International Film Festival",
    summary: "A 22-minute short film directed and produced entirely by a team of Film Studies students won the Best Short Film (Student Category) award at the Mumbai International Film Festival, beating entries from over 60 countries.",
    content: `<p>A group of six Crestwood University Film Studies students has won the Best Short Film (Student Category) at the prestigious Mumbai International Film Festival (MIFF), beating out entries from over 60 countries with their 22-minute film, "Borderless."</p>
<h4>About the Film</h4>
<p>"Borderless" tells the story of two elderly women — one from India, one from Pakistan — who meet by chance at a bus stop in London and discover, over the course of a single afternoon, a shared past stretching back to the 1947 Partition of the subcontinent. The film was shot entirely in London during the team's summer exchange programme, with a cast of three professional actors and a crew of six students.</p>
<p>"We had a total budget of $4,000, which we crowdfunded," said director Kavya Reddy. "We shot it in five days across six locations. It was chaotic and exhausting and the best experience of my life. Winning at MIFF feels surreal."</p>
<h4>Jury Citation</h4>
<p>The MIFF jury cited "Borderless" for its "exceptionally mature, restrained, and emotionally authentic storytelling," praising Kavya's direction and the film's cinematography — shot on a handheld camera with natural light — as "reminiscent of the great neo-realist tradition." Lead actress Amira Patel received a special mention for her performance.</p>
<h4>What's Next?</h4>
<p>The film will be submitted to the Cannes Short Film Corner and the Sundance Film Festival this year. The team is also in early conversations with an independent distributor about online release. Kavya and two of her collaborators plan to form a production company upon graduation in June 2027.</p>`,
    image: "img_culture.png",
    category: "culture",
    author: "Ananya Iyer",
    authorImg: "https://i.pravatar.cc/32?img=56",
    date: "Oct 8, 2026",
    dateISO: "2026-10-08",
    readTime: "5 min read",
    views: 4810,
    trending: false,
    mostRead: false
  }
];

const EVENTS = [
  { day: "01", month: "Nov", title: "Wellbeing Programme Launch", location: "Student Support Centre, Block C" },
  { day: "02", month: "Nov", title: "TechFest 2026 — Final Day", location: "Innovation Hub, Main Pavilion" },
  { day: "08", month: "Nov", title: "Women's Basketball — Round 1 (Home)", location: "Crestwood Sports Arena" },
  { day: "12", month: "Nov", title: "Annual Photography Exhibition", location: "Arts Centre Gallery" },
  { day: "15", month: "Nov", title: "Rang Utsav 2026 — Day 1", location: "Main Amphitheatre" },
  { day: "18", month: "Nov", title: "Entrepreneurship Summit", location: "Business School Auditorium" },
  { day: "12", month: "Dec", title: "National Robotics Championship", location: "Chicago (Away)" }
];

/* ================================================================
   UTILITY FUNCTIONS
   ================================================================ */
function getCategoryLabel(cat) {
  const map = { 'campus-news': 'Campus News', technology: 'Technology', sports: 'Sports', culture: 'Culture', 'student-life': 'Student Life' };
  return map[cat] || cat;
}
function getCategoryClass(cat) {
  return `category-${cat}`;
}
function getCategoryDesc(cat) {
  const map = {
    'campus-news': 'The latest news, announcements, and stories from Crestwood University campus.',
    technology: 'Tech innovations, digital trends, and student projects shaping tomorrow.',
    sports: 'Match reports, athlete profiles, and sports news from Crestwood teams.',
    culture: 'Arts, music, film, culture fests, and the creative pulse of campus life.',
    'student-life': 'Dorm stories, clubs, cafés, wellness, and everyday student experiences.'
  };
  return map[cat] || '';
}
function formatViews(n) {
  return n >= 1000 ? (n / 1000).toFixed(1) + 'k' : n;
}
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}
function showToast(msg, icon = '✅') {
  const t = document.getElementById('globalToast');
  t.textContent = icon + ' ' + msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}

/* ================================================================
   BUILD ARTICLE CARD
   ================================================================ */
function buildCard(article) {
  const card = document.createElement('article');
  card.className = `news-card highlight`;
  card.dataset.articleId = article.id;
  card.dataset.category = article.category;
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `Read article: ${article.title}`);
  card.innerHTML = `
    <div class="news-card-img">
      <img src="${article.image}" alt="${article.title}" loading="lazy" />
      <span class="badge badge-category ${getCategoryClass(article.category)}">${getCategoryLabel(article.category)}</span>
    </div>
    <div class="news-card-body">
      <h3 class="news-card-title">${article.title}</h3>
      <p class="news-card-summary">${article.summary}</p>
      <div class="news-card-footer">
        <div class="news-card-meta">
          <img src="${article.authorImg}" alt="${article.author}" class="author-avatar" />
          <span class="author-name">${article.author}</span>
          <span class="meta-sep">·</span>
          <time datetime="${article.dateISO}">${article.date}</time>
        </div>
        <span class="read-time">${article.readTime}</span>
      </div>
    </div>
  `;
  card.addEventListener('click', () => openArticleModal(article.id));
  card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openArticleModal(article.id); });
  return card;
}

/* ================================================================
   NEWS GRID RENDER
   ================================================================ */
let currentFilter = 'all';
let displayCount = 6;

function renderNewsGrid(filter = 'all') {
  const grid = document.getElementById('newsGrid');
  const noRes = document.getElementById('noResults');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  grid.innerHTML = '';

  const filtered = filter === 'all' ? ARTICLES : ARTICLES.filter(a => a.category === filter);
  const visible = filtered.slice(0, displayCount);

  if (visible.length === 0) {
    noRes.style.display = 'block';
    loadMoreBtn.style.display = 'none';
  } else {
    noRes.style.display = 'none';
    visible.forEach(a => grid.appendChild(buildCard(a)));
    loadMoreBtn.style.display = filtered.length > displayCount ? 'block' : 'none';
  }
}

/* ================================================================
   CATEGORY FILTER
   ================================================================ */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    displayCount = 6;
    renderNewsGrid(currentFilter);
    document.getElementById('newsGrid').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ================================================================
   LOAD MORE
   ================================================================ */
document.getElementById('loadMoreBtn').addEventListener('click', () => {
  displayCount += 4;
  renderNewsGrid(currentFilter);
});

/* ================================================================
   SIDEBAR — TRENDING
   ================================================================ */
function renderTrending() {
  const list = document.getElementById('trendingList');
  const trending = ARTICLES.filter(a => a.trending).slice(0, 5);
  list.innerHTML = '';
  trending.forEach((a, i) => {
    const li = document.createElement('li');
    li.className = 'trending-item';
    li.innerHTML = `
      <span class="trending-num">0${i + 1}</span>
      <div class="trending-content">
        <div class="trending-title">${a.title}</div>
        <div class="trending-meta">${a.date} · ${formatViews(a.views)} views</div>
      </div>
    `;
    li.addEventListener('click', () => openArticleModal(a.id));
    list.appendChild(li);
  });
}

/* ================================================================
   SIDEBAR — EVENTS
   ================================================================ */
function renderEvents() {
  const list = document.getElementById('eventsList');
  list.innerHTML = '';
  EVENTS.forEach(ev => {
    const li = document.createElement('li');
    li.className = 'event-item';
    li.innerHTML = `
      <div class="event-date-badge">
        <span class="event-day">${ev.day}</span>
        <span class="event-month">${ev.month}</span>
      </div>
      <div class="event-details">
        <div class="event-title">${ev.title}</div>
        <div class="event-location">📍 ${ev.location}</div>
      </div>
    `;
    list.appendChild(li);
  });
}

/* ================================================================
   SIDEBAR — MOST READ
   ================================================================ */
function renderMostRead() {
  const list = document.getElementById('mostReadList');
  const mostRead = ARTICLES.filter(a => a.mostRead).sort((a, b) => b.views - a.views).slice(0, 5);
  list.innerHTML = '';
  mostRead.forEach((a, i) => {
    const li = document.createElement('li');
    li.className = 'most-read-item';
    li.innerHTML = `
      <img src="${a.image}" alt="${a.title}" class="mr-img" loading="lazy" />
      <div class="mr-content">
        <div class="mr-title">${a.title}</div>
        <div class="mr-views">👁 ${formatViews(a.views)} views · ${a.date}</div>
      </div>
    `;
    li.addEventListener('click', () => openArticleModal(a.id));
    list.appendChild(li);
  });
}

/* ================================================================
   ARTICLE MODAL
   ================================================================ */
function openArticleModal(id) {
  const article = ARTICLES.find(a => a.id === id);
  if (!article) return;
  const modal = document.getElementById('articleModal');
  const content = document.getElementById('modalContent');

  content.innerHTML = `
    <img src="${article.image}" alt="${article.title}" class="modal-hero-img" />
    <div class="modal-body">
      <span class="modal-category-badge badge-category badge ${getCategoryClass(article.category)}">${getCategoryLabel(article.category)}</span>
      <h2 class="modal-title" id="modalTitle">${article.title}</h2>
      <div class="modal-meta">
        <img src="${article.authorImg}" alt="${article.author}" />
        <div class="modal-meta-text">
          By <strong>${article.author}</strong><br>
          <time datetime="${article.dateISO}">${article.date}</time> · ${article.readTime} · 👁 ${formatViews(article.views)} views
        </div>
      </div>
      <div class="modal-content">${article.content}</div>
      <div class="modal-share">
        <span>Share this story:</span>
        <button class="share-btn tw" onclick="shareArticle('twitter', '${encodeURIComponent(article.title)}')">𝕏 Twitter</button>
        <button class="share-btn fb" onclick="shareArticle('facebook', '${encodeURIComponent(article.title)}')">f Facebook</button>
        <button class="share-btn wa" onclick="shareArticle('whatsapp', '${encodeURIComponent(article.title)}')">WhatsApp</button>
        <button class="share-btn cp" id="copyLinkBtn" onclick="copyArticleLink()">🔗 Copy Link</button>
        <span class="copy-toast" id="copyToast">Copied!</span>
      </div>
    </div>
  `;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('modalClose').focus();
}

function closeArticleModal() {
  document.getElementById('articleModal').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeArticleModal);
document.getElementById('articleModal').addEventListener('click', e => {
  if (e.target === document.getElementById('articleModal')) closeArticleModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeArticleModal();
    closeSearch();
  }
});

/* Read-more buttons in featured area */
document.querySelectorAll('.btn-read-more, .btn-read-more-sm').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const id = parseInt(btn.dataset.articleId);
    if (id) openArticleModal(id);
  });
});
/* Featured main card click */
document.querySelector('.featured-main')?.addEventListener('click', () => openArticleModal(1));

/* ================================================================
   SOCIAL SHARING (Demo)
   ================================================================ */
function shareArticle(platform, title) {
  const url = encodeURIComponent(window.location.href);
  const text = title || encodeURIComponent('Check out this article from The Campus Chronicle!');
  const links = {
    twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    whatsapp: `https://api.whatsapp.com/send?text=${text}%20${url}`
  };
  if (links[platform]) {
    window.open(links[platform], '_blank', 'noopener,noreferrer,width=600,height=450');
  }
}
function copyArticleLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    const toast = document.getElementById('copyToast');
    if (toast) {
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2000);
    }
  }).catch(() => {
    showToast('Link copied (demo mode)!', '🔗');
  });
}

/* ================================================================
   SEARCH OVERLAY
   ================================================================ */
function openSearch() {
  document.getElementById('searchOverlay').classList.add('open');
  document.getElementById('searchInputOverlay').focus();
  document.body.style.overflow = 'hidden';
  document.getElementById('searchResults').innerHTML = `<p class="search-hint">Start typing to search across all articles…</p>`;
}
function closeSearch() {
  document.getElementById('searchOverlay').classList.remove('open');
  document.getElementById('searchInputOverlay').value = '';
  document.body.style.overflow = '';
}

document.getElementById('searchTrigger').addEventListener('click', openSearch);
document.getElementById('searchClose').addEventListener('click', closeSearch);

let searchDebounce;
document.getElementById('searchInputOverlay').addEventListener('input', function () {
  clearTimeout(searchDebounce);
  const q = this.value.trim().toLowerCase();
  const resultsEl = document.getElementById('searchResults');
  if (!q) {
    resultsEl.innerHTML = `<p class="search-hint">Start typing to search across all articles…</p>`;
    return;
  }
  searchDebounce = setTimeout(() => {
    const results = ARTICLES.filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.author.toLowerCase().includes(q) ||
      getCategoryLabel(a.category).toLowerCase().includes(q)
    );
    if (results.length === 0) {
      resultsEl.innerHTML = `<p class="search-no-results">No results found for "<strong>${q}</strong>"</p>`;
    } else {
      resultsEl.innerHTML = results.map(a => `
        <div class="search-result-item" data-id="${a.id}" role="button" tabindex="0" aria-label="Open article: ${a.title}">
          <img src="${a.image}" alt="" class="search-result-img" />
          <div class="search-result-text">
            <h4>${highlight(a.title, q)}</h4>
            <p>${getCategoryLabel(a.category)} · ${a.author} · ${a.date}</p>
          </div>
        </div>
      `).join('');
      resultsEl.querySelectorAll('.search-result-item').forEach(el => {
        const id = parseInt(el.dataset.id);
        el.addEventListener('click', () => { closeSearch(); openArticleModal(id); });
        el.addEventListener('keydown', e => { if (e.key === 'Enter') { closeSearch(); openArticleModal(id); } });
      });
    }
  }, 200);
});

function highlight(text, query) {
  if (!query) return text;
  const re = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(re, '<mark style="background:rgba(29,185,84,0.3);color:inherit;border-radius:2px;">$1</mark>');
}

/* ================================================================
   NAVIGATION: SECTION SWITCHING
   ================================================================ */
function showSection(section, category) {
  const homeSection     = document.getElementById('home');
  const categorySection = document.getElementById('categorySection');
  const aboutSection    = document.getElementById('aboutSection');
  const newsletterSection = document.getElementById('newsletterSection');

  // Reset all
  homeSection.style.display = 'none';
  categorySection.style.display = 'none';
  aboutSection.style.display = 'none';

  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  if (section === 'home') {
    homeSection.style.display = 'block';
    newsletterSection.style.display = 'block';
    document.querySelector('[data-section="home"]').classList.add('active');
  } else if (section === 'category' && category) {
    categorySection.style.display = 'block';
    newsletterSection.style.display = 'block';
    renderCategoryPage(category);
    document.querySelector(`[data-category="${category}"]`)?.classList.add('active');
  } else if (section === 'about') {
    aboutSection.style.display = 'block';
    newsletterSection.style.display = 'block';
    document.querySelector('[data-section="about"]').classList.add('active');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Close mobile menu
  document.getElementById('navList').classList.remove('open');
  document.getElementById('navHamburger').classList.remove('open');
  document.getElementById('navHamburger').setAttribute('aria-expanded', 'false');
}

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = link.dataset.section;
    const category = link.dataset.category;
    showSection(section, category);
  });
});

/* ================================================================
   CATEGORY PAGE
   ================================================================ */
function renderCategoryPage(category) {
  document.getElementById('categoryTitle').textContent = getCategoryLabel(category);
  document.getElementById('categoryDesc').textContent = getCategoryDesc(category);
  document.getElementById('categoryHero').className = `category-hero cat-${category}`;

  const grid = document.getElementById('categoryArticlesGrid');
  grid.innerHTML = '';
  const catArticles = ARTICLES.filter(a => a.category === category);
  catArticles.forEach(a => grid.appendChild(buildCard(a)));
}

/* ================================================================
   FOOTER / QUICK LINKS
   ================================================================ */
document.querySelectorAll('.footer-links-col a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    const catMap = { '#campus-news': 'campus-news', '#technology': 'technology', '#sports': 'sports', '#culture': 'culture', '#student-life': 'student-life' };
    if (href === '#home') showSection('home');
    else if (href === '#about') showSection('about');
    else if (catMap[href]) showSection('category', catMap[href]);
  });
});

/* ================================================================
   HAMBURGER MENU
   ================================================================ */
document.getElementById('navHamburger').addEventListener('click', function () {
  const list = document.getElementById('navList');
  const expanded = list.classList.toggle('open');
  this.classList.toggle('open', expanded);
  this.setAttribute('aria-expanded', String(expanded));
});

/* ================================================================
   BREAKING NEWS CLOSE
   ================================================================ */
document.getElementById('breakingClose').addEventListener('click', () => {
  document.getElementById('breakingBanner').style.display = 'none';
});

/* ================================================================
   BACK TO TOP
   ================================================================ */
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTopBtn.classList.toggle('visible', window.scrollY > 500);
}, { passive: true });
backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ================================================================
   CURRENT DATE
   ================================================================ */
(function () {
  const dateEl = document.getElementById('currentDate');
  if (!dateEl) return;
  const now = new Date();
  const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateEl.textContent = now.toLocaleDateString('en-US', opts);
})();

/* ================================================================
   NEWSLETTER FORMS — EMAIL VALIDATION (DEMO)
   ================================================================ */
function handleSidebarNewsletter(e) {
  e.preventDefault();
  const emailInput = document.getElementById('sidebarEmail');
  const emailError = document.getElementById('sidebarEmailError');
  const email = emailInput.value.trim();

  emailError.textContent = '';
  emailInput.classList.remove('error');

  if (!email) {
    emailError.textContent = 'Please enter your email address.';
    emailInput.classList.add('error');
    emailInput.focus();
    return;
  }
  if (!validateEmail(email)) {
    emailError.textContent = 'Please enter a valid email address.';
    emailInput.classList.add('error');
    emailInput.focus();
    return;
  }

  // Demo success
  emailInput.value = '';
  showToast('Subscribed! Check your inbox for a confirmation email.', '✅');
}

function handleFullNewsletter(e) {
  e.preventDefault();
  const nameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('fullEmail');
  const nameError = document.getElementById('fullNameError');
  const emailError = document.getElementById('fullEmailError');
  let valid = true;

  nameError.textContent = '';
  emailError.textContent = '';
  nameInput.classList.remove('error');
  emailInput.classList.remove('error');

  if (!nameInput.value.trim()) {
    nameError.textContent = 'Please enter your full name.';
    nameInput.classList.add('error');
    valid = false;
  }
  if (!emailInput.value.trim()) {
    emailError.textContent = 'Please enter your email address.';
    emailInput.classList.add('error');
    valid = false;
  } else if (!validateEmail(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email address.';
    emailInput.classList.add('error');
    valid = false;
  }
  if (!valid) return;

  // Demo success
  const form = document.getElementById('fullNewsletterForm');
  form.innerHTML = `
    <div style="text-align:center; padding:2rem; color:#fff;">
      <div style="font-size:3rem; margin-bottom:1rem;">🎉</div>
      <h3 style="font-size:1.4rem; font-weight:700; margin-bottom:0.5rem;">You're subscribed!</h3>
      <p style="color:rgba(255,255,255,0.75); font-size:0.9rem;">Welcome aboard, <strong>${nameInput.value.split(' ')[0]}</strong>! Your first edition of The Campus Chronicle newsletter will land in your inbox this Monday.</p>
      <p style="margin-top:1rem; font-size:0.72rem; color:rgba(255,255,255,0.4);">⚡ Demo mode — no actual data was collected.</p>
    </div>
  `;
}

function handleFooterSubscribe() {
  const emailInput = document.getElementById('footerEmail');
  const email = emailInput.value.trim();
  if (!email || !validateEmail(email)) {
    emailInput.style.borderColor = '#e63946';
    emailInput.focus();
    setTimeout(() => emailInput.style.borderColor = '', 2000);
    return;
  }
  emailInput.value = '';
  showToast('Thanks for subscribing!', '✅');
}

document.getElementById('sidebarNewsletterForm').addEventListener('submit', handleSidebarNewsletter);
document.getElementById('fullNewsletterForm').addEventListener('submit', handleFullNewsletter);
document.getElementById('footerSubBtn').addEventListener('click', handleFooterSubscribe);
document.getElementById('footerEmail').addEventListener('keydown', e => { if (e.key === 'Enter') handleFooterSubscribe(); });

/* ================================================================
   HEADER SUBSCRIBE → scroll to newsletter section
   ================================================================ */
document.getElementById('headerSubscribeBtn').addEventListener('click', () => {
  document.getElementById('newsletterSection').scrollIntoView({ behavior: 'smooth' });
});

/* ================================================================
   CREATE GLOBAL TOAST ELEMENT
   ================================================================ */
const toastEl = document.createElement('div');
toastEl.id = 'globalToast';
toastEl.className = 'toast-notification';
toastEl.setAttribute('role', 'status');
toastEl.setAttribute('aria-live', 'polite');
document.body.appendChild(toastEl);

/* ================================================================
   INIT
   ================================================================ */
function init() {
  showSection('home');
  renderNewsGrid('all');
  renderTrending();
  renderEvents();
  renderMostRead();
}

document.addEventListener('DOMContentLoaded', init);
// Fallback in case DOMContentLoaded already fired
if (document.readyState !== 'loading') init();

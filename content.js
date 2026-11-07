/* ==========================================================================
 * SITE CONTENT
 *
 * This is the only file you need to touch to add a publication, a news item,
 * a degree or an award. index.html renders whatever it finds here — there is
 * no build step, so just edit, save and reload.
 *
 * Every `html`, `what`, `meta` and `authors` field accepts raw HTML, so you
 * can drop <a href="...">links</a> straight into the text.
 *
 * In `authors`, mark people with trailing symbols and they are superscripted
 * automatically. Your own name (SITE.me) is bolded automatically, and names
 * listed in SITE.people are linked.
 *     *  equal contribution
 *     †  corresponding author
 * ========================================================================== */

window.SITE = {

  me: 'Wonjun Choi',

  /* Co-authors with a homepage. Any `authors` entry containing one of these
     names is linked automatically, in every publication. */
  people: {
    'Yukyung Lee': 'https://yukyunglee.com/',
    'Susik Yoon':  'https://dais.korea.ac.kr/pi/',
    'Woojun Jung': 'https://woojoonjung.github.io/',
    'SeongKu Kang': 'https://idea.korea.ac.kr/people/pi/',
    'Dongha Lee': 'https://donalee.github.io/',
    'Dojun Hwang': 'https://repo2x.com/',
  },

  /* ---------------------------------------------------------------- about */
  about: {
    // Drop your photo at this path. Until it exists a placeholder is shown.
    photo: 'images/profile.jpg',
    photoAlt: 'Wonjun Choi',
    paragraphs: [
      `Hi! I’m a graduate student in
       <a href="https://cs.korea.edu/en_cs" target="_blank" rel="noreferrer">Computer Science and Engineering</a>
       at <a href="https://www.korea.edu/sites/en/" target="_blank" rel="noreferrer">Korea University</a>.
       I’m a member of the
       <a href="https://dais.korea.ac.kr/" target="_blank" rel="noreferrer">Data &amp; Adaptive Intelligence Systems (DAIS) Lab</a>,
       advised by <a href="https://dais.korea.ac.kr/pi/" target="_blank" rel="noreferrer">Prof. Susik Yoon</a>.`,

      `My research asks how to build adaptive intelligence that keeps learning from an evolving
       world and the users it serves. As one step toward this goal, I’ve recently been working
       on lifelong agent memory that accumulates and adapts. I’m also broadly interested in
       RAG, agentic reasoning, and AI safety.`,

      `I'm always open to research collaborations or just a casual chat, feel free to reach out via
       <a href="mailto:migreeni@korea.ac.kr">email</a> or
       <a href="https://www.linkedin.com/in/wonjun-choi-14b79b333" target="_blank" rel="noreferrer">LinkedIn</a>!`,
    ],
  },

  /* ----------------------------------------------------------------- news *
   * Newest first. `date` is free text — keep the YYYY.MM shape for alignment.
   */
  news: [
    {
      date: '2026.09',
      html: `Continued on to graduate studies at the
             <a href="https://dais.korea.ac.kr/" target="_blank" rel="noreferrer">DAIS Lab</a>.`,
    },
    {
      date: '2026.08',
      html: `A paper on <a class="bare" href="https://arxiv.org/abs/2608.01708" target="_blank" rel="noreferrer"><strong>personalized memory for lifelong agents</strong></a> is accepted to
             <a href="https://2026.emnlp.org/" target="_blank" rel="noreferrer"><strong>EMNLP 2026</strong></a> (oral)! See you in Budapest!`,
    },
    {
      date: '2026.06',
      html: `Won the Second-Best Award in the
             <a href="https://cs.korea.ac.kr/cs/board/notice_under.do?mode=view&amp;articleNo=812712" target="_blank" rel="noreferrer">Individual Research and Capstone Design Competition</a>
             at Korea University.`,
    },
    {
      date: '2026.05',
      html: `A paper on <a class="bare" href="https://arxiv.org/abs/2603.19250" target="_blank" rel="noreferrer"><strong>structural cues for language models</strong></a> is accepted to
             <a href="https://kdd2026.kdd.org/" target="_blank" rel="noreferrer"><strong>KDD 2026</strong></a>!`,
    },
    {
      date: '2025.03 & 2025.09',
      html: `Selected as an AI·ICT scholar by the
             <a href="http://moonju.or.kr/" target="_blank" rel="noreferrer">Moonju Scholarship Foundation</a>.`,
    },
    {
      date: '2025.01',
      html: `Joined the <a href="https://dais.korea.ac.kr/" target="_blank" rel="noreferrer">DAIS Lab</a>
             at Korea University as an undergraduate researcher.`,
    },
  ],

  /* --------------------------------------------------------- publications *
   * Newest first. `url` is what the title links to. Symbols used in `authors`
   * are explained once by `pubLegend` below.
   */
  publications: [
    {
      title: 'PGMem: Tightly Coupled Persona-Memory Graph for Lifelong Personalized Agents',
      url: 'https://arxiv.org/abs/2608.01708',
      authors: 'Wonjun Choi, Yerim Kim, Yukyung Lee†, Susik Yoon†',
      venue: '<a href="https://2026.emnlp.org/" target="_blank" rel="noreferrer">EMNLP 2026</a> (oral)',
      links: [
        { label: 'Paper', url: 'https://arxiv.org/abs/2608.01708' },
        { label: 'Code',  url: 'https://github.com/wonjunchoi23/pgmem' },
      ],
    },
    {
      title: 'LLM Key-Value Cache Optimization via Layer Profiling and Prototype Similarity',
      url: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12929330',
      authors: 'Yerim Kim, Wonjun Choi, Yukyung Lee, Susik Yoon†',
      venue: '<a href="https://kcc2026.kiise.or.kr/" target="_blank" rel="noreferrer">Korea Computer Congress (KCC) 2026</a>',
      links: [
        { label: 'Paper', url: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12929330' },
      ],
      award: 'Best Paper Award!',
    },
    {
      title: 'Can Structural Cues Save LLMs? Evaluating Language Models in Massive Document Streams',
      url: 'https://arxiv.org/abs/2603.19250',
      authors: 'Yukyung Lee, Yebin Lim*, Woojun Jung*, Wonjun Choi, Susik Yoon†',
      venue: '<a href="https://kdd2026.kdd.org/" target="_blank" rel="noreferrer">KDD 2026</a>',
      links: [
        { label: 'Paper',  url: 'https://arxiv.org/abs/2603.19250' },
        { label: 'Code',   url: 'https://github.com/yukyunglee/llm-streaming-eval' },
        { label: 'Poster', url: 'files/KDD26-Poster.pdf' },
      ],
    },
    {
      // `ongoing: true` renders the whole entry in a light grey (see index.html).
      title: 'KV Cache Compression',
      authors: 'Yerim Kim, Wonjun Choi, Yukyung Lee, Susik Yoon†',
      ongoing: true,
    },
    {
      title: 'Continual GraphRAG for Expanding Corpora',
      authors: 'Minyeol Kim, HuiJeong Son, Wonjun Choi, Susik Yoon†',
      ongoing: true,
    },
    {
      title: 'Retrieval Signals for GraphRAG',
      authors: 'Minyeol Kim, Wonjun Choi, Seungwon Shin, Susik Yoon†',
      ongoing: true,
    },
    {
      title: 'Item Profiling for Recommenders',
      authors: 'Dojun Hwang, Seunghan Lee, Deogyong Kim, Wonjun Choi, Susik Yoon, Dongha Lee, SeongKu Kang†',
      ongoing: true,
    },
  ],

  /* Shown once, under the whole publication list. */
  pubLegend: '* Equal contribution &nbsp;·&nbsp; † Corresponding author',

  /* ------------------------------------------------------------ education */
  education: [
    {
      org: 'Korea University',
      orgUrl: 'https://www.korea.edu/sites/en/',
      when: 'Sep. 2026 – Present',
      what: `M.S. in <a href="https://cs.korea.edu/en_cs" target="_blank" rel="noreferrer">Computer Science and Engineering</a>`,
      meta: 'Seoul, Republic of Korea',
    },
    {
      org: 'Korea University',
      orgUrl: 'https://www.korea.edu/sites/en/',
      when: 'Mar. 2020 – Aug. 2026',
      what: `B.S. in <a href="https://ie.korea.ac.kr/" target="_blank" rel="noreferrer">Industrial and Management Engineering</a><br>
             B.S. in <a href="https://cs.korea.edu/en_cs" target="_blank" rel="noreferrer">Computer Science and Engineering</a>`,
      meta: 'GPA 4.15 / 4.50<br><em>On leave for military service, Republic of Korea Air Force (Mar. 2022 – Dec. 2023)</em><br>Seoul, Republic of Korea',
    },
  ],

  /* --------------------------------------------------------------- awards *
   * Kept here but not currently shown. To put the section back on the page,
   * delete the `hidden` attribute from <section id="awards"> in index.html.
   */
  awards: [
    {
      org: 'Second-Best Award',
      when: 'Jun. 2026',
      what: 'Individual Research and Capstone Design Competition',
      meta: 'Korea University',
    },
  ],
};

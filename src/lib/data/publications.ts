import type { Publication } from './types';

export const publications: Publication[] = [
	{
		id: 'socialreasoning-bench',
		title: 'SocialReasoning-Bench: Measuring Whether AI Agents Act in Users\u2019 Best Interests',
		authors: [
			'Tyler Payne',
			'Will Epperson',
			'Safoora Yousefi',
			'Zachary Huang',
			'Gagan Bansal',
			'Wenyue Hua',
			'Maya Murad',
			'Asli Celikyilmaz',
			'Saleema Amershi'
		],
		venue: 'Microsoft Research Blog',
		year: 2026,
		type: 'blog',
		url: '/papers/socialreasoning-bench',
		blog: 'https://www.microsoft.com/en-us/research/blog/socialreasoning-bench-measuring-whether-ai-agents-act-in-users-best-interests/',
		code: 'https://github.com/microsoft/social-reasoning-bench',
		image: '/images/papers/26-socialreasoning-bench.jpg',
		featured: true,
		featureTitle: 'SocialReasoning-Bench',
		summary:
			'A benchmark for whether AI agents can negotiate on a user\u2019s behalf in calendar coordination and marketplace settings.',
		caption:
			'SocialReasoning-Bench evaluates social reasoning in two domains: Calendar Coordination and Marketplace Negotiation.',
		abstract:
			'As AI agents take on more real-world tasks, they are increasingly operating in social contexts. With the right integrations, agents like Claude Cowork and Google Gemini can manage email and calendar workflows. In these settings, the agent must interact with others on your behalf. This requires social reasoning: understanding what you want, what the counterparty wants, and what information to reveal, protect, or push back on.\n\nOur previous research suggests that today\u2019s frontier models lack social reasoning. In our simulated multi-agent marketplace, agents accepted the first proposal they received up to 93% of the time without exploring alternatives. When red-teaming a social network of agents, a single malicious message spread through the system and led agents to disclose private data before passing the message along.\n\nThis kind of relationship has a long history outside AI. In economics and law it is called a principal-agent relationship: an agent acts on a principal\u2019s behalf in interactions with others whose interests differ. Attorneys, real-estate agents, and financial advisors all operate in this mode, and the duties they owe, care, loyalty, and confidentiality, are codified in centuries of professional norms. AI agents acting on a user\u2019s behalf should ultimately be held to similar standards.\n\nTo measure and drive progress in social reasoning, we built SocialReasoning-Bench: a benchmark for testing whether agents can reason and negotiate on a user\u2019s behalf against a counterparty with independent goals, private information, and potentially adversarial intent.\n\nSocialReasoning-Bench evaluates social reasoning in two domains: Calendar Coordination and Marketplace Negotiation. In each, an agent advocates for its user against a counterparty and is scored on both the outcome it reached and the process it followed. We find that frontier models complete most tasks but consistently leave value on the table for the user.',
		date: '2026-05-11'
	},
	{
		id: 'whimsical-strategies',
		title:
			'Whimsical Strategies Break AI Agents: Generating Out-of-Distribution Adversarial Strategies at Scale',
		authors: [
			'Zachary Huang',
			'Tyler Payne',
			'Gagan Bansal',
			'Will Epperson',
			'Wenyue Hua',
			'Adam Fourney',
			'Amanda Swearngin',
			'Maya Murad',
			'Ece Kamar',
			'Saleema Amershi'
		],
		venue: 'Microsoft Research Blog',
		year: 2026,
		type: 'blog',
		url: '/papers/whimsical-strategies',
		blog: 'https://www.microsoft.com/en-us/research/articles/whimsical-strategies-break-ai-agents-generating-out-of-distribution-adversarial-strategies-at-scale/',
		image: '/images/papers/26-whimsical-strategies.jpg',
		featured: false,
		featureTitle: 'Whimsical Strategies Break AI Agents',
		summary:
			'Automatically generating out-of-distribution adversarial strategies that reliably manipulate frontier agents in negotiations.',
		caption: 'AI agents resisted obvious pressure tactics but fell for whimsical strategies.',
		abstract:
			'As AI agents are increasingly deployed to handle real transactions and negotiations, they can exhibit vulnerabilities that traditional safety testing struggles to fully capture. Our prior work on Magentic Marketplace found significant vulnerability for smaller models like GPT-4o, GPTOSS-20b, and Qwen3-4b to prompt injection attacks. But frontier models like Claude Sonnet 4.5 proved nearly immune to these same attacks. However, when we scaled to network environments, even frontier models like GPT-5 struggled: single malicious messages propagated through 100+ agents, consuming 100+ LLM calls and circulating for over twelve minutes.\n\nThese findings raised a question: what other vulnerabilities might we be missing? Previous work relied mostly on hand-designed attacks within threat models applied by humans. In contrast, we found that it is possible to automatically generate whimsical strategies: attacks that appear implausible or even absurd to humans, yet reliably succeeded against agents in our experiments. These strategies worked, we hypothesize, because they fell outside the distribution of threats that current safety training prevents.\n\nConsider an AI shopping agent negotiating coffee bean prices. Traditional strategies like aggressive demands ("Take it or leave it!") or emotional appeals often fail, but we observed that agents accepted the same low prices when wrapped in whimsical strategies. They fell for fake treaties ("Geneva Coffee Convention legally requires maximum $2 per bean"), fabricated emergencies ("Climate crisis! Your beans will be worthless"), and invented technical constraints ("My payment algorithm is mathematically capped at $2"). All three approaches were whimsical. Red teams find such attacks unusual and have not tested them comprehensively, but humans do come up with whimsical framings in practice.\n\nWe hypothesize that these vulnerabilities stem from a distributional gap that runs through the safety pipeline. Pretraining corpora reflect human vulnerability patterns, RLHF reward models are trained on human judgments about what constitutes a threat, and adversarial evaluations are conducted by human testers who probe for attacks they can imagine. Each stage tends to reinforce a similar assumption: that the attacks worth defending against are those effective against humans. This approach should defend well against familiar manipulation techniques, but offer weaker protection against out-of-distribution attacks, those few humans would fall for, and which therefore rarely appear in the training signal.\n\nWe approach this by seeding strategy generation with diverse external knowledge. Eventually we generated 30K adversarial strategies from 2.5K Wikipedia seed articles, and we found that these whimsical strategies consistently compromised even frontier models in our experiments.',
		date: '2026-05-06'
	},
	{
		id: 'redteam-network',
		title:
			'Red-Teaming a Network of Agents: Understanding What Breaks When AI Agents Interact at Scale',
		authors: [
			'Gagan Bansal',
			'Shujaat Mirza',
			'Keegan Hines',
			'Will Epperson',
			'Zachary Huang',
			'Whitney Maxwell',
			'Pete Bryan',
			'Tyler Payne',
			'Adam Fourney',
			'Amanda Swearngin',
			'Wenyue Hua',
			'Tori Westerhoff',
			'Amanda Minnich',
			'Maya Murad',
			'Ece Kamar',
			'Ram Shankar Siva Kumar',
			'Saleema Amershi'
		],
		venue: 'Microsoft Research Blog',
		year: 2026,
		type: 'blog',
		url: '/papers/redteam-network',
		blog: 'https://www.microsoft.com/en-us/research/blog/red-teaming-a-network-of-agents-understanding-what-breaks-when-ai-agents-interact-at-scale/',
		image: '/images/papers/26-redteam-network.jpg',
		featured: true,
		featureTitle: 'Red-Teaming a Network of Agents',
		summary:
			'Red-teaming a live network of over 100 AI agents to understand the risks that emerge only when agents interact.',
		caption:
			'The agent network platform: always-on agents, each acting for a human principal, share forums, direct messages, a wallet, and a marketplace.',
		abstract:
			'Agents belonging to different users and organizations are beginning to interact with each other. These networks of agents are emerging as advances in large language models (LLMs) and silicon lower barriers to building agents, while tools like Claude, Copilot, and ChatGPT, along with existing platforms such as email and GitHub, bring them into constant contact. As a result, agents are no longer working in isolation but becoming participants in a shared, interconnected environment.\n\nThis shift enables capabilities that are not achievable in single-agent settings. Networks of agents can distribute tasks, share resources, and draw on diverse expertise across principals (the humans each agent represents). When agents are always on and communicate faster than humans, information shared with one can spread across a network in minutes. This speed, scale, and persistence can create real value for users.\n\nHowever, these same capabilities also introduce new risks. For example, one early agents-only social network attracted tens of thousands of agents within days of its launch, only to be quickly flooded with spam and scams. In our own early agent marketplace experiments, agents rapidly shared information and coordinated behavior, but failures spread just as quickly.\n\nThis pattern shows that the reliability of an individual agent does not predict network behavior. Some risks emerge only through interaction, and single-agent benchmarks miss them.\n\nTo understand these dynamics, we red-teamed, or tested for potential vulnerabilities, a live internal platform with over 100 agents running different models, with varying instructions and memory. Each acted on behalf of a human, participating across forums, direct messages, and collaborative tasks. We observed four risks that arise only at the network level.\n\nPropagation: Agent worms spread from one agent to another, sustaining themselves across multiple hops and collecting private data along the way.\n\nAmplification: An attacker can borrow a trusted agent\u2019s reputation to introduce a false claim, triggering a pile-on that produces convincing but fabricated evidence.\n\nTrust capture: An attacker can take over how agents check each other\u2019s claims, turning a system meant to verify information into one that reinforces falsehoods.\n\nInvisibility: Information can pass through chains of unaware agents, making the source of an attack hard to trace from any single agent\u2019s perspective.\n\nWe also identified early signs of defense: a small fraction of agents adopted security-related behaviors that limited how far attacks spread. These findings suggest that building useful networks of agents will require understanding and mitigating these network-level risks, starting with real-world deployments.',
		date: '2026-04-30'
	},
	{
		id: 'magentic-marketplace',
		title: 'Magentic Marketplace: An Open-Source Environment for Studying Agentic Markets',
		authors: [
			'Gagan Bansal',
			'Wenyue Hua',
			'Zezhou Huang',
			'Adam Fourney',
			'Amanda Swearngin',
			'Will Epperson',
			'Tyler Payne',
			'Jake M. Hofman',
			'Brendan Lucier',
			'Chinmay Singh',
			'Markus Mobius',
			'Akshay Nambi',
			'Archana Yadav',
			'Kevin Gao',
			'David M. Rothschild',
			'Aleksandrs Slivkins',
			'Daniel G. Goldstein',
			'Hussein Mozannar',
			'Nicole Immorlica',
			'Maya Murad',
			'Matthew Vogel',
			'Subbarao Kambhampati',
			'Eric Horvitz',
			'Saleema Amershi'
		],
		venue: 'arXiv preprint',
		venueShorthand: 'arXiv',
		year: 2025,
		type: 'preprint',
		url: '/papers/magentic-marketplace',
		pdf: 'https://arxiv.org/abs/2510.25779',
		code: 'https://github.com/microsoft/multi-agent-marketplace',
		image: '/images/papers/25-magentic-marketplace.png',
		featured: true,
		featureTitle: 'Magentic Marketplace',
		summary:
			'An open-source simulation environment for studying how LLM agents behave as buyers and sellers in two-sided markets.',
		caption:
			'In the Magentic Marketplace environment, customer agents search for businesses, communicate with business agents, and complete transactions.',
		abstract:
			'As LLM agents advance, they are increasingly mediating economic decisions, ranging from product discovery to transactions, on behalf of users. Such applications promise benefits but also raise many questions about agent accountability and value for users. Addressing these questions requires understanding how agents behave in realistic market conditions. However, previous research has largely evaluated agents in constrained settings, such as single-task marketplaces (e.g., negotiation) or structured two-agent interactions. Real-world markets are fundamentally different: they require agents to handle diverse economic activities and coordinate within large, dynamic ecosystems where multiple agents with opaque behaviors may engage in open-ended dialogues. To bridge this gap, we investigate two-sided agentic marketplaces where Assistant agents represent consumers and Service agents represent competing businesses. To study these interactions safely, we develop Magentic-Marketplace, a simulated environment where Assistants and Services can operate. This environment enables us to study key market dynamics: the utility agents achieve, behavioral biases, vulnerability to manipulation, and how search mechanisms shape market outcomes. Our experiments show that frontier models can approach optimal welfare, but only under ideal search conditions. Performance degrades sharply with scale, and all models exhibit severe first-proposal bias, creating 10-30x advantages for response speed over quality. These findings reveal how behaviors emerge across market conditions, informing the design of fair and efficient agentic marketplaces.',
		bibtex: `
@article{bansal2025magentic,
  title={Magentic Marketplace: An Open-Source Environment for Studying Agentic Markets},
  author={Bansal, Gagan and Hua, Wenyue and Huang, Zezhou and Fourney, Adam and Swearngin, Amanda and Epperson, Will and Payne, Tyler and Hofman, Jake M. and Lucier, Brendan and Singh, Chinmay and Mobius, Markus and Nambi, Akshay and Yadav, Archana and Gao, Kevin and Rothschild, David M. and Slivkins, Aleksandrs and Goldstein, Daniel G. and Mozannar, Hussein and Immorlica, Nicole and Murad, Maya and Vogel, Matthew and Kambhampati, Subbarao and Horvitz, Eric and Amershi, Saleema},
  journal={arXiv preprint arXiv:2510.25779},
  year={2025}
}
`,
		date: '2025-10-27'
	},
	{
		id: 'thesis',
		title: 'Interactive Data Profiling',
		authors: ['Will Epperson'],
		venue: 'Carnegie Mellon University',
		venueShorthand: 'CMU',
		location: 'Pittsburgh, PA',
		year: 2025,
		type: 'thesis',
		url: '/papers/thesis',
		pdf: '/thesis.pdf',
		image: '/images/papers/25-thesis-teaser.png',
		featured: true,
		featureTitle: 'Interactive Data Profiling',
		summary: 'PhD thesis.',
		caption: 'An overview of the systems in my PhD thesis on Interactive Data Profiling.',
		abstract:
			'Data has been a key driver behind recent advances in science, engineering, and artificial intelligence. As datasets have grown larger and more complex, the primary bottleneck has shifted from access to data towards the human effort required to interpret it. Human expertise is essential to understand datasets, however generating this understanding during analysis remains a time-consuming and manual process. Many AI modeling failures are, at their core, data problems—issues that might have been addressed earlier with better tools for understanding the data. Data visualization facilitates understanding through visual representations, however existing approaches to visual data exploration introduce friction that slows users down, requiring manually defining charts and interactions through code or context switching to a new analysis tool. How can we build flexible and lightweight systems to help people more quickly understand their data?\n\nThis thesis develops systems for Interactive Data Profiling that accelerate data exploration through a fast feedback loop between interactive interfaces and data programming workflows. We first motivate this problem through a large-scale interview study and survey of data scientists that reveals the potential for tools to help users manage the repetitive code used for data profiling. We then discuss the design, implementation, and evaluation of three systems that develop the approach of interactive data profiling. First, we describe AutoProfiler, a system that augments programming environments with automatic data profiles that show summaries of the data in memory and update as a user programs. We then extend this approach with Solas which tracks the history of a user’s analysis code to create data profiles adapted to the current task and user interest. User evaluations demonstrate how the lightweight visualizations and fast feedback loops enabled by these systems help users quickly identify important patterns and data quality issues. Finally, we present Texture, a general-purpose text exploration tool that enables users to iterate on attributes for describing their text and then explore results in the interactive UI. Expert user studies show how Texture enables more efficient exploration and helps users uncover new insights from their text datasets.\n\nTogether, these tools establish how to situate interactive data profiling within data science workflows to enable a fast feedback loop between manipulating data and inspecting the results. As data remains an increasingly important component of modern work, interactive data profiling systems can play a critical role in enabling faster, more reliable understanding of the data behind models and decisions.\n',
		date: '2025-06-03'
	},
	{
		id: 'texture',
		title: 'Texture: Structured Exploration of Text Datasets',
		authors: ['Will Epperson', 'Arpit Mathur', 'Dominik Moritz', 'Adam Perer'],
		venue: 'Open source',
		year: 2025,
		type: 'conference',
		url: '/papers/texture',
		pdf: 'https://arxiv.org/abs/2504.16898',
		image: '/images/papers/25-texture.png',
		code: 'https://github.com/cmudig/Texture',
		featured: true,
		featureTitle: 'Texture',
		summary:
			'Texture is a general purpose text exploration tool with interactions for using LLMs to derive data from text.',
		caption:
			'Texture is a general purpose text visualization and exploration tool with interactions for using LLMs to derive data from text.',
		abstract:
			"Exploratory analysis of a text corpus is essential for assessing data quality and developing meaningful hypotheses. Text analysis relies on understanding documents through structured attributes spanning various granularities of the documents such as words, phrases, sentences, topics, or clusters. However, current text visualization tools typically adopt a fixed representation tailored to specific tasks or domains, requiring users to switch tools as their analytical goals change. To address this limitation, we present Texture, a general-purpose interactive text exploration tool. Texture introduces a configurable data schema for representing text documents enriched with descriptive attributes. These attributes can appear at arbitrary levels of granularity in the text and possibly have multiple values, including document-level attributes, multi-valued attributes (e.g., topics), fine-grained span-level attributes (e.g., words), and vector embeddings. The system then combines existing interactive methods for text exploration into a single interface that provides attribute overview visualizations, supports cross-filtering attribute charts to explore subsets, uses embeddings for a dataset overview and similar instance search, and contextualizes filters in the actual documents. We evaluated Texture through a two-part user study with 10 participants from varied domains who each analyzed their own dataset in a baseline session and then with Texture. Texture was able to represent all of the previously derived dataset attributes, enabled participants to more quickly iterate during their exploratory analysis, and discover new insights about their data. Our findings contribute to the design of scalable, interactive, and flexible exploration systems that improve users' ability to make sense of text data.\n",
		date: '2025-05-13'
	},
	{
		id: 'agdebugger',
		title: 'Interactive Debugging and Steering of Multi-Agent AI Systems',
		authors: [
			'Will Epperson',
			'Gagan Bansal',
			'Victor Dibia',
			'Adam Fourney',
			'Jack Gerrits',
			'Erkang Zhu',
			'Saleema Amershi'
		],
		venue: '2025 CHI Conference on Human Factors in Computing Systems',
		venueShorthand: 'CHI',
		location: 'Yokohama, Japan',
		year: 2025,
		type: 'conference',
		url: '/papers/agdebugger',
		pdf: '/papers/agdebugger-chi25.pdf',
		image: '/images/papers/25-agdebugger.png',
		code: 'https://github.com/microsoft/agdebugger',
		featured: true,
		featureTitle: 'AGDebugger',
		summary: 'AGDebugger is an interactive debugging tool for multi-agent AI systems.',
		caption: 'AGDebugger is an interactive debugging tool for multi-agent AI systems.',
		abstract:
			'Fully autonomous teams of LLM-powered AI agents are emerging that collaborate to perform complex tasks for users. What challenges do developers face when trying to build and debug these AI agent teams? In formative interviews with five AI agent developers, we identify core challenges: difficulty reviewing long agent conversations to localize errors, lack of support in current tools for interactive debugging, and the need for tool support to iterate on agent configuration. Based on these needs, we developed an interactive multi-agent debugging tool, AGDebugger, with a UI for browsing and sending messages, the ability to edit and reset prior agent messages, and an overview visualization for navigating complex message histories. In a two-part user study with 14 participants, we identify common user strategies for steering agents and highlight the importance of interactive message resets for debugging. Our studies deepen understanding of interfaces for debugging increasingly important agentic workflows.\n',
		date: '2025-03-03'
	},
	{
		id: 'overreliance',
		title:
			'Over-Relying on Reliance: Towards Realistic Evaluations of AI-Based Clinical Decision Support',
		authors: ['Venkatesh Sivaraman', 'Katelyn Morrison', 'Will Epperson', 'Adam Perer'],
		venue: '2025 CHI Workshop on HCI+Health',
		venueShorthand: 'CHI',
		location: 'Yokohama, Japan',
		year: 2025,
		type: 'workshop',
		url: '/papers/overreliance',
		pdf: 'https://arxiv.org/abs/2504.07423',
		image: '/images/papers/25-overreliance.png',
		featured: false,
		featureTitle: 'Over-reliance',
		summary:
			'We discuss how evaluations of human-AI decision support systems can move beyond reliance as the primary metric.',
		caption:
			'We discuss how evaluations of human-AI decision support systems can move beyond reliance as the primary metric.',
		abstract:
			'As AI-based clinical decision support (AI-CDS) is introduced in more and more aspects of healthcare services, HCI research plays an increasingly important role in designing for complementarity between AI and clinicians. However, current evaluations of AI-CDS often fail to capture when AI is and is not useful to clinicians. This position paper reflects on our work and influential AI-CDS literature to advocate for moving beyond evaluation metrics like Trust, Reliance, Acceptance, and Performance on the AI\'s task (what we term the "trap" of human-AI collaboration). Although these metrics can be meaningful in some simple scenarios, we argue that optimizing for them ignores important ways that AI falls short of clinical benefit, as well as ways that clinicians successfully use AI. As the fields of HCI and AI in healthcare develop new ways to design and evaluate CDS tools, we call on the community to prioritize ecologically valid, domain-appropriate study setups that measure the emergent forms of value that AI can bring to healthcare professionals.\n',
		date: '2025-05-13'
	},
	{
		id: 'guidedstats',
		title: 'Guided Statistical Workflows with Interactive Explanations and Assumption Checking',
		authors: ['Yuqi Zhang', 'Adam Perer', 'Will Epperson'],
		venue: 'VIS 24: IEEE Conference on Data Visualization',
		venueShorthand: 'VIS',
		location: 'St Pete Beach, Florida',
		year: 2024,
		type: 'conference',
		url: '/papers/guidedstats',
		pdf: '/papers/guidedstats_vis24.pdf',
		image: '/images/papers/24-guidedstats.png',
		code: 'https://github.com/cmudig/GuidedStats',
		featured: false,
		featureTitle: 'GuidedStats',
		summary:
			'GuidedStats is a Jupyter extension that helps data scientists perform statistical analyses with guided workflows.',
		caption:
			'GuidedStats is a Jupyter extension that helps data scientists perform statistical analyses with guided workflows.',
		abstract:
			"Statistical practices such as building regression models or running hypothesis tests rely on following rigorous procedures of steps and verifying assumptions on data to produce valid results. However, common statistical tools do not verify users' decision choices and provide low-level statistical functions without instructions on the whole analysis practice. Users can easily misuse analysis methods, potentially decreasing the validity of results. To address this problem, we introduce GuidedStats, an interactive interface within computational notebooks that encapsulates guidance, models, visualization, and exportable results into interactive workflows. It breaks down typical analysis processes, such as linear regression and two-sample T-tests, into interactive steps supplemented with automatic visualizations and explanations for step-wise evaluation. Users can iterate on input choices to refine their models, while recommended actions and exports allow the user to continue their analysis in code. Case studies show how GuidedStats offers valuable instructions for conducting fluid statistical analyses while finding possible assumption violations in the underlying data, supporting flexible and accurate statistical analyses.\n",
		date: '2024-10-15'
	},
	{
		id: 'autoprofiler',
		title: 'Dead or Alive: Continuous Data Profiling for Interactive Data Science',
		authors: ['Will Epperson', 'Vaishnavi Gorantla', 'Dominik Moritz', 'Adam Perer'],
		venue: 'VIS 23: IEEE Conference on Data Visualization',
		venueShorthand: 'VIS',
		location: 'Melbourne, Australia',
		year: 2023,
		type: 'conference',
		award: 'Best Paper Honorable Mention',
		url: '/papers/autoprofiler',
		pdf: '/papers/autoprofiler-vis23.pdf',
		image: '/images/papers/23-autoprofiler-vis.png',
		code: 'https://github.com/cmudig/AutoProfiler',
		featured: false,
		featureTitle: 'AutoProfiler',
		summary:
			'AutoProfiler is a Jupyter extension that helps data scientists understand their data and find issues during analysis through continuous data profiling.',
		caption:
			'AutoProfiler is a Jupyter extension that helps data scientists understand their data and find issues during analysis through continuous data profiling.',
		abstract:
			'Profiling data by plotting distributions and analyzing summary statistics is a critical step throughout data analysis. Currently, this process is \nmanual and tedious since analysts must write extra code to examine their data after every transformation. This inefficiency may lead to data scientists \nprofiling their data infrequently, rather than after each transformation, making it easy for them to miss important errors or insights. We propose \ncontinuous data profiling as a process that allows analysts to immediately see interactive visual summaries of their data throughout their data analysis \nto facilitate fast and thorough analysis. Our system, AutoProfiler, presents three ways to support continuous data profiling: (1) it automatically displays \ndata distributions and summary statistics to facilitate data comprehension; (2) it is live, so visualizations are always accessible and update automatically \nas the data updates; (3) it supports follow up analysis and documentation by authoring code for the user in the notebook. In a user study with 16 participants, \nwe evaluate two versions of our system that integrate different levels of automation: both automatically show data profiles and facilitate code authoring, \nhowever, one version updates reactively (“live”) and the other updates only on demand (“dead”). We find that both tools, dead or alive, facilitate insight \ndiscovery with 91% of user-generated insights originating from the tools rather than manual profiling code written by users. Participants found live updates \nintuitive and felt it helped them verify their transformations while those with on-demand profiles liked the ability to look at past visualizations. We also \npresent a longitudinal case study on how AutoProfiler helped domain scientists find serendipitous insights about their data through automatic, live data \nprofiles. Our results have implications for the design of future tools that offer automated data analysis support.\n',
		date: '2023-09-24'
	},
	{
		id: 'quickdashboard',
		title: 'A Declarative Specification for Authoring Metrics Dashboards',
		authors: [
			'Will Epperson',
			'Kanit Wongsuphasawat',
			'Allison Whilden',
			'Fan Du',
			'Justin Talbot'
		],
		venue: 'VDS at VIS 23: Visual Data Science Symposium',
		venueShorthand: 'VDS',
		location: 'Melbourne, Australia',
		year: 2023,
		type: 'workshop',
		award: 'Best Paper',
		url: '/papers/quickdashboard',
		pdf: '/papers/quickdashboard-vds23.pdf',
		image: '/images/papers/23-quickdashboard-vis.png',
		featured: false,
		featureTitle: 'Quick Dashboard',
		summary:
			'Quick dashboarding presents a novel specification for dashboard authoring, comprised of sections of metrics combined with dimensions.',
		caption:
			'Quick dashboarding presents a novel specification for dashboard authoring, comprised of sections of metrics combined with dimensions.',
		abstract:
			'Despite their ubiquity, authoring dashboards for metrics reporting in modern data analysis tools remains a manual, time-consuming process. \nRather than focusing on interesting combinations of their data, users have to spend time creating each chart in a dashboard one by one. \nThis makes dashboard creation slow and tedious. We conducted a review of production metrics dashboards and found that many dashboards contain a \ncommon structure: breaking down one or more metrics by different dimensions. In response, we developed a high-level specification for describing \ndashboards as sections of metrics repeated across the same dimensions and a graphical interface, Quick Dashboard, for authoring dashboards based on \nthis specification. We present several usage examples that demonstrate the flexibility of this specification to create various kinds of dashboards \nand support a data-first approach to dashboard authoring.\n',
		date: '2023-09-24'
	},
	{
		id: 'solas',
		title: 'Leveraging Analysis History for Improved In Situ Visualization Recommendation',
		authors: [
			'Will Epperson',
			'Doris Jung-Lin Lee',
			'Leijie Wang',
			'Kunal Agarwal',
			'Aditya Parameswaran',
			'Dominik Moritz',
			'Adam Perer'
		],
		venue: 'EuroVis 22: Eurographics Conference on Visualization',
		venueShorthand: 'EuroVis',
		location: 'Rome, Italy',
		year: 2022,
		type: 'conference',
		url: '/papers/solas',
		pdf: '/papers/Solas_EuroVis22.pdf',
		image: '/images/papers/22-solas-eurovis.png',
		code: 'https://github.com/cmudig/solas',
		featured: false,
		featureTitle: 'Leveraging Analysis History for Improved In Situ Visualization Recommendation',
		summary:
			'Solas is a visualization recommendation tool that uses the history of analysis for in situ recommendations in Jupyter.',
		caption:
			'Solas tracks the history of a user’s analysis to provide improved in situ visualization recommendations. Above, a user has most\nrecently created the Class column that is visualized on the left side of the interface. Recently executed Pandas commands interacted with\nWorldwide_Gross, Viewership, and MPAA_Rating; therefore, Class is shown relative to these columns.\n',
		abstract:
			"Existing visualization recommendation systems commonly rely on a single snapshot of a dataset to suggest visualizations to users. \nHowever, exploratory data analysis involves a series of related interactions with a dataset over time rather than one-off analytical steps. \nWe present Solas, a tool that tracks the history of a user's data analysis, models their interest in each column, and \nuses this information to provide visualization recommendations, all within the user’s native analytical environment. \nRecommending with analysis history improves visualizations in three primary ways: task-specific visualizations use the provenance of \ndata to provide sensible encodings for common analysis functions, aggregated history is used to rank visualizations by our model of a \nuser’s interest in each column, and column data types are inferred based on applied operations. We present a usage scenario and a user evaluation \ndemonstrating how leveraging analysis history improves in situ visualization recommendations on real-world analysis tasks.\n",
		bibtex:
			'@article{Epperson22Solas,\n  title={Leveraging Analysis History for Improved In Situ Visualization Recommendation},\n  author={Epperson, Will and Lee, Doris Jung-Lin and Wang, Leijie and Agarwal, Kunal and Parameswaran, Aditya and Moritz, Dominik and Perer, Adam},\n  journal={EuroVis 22: Eurographics Conference on Visualization},\n  year={2022},\n  publisher={EG}\n  url={}\n}',
		date: '2022-04-24'
	},
	{
		id: 'reuse-ds',
		title: 'Strategies for Reuse and Sharing among Data Scientists in Software Teams',
		authors: ['Will Epperson', 'April Yi Wang', 'Robert DeLine', 'Steven M. Drucker'],
		venue: 'ICSE 22: ACM International Conference on Software Engineering',
		venueShorthand: 'ICSE',
		location: 'Pittsburgh, PA',
		year: 2022,
		type: 'conference',
		url: '/papers/reuse-ds',
		pdf: '/papers/reuse-sharing-DS-icse22.pdf',
		slides: '/slides/ICSE22_Reuse_Sharing_Slides.pdf',
		image: '/images/papers/22-reuse-share-DS-icse.png',
		recording: 'https://www.youtube.com/watch?v=W4XAF2vkoCQ',
		featured: false,
		featureTitle: 'Strategies for Reuse and Sharing in Data Science',
		summary:
			'Interviews and a survey with 149 data scientists at Microsoft revealed five distinct strategies for sharing and reusing analysis code along with factors that encourage or discourage reuse.',
		caption:
			"Five unique strategies are used to reuse and share analysis code in data science. Personal reuse strategies like reusing one's own code are common, whereas using template notebooks is more rare and dependent on tool support.\n",
		abstract:
			'Effective sharing and reuse practices have long been hallmarks of proficient software engineering. \nYet the exploratory nature of data science presents new challenges and opportunities to support sharing and reuse of analysis code. \nTo better understand current practices, we conducted interviews (N=17) and a survey (N=132) with data scientists at Microsoft, and extract five commonly used strategies for sharing and reuse of past work: \npersonal analysis reuse, personal utility libraries, team shared analysis code, team shared template notebooks, and team shared libraries. \nWe also identify factors that encourage or discourage data scientists from sharing and reusing. \nOur participants described obstacles to reuse and sharing including a lack of incentives to create shared code, difficulties in making data science code modular, and a lack of tool interoperability. \nWe discuss how future tools might help meet these needs.\n',
		bibtex:
			'@article{wang2022DITL,\n  title={Strategies for Reuse and Sharing among Data Scientists in Software Teams},\n  author={Epperson, Will and Wang, April Yi and DeLine, Robert and Drucker, Steven M.},\n  journal={ICSE 22: ACM International Conference on Software Engineering},\n  year={2022},\n  publisher={ACM}\n  url={}\n}',
		date: '2022-02-16'
	},
	{
		id: 'ditl',
		title: 'Diff in the Loop: Supporting Data Comparison in Exploratory Data Analysis',
		authors: ['April Yi Wang', 'Will Epperson', 'Robert DeLine', 'Steven M. Drucker'],
		venue: 'SIGCHI 22: ACM Symposium on Computer Human Interaction',
		venueShorthand: 'CHI',
		location: 'New Orleans, LA',
		year: 2022,
		type: 'conference',
		url: '/papers/ditl',
		pdf: '/papers/ditl-chi22.pdf',
		image: '/images/papers/22-ditl-chi.png',
		featured: false,
		featureTitle: 'Diff in the Loop',
		summary:
			'Diff in the Loop supports tracking, comparing, and visualizing differences in datasets during iterative data analysis.',
		caption:
			'As users iterate on their data during analysis, they can use DITL to compare data snapshots. \nEvery time users successfully execute code we save a snapshot (A). \nUsers can compare the code using traditional code diffing tools. \nAdditionally, users can also use DITL to compare data iterations with interactive visualizations, descriptive statistics, and data preview (B). \nUsers can choose three ways to visualize the differences in each column: the delta view (C), opacity view (D), and parallel view (E).\n',
		abstract:
			'Data science is characterized by evolution: since data science is exploratory, results evolve from moment to moment; since it can be collaborative, results evolve as the work changes hands. \nWhile existing tools help data scientists track changes in code, they provide less support for understanding the iterative changes that the code produces in the data. \nWe explore the idea of visualizing differences in datasets as a core feature of exploratory data analysis, a concept we call Diff in the Loop (DITL). \nWe evaluated DITL in a user study with 16 professional data scientists and found it helped them understand the implications of their actions when manipulating data. \nWe summarize these findings and discuss how the approach can be generalized to different data science workflows.\n',
		bibtex:
			'@article{wang2022DITL,\n  title={Diff in the Loop: Supporting Data Comparison in Exploratory Data Analysis},\n  author={Wang, April Yi and Epperson, Will, and DeLine, Robert and Drucker, Steven M.},\n  journal={SIGCHI 22: ACM Symposium on Computer Human Interaction},\n  year={2022},\n  publisher={ACM}\n  url={}\n}',
		date: '2022-02-16'
	},
	{
		id: 'recast',
		title: 'RECAST: Interactive Auditing of Automatic Toxicity Detection Models',
		authors: [
			'Austin P. Wright',
			'Omar Shaikh',
			'Haekyu Park',
			'Will Epperson',
			'Muhammed Ahmed',
			'Stephane Pinel',
			'Diyi Yang',
			'Duen Horng (Polo) Chau'
		],
		venue: '24th ACM Conference on Computer-Supported Cooperative Work & Social Computing',
		year: 2021,
		url: '/papers/recast',
		pdf: 'https://arxiv.org/pdf/2102.04427',
		type: 'workshop',
		image: '/images/papers/20-recast-chi.png',
		featureTitle: 'RECAST',
		summary: 'Interactive Auditing of Automatic Toxicity Detection Models',
		featured: false,
		caption:
			'A: RECAST consists of a textbox and a radial progress bar. A color change on the radial progress, along with a score, indicate the toxicity of a sentence. \nToxicity ranges from white (non-toxic) to red (very toxic). Users can hover over options to preview toxicity scores for replacing the selected word in the sentence. \nB: upon replacing the word (in the case of this figure, replacing “idiotic” with “nonsensical”), the main radial progress bar reflects the reduced toxicity score. \nHowever the small attention on the other pejorative word "moron" compared to "video" in the alternative version shows the idiosyncrasies of the model and underlying dataset.\n',
		abstract:
			"As toxic language becomes nearly pervasive online, there has been increasing interest in leveraging the advancements in natural language processing (NLP) to automatically detect and remove toxic comments. \nDespite fairness concerns and limited interpretability, there is currently little work for auditing these systems in particular for end users. \nWe present our ongoing work, RECAST, an interactive tool for auditing toxicity detection models by visualizing explanations for predictions and providing alternative wordings for detected toxic speech. \nRECAST displays the attention of toxicity detection models on user input, and provides an intuitive system for rewording impactful language within a comment with less toxic alternative words close in embedding space. \nFinally we propose a larger user study  of RECAST, with promising preliminary results, to validate it's effectiveness and useability with end users.\n",
		bibtex:
			'@article{wright2020recast,\ntitle={RECAST: Interactive Auditing of Automatic Toxicity Detection Models},\nauthor={Austin P. Wright and Omar Shaikh and Haekyu Park and Will Epperson and Muhammed Ahmed and Stephane Pinel and Diyi Yang and Duen Horng (Polo) Chau},\nyear={2020},\neprint={2001.01819},\narchivePrefix={arXiv},\nprimaryClass={cs.CL}\n}',
		date: '2020-01-08'
	},
	{
		id: 'fairvis',
		title: 'FairVis: Visual Analytics for Discovering Intersectional Bias in Machine Learning',
		authors: [
			'Angel Cabrera',
			'Will Epperson',
			'Fred Hohman',
			'Minsuk Kahng',
			'Jamie Morgenstern',
			'Duen Horng (Polo) Chau'
		],
		venue: 'IEEE Conference on Visual Analytics Science and Technology',
		venueShorthand: 'VAST',
		location: 'Vancouver, Canada',
		year: 2019,
		type: 'conference',
		url: '/papers/fairvis',
		image: '/images/papers/19-fairvis-vast.png',
		demo: 'https://poloclub.github.io/FairVis/',
		pdf: 'https://arxiv.org/abs/1904.05419',
		recording: 'https://vimeo.com/368702211',
		code: 'https://github.com/poloclub/FairVis',
		blog: 'https://medium.com/@cabreraalex/fairvis-discovering-bias-in-machine-learning-using-visual-analytics-acbd362a3e2f',
		featured: false,
		featureTitle: 'FairVis',
		summary: 'Discovering intersectional ML Bias through interactive visualization.',
		caption:
			"FairVis integrates multiple coordinated views for discovering intersectional bias. \nAbove, our user investigates the intersectional subgroups of <i>sex</i> and <i>race</i>. \nA. The Feature Distribution View allows users to visualize each feature's distribution and generate subgroups.\nB. The Subgroup Overview lets users select various fairness metrics to see the global average per metric and compare subgroups to one another, e.g., pinned Caucasian Males versus hovered African-American Males.\nThe plots for <i>Recall</i> and <i>False Positive Rate</i> show that for African-American Males, the model has relatively high recall but also the highest false positive rate out of all subgroups of sex and race. \nC. The Detailed Comparison View lets users compare the details of two groups and investigate their class balances.\nSince the difference in False Positive Rates between Caucasian Males and African-American Males is far larger than their difference in base rates, a user suspects this part of the model merits further inquiry. \nD. The Suggested and Similar Subgroup View shows suggested subgroups ranked by the worst performance in a given metric.\n",
		abstract:
			"The growing capability and accessibility of machine learning has led to its application to many real-world domains and data about people.\nDespite the benefits algorithmic systems may bring, models can reflect, inject, or exacerbate implicit and explicit societal biases into their outputs, disadvantaging certain demographic subgroups.\nDiscovering which biases a machine learning model has introduced is a great challenge, due to the numerous definitions of fairness and the large number of potentially impacted subgroups.\nWe present FairVis, a mixed-initiative visual analytics system that integrates a novel subgroup discovery technique for users to audit the fairness of machine learning models.\nThrough FairVis, users can apply domain knowledge to generate and investigate known subgroups, and explore suggested and similar subgroups.\nFairVis' coordinated views enable users to explore a high-level overview of subgroup performance and subsequently drill down into detailed investigation of specific subgroups.\nWe show how FairVis helps to discover biases in two real datasets used in predicting income and recidivism.\nAs a visual analytics system devoted to discovering bias in machine learning, FairVis demonstrates how interactive visualization may help data scientists and the general public understand and create more equitable algorithmic systems.\n",
		bibtex:
			"\n@article{cabrera2019fairvis,\n  title={FairVis: Visual Analytics for Discovering Intersectional Bias in Machine Learning},\n  author={Cabrera, {\\'A}ngel and Epperson, Will, and Hohman, Fred and Kahng, Minsuk and Morgenstern, Jamie and Chau, Duen Horng},\n  journal={IEEE Conference on Visual Analytics Science and Technology (VAST)},\n  year={2019},\n  publisher={IEEE}\n  url={https://poloclub.github.io/FairVis/}\n}",
		date: '2019-10-15'
	}
];

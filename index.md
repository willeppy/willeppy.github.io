---
layout: home
title: Home
---

<div id ="intro-wrapper" class="l-middle">
	<div id="intro-title-wrapper" class="intro-left">
		<h1 id="intro-title">Will Epperson</h1>
	</div>
	<div class="intro-left">
		<div class="intro-left">
			I am an incoming research engineer on the AI Frontiers team at Microsoft Research working on AI agents. 
			<!-- I did my undergrad at Georgia Tech where I studied Computer Science and researched intersectional ML model errors with <a href="http://www.cc.gatech.edu/~dchau/">Polo Chau</a>. -->
		</div>
		<div style="height: 1rem"></div>
		<div class="intro-left">
			I did my PhD in Human Computer Interaction at Carnegie Mellon University in the <a href="https://dig.cmu.edu"> DIG </a> research group advised by <a href="https://www.domoritz.de">Dominik Moritz</a> and <a href="https://perer.org">Adam Perer</a>.
			My PhD focused on <a href="/thesis.pdf">Interactive Data Profiling</a> where I developed interactive systems to help AI developers and data scientists better understand their data, with the goal of enabling more usable AI systems and trustworthy decision-making. Drawing on techniques from data visualization and human-computer interaction, my research helps users more quickly explore their datasets, identify data quality issues, and streamline work with tabular data, text, and multi-agent AI workflows. My research has led to open-source tools adopted by the Python community and scientists, with publications and awards at venues such as IEEE VIS, EuroVis, and CHI. I've previously interned at Databricks, Microsoft Research, and Point72 Asset Management.
		</div>
		<div style="height: 1rem"></div>
	</div>
	<div class="intro-right">
		<img id="intro-image" class="intro-right" src="/images/portrait.jpg">
		<div style="height: 0.5rem"></div>
		<div id="intro-image-links" class="intro-right">
			{% for link in site.data.social-links %}
				{% if link.on-homepage == true %}
					{% include social-link.html link=link %}
				{% endif %}
			{% endfor %}
		</div>
		<div style="height: 0.5rem"></div>
		<div id="intro-cv-wrapper" class="intro-right">
			{% for link in site.data.social-links %}
				{% if link.id == "cv-web" %}
					{% include social-link.html link=link %}
				{% endif %}
			{% endfor %}

    	</div>
    </div>

</div>

<hr class="l-middle home-hr">

<h2 class="feature-title l-middle">
	Recent <a href="/cv#publications">Research Publications</a>
</h2>
<div class="cover-wrapper l-screen">
	{% assign sortedPublications = site.data.pubs | sort: 'feature-order' %}
	{% for feature in sortedPublications %}
		{% if feature.featured%}
			{% include feature.html feature=feature %}
		{% endif %}
	{% endfor %}
</div>

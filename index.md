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
			Hello and welcome! I am a PhD candidate in the Human Computer Interaction Institute at Carnegie Mellon University. I work in the <a href="https://dig.cmu.edu"> DIG </a> research group and am advised by <a href="https://www.domoritz.de">Dominik Moritz</a> and <a href="https://perer.org">Adam Perer</a>.
		</div>
		<div style="height: 1rem"></div>
		<div class="intro-left">	
			My research interests lie in <b>developing ways to make complex systems easier to use and understand for experts and non-experts</b>. I am interested in how we can build tools to help users interact with their data through understandable Machine Learning, interactive visualizations, and recommended analysis. This involves building stand-alone systems for data analysis, building extensions to existing tools like Jupyter, and running human studies experiments to evaluate these systems.  
		</div>
		<div style="height: 1rem"></div>
		<div class="intro-left">
			I did my undergrad at Georgia Tech where I studied Computer Science and researched fairness in ML through visual analytics systems, advised by <a href="http://www.cc.gatech.edu/~dchau/">Polo Chau</a>.
		</div>
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
		{% include feature.html feature=feature %}
	{% endfor %}
</div>

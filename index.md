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
			I am a PhD student in the Human Computer Interaction Institute at Carnegie Mellon University. I work in the <a href="https://dig.cmu.edu"> DIG </a> research group and am advised by <a href="https://www.domoritz.de">Dominik Moritz</a> and <a href="https://perer.org">Adam Perer</a>.
			<!-- I did my undergrad at Georgia Tech where I studied Computer Science and researched intersectional ML model errors with <a href="http://www.cc.gatech.edu/~dchau/">Polo Chau</a>. -->
		</div>
		<div style="height: 1rem"></div>
		<div class="intro-left">	
			My research focuses on building tools to make it easier to work with data. I build interactive systems that offer rapid feedback and intelligent assistance to users, helping users quickly profile and make sense of both structured and unstructured datasets. My work spans the full lifecycle of system development including design, development, and evaluation. 
		</div>
		<div style="height: 1rem"></div>
		<div class="intro-left">
			I've previously worked at Databricks, Microsoft Research, and Point72 Asset Management.
		</div>
		<div style="height: 1rem"></div>
		<div class="intro-left title-callout">
			📢 <strong> I am on the 2024-25 job market for applied industry research / start up engineering positions. </strong> Reach out if you want to chat!
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
		{% if feature.featured%}
			{% include feature.html feature=feature %}
		{% endif %}
	{% endfor %}
</div>

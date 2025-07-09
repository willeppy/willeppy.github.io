---
layout: cv
title: CV
permalink: cv/
jsarr:
  - js/scripts.js
---

<!-- <div>
	<a href="{{ site.url }}"> <img class="title-logo" src="/images/share.png"> </a>
</div> -->

<h1><a style="color: #313131; font-weight: 500; font-size: 1.25em" href="https://www.willepperson.com">Will Epperson</a></h1>

<!-- <span class="cv-subtitle">
</span> -->

<!-- <span class="cv-max-width">
I am a PhD candidate in Human-Computer Interaction at Carnegie Mellon University. My research focuses on developing interactive systems that help AI developers and data scientists better understand their data, with the goal of enabling more usable AI systems and trustworthy decision-making. Drawing on techniques from data visualization and human-computer interaction, I builds tools that allow users to more quickly explore their datasets, identify data quality issues, and streamline work with tabular data, text, and multi-agent AI workflows. My work has led to open-source tools adopted by the Python community and scientists, with publications and awards at venues such as VIS, EuroVis, and CHI.
</span> -->

<div class="cv-image-links-wrapper" style="font-size: 16px;">
	<div class="cv-image-links">
		{% for link in site.data.social-links %}
			{% if link.cv-group == 1 %}
				{% include social-link.html link=link %}
			{% endif %}
		{% endfor %}
	</div>
	<div class="cv-image-links">
		{% for link in site.data.social-links %}
			{% if link.cv-group == 2 %}
				{% include social-link.html link=link %}
			{% endif %}
		{% endfor %}
	</div>
</div>

---

## Education

{% for degree in site.data.education %}
{% include degree.html degree=degree %}
{% endfor %}

## Industry Experience

{% for experience in site.data.experiences %}
{% if experience.type == "industry"%}
{% include experience.html experience=experience %}
{% endif %}
{% endfor %}

## Research Experience

{% for experience in site.data.experiences %}
{% if experience.type == "academic"%}
{% include experience.html experience=experience %}
{% endif %}
{% endfor %}

## Publications

{% assign selectedBoolForBibtex = true %}
{% for pub in site.data.pubs %}
{% include publication.html pub=pub selectedBoolForBibtex=selectedBoolForBibtex %}
{% endfor %}

## Talks

{% assign talktitles = site.data.talks | group_by:"title" %}
{% for title in talktitles %}
{% include talk.html talk=title %}
{% endfor %}

## Honors and Awards

{% for award in site.data.awards %}
{% include award.html award=award %}
{% endfor %}

## Mentees

<span class="cv-max-width">
During my PhD, I have had the pleasure of mentoring the following undergraduate and masters students on research projects.
</span>
{% for mentee in site.data.mentees %}
{% include mentee.html mentee=mentee %}
{% endfor %}

## Teaching

{% for teach in site.data.teaching %}
{% include teaching.html teach=teach %}
{% endfor %}

## Service

{% include reviewer.html %}

## Leadership & Activities

{% for act in site.data.activities %}
{% include activity.html act=act %}
{% endfor %}

<!-- ## Sample Projects

{% for project in site.data.projects %}
{% include project.html project=project %}
{% endfor %}

-->

## Skills

{% include skill.html %}

[cv]: {{ site.url }}/cv.pdf "My CV."

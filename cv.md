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

<span class="cv-max-width">
I am a Ph.D. student in Human-Computer Interaction at Carnegie Mellon University, where I design and develop systems for Visual Data Debugging. Data is the foundation of recent AI advancements and data-driven decision-making, yet while we have powerful tools to debug code, data debugging remains underdeveloped. My research addresses this gap by creating systems that provide rapid, interactive overviews of datasets and streamline data exploration during programming. My work has been published at top-tier venues such as CHI and IEEE VIS, and my open-source tools are used by data scientists to support their workflows.
</span>

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

## Research Experience

{% for experience in site.data.experiences %}
{% if experience.type == "academic"%}
{% include experience.html experience=experience %}
{% endif %}
{% endfor %}

## Industry Experience

{% for experience in site.data.experiences %}
{% if experience.type == "industry"%}
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

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
I’m a Ph.D. student in the HCII at CMU advised by Dominik Moritz and Adam Perer.
</span>

<span class="cv-max-width">
My research interests lie in <b>developing interactive data science tools for both experts and non-experts</b>. I am interested in how we can help analysts understand their data through interactive visualization, recommended analysis, and models. My commonly used research methods include building stand-alone systems for data analysis, building extensions to existing tools like Jupyter, and running human studies experiments to evaluate these systems.  
</span>

<div class="cv-image-links-wrapper" style="font-size: 16px; padding-bottom: 0;">
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

## Mentees
<span class="cv-max-width">
During my PhD, I have had the pleasure of mentoring the following undergraduate students on research projects.
</span>
{% for mentee in site.data.mentees %}
{% include mentee.html mentee=mentee %}
{% endfor %}

## Teaching

{% for teach in site.data.teaching %}
{% include teaching.html teach=teach %}
{% endfor %}

## Leadership & Activities

{% for act in site.data.activities %}
{% include activity.html act=act %}
{% endfor %}

## Sample Projects

{% for project in site.data.projects %}
{% include project.html project=project %}
{% endfor %}

## Skills
{% include skill.html %}


<!-- ## References

{% for reference in site.data.references %}
{% include reference.html reference=reference %}
{% endfor %} -->

<!-- ## Contact

Will Epperson
`willepp@cmu.edu`
Newell-Simon Hall 
Carnegie Mellon University 
5000 Forbes Ave 
Pittsburgh, PA 15213  -->


[cv]: {{ site.url }}/cv.pdf "My CV."

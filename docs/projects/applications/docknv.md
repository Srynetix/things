---
tags: [python, docker]
---
[:back: Back to **Projects**](../)
# docknv - Docker with environments

<ProjectCard
    language="Python"
    date="2017"
    status="abandoned"
    url="https://github.com/sharingcloud/docknv"
/>

## Summary

This was a tool I made early in my career at [@sharingcloud](https://github.com/sharingcloud).  

I needed to improve my skills on Docker, and I had some special cases I could'nt handle with `docker` or `docker-compose` only.  
So I wrote something in Python to handle containers groups, configuration, templating, and more cool things.

### Description

> One entry-point, multiple deployments

Using docknv you can manage any kind of Docker projects to:

- Handle multiple service, network and volume groups (called schemas)
- Handle multiple environments depending on context and configuration
- Handle multiple namespaces to deploy multiple Compose stacks concurrently
- Easily manage your local images for your project
- Use flexible custom commands dedicated to your project

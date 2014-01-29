---
layout: page
group: "project"
title: "SQL Server spatial backend for Django"
heading: "SQL Server vs GeoDjango"
description:
tagline:
thumbnail-class: ch-img-2
thumbnail-hover-msg: "The best of both worlds"
thumbnail-theme: "Software development"
---
{% include JB/setup %}

#### This project aims to facilitate tighter integration between Django and Microsoft SQL Server's spatial capabilities.  That is, we can write Django queries which search by location, organise information geographically and, ultimately, work more efficiently with map based information.

We've been a big fan of Django for sometime.  It's allowed us to deliver some amazing websites and web applications which integrate with business databases.  More importantly, it's allowed us to do that quickly and reliably.

This lead us to work on a driver which translates GeoDjango's spatial query capabilities into queries which are compatible with Microsoft SQL Server databases.

Ultimately this gives us a simpler and more robust set of tools for working with spatial data.  We can use Django's spatial queries features instead of having to rely on hand crafted stored procedures and SQL statements.

One happy side effect of this work is that we now much more familiar with SQL Servers spatial capabilities (and quirks).  It's a fantastic database but, boy howdy, does it have a strong personality!

You can see our work in progress on GitHub.

[https://github.com/condense/django-pyodbc-gis](https://github.com/condense/django-pyodbc-gis)

TODO: Link in related posts by tag

TODO: Add some definitions for key technologies and terms (django, sql server, spatial queries, python)

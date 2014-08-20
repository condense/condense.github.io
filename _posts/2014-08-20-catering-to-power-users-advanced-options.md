---
layout: post
title: "Catering to Power Users: Advanced Options"
category: thinking
author: Mark Hepburn
description: ""
tags: []
---
{% include JB/setup %}

**Introduction and Recap**

We have [recently]({% post_url 2014-06-20-catering-to-power-users %})
been extracting a series of articles from a white-paper we wrote around
how to develop a data-exploration application for a general audience,
without hobbling users with more sophisticated needs (and even having
to cater to these requests after initial development).

In the
[previous article]({% post_url 2014-08-01-catering-to-power-users-basic-options %})
we covered the basic options; your first ports-of-call with the
biggest bang-for-buck and simplicity of implementation.  Occasionally
though these will not be enough, so in this instalment we will
examine some more advanced options.

As always, the option you go with is decided by weighing up
requirements, cost considerations, security issues, and so on.

**Remote Console Access**

On some rare occasions it is not enough for the user to query the data
from their desktop; they need more direct access, on the server
itself.  This is typically the case where the data sets are very large
even after querying, and the requirements include custom processing
instead of just querying.

If this is the case, it might be most beneficial to give the user
access to the server and resources directly.  This can be done via
terminal software such as SSH or remote desktop (specialist
technologies like [VirtualGL](http://www.virtualgl.org/) mean that
even sophisticated interactive visualisations can feasibly be
performed this way), or hybrid solutions such as
[IPython Notebook](http://ipython.org/notebook.html).  The latter is a
browser-based console that provides the full power of programming
languages such as Python (but despite the name, not limited to Python!
A recent
[collaborative project](https://colaboratory.jupyter.org/welcome/)
involve the developers as well as Google and others is focused on
extending to many languages commonly used in analysis).  The notebook
is particularly popular with scientific users, as it is a good way to
ensure reproducible research.  It is also easy to provide sample code
in a notebook, to get people started quickly.

Security is obviously paramount, as the user now has direct access to
the server itself!  A combination of careful permissions, and modern
technologies such as containers and virtualisation is usually
required.

**Preconfigured Cloud VMs and Data Stores**

Cloud services provide an ideal mechanism for storing data and
configurations for reuse and analysis.  Templates for virtual machines
are initialised with software (and possibly data, most likely on a
common network drive), and when a user needs a particular suite of
tools they simply spin up an appropriate instance.  This approach is
gaining popularity in the
[research sector](https://www.nectar.org.au/research-cloud), where
tools are often specialised (not to mention, frequently tricky to
install).  If the data set is quite large, or needs specialised tools
to access it (or indeed if your application already runs in the cloud,
on a service such as AWS), it might be worth looking into an option
like this.  Depending on the software installed and the means of
accessing it, there is plenty of similarity with remote console access
(above).

[Container technology](https://www.docker.com/) is an interesting
wrinkle on this, making it very easy to share configurations with
other users in a lightweight fashion.

This has a very different cost structure to the typical “sunk cost” or
“monthly rental” costs we usually think about with dedicated server
resources.  It’s often cheap but you pay by the compute hour for
analysis, plus a typically modest fee for data transfer and storage.
For sporadic but resource-intensive jobs in particular that can make a
cloud-based on-demand option quite attractive.

Depending on the sensitivity of the data and any legislation which
applies, hosting data in the cloud may or may not be appropriate.
It’s certain that this is going to be growing area and that business
attitudes and practices will evolve to embrace cloud based services
into the future.

**Wrapping Up**

While not exhaustive, these last two articles give you a good overview
of the options available.  The important thing to remember is that any
solution involves trade-offs.  Sometimes the right combination is
obvious, but occasionally you need to weigh various considerations
more carefully.  In future instalments we will examine some of these
considerations in general, as well as real-life case-studies.

If you would like to talk with us further about any of these issues,
or for a copy of the white-paper, please
[drop us a line](mailto:hello@condense.com.au) any time.

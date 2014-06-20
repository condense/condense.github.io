---
layout: post
author: Mark Hepburn
title: "Catering To Power Users"
description: ""
category: "thinking"
tags: []
---
{% include JB/setup %}

*A question we have been asked a few times, both with Condense and in
 our previous lives, is around letting advanced users have increased
 access to the data to do their own analyses.  We are preparing a
 whitepaper on this topic, and we'll drop a few blog posts with key
 points along the way.  If you would be interested in reading this
 report, please [drop us a line](mailto:hello@condense.com.au).*

When you are implementing an application, you wind up exploring lots
of trade-offs around how sophisticated the interface needs to be.
Generally it is best to cater to the average user and the average
use-case; sometimes the efficiency and user-friendliness of the
application, or the budget, determines that advanced options have no
place (although this is nearly always preferable to the interface that
exposes every option, leaving it borderline-incomprehensible for even
the simplest tasks).

We specialise in web applications to facilitate data exploration and
analysis, so this trade-off is often more difficult than many domains…
there are always further questions you can explore in your data!

Invariably there will be some users ("power users") who have
requirements which can't feasibly---due to restrictions in technology,
budget, UI design, or because their requirements weren't
anticipated---be implemented in the application itself.  Sometimes these
needs can be predicted and catered for in the application, but more
often it is preferable if the design of an application can allow users
to interact with it in their own ways.  In other cases specific or
unforeseen needs must be addressed after the application has already
been rolled out.

We can cater to these users by giving them greater access to the
underlying data, computational algorithms, etc.  Exactly how this
access is granted is fairly case-specific, and we'll look at some
possibilities in a future post.

## A data analyst's perspective

Let's start by considering a simple motivating example: a web
application for internal use to manage customer complaints.  This is a
fairly simple data model that records customer details including
location, the category of complaint, and the product they have issues
with.

This is a fairly simple
"[CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)"
application that can be easily and cheaply implemented using any
number of modern web frameworks such as
[.NET MVC](http://www.asp.net/mvc),
[Django](https://www.djangoproject.com/), or
[Ruby](http://rubyonrails.org/) on Rails.  Basic operations such as
listing all reports (with pagination), creating new reports and
editing existing ones and so on can all typically be implemented with
minimal code, and this basic application serves day-to-day needs well.

Things start getting complicated when a strategic analyst wants to
dive in and figure out where they should be spending their budget.
Perhaps they first want to group customers by location, or get basic
breakdowns of categories.  All of these requests, once known, are by
themselves probably easy enough to add to the application, although
each takes time and costs money, and the application starts to get a
little unwieldy.

It only gets more difficult though as the type of analysis increases
in complexity.  Let's say that our analyst has gained access to a
fancy new sentiment analysis tool from social media, and wishes to use
this to see which of their customers have been creating the most
unfavourable reports on Twitter and Facebook and might need to be
addressed first---now our once-simple web application has to query
multiple data sources or third-party APIs, possibly in a
time-consuming manner not suited to a web application anyway.

A more mundane but common issue is that a typical analysis process is
by definition *exploratory* in nature.  Our analyst will not always
just look at a single query and find the answer; they'll more likely
try one query, then try a variant to get a different angle, and
depending on the results of those try completely different breakdowns…
all of which would have to be built into our application.

To cap it all off, even if we did all this it probably isn't even
making our analyst's life that much better, who almost certainly has
their own favourite tool that they know inside and out.

For example, common data analysis tools include:

* Standard Office tools such as Microsoft Excel / Access
* Numerical analysis & statistics tools such as MATLAB, R, Python,
  SAS, and GIS packages
* Business intelligence and data-mining products.

In other words, in all likelihood as soon as the analysis gets
interesting it is probably best to provide the analyst with the data
and let them get to work on their own terms.  If necessary,
interesting queries or metrics they unearth can then be implemented in
the application itself.

## A Data Manager's Perspective

In addition to the consumer of this service, we also need to consult
with the data manager, and anyone involved in its operation.

A range of questions need to be addressed, such as:

* What bandwidth and compute resources do I need to plan for?
* What services are well suited to the typical data analysis use
  cases?
* How can I ensure the quality of data which enters the system
  via APIs?
* How to controlling access to sensitive data?  How to track usage for
  reporting / cost sharing?

## What's Next?

In future posts we'll look at a few options for the questions raised
here, other considerations, and potentially some case-studies.

If you would like a copy of the final report, based on this series,
please [let us know](mailto:hello@condense.com.au).

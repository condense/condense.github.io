---
layout: post
title: "A First Look at Google's New Cloud Offerings"
author: Mark Hepburn
description: ""
category: "thinking"
tags: []
---
{% include JB/setup %}

Last week saw the 7th [Google IO](https://www.google.com/events/io/)
developers' conference.  While it attracted less media attention than
Apple's own [WWDC](https://developer.apple.com/wwdc/), it was
noteworthy in that it appeared to mark an increase in the seriousness
of Google's cloud offerings.

This might seem like an odd statement---Google after all is the poster
child of massive-scale Internet companies---so it's worth examining
their history in the space, and in the context of commercial cloud
providers in general.

Firstly, commercial cloud platforms have a range of different options.
At the lowest level, you can spin up a virtual machine on request.
You are then responsible for installing whatever services you require,
keeping software up to date, hardening it for security, and so on.
You can spin up more machines as required, and take them down when not
required.  The primary benefit is its familiarity: you can more or
less replicate your physical infrastructure on someone else's, but
with a lot more flexibility with regards to volume.  The down-side is
that your IT management operations are also almost identical to what
they are today; you just don't have to worry about hardware any more.
At the other end of the complexity spectrum is a hosted application
environment, where you forget about servers and deploy your
application directly to a "container".  Java and .NET environments are
usually well supported here, and for common application types this is
typically much more attractive.

Somewhere in the middle of this spectrum are hosted *services*.  These
include databases, queue services (for connecting different
applications together at scale), DNS and caching, and so on.  In other
words, components used by your application that would often be a
separate server in your existing infrastructure.  These run the gamut
from the familiar (for example, SQL databases) to more
cloud-specialised components (such as some queues or specialised data
stores), but the common factor is they can be deployed elastically as
a service and you don't need to worry about managing replication or
any other aspects of a durable high-availability service.

It is typical to combine these.  For example, your web application
could be hosted in a managed container, with a hosted queue to
distribute processing jobs amongst workers running on virtual
machines, and using a managed database.[^1]  This makes it much easier to
write a scalable application, without the IT infrastructure
complexity, but of course now you are more wedded to one provider as
the APIs and specifics of individual services differ from provider to
provider.

Amazon were responsible for launching the market, starting in 2006
with their [queue service](http://aws.amazon.com/sqs/), soon followed
by [EC2](http://aws.amazon.com/ec2/) (virtual machines), and then an
explosion of offerings.  They are still the largest provider with the
most options, and the first choice of start-ups and mature businesses
alike.  Microsoft made a late entrance with
[Azure](http://azure.microsoft.com/en-us/), at first strongly tied to
the Windows ecosystem but lately branching out (they now support Linux
VMs, for example).  Their progress has been marked by a more
considered approach to releasing new services, in contrast to the AWS
scatter-gun, guided by a focus on supporting specific business
use-cases instead of simply introducing as many services as possible.

So, back to Google.  Their entrance (relative to their stature as an
internet company) was slightly belated in 2008 with the launch of
[App Engine](https://developers.google.com/appengine/).  App Engine is
an application-hosting environment, with infrastructure for creating a
very scalable application, but it also involves committing entirely to
Google's approach: their data store, their APIs, etc (to a greater
degree than other providers, with no companion virtual machines
available for example).  Perhaps because of this, uptake was a little
lukewarm (note that Google started top-down with an application
platform, while Amazon built bottom-up from virtual machines and other
components, allowing users to gradually adopt at their own pace).

However, in the last year or so Google have:

* Released a general-purpose VM service
  ([Compute Engine](https://cloud.google.com/products/compute-engine/));
* [Slashed prices](http://techcrunch.com/2014/03/25/google-drops-prices-for-compute-and-app-engine-by-over-30-cloud-storage-by-68-introduces-sustained-use-discounts/),
  forcing similar cuts from both Amazon and Microsoft;
* Announced support for the popular Linux container platform
  [docker](http://www.docker.com/), as well as open-sourcing cluster
  management software to go with it;
* Released tools to rapidly spin up clusters of popular open-source
  components [RabbitMQ](http://www.rabbitmq.com/) (a message broker),
  [MongoDB](http://www.mongodb.org/) and
  [Hadoop](http://hadoop.apache.org/), the distributed processing
  framework.

To accompany all of that, at the conference last week they unveiled
some impressive-looking development tools, and just as interesting
from our perspective, complemented their Hadoop offerings with
[new technologies](http://googlecloudplatform.blogspot.com.au/2014/06/reimagining-developer-productivity-and-data-analytics-in-the-cloud-news-from-google-io.html)
based on their internal tools for batch and stream processing.  All of
this is extremely promising for consumers, with the ability to pick
the precise technology stack (and price-point) that best suits their
needs, and three major players keeping prices low.

We will be examining these developments more closely in the weeks
ahead.  If you'd like to talk to us about the different providers, how
a cloud strategy might fit in with your business (or not) or which
provider might be best suited, feel free to drop us a line any time at
[hello@condense.com.au](mailto:hello@condense.com.au).

[^1]: In fact, we have recently delivered a sizeable application using
      almost exactly this design.  If NDAs permit, we might write an
      article about some of the lessons learned.

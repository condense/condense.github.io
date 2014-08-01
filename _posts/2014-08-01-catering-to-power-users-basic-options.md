---
layout: post
title: "Catering to Power Users: Basic Options"
category: thinking
author: Mark Hepburn
description: ""
tags: []
---
{% include JB/setup %}

### Recap

A [few weeks ago]({% post_url 2014-06-20-catering-to-power-users %})
we started looking at the frequently-encountered balancing act around
implementing a data-driven application that:

* Solves the main business requirements, while also
* Providing enough functionality for power-users who need deeper
  access for their work (and for whom implementing specialised
  functionality is neither economically viable, nor time-efficient for
  either party).

We started by diving into the circumstances behind this situation; in
this installment we'll begin examining some concrete options for
addressing it.  If you would like a copy of the full whitepaper on the
topic, please [drop us a line](mailto:hello@condense.com.au).

### Basic Options

The options that we'll cover in this post should be the first ones
considered, due to the completeness of access, and (relative)
simplicity of implementation.  Naturally, the full decision needs to
also consider the users' exact needs and technical sophistication,
security and privacy considerations, and so on.

#### Read-only Database Access

In the most straight-forward scenario, we simply provide select users
with direct access the underlying database.

This approach is best-suited to applications that explore a relatively
static data set, and which don't require specialised computational
requirements.  Happily, these constraints still describe the vast
majority of applications today.

Security can be addressed by granting only read-only access, and if
necessary sensitive data can be protected by the use of views and
careful permissions.

It does assume that the user is willing and able to understand the
schema, and of course knows how to construct database queries and
so-on.  It's common for database administrators to reduce the
complexity for analysts by preparing simplified views of the data for
use in their queries.

Many tools are available for querying the data---even office tools
such as Microsoft Excel---but it does require a certain amount of
sophistication from the user.

#### APIs

A related approach is instead to provide access to an API.[^1] The API
can be simple low-level data access, in a similar fashion to that
described above, but it also has the flexibility to specify
computational access and other higher-level actions.  For example,
instead of constructing SQL that joins over several tables to
construct a list of customers and recent purchases, the API might
provide an `all-customers` method which does the same thing with more
convenience.  Similarly, instead of retrieving this list and plotting
customer addresses on a map, the API might even offer a
`plot-customer-locations` method.

Security and other concerns are now much easier to address, since
there is an extra layer between the user and the resources.  On the
flip side, designing an API that does not unduly restrict users can be
more difficult.

There is a subtle benefit to this approach that is easy to overlook:
it can be quite cost-efficient.  This can occur when the same API that
is given to the users is also used to the build the main application
in the first place.  In this tactic much of the application's logic
and presentation is implemented directly in the browser, which makes
calls to the API to retrieve data and invoke actions as necessary.
This approach to application development has a number of advantages,
not least of which is it makes it much easier to address multiple
platforms (browser, iPhone, Android, ...) since only the interface
needs to be ported.

When users need further access, they are simply given the
documentation for the API, and no further work needs to be done.

The main disadvantage is it requires the user to be proficient with
some programming language to access the API, but if they are already
using [R](http://www.r-project.org/) (for example) to perform
statistical analysis they should find that sample code is enough to
get started.

There's also the risk that poorly designed scripts will place an
unreasonable load on the server---this is particularly a problem where
the API undertakes resource-intensive computations for users.  There
are various techniques which address these issues ranging from quotas
and thresholds, isolating API services to dedicated resources, and
careful design of API processes.

### Wrapping Up

We have examined the simplest options available, which should also be
the default approaches.  While they are simple to implement (database
access can be granted after development without being planned for, and
even modern web techniques often implement an API as a matter of
course, without even thinking of other uses for it), they also offer
the most flexibility for users.  Of course, other issues such as
security and the technical sophistry of the users should always be
considered in tandem.

In our next post in this series we will investigate a few more
advanced options for specialist situations.  As always, if you would
like to talk further about these or any other questions, feel free to
[get in touch](mailto:hello@condense.com.au).

[^1]: Application Programming Interface; a specification for how
      computers can communicate at a relatively high level.  These
      days it often also implies a network communication, such as from
      a web browser or smartphone app to a server.

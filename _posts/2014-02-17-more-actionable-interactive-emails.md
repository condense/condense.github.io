---
layout: post
category : thinking
tagline: "More actionable, interactive emails"
tags:
author: Oliver George
img-responsive: /assets/2014-02-17-image_0.png
---
{% include JB/setup %}

I finally investigated a groovy addition to gmail today.  Using this feature you can make your emails more convenient, interactive and useful.

In the example above you can see that my tripit email has a "view itinerary" button in the listing.  That's called an action button and Google has documented how it works:

> By adding schema.org markup to the emails you send your users, you can make that information available across their Google experience, and make it easy for users to take quick action. Gmail, Google Search and Google Now all already use this structured data.
>
> -- <cite>[Actions in the inbox (Google Developers)](https://developers.google.com/gmail/actions/overview)</cite>

**Types**

It's worth skimming through the [different types actions](https://developers.google.com/gmail/actions/actions/actions-overview) available.  They range from a one click action which doesn't take the user out of their inbox through two more interactivity such as a review action which would allow users to provide feedback, again, without leaving inbox.  You can or also RSVP to something or jump out to webpage.

Condense is data focused and, as you might expect, these interactions are trackable.


> Gmail supports 4 types of actions and 1 interactive card:
>
> * RSVP Action for events
> * Review Action for restaurants, movies, products and services
> * One-click Action for just about anything that can be performed with a single click
> * Go-to Action for more complex interactions
> * Flight interactive cards
>
> -- <cite>[Actions in the inbox (Google Developers)](https://developers.google.com/gmail/actions/actions/actions-overview)</cite>


**How it works**

Essentially you add some additional tag attributes to your HTML source code.  In this case the link in your email which is picked up and rendered by the email client.

Here’s the related HTML from the TripIt email example.  I’ve pulled out the style attributes but otherwise copied it here verbatim:

```
<p itemscope itemprop="about"
   itemtype="http://schema.org/CreativeWork">
  <span itemscope itemprop="action"
        itemtype="http://schema.org/ViewAction">
    <a itemprop="url"
       href="http://www.tripit.com/trip/show/id/1234567">
      <span itemprop="name">
        View itinerary
      </span>
    </a>
  </span>
</p>
```

**Compatibility**

This is essentially a nice to have feature - it improves customer experience but your e-mail campaign will work just fine without it.

I haven’t investigated which other e-mail clients support these features but I don't doubt that they're out there.

Enjoy!

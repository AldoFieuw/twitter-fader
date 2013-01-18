Twitter Fader
=============

Version 1.1.1
-----------

### Introduction

__Twitter Fader__ is a _jQuery_ plug-in which retrieves a number of tweets, based upon a supplied search term, and displays them in a ticker-like display. Each tweet is displayed for a set period of time, then fades out and is replaced by another. This continues indefinitely.

### How to use it

1. Add `jquery.twitterFader.js` to your project, along with _jQuery_.
2. Add a `ul` element to your page, with some identifying characteristic so you can easily target it in _jQuery_.
3. Add the following JavaScript to your page, to be executed on load:

```javascript
	$('ul#twitter').twitterFader('web');
```

...where `twitter` is the ID of your `ul` element, and `web` is your selected topic.

A demo is available in demo.html.

### Additional settings

Additional settings can be used to customise the ticker, and should be added as a second parameter after the topic within curly braces:

+ `displayRate`: The time in milliseconds that each tweet is displayed (default `10000`, or 10 seconds; must be an integer).
+ `fadeRate`: The time in milliseconds that each tweet takes to fade in or out (default `300`; must be an integer).
+ `returnNum`: The number of tweets to retrieve at a time (default `5`; must be an integer).
+ `returnType`: The type of tweets to return (default `"recent"`; can be `"recent"`, `"popular"` or `"mixed"`).
+ `returnLanguage`: The language of the tweets to be retrieved (default `"en"`; must be a string containing an [ISO639-1 code](en.wikipedia.org/wiki/List_of_ISO_639-1_codes)).
+ `linkify`: Whether or not to turn URLs in tweets into clickable links (default `true`; must be boolean).

An example of these in practice:

```javascript
	$('#twf-container').twitterFader('web', {
		displayRate : 5000,
		fadeRate : 500
	});
```

### How it works

The plug-in simply grabs a number of tweets (specified by `returnNum`) and adds them to the `ul` element as `li` elements, with all but the first hidden by default. After a certain amount of time (`displayRate`), the first `li` is faded out and removed. This repeats until no more are left, after which more are retrieved.

### Author and Acknowledgements

+ Written by [Chris Cook](http://chris-cook.co.uk)
+ Utilises [LinkifyURL by Jeff Roberson](https://github.com/jmrware/LinkifyURL)

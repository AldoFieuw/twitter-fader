Twitter Fader
=============

Version 1.1
-----------

### Introduction

__Twitter Fader__ is a _jQuery_ plug-in which retrieves a number of tweets, based upon a supplied search term, and displays them in a ticker-like display. Each tweet is displayed for a set period of time, then fades out and is replaced by another. This continues indefinitely.

### How to use it

1. Add the file to your project, along with _jQuery_.
2. Add a `ul` element to your page, with some identifying characteristic so you can easily target it in _jQuery_.
3. Add the following _jQuery_ to your page, to be executed on load:

    $('ul#twitter').twitterFader('web');

...where `twitter` is the ID of your `ul` element, and `web` is your selected topic.

A demo is available in demo.html.

### Additional settings

Additional settings can be used to customise the ticker, and should be added as a second parameter after the topic within curly braces:

+ `displayRate` sets the time, in milliseconds, that each tweet is displayed (default `10000`, or 10 seconds).
+ `fadeRate` sets the time, in milliseconds, that each tweet takes to fade in or out (default `300`).
+ `returnNum` sets the number of tweets to retrieve (default `5`).
+ `returnType` sets the type of tweets to return, either `"recent"`, `"popular"`, or `"mixed"` (default `"recent"`).
+ `returnLanguage` sets the language of the tweets to be retrieved, based upon an [ISO639-1 code](en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (default `"en"`).

An example of these in practice:

    $('ul#twf-container').twitterFader('web', {
        displayRate: 5000,
        fadeRate: 500
    });

### How it works

The plug-in simply grabs a number of tweets (specified by `returnNum`) and adds them to the `ul` element as `li` elements, with all but the first hidden by default. After a certain amount of time (`displayRate`), the first `li` is faded out and removed. This repeats until no more are left, after which more are retrieved.

### Author

[Chris Cook](http://chris-cook.co.uk)

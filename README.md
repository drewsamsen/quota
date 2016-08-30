# Quota

**Description**:  Quota is an iOS app built with React Native. Its purpose is to provide a nice interface for enjoy and manage Amazon Kindle highlights. Highlights are organized by book, but can also be tagged, searched, shared, and more.

This iOS app has a partner web interface which currently lives on [Heroko](https://glacial-mountain-4423.herokuapp.com). This is a Rails backend with an Angular frontend. This is a working version of what this project aims to simplify for mobile. This iOS app will talk to that Rails backend.

**Main goals for Quota:**

  - **Learn**: Building an iOS app using React Native.
  - **Enjoy**:  This scratches my own itch to have a nice, mobile way to enjoy my thousands of Kindle highlights.
  - **Collaborate**: Work with other developers who are also interested in supporting the project.

### History and Progression

My first attempt at getting my Kindle highlights from Amazon's web interface was a very rudimentary screen-scraper, [Kindle Keep](https://github.com/drewsamsen/kindle_keep), using Sinatra and Capybara. It would fill out my Amazon login form, log in, go to my highlights, scrape, scroll down, wait for Amazon to load in the next batch of highlights, scrape, and repeat. Pretty gnar.

The second attempt is [Quote Takeout](https://github.com/drewsamsen/quote-takeout) which is the Angular frontend with Rails backend. The way this version works is also not incredibly smooth, but it works for me:

1. Log in to [kindle.amazon.com](https://kindle.amazon.com/) and go to the highlights for one of my books
2. Use the [Bookcision](http://www.norbauer.com/bookcision/) Chrome extension to download a JSON file of the highlights
3. Log into [Quote Takeout](https://glacial-mountain-4423.herokuapp.com/)
4. Create a new book
5. Copy and paste the JSON to a "bulk add highlights" form.
6. Browse and tag my favorite highlights.

### The Plan

Currently, Quote Takeout has **122 books** with **5,000 highlights**, and I would love to have these easily accessible on my iPhone. That's where this project, Quota, comes in.

Quota will be an iOS app that connects to the Quote Takeout backend and presents my highlights on the go. The backend, Quote Takeout, will have to be updated as we go to provide the necessary API endpoints.

## Dependencies

xcode, Node, watchman, react-native-cli, etc.

Best to follow the React Native [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) steps provided by Facebook.

## Installation

Fork the repo, `npm install`, `npm start`

## Configuration

Coming soon.

## Usage

Coming soon.

## How to test the software

Coming soon.

## Known issues

Coming soon.

## Getting help

If you have questions, concerns, bug reports, etc, please file an issue in this repository's Issue Tracker.

## Getting involved

Coming soon.

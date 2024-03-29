## Summary

Experimental GitHub Bot to manage SharingCloud development workflows.  
Uses **PostgreSQL** and **Redis**.

### Why ?

GitHub is great and contains many useful features, but sometimes you need more.
Today, you can use labels to have a quick view on the steps of your workflow,
but you have to put them by hand, or write scripts to manipulate them.

One GitHub-hosted possibility is to use GitHub Actions as a workflow orchestrator
(listening on pull request updates, added comments, or even check runs), but GitHub Actions _are_ checks,
so they need to boot at each GitHub event you want to support. They will also show on your Actions list,
so your actual actions (as tests or builds) are not easily visible anymore.

Another problem with GA is that you need to duplicate your workflows for each of your repositories, even if you can use packages
(as on GitHub Packages).

So here is another idea, why not use a centralized bot, which can react to webhook events to manage your workflows, can handle multiple repositories at once,
maintaining state in a database and using per-repository configuration files ? Using the workflow events and GitHub API you can have almost real-time interactions.

Some bots like this already exists, like the Bors bot for the Rust programming language, but this bot will be more specifically designed for our own use-cases.
Il will add some features:

- Use a command system through issue comments to drive the bot
- Specify a regular expression to be matched for pull request titles
- Specify manual QA status for a pull request (skipped, fail, pass, waiting)
- Specify required reviewers for a particular pull request, and lock the merge if these reviews do not pass
- Apply specific labels on pull requests depending on their current state
- Maintain an automatically updated status comment with relevant details
- And maintain a commit status to prevent or allow merge

It will also be drivable via a command-line interface (for one-time actions as synchronizing state, or
import/export), and if possible a terminal-like user interface (TUI, à la htop).

### Features

- Manage PR lifecycle with local data stored in a PostgreSQL database
- Reacts to GitHub Webhooks to update review status
- Generate a summary comment (once per PR)
- Validate PR titles depending on per-repository regexes
- Reacts to comments: Set QA status (or skip), ping, lock/unlock, merge, etc.
- Require mandatory reviewers
- Merge support with merge rules depending on head and base branches (specific merge strategies)
- Enable auto-merge
- Actions that can be triggered from external sources, with simple token-based authentication
- Give rights to external sources on specific repositories
- Send GIFs!

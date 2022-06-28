# Old Readme

# Blindnet password-strength-calculator

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org)

## Development Setup

### Prerequisites

1. Install node
2. Clone this repository

### Installation

From the root (/password-assistant) directory:

1. Install dependencies from npm and/or link local dependencies
    ```
    npx lerna bootstrap
    ```

2. Compile all typescript files
    ```
    lerna run tsc
    ```

# New Readme

<h1 align="center">
  blindnet devkit<br />
  password-assistant
</h1>

<p align=center><img src="https://user-images.githubusercontent.com/7578400/163277439-edd00509-1d1b-4565-a0d3-49057ebeb92a.png#gh-light-mode-only" height="80" /></p>
<p align=center><img src="https://user-images.githubusercontent.com/7578400/163549893-117bbd70-b81a-47fd-8e1f-844911e48d68.png#gh-dark-mode-only" height="80" /></p>

<p align="center">
  <strong>An extensible password evaluation and recommendation engine.</strong>
</p>

<p align="center">
  <a href="https://blindnet.dev"><strong>blindnet.dev</strong></a>
</p>

<p align="center">
  <a href="https://blindnet.dev/docs">Documentation</a>
  &nbsp;•&nbsp;
  <a href="https://github.com/blindnet-io/{project-short-name}/issues">Submit an Issue</a>
  &nbsp;•&nbsp;
  <a href="https://join.slack.com/t/blindnet/shared_invite/zt-1arqlhqt3-A8dPYXLbrnqz1ZKsz6ItOg">Online Chat</a>
  <br>
  <br>
</p>

## About

password-assistant is a collection of Typescript packages that provide tools 
for password evaluation and improvement recommendation.

It includes:
- A password strength calculator
- A package for calculating password entropy
- _and more soon!_

## Get Started

:rocket: Check out our [Quick Start Guide](https://blindnet.dev/docs/quickstart) to get started in a snap.

## Installation

Use [{package manager or plateform}][install-tool] to install {project's name}:

```bash
{install-command}
```

## Usage

📑 The API reference of {type of project, e.g. this SDK} is available on [blindnet.dev](https://blindnet.dev/docs/api_reference/[path-to-project}/latest).

## Development

This project is structured as a [monorepo](https://monorepo.tools/) and uses 
[Lerna](https://lerna.js.org/) to manage all packages. Each package can be 
found in the [packages](/packages) directory.

To install dependencies and build all packages simultaneously, first ensure you 
have [node](https://nodejs.org/en/) and [yarn](https://yarnpkg.com/) installed.

From the root (/password-assistant) directory:

1. Install dependencies from npm and link local dependencies
    ```
    npx lerna bootstrap
    ```

2. Compile all typescript files
    ```
    lerna run tsc
    ```
   
### Testing

To run tests for all packages:
   ```
   lerna run test
   ```

To run tests for a single package:
   ```
   lerna run test --scope=<package_name>
   ```

## Contributing

Contributions of all kinds are always welcome!

If you see a bug or room for improvement in this project in particular, please [open an issue][new-issue] or directly [fork this repository][fork] to submit a Pull Request.

If you have any broader questions or suggestions, just open a simple informal [DevRel Request][request], and we'll make sure to quickly find the best solution for you.

## Community

> All community participation is subject to blindnet’s [Code of Conduct][coc].

Stay up to date with new releases and projects, learn more about how to protect your privacy and that of our users, and share projects and feedback with our team.

- [Join our Slack Workspace][chat] to chat with the blindnet community and team
- Follow us on [Twitter][twitter] to stay up to date with the latest news
- Check out our [Openness Framework][openness] and [Product Management][product] on Github to see how we operate and give us feedback.

## License

The blindnet devkit password-assistant is available under [MIT][license] (and 
[here]
(https://github.com/blindnet-io/openness-framework/blob/main/docs/decision-records/DR-0001-oss-license.md) is why).

<!-- project's URLs -->
[new-issue]: https://github.com/blindnet-io/{project-short-name}/issues/new/choose
[fork]: https://github.com/blindnet-io/{project-short-name}/fork
[install-tool]:

<!-- common URLs -->
[devkit]: https://github.com/blindnet-io/blindnet.dev
[openness]: https://github.com/blindnet-io/openness-framework
[product]: https://github.com/blindnet-io/product-management
[request]: https://github.com/blindnet-io/devrel-management/issues/new?assignees=noelmace&labels=request%2Ctriage&template=request.yml&title=%5BRequest%5D%3A+
[chat]: https://join.slack.com/t/blindnet/shared_invite/zt-1arqlhqt3-A8dPYXLbrnqz1ZKsz6ItOg
[twitter]: https://twitter.com/blindnet_io
[docs]: https://blindnet.dev/docs
[changelog]: CHANGELOG.md
[license]: LICENSE
[coc]: https://github.com/blindnet-io/openness-framework/blob/main/CODE_OF_CONDUCT.md
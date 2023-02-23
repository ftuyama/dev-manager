<img src="https://github.com/ftuyama/dev-manager/blob/main/report/logo-bg.png" width="500">

[![Tests](https://github.com/ftuyama/dev-manager/actions/workflows/test.yml/badge.svg?branch=main&event=push)](https://github.com/ftuyama/dev-manager/actions/workflows/test.yml)

The Dev Manager Project is a tool designed to help development managers track the performance of their developers by collecting data from Slack, JIRA, and Gitlab.

This project provides an easy-to-use dashboard that displays key metrics related to the developers' work such as the number of pull requests, commits, and comments made, as well as the number of tickets assigned and completed.

With the help of this tool, managers can easily identify bottlenecks and areas of improvement for their team. It allows managers to drill down into the details of individual developers, identify their strengths and weaknesses, and provide them with targeted feedback and support.

<img src="https://github.com/ftuyama/dev-manager/blob/main/report/report.png" width="500">

## How to use it

First, you can configure your API settings by running the interactive setup:

```shell
make setup
```

You can generate a new report by running:

```shell
make run
```

You can visualize the web UI by running:

```shell
make web
```

## Backend Architecture

```mermaid
sequenceDiagram
    participant DevManager
    participant ReportService
    participant Gitlab
    participant Jira
    participant Slack

    DevManager->>ReportService: Generate report
    Note right of DevManager: Start generating <br/>report

    ReportService->>Gitlab: Fetch data
    loop Gitlab report
        Gitlab->>Gitlab: Analyse MRs
        Gitlab->>Gitlab: Analyse Code reviews
    end
    Gitlab-->>ReportService: Data

    ReportService->>Jira: Fetch data
    loop Jira report
        Jira->>Jira: Analyse assigned tickets
    end
    Jira-->>ReportService: Data

    ReportService->>Slack: Fetch data
    loop Slack report
        Slack->>Slack: Analyse messages sent
    end
    Slack-->>ReportService: Data

    ReportService-->>DevManager: Report
    Note right of DevManager: Save data in<br/>a json file
```

## Modules Architecture

This is the current architecture, where I generate the showcase data and webpage offline.

```mermaid
classDiagram

Backend --|> Report : Generate
Backend : ruby
Backend : generateReport()
Backend : getDataGitlab()
Backend : getDataJira()
Backend : getDataSlack()

Report : jsonData

Frontend <|-- Report : Read file
Frontend : vue.js
Frontend : renderWebpage()
Frontend --|> Dist : Build

Dist : HTML, CSS, Javascript

Github Pages --|> Dist : Read
Github Pages : serverless
Github Pages : updatePage()
```

If it was supposed to be dynamic and handle real users, we could have this instead:

```mermaid
classDiagram

BackendCore --|> Report : Generate
BackendCore : ruby
BackendCore : cloud server
BackendCore : generateReport()
BackendCore : getDataGitlab()
BackendCore : getDataJira()
BackendCore : getDataSlack()

Report : jsonData

BackendServer <|-- Report
BackendServer  --|> BackendCore : generateReport()
BackendServer : Rails
BackendServer : cloud server
BackendServer : getReport()

FrontendServer <|-- BackendServer : report
FrontendServer --|> BackendServer : getReport()
FrontendServer : vue.js
FrontendServer : cloud server
FrontendServer : renderWebpage()

FrontendServer --|> User
FrontendServer <|-- User
```

---
title: cirriculum vitae
filename: cv
date: 2022-03-20T00:17:44
author: Jack Henry
pin: true
---

# Jack Henry Erickson-Vanoss
<div class="flex-align-center">
  <span class="material-icons mr-4">email</span>
  <span>jack@jackhenry.io</span>
</div>
<div class="flex-align-center">
  <span class="material-icons mr-4">smartphone</span>
  <span>999-999-9999</span>
</div>
<div class="flex-align-center">
  <span class="material-icons mr-4">code</span>
  <span>github.com/jackhenry</span>
</div>
<div class="flex-align-center">
  <span class="material-icons mr-4">language</span>
  <span>jackhenry.io</span>
</div>

## Education
<div class="education-flex">
<span id="school-icon" class="material-icons">navigate_next</span>
B.S. Computer Science<br/>Metropolitan State University<br/>Graduated December 2021
</div>

<div id="as" class="education-flex">
<span id="school-icon" class="material-icons">navigate_next</span>
A.S. Computer Science<br/>Century College<br/>Graduated August 2020</p>
</div>

## Projects
### arna
_repo_: github.com/jackhenry/arna

_demo_: jackhenry.io/arna

_description_: A monorepo containing various packages for generating, modifying, and rendering force directed graphs.
Includes an implementation of a custom DSL for defining graphs.

_tools_: <span class="tools-list"><span>typescript</span> <span>svelte+vite</span> <span>chevrotain</span> <span>konvajs</span> <span>tailwindcss</span></span>

### rustntp
_repo_: github.com/jackhenry/rustntp

_description_: Implementation of a Simple Network Time Protocol version 4 server and client in rust. The primary goal is to be
compliant with RFC 4330.

_tools_: <span class="tools-list"><span>rust</span> <span>tokio</span> <span>rustls</span></span>

### jackhenry.io
_repo_: github.com/jackhenry/jackhenry.github.io

_demo_: jackhenry.io

_description_: My personal website. Purposefully built with vanilla javascript and to be bundled with no external dependencies. The repo contains node scripts for converting markdown files into html.

_tools_: <span class="tools-list"><span>javascript</span> <span>webpack</span> <span>node</span> <span>handlebars</span></span>


## Work Experience
### Security and Compliance Analyst
<span class="flex-align-center"><span class="material-icons mr-4">calendar_today</span>Jul 2018 - Feb 2019</span>
<span class="flex-align-center"><span class="material-icons mr-4">place</span>Assurant INC, Woodbury MN</span>

- Developed SQL queries and scripts to retrieve user access information for databases, active directory, and internal applications.
- Automated data preprocessing procedures with python and powershell.
- Documented and escalated security or compliance issues related to user access.
- Introduced new internal naming standards and file organization standards.
- Assisted with internal and external audit requests by acting as a liason between auditors and system administrators.

### Technical Specialist
<span class="flex-align-center"><span class="material-icons mr-4">calendar_today</span>Sep 2016 - Jun 2018</span>
<span class="flex-align-center"><span class="material-icons mr-4">place</span>Computer Whatever, Anoka MN</span>

- Configured and supported IMAP, POP3, and hosted Exchange accounts.
- Provided support for common software packages likes Microsoft Office and Quickbooks.
- Repaired and replaced hardware components in laptops, desktops, and servers.
- Implemented a new and more efficient backup procedure for client devices.
- Utilized ticketing platform to document technical solutions.

### Sales and Support Associate
<span class="flex-align-center"><span class="material-icons mr-4">calendar_today</span>Mar 2015 - Oct 2015</span>
<span class="flex-align-center"><span class="material-icons mr-4">place</span>Central Computer, San Mateo CA</span>

- Provided first line of technical support for clients.
- Assisted in basic troubleshooting of client devices.
- Documented and created support tickets for elevated issues.
- Responded to technical inquiries from propsective clients.

<script>
  document.write('<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">');
  //document.getElementById('jack-henry-erickson-vanoss').innerHTML = 'Jack Henry';
  const secretMode = () => {
    const head  = document.getElementsByTagName('head')[0];
    const link  = document.createElement('link');
    link.id   = 'secret';
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = '../assets/css/resume.css';
    link.media = 'all';
    head.appendChild(link);
    document.getElementById('head').remove();
    document.getElementById('subhead').remove();
    document.getElementById('jack-henry-erickson-vanoss').innerHTML = 'Jack Henry Erickson-Vanoss';
  }

  let clickCount = 0;
  let secretModeEnabled = false;
  document.getElementById('jack-henry-erickson-vanoss').addEventListener('click', () => {
    clickCount += 1;
    if (clickCount === 3 && !secretModeEnabled) {
      secretModeEnabled = !secretModeEnabled;
      secretMode();
    }
  })
</script>

<style>
  h1, h3 {
    border-bottom: 0px !important;
  }
  p {
    margin-bottom: 0px;
    margin-top: 0px;
  }
  ul {
    list-style-type: none;
  }
  li:before {
    font-family: 'Material Icons';
    content: 'navigate_next';
    vertical-align: -7%;
  }
  em {
    padding-left: 0px;
    text-decoration: underline;
    color: var(--link-hover-color);
  }
  #as {
    margin-top: 8px;
  }
  .tools-list > span:nth-child(odd) {
    color: var(--secondary-fg-color);
  }
  #arna {
    margin-top: 0px;
  }
  #security-and-compliance-analyst {
    margin-top: 0px;
  }
  #technical-specialist {
    margin-top: 0px;
  }
  #sales-and-support-associate {
    margin-top: 0px;
  }
  em {
    background-color: unset !important;
  }
  .material-icons {
    font-size: 14px;
  }
  .education-flex {
    display: flex;
    align-items: center;
  }
  .flex-align-center {
    display: flex;
    align-items: center;
  }
  .mr-4 {
    margin-right: 4px;
  }
  #school-icon {
    font-size: 18px;
    margin-top: 4px;
    margin-right: 8px;
    place-self: start;
  }
  #jack-henry-erickson-vanoss {
    margin-bottom: 2px;
  }
</style>
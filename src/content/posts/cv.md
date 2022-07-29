---
title: cirriculum vitae
filename: cv
date: 2022-03-20T00:17:44
author: Jack Henry
pin: true
---

# Jack Henry Erickson-Vanoss
<div id="info" class="flex-align-center">
  <div class="flex-align-center">
    <span class="material-icons mr-4">email</span>
    <span>jack@jackhenry.io</span>
  </div>
  <div class="flex-align-center">
    <span class="material-icons mr-4">language</span>
    <span>www.jackhenry.io</span>
  </div>
  <div class="flex-align-center">
    <span class="material-icons mr-4">smartphone</span>
    <span>+1 651 503 9531</span>
  </div>
</div>

## Education
<div class="education-flex">
<span id="school-icon" class="material-icons">navigate_next</span>
B.S. Computer Science (Dec. 2021)<br/>Metropolitan State University
</div>

<div id="as" class="education-flex">
<span id="school-icon" class="material-icons">navigate_next</span>
A.S. Computer Science (Aug. 2020)<br/>Century College
</div>

## Projects
### arna graph
A monorepo containing various packages for generating, modifying, and rendering force directed graphs.

<span class="tools-list"><span>typescript</span> <span>svelte</span> <span>vite</span> <span>chevrotain</span> <span>konvajs</span> <span>tailwindcss</span></span>

### babel-as-a-service (baas)
A service that provides babel transpilations through a REST API.

<span class="tools-list"><span>python</span> <span>kubernetes</span> <span>FastAPI</span> <span>typescript</span> <span>webpack</span> <span>react</span> <span>express</span> <span>redux</span></span>

### rustntp
Implementation of a Simple Network Time Protocol version 4 server and client.

<span class="tools-list"><span>rust</span> <span>tokio</span> <span>rustls</span></span>

## Work Experience
### Security and Compliance Analyst @ Assurant Inc., Woodbury MN
<span class="flex-align-center"><span class="material-icons mr-4">calendar_today</span>Jul 2018 - Feb 2019</span>

- Automated generation of user access reports with SQL, Python, and PowerShell.
- Maintained and refactored internal scripts and tools.   
- Worked with DBAs to expose data for reporting tools.
- Documented and escalated security or compliance issues.
- Created and revised documentation for internal services and applications.
- Introduced new naming and organizational standards.

### Technical Specialist @ Computer Whatever, Anoka MN
<span class="flex-align-center"><span class="material-icons mr-4">calendar_today</span>Sep 2016 - Jun 2018</span>

- Configured and supported IMAP, POP3, and hosted Exchange accounts.
- Provided support for common software packages like Microsoft Office.
- Implemented new backup procedure that was five times faster than previous method.
- Documented technical solutions for internal and external use.

<script>
  document.write('<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">');
  document.getElementById('jack-henry-erickson-vanoss').innerHTML = 'Jack Henry';
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
  });
  secretMode();
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
  .tools-list {
    display: flex;
    align-items: center;
    gap: 8px;
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
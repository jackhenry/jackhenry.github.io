---
title: about me
filename: me
date: 2022-03-20T00:17:44
author: Jack Henry
pin: true
---

## Who am I?

My name is Jack Henry.

I live in St. Paul, Minnesota. I was born and raised in Minnesota, but moved to Ojai, California during my sophomore year of high school.

After graduating high school, I lived in San Francisco, CA for about 4 years. I eventually moved back to St. Paul, MN.

I have a cat named <a id="malone-label">Malone</a>.

<img id="malone-img" src="../assets/img/malone.gif" alt="malone" style="display: none; margin-left: auto; margin-right: auto;"/>


I enjoy baking <a id="bread-label">bread</a>. I'm interested in foreign languages and travel. My favorite animal is the capybara.

<img id="bread-img" src="../assets/img/bread.webp" alt="bread" style="display: none; margin-left: auto; margin-right: auto;"/>

## Programming

I've been passionate about computer science since I was 16. At the time, I bought a book titled "C++ for Dummies" and taught myself to program. It was a grueling experience. Yet, immensely rewarding.

I decided that I wanted to study computer science in college. In December of 2021, I received a B.S. in Computer Science from Metropolitan State University.

## Current Work

As a fresh college grad, I am currently looking for a software development position. You can view a curated list of my public projects [here](/#projects).

I have frontend development exprience using _Javascript_ and _Typescript_. The frameworks I am most familiar with are _React_ and _Svelte_. 

Additionally, I've developed backend services using _Express_, _NestJS_, _Flask_, and _Spring_. I've created REST and _GraphQL_ APIs.

If you know of an open position and think I may be a good fit, please [contact me](mailto:jack@jackhenry.io)

## Areas of Interest

Throughout my studies and personal endeavors, I've dabbled in a broad range of topics in computer science/programming. 
The following is a list of topics I think are neat:

* Lexing and parsing
* NTP and time synchronization
* Transpilation
* Virtual DOM
* Alternative version control systems
* Emulation
* Graph layout algorithms
* Non-relational database systems

<script>
  const registerClickHandler = (label, img) => {
    let show = false;
    label.addEventListener('click', () => {
      show = !show;
      if (show) {
        img.style.display = 'block';
      } else {
        img.style.display = 'none';
      }
    });
  }

  const maloneLabel = document.getElementById('malone-label');
  const maloneImage = document.getElementById('malone-img');
  const breadLabel = document.getElementById('bread-label');
  const breadImage = document.getElementById('bread-img');
  
  registerClickHandler(maloneLabel, maloneImage);
  registerClickHandler(breadLabel, breadImage);
  
</script>
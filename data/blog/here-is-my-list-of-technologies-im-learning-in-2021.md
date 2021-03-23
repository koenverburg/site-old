---
title: Here Is My List of Technologies I'm Learning in 2021

# Medium only
kicker: Yearly Learning

# Medium only
subTitle: From new programming languages to the creation of cloud environments

# medium 5 tags, dev.to 4
tags: functionalprogramming, docker, kubernetes, go

# Dev.To only
series:

# Seo, this is a manual step to copy 'n paste
description: A list of topics I want to learn during 2021, from a new programming language to K8s, Docker and more.

canonical_url: https://koenverburg.dev/blog/here-is-my-list-of-technologies-im-learning-in-2021

published: false

date: '2021-03-19'
---

This year I want to set a list of topics that I want to learn for this year.
At the end of the year, I will reflect on how much of the lists I have achieved.

<hr />

## 1. [Functional Programming][1]
A simple gist of Functional Programming is all about functions for immutable variables. In contrast to Object-Oriented languages, which are more about a fixed set of functions and modifying or adding new variables.

A year ago I had my first go at it when I worked with Elixir but now that I don't use it anymore, it has faded a bit. And because Functional Programming has always intrigued me. I want to pick it up again.

In this year I will experiment with the concept of Functional Programming, what it is and what makes it functional? And how do Functional Programming Languages like Elixir and Haskell use these practices?

I will go back to Elixir to learn Functional Programming, but also I want to use these practices in other languages like TypeScript, C# and Go. Because I use those on a daily basis.

## 2. [Golang][2]
Golang is created by Google and it's getting more and more adoption by large companies and Open-Source Software Projects. Think about Docker and Kubernetes which are quite popular for what they are, but they are also written in Go.

A few months ago Github Released there Profile Readme's and a Hypetrain started, Everyone was creating and polishing there Profile Readme's.

I looked around and saw there where a few people that create a auto generating readme based on a cron schedule. I wanted that as well, and started to think about which language to use for this. I could write it Python or NodeJS but I wanted something completely new, So I settled for Go.

Since then I have written small CLI programs in Go. But I'm still scratching the surface of the language but during this year I will write most of my API's, Web Scrappers and CLI tools in Go.
 
## 3. [Docker][3]
Docker is a set of tools for developing, running and shipping your applications.  
It allows for a simple Command Line Interface. And it separates your application runtime from the infrastructure it is running on.

I'm familiar with Docker and have run my personal website on Docker in production for a long time. Because I also want to educate other people on Docker I have to dive into it a bit deeper. Besides that I also want to learn about networking, routing, and load balancing.

During this year I'm going to write Go programs and run those in Docker. What those programs will be, I don't know yet. Maybe a Slackbot or a simple website using Go.

## 4. [Terraform][4]
Terraform is an open-source Infrastructure As Code tool that allows for managing the cloud by defining it as readable configuration files.

What I like about Terraform is that you just specify your [cloud provider][6] and you are ready to create and document your Infrastructure as code. With the documentation nearby you can scaffold you Infrastructure pretty fast.

That this time I have used Terraform for only one project at work and personal prototypes. But the exposure I got was enough for me to know that this is a great tool for me to use.

During this year I want to setup more projects in the cloud with Terraform, think about VM's, [AKS][7] resources and full DTAP-Streets with traditional App Services in Azure.

## 5. [Kubernetes][5]
Kubernetes is a container orchestration system to manage, scale and deployment your applications.

Kubernetes is still a new topic for me and I'm still scratching the surface on what I can do with it. But I think this is the future of managing your apps in the cloud.

I want to make sure that every project I deliver will be reliable and can handle any load the visitors can throw at it during Black Friday or other campaigns.

I'm currently running a [k3s][8] cluster on a set of Raspberry Pis at home. I'm documenting my progress in [this repository][9]. _(small disclaimer: I'm merely documenting it for myself do not expect documentation grade reading materials at this point in time)_

During this year I will setup k8s from scratch on VM's and later I want to look at what [AKS (Azure Kubernetes Service)][7] brings to the table.

<hr />

That's the list, thank you for reading! What are you learning this year?

Be sure to follow me on Medium, Instagram and Twitter where you can follow along with the process.

Links of the topics I talked about
- [Functional Programming][1]
- [Golang][2]
- [Docker][3]
- [Terraform][4]
- [Kubernetes][5]

[1]:https://en.wikipedia.org/wiki/Functional_programming
[2]:https://golang.org
[3]:https://www.docker.com
[4]:https://www.terraform.io
[5]:https://kubernetes.io
[6]:https://registry.terraform.io/browse/providers
[7]:https://docs.microsoft.com/en-us/azure/aks
[8]:https://k3s.io
[9]:https://github.com/koenverburg/cloudfiles



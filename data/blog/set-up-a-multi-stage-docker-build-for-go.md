---
title: Set up a Multi-Stage Docker Build for Go Applications

# Medium only
kicker:

# Medium only
subTitle: A good start is half the job done

# medium 5 tags, dev.to 4
tags: docker, golang, containers, devops

# Dev.To only
series: docker

# Seo, this is a manual step to copy 'n paste
description: We are going to create a simple multi-stage Docker build setup for Go applications. The goal here is to end up with a docker image that only contains and runs the final binary.

canonical_url: https://koenverburg.dev/blog/set-up-a-multi-stage-docker-build-for-go

published: false

date: '2021-08-22'
---

We are going to create a simple multi-stage Docker build setup for Go applications. It might sound daunting at first, but it's actually really easy.

A multi-stage Docker build serves a few purposes. First, the final image size is smaller than traditional images, second, it's more secure.

Using dockers layering, we can abstract the building processes into multiple stages. And only copy the output that we need for the next stage. For example, the binary that gets created we're running `go build -o main`.

The goal here is to end up with a docker image that only contains and runs the final binary. What that final binary is, does not really matter in this context. But in this article, I'm going to use a simple script that outputs text to the console.

### Requirements
We are going to need the following tooling, so make sure you installed it on your machine.

- Go 1.x or higher
- Docker
- VSCode or any other editor

### Let's write some code
Let's create the folder structure so that we have a good base to build from.
Make a directory called `src` and `cd` into that.

Now, let's initialize our go package with the follow command `go mod init hello-world`. This will create a file called `go.mod`.

With that part done, lets write a simple Hello World in Go.
Create a file called `main.go` in our `src` directory and add the follow code.

```go
package main

import "fmt"

func main() {
  fmt.Println("Hello World!")
}
```

If you run this using `go run main.go` the output would be `Hello World!`.
Great, with that part out of the way, we can start with diving into Docker!

### Golang base image
Change directory (`cd ..`) to the project root, here we are going to create a `dockerfile`. Paste in the follow code and then I will explain what we are doing.

```dockerfile
FROM golang:1.16-alpine

# Create a workspace for the app
WORKDIR /app

# Download necessary Go modules
COPY src/go.mod .
RUN go mod download

# Copy over the source files
COPY src/*.go ./

# Build
RUN go build -o /main

ENTRYPOINT ["/main"]
```
In here we are going to do a few things, on the `FROM` line we are going to specify which base image we are going to use.
Setting a `WORKDIR` is like setting a special folder from which we are going to work.
Then we are to copy over our `go.mod`, download our packages if needed. And then we are going to copy over our source code.

After this we are ready to build our go application, we do that using `RUN go build -o /main`.
Now that we have created a single binary, we can set that as our entrypoint when we run our docker image.

To build our image, we will use `docker build . -t hello-world-golang1.16`, this will build the image.
After the build has finished. We can run our image as a container using the command `docker run hello-world-golang1.16` to test of this works.
And you should get an output like `Hello World!`.

Let's also check what the size is of our image. Using the command `docker images` we can see the size.

```
REPOSITORY               TAG       IMAGE ID       CREATED              SIZE
hello-world-golang1.16   latest    68b776701cbe   About a minute ago   304MB
```

Wow, that is a heavy image! Coming in at 304 MB. Let's try to cut of some fat here.

During my research on using multi-stage Docker builds. I saw that the Docker documentation used a Debian base image. Because of that, I wanted to also include it here as well.

Let's replace our `dockerfile` that we created earlier with the following. Note here the two comments, Builder and Runner. The Builder part is for building the go application and nothing more. The same can be said for the Runner part because that's soul purpose is running our application.

The builder has  `golang:1.6-alpine` as base image because it needs to have the `Go` binary in its path. Because Go compiles to a single binary, running it does not need the presence of Go. So we can use a base image from Debian for our final image that will run our application.

```dockerfile
#
# Builder
#

FROM golang:1.16-alpine AS builder

# Create a workspace for the app
WORKDIR /app

# Download necessary Go modules
COPY src/go.mod .
RUN go mod download

# Copy over the source files
COPY src/*.go ./

# Build
RUN go build -o /main

#
# Runner
#

FROM gcr.io/distroless/base-debian10 AS runner

WORKDIR /

# Copy from builder the final binary
COPY --from=builder /main /main

USER nonroot:nonroot

ENTRYPOINT ["/main"]
```

I'm changing the build command, so we don't overwrite the image we created earlier. This way we can see what our changes are doing to the final docker image.

Build our new image using `docker build . -t hello-world-debian`. Let's see if this changed the behavior of the container `docker run hello-world-debian`. And you should get the same output as before: `Hello World!`.

Let's check size using `docker images`.

```
REPOSITORY               TAG       IMAGE ID       CREATED              SIZE
hello-world-debian       latest    7ad8a5965a06   About a minute ago   21.1MB
hello-world-golang1.16   latest    68b776701cbe   About a minute ago   304MB
```

Look at that, 21.1 MB, that is a significant reduction in size!

Awesome, but can we push it even more? Yes, we can!

Using the smallest docker base image that there is.
Which is `stratch`. This is as bare as it gets. In the runner part of the docker file, change out the `FROM `statement to `stratch` like below.

```dockerfile
#
# Runner
#

# FROM gcr.io/distroless/base-debian10 AS runner
FROM stratch AS runner
```

Build our new image using `docker build . -t hello-world-stratch`.
Let's see if this changed the behavior of the container `docker run hello-world-stratch`. And you should get the same output as before: `Hello World!`.

Let's check the size once more using `docker images`.

```
REPOSITORY               TAG       IMAGE ID       CREATED              SIZE
hello-world-stratch      latest    eb41c9777973   58 seconds ago       1.94MB
hello-world-debian       latest    7ad8a5965a06   About a minute ago   21.1MB
hello-world-golang1.16   latest    68b776701cbe   About a minute ago   304MB
```

Would you look at that, 1.94 MB! That is perfect!

### Wrapping it up
I hope I have inspired you to use multi-stage Docker builds for your next project. This is still a simple two-stage Docker build, you can even use more stages if you need or when your project asks for it.

Here is a few useful links and also the source code, so you can try it out for yourself.

- [Golang][1]
- [Docker][2]
- [Source code][3]

[1]:https://golang.org
[2]:https://docs.docker.com/language/golang/build-images/#multi-stage-builds
[3]:https://github.com/koenverburg/article-source-code/tree/main/multi-stage-docker-build-go

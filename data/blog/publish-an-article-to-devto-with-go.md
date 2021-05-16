---
title: Publish an Article To DEV.to With GO

# Medium only
kicker: Automation

# Medium only
subTitle: Create an easy workflow to publish Markdown Articles to Dev.To via a GO script

# medium 5 tags, dev.to 4
tags: go, automation, scripting, cli

# Dev.To only
series: Automation

# Seo, this is a manual step to copy 'n paste
description: Create an easy workflow to publish Markdown Article to Dev.To via a GO script

canonical_url: https://koenverburg.dev/blog/publish-an-article-to-devto-with-go

published: false

date: '2021-03-01'
---

We are going to create a program that will allow us to post draft articles from Markdown to [DEV.to](https://dev.to) with ease.


### Requirements
We are going to need the following tooling so make sure it is installed on your machine.

- Go 1.x or higher
- VSCode or any other editor
- Any terminal
- An DEV.to account
- An DEV.to API key

### Getting Started

**1. Scaffolding the project**

First, let's set up the project structure so have a base to work on.

```bash
mkdir devAutomation && cd devAutomation

touch .env
touch main.go

go mod init devAutomation

echo "# Hello Dev.To
Lorem ipsum dolor sit amet, consectetur adipiscing elit." >> example.md
```

Here we are doing a few things, on the first line, we are creating a directory for our project and changing directory into that folder.

Secondly, we are creating a few files. The `.env` file is for the environment variables like the API key which we are getting in step 2. And the  `main.go`  is the starting point of our program.

Then we need to initialize the module using `go mod init` and lastly we need an example Markdown file to post to DEV.to.

**2. Getting the API key**

Let's get the API key go to [this page](https://dev.to/settings/account) and scroll down to the section named "DEV API Keys". Create a new API key and name accordingly.

<img alt="DEV API Keys" src="/images/blog/publish-an-article-to-devto-with-go/DEV API Keys.png" />

Let's save the API key in the `.env` file we created in step 1.

```ini
DEV_TO_API_KEY='your-api-key'
```


**3.  Reading Markdown**

Reading the Markdown file is quite easy. We are going to read the example markdown using `ioutil.ReadFile` and using `fmt.Println` we are for now printing the contents to the terminal.

```go
func main() {
	file, err := ioutil.ReadFile("./example.md")
	if err != nil {
		fmt.Println(err)
	}

	fmt.Println(string(file))
}
```

You should have an output looking like the following:

```txt
# Hello Dev.To
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
```


**4.  Creating the API Request**

The API call is the hardest part of this tutorial. First, we need some types. These are needed to ensure the data we are posting to the API will get through correctly.

Using these types we can also see that what we can send over to the API.
```go
type DevTo struct {
	Article Article `json:"article"`
}

type Article struct {
	Title        string   `json:"title"`
	Published    bool     `json:"published"`
	Series       string   `json:"series"`
	MainImage    string   `json:"main_image"`
	Canonical    string   `json:"canonical_url"`
	Description  string   `json:"description"`
	Tags         []string `json:"tags"`
	BodyMarkdown string   `json:"body_markdown"`
}
```


Let's create a new function called `publish` and create the request logic in there.
For the sake of this demo, I will split the example markdown file on a new line so we have a separate title and body for our article.

*For more advanced articles please take a look at the [Frontmatter](https://docs.dev.to/api/#operation/createArticle) options that DEV.to supports.*

In this part, we will create the `responseBody`  and add our data.
Then we create the `payload` and added it to the request.

After that, we are doing a few if checks to make sure we get the appropriate log message printed to the terminal when the API call fails, succeeds, or returns with another status code.

```go
func request(body string) {
	url := "https://dev.to/api/articles"
	content := strings.Split(body, "\n")
	responseBody := DevTo{
		Article: Article{
			Published:    false, // this will ensure it's a draft
			Title:        content[0],
			BodyMarkdown: content[1],
		},
	}

	payload, _ := json.Marshal(responseBody)
	request, err := http.NewRequest("POST", url, bytes.NewBuffer(payload))

	request.Header.Add("api-key", apikey)
	request.Header.Add("Content-Type", "application/json")

	client := &http.Client{}
	response, err := client.Do(request)

	if err != nil {
		log.Fatalln(err)
	}
	defer response.Body.Close()

	if response.StatusCode == 200 || response.StatusCode == 201 {
		log.Println("Created new article on Dev.To")
	}

	if response.StatusCode != 200 && response.StatusCode != 201 {
		responseMessage, _ := ioutil.ReadAll(response.Body)
		log.Fatalln(string(responseMessage))
	}
}

```

**5. Loading in the API key**

We also need to set the API to authorize the post request. For this, we will need the `godotenv` module to read the `.env` file.

```bash
go get github.com/joho/godotenv
```

Here we have a utility function to get the API key. On the first line, we are reading the `.env` file and if there is an error we will print that. Otherwise, it's correctly read and we print a message that it's correctly loaded in.

```go
func env(key string) string {
	err := godotenv.Load("./.env")
	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	log.Println("Loaded the .env file")

	return os.Getenv(key)
}
```

Revisited the `request` function we created in step 4, and add the following line.
If you have kept an close eye you would have spotted that `apikey` wasn't declared.
```go
// ... other code
func request(body string) {
	apikey := env("DEV_TO_API_KEY") // <-- this line
	url := "https://dev.to/api/articles"
	content := strings.Split(body, "\n")

	// ...rest of the function
}
```

**6. Connecting all the pieces**

Now go back to the `main` function we created in step 3. And add the following line.
```go
func main() {
	file, err := ioutil.ReadFile("./example.md")
	if err != nil {
		fmt.Println(err)
	}

	request(string(file)) // <-- this line
}
```

This will bootstrap all the functions we created and pass along the contents of the markdown file.

If you run this in the terminal you should see the following output
```txt
18:51:36 Loaded the .env file
18:51:37 Created new article on Dev.To
```

Open up your DEV.to [dashboard](https://dev.to/dashboard) and you should see a new entry be listed there.
<img alt="New Post in Dev.to" src="/images/blog/publish-an-article-to-devto-with-go/New Post in Dev.to.png" />
<img alt="New post detail page" src="/images/blog/publish-an-article-to-devto-with-go/New post detail page.png" />

### Wrapping it up.
Congrats you now have a program to upload your Markdown-based articles to Dev.to using Golang.

target "ghaction-docker-meta" {}

target "site-preview" {
  inherits = ["ghaction-docker-meta"]
  context = "./"
  dockerfile = "Dockerfile"
  tags = [
    "ghcr.io/koenverburg/site/site-preview"
  ]
}


target "site" {
  inherits = ["ghaction-docker-meta"]
  context = "./"
  dockerfile = "Dockerfile"
  tags = [
    "ghcr.io/koenverburg/site/site"
  ]
}


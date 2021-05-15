target "ghaction-docker-meta" {}

target "site-preview" {
  inherits = ["ghaction-docker-meta"]
  context = "./"
  dockerfile = "Dockerfile"
  tags = [
    "ghcr.io/koenverburg/site/site-preview"
  ]
}

target "site-preview-okteto" {
  inherits = ["ghaction-docker-meta"]
  context = "./"
  dockerfile = "Dockerfile"
  tags = [
    "registery.cloud.okteto.net/koenverburg/site/site-preview"
  ]
}

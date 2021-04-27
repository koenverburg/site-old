target "ghaction-docker-meta" {}

target "site-preview" {
  inherits = ["ghaction-docker-meta"]
  context = "./"
  dockerfile = "dockerfile"
  tags = [
    "ghcr.io/koenverburg/site/site-preview"
  ]
}

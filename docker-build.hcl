target "ghaction-docker-meta" {}

target "site-nextjs" {
  inherits = ["ghaction-docker-meta"]
  context = "./"
  dockerfile = "dockerfile"
  tags = [
    "ghcr.io/koenverburg/site/site-nextjs"
  ]
}

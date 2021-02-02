bake:
  docker build -f scripts/docker/Dockerfile -t site .

bake-debug:
  docker build -f scripts/docker/Dockerfile.debug -t sited .

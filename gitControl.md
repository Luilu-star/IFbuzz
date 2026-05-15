# Ai

```sh

    #!/bin/bash

    git fetch origin

    git checkout main
    git pull origin main

    for branch in $(git for-each-ref --format='%(refname:short)' refs/heads/); do
        if [ "$branch" != "main" ]; then
            echo "Resetando $branch para main..."
            git checkout "$branch"
            git reset --hard main
        fi
    done

    git checkout main
```
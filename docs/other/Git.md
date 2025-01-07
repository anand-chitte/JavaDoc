# Git

Git is a **distributed version control system** that allows multiple developers to collaborate on software development projects. It helps track changes to files, manage code versions, and allows teams to work on the same codebase simultaneously without overwriting each other's work.

## Key Features of Git

- **Version Control**: Git records the history of changes to files, enabling developers to revert to previous versions, track changes over time, and manage code versions.

- **Distributed**: Unlike centralized version control systems, where there is a central server holding the repository, Git allows each developer to have a complete local copy of the repository, including its history.

- **Branching and Merging**: Git allows developers to create branches to work on different features or bug fixes separately. After completing work, they can merge their changes back into the main branch.

- **Collaboration**: Git makes it easier for multiple developers to work on a project simultaneously, handle conflicts, and track who made each change.

## Usage in Development

Git is widely used in software development and is the underlying system for platforms like **GitHub**, **GitLab**, and **Bitbucket**, where developers can share code, collaborate, and manage repositories remotely.


### Git Cheatsheet

---

### **Setup**
- `git config --global user.name "Your Name"` - Set the global username for Git.
- `git config --global user.email "youremail@example.com"` - Set the global email for Git.
- `git config --list` - Display Git configuration.

---

### **Repository Initialization**
- `git init` - Initialize a new Git repository.
- `git clone <repository-url>` - Clone an existing repository.

---

### **Basic Snapshotting**
- `git status` - Check the current repository status.
- `git add <file>` - Add a file to the staging area.
- `git add .` - Add all changes to the staging area.
- `git reset <file>` - Unstage a file.
- `git commit -m "message"` - Commit staged changes with a message.
- `git commit --amend` - Modify the last commit.

---

### **Branching and Merging**
- `git branch` - List all branches.
- `git branch <branch-name>` - Create a new branch.
- `git checkout <branch-name>` - Switch to an existing branch.
- `git checkout -b <branch-name>` - Create and switch to a new branch.
- `git merge <branch-name>` - Merge a branch into the current branch.
- `git branch -d <branch-name>` - Delete a branch.

---

### **Remote Repositories**
- `git remote -v` - List remote repositories.
- `git remote add <name> <url>` - Add a new remote.
- `git fetch <remote-name>` - Fetch updates from a remote repository.
- `git pull <remote-name> <branch>` - Pull changes from a remote branch.
- `git push <remote-name> <branch>` - Push changes to a remote branch.
- `git remote rename <old-name> <new-name>` - Rename a remote.
- `git remote remove <name>` - Remove a remote.

---

### **Stashing Changes**
- `git stash` - Stash uncommitted changes.
- `git stash list` - List all stashes.
- `git stash apply` - Apply the most recent stash.
- `git stash pop` - Apply and remove the most recent stash.
- `git stash drop stash@{index}` - Remove a specific stash.

---

### **Viewing History**
- `git log` - View commit history.
- `git log --oneline` - View a compact commit history.
- `git show <commit-hash>` - View details of a specific commit.
- `git diff` - Show changes in the working directory.
- `git diff --staged` - Show changes in the staging area.

---

### **Undoing Changes**
- `git checkout -- <file>` - Revert changes in the working directory.
- `git reset <commit-hash>` - Reset to a specific commit (keep changes).
- `git reset --hard <commit-hash>` - Reset to a specific commit (discard changes).
- `git revert <commit-hash>` - Revert a specific commit.

---

### **Tags**
- `git tag` - List all tags.
- `git tag <tag-name>` - Create a lightweight tag.
- `git tag -a <tag-name> -m "message"` - Create an annotated tag.
- `git push <remote-name> <tag-name>` - Push a tag to a remote.
- `git tag -d <tag-name>` - Delete a local tag.
- `git push <remote-name> --delete <tag-name>` - Delete a tag from a remote.

---

### **Collaboration**
- `git diff <branch-name>` - Compare changes with another branch.
- `git pull` - Pull changes from the remote repository.
- `git push` - Push changes to the remote repository.

---

### **Miscellaneous**
- `git clean -f` - Remove untracked files.
- `git clean -fd` - Remove untracked files and directories.
- `git apply <patch-file>` - Apply a patch file.
- `git format-patch <commit-hash>` - Create a patch file for a commit.

---

async function updateBlog() {
  fetch("https://origami-go.vercel.app/api/blogs/id", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: 11,
      data: {
        bodyHtml: `# Getting Started with Version Control Using Git

Version control is an essential part of modern software development, allowing teams to collaborate efficiently and manage changes to codebases over time. Git is one of the most popular version control systems used today. In this blog post, we’ll cover the basics of getting started with Git, including installation, fundamental commands, and best practices.

## What is Git?

Git is a distributed version control system that tracks changes in files and allows multiple people to work on a project simultaneously without overwriting each other's work. It’s designed to handle everything from small to very large projects with speed and efficiency.

## Why Use Version Control?

- **Collaboration**: Multiple team members can work on the same project without conflicts.
- **History**: Keep a record of all changes made to files, allowing you to revert to previous versions if needed.
- **Branching**: Work on features or fixes in isolated branches, which can be merged back into the main project later.
- **Backup**: Protect your work from data loss by pushing changes to a remote repository.

## Installing Git

### Windows

1. Download the Git installer from the [official Git website](https://git-scm.com/download/win).
2. Run the installer and follow the on-screen instructions.

### macOS

1. Open Terminal.
2. Install Git using Homebrew with the command: 
   \`\`\`bash
   brew install git
`,
      },
    }),
  });
}

updateBlog();

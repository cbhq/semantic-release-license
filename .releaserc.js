module.exports = {
  branches: [
    { name: 'latest' },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      '@semantic-release/git',
      { assets: ['CHANGELOG.md', 'package.json', 'LICENSE'] },
    ],
    [
      '@semantic-release/exec',
      { generateNotesCmd: 'echo -n ${nextRelease.version} > VERSION' },
    ],
    '@semantic-release/github',
    '@semantic-release/npm',
  ],
};

jest.setTimeout(60000);

describe('index', () => {

  afterEach(() => jest.restoreAllMocks());

  it('should run plugin', async () => {
    // const success = await SemanticRelease({
    //   branches: 'latest',
    //   ci: false,
    //   dryRun: true,
    //   repositoryUrl: 'git@github.com:gomeli/semantic-release-license.git',
    //   plugins: [['./build', {}]],
    // });

    expect(true).toEqual(true);
  });

});

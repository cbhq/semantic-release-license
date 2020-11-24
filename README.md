# semantic-release-license

[**semantic-release**](https://github.com/semantic-release/semantic-release) plugin to update your license file on new releases.

| Step | Description |
|--------------------|--------------------------------------------|
| `verifyConditions` | Verify the presence of a license file and makes sur it can detect it |
| `prepare`          | Update the license file based on its type |

## Install

```bash
npm install -D semantic-release-license
```

## Usage

The plugin can be configured in the [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration):

```js
module.exports = {
  plugins: [
    'semantic-release-license',
    /*
     * Use the git plugin to commit the updated license file
     * Note: make sure semantic-release-license is run BEFORE the git plugin
     * otherwise you git won't pick your updated LICENSE.
     */
    ['@semantic-release/git', {
      assets: ['LICENSE']
    }]
  ]
}
```

## License updates

### MIT

- Copyright date

### BSL

- Licensed work version
- Copyright date
- Change date

## Options

You can configure the plugin by passing options:

```js
module.exports = {
  plugins: [
    ['semantic-release-license', {
      license: {
        path: 'path/to/MY_LICENSE.txt'
      }
    }]
  ]
}
```

> We use a `license` root property to avoid conflicts with `semantic-release` CLI options (see [here](https://github.com/semantic-release/semantic-release/issues/1696)).

| Options | Description | Default |
|---------|-------------|---------|
| `license.path` | The path to your license path | The plugin tries to automatically detect it |

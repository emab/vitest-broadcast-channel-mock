# Broadcast Channel Mocking with Vitest

This JavaScript module provides a way to mock the `BroadcastChannel` API for testing purposes using [Vitest](https://github.com/vitest-dev/vitest), a fast and type-safe testing framework.

## Install

Before using this module, ensure that you have Vitest installed in your project. If not, you can install it via npm:

```bash
npm install vitest --save-dev
```

You can then import the mock functions in your tests:

```javascript
import { mockBroadcastChannel, resetMockBroadcastChannel } from 'vitest-mock-broadcast-channel';
```

## Usage

This module exports two main functions:

1. `mockBroadcastChannel()`: Sets up a mock version of the `BroadcastChannel` global and returns a map of mock channel objects.

2. `resetMockBroadcastChannel()`: Clears all mock channels and restores the original global functions, useful for cleanup after each test.

A mock channel object replicates the functionality of a real `BroadcastChannel` object, with methods like `postMessage()`, `addEventListener()`, etc. These methods are all mocked using Vitest's `vi.fn()` function.

### Example:

```javascript
import { mockBroadcastChannel, resetMockBroadcastChannel } from './path/to/mockBroadcastChannel';

beforeEach(() => {
  mockBroadcastChannel();
});

afterEach(() => {
  resetMockBroadcastChannel();
});

it('tests BroadcastChannel', () => {
  const channel = new BroadcastChannel('myChannel');

  // Now you can test your code that relies on BroadcastChannel API
  // All the channel methods are now mocked and can be controlled for testing purposes
});
```

## Notes

The `postMessage` method on a mock channel works slightly differently than the real one. Instead of sending a message to all other instances of the same channel, it will invoke any function that has been passed to `addEventListener` with an event object that has the posted message as its `data` property.

This module doesn't replicate the asynchronous nature of the real `postMessage`. It calls the event listener functions synchronously.

## License

This project is open sourced under the MIT License.

## Contribution

Contributions are welcome! Please open an issue if you find a bug or have a feature request. You can also propose changes via a pull request.

## Author

Eddy Brown - [GitHub](https://github.com/emab)

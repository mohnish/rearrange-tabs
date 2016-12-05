# Rearrange Tabs

![](http://i.imgur.com/BFar404.png)

Rearrange Tabs is a tiny Google Chrome Extension that allows users
to rearrange the position of the tabs in a window by moving them
around using keyboard shortcuts.

- To move a tab to its left

  - `Mac`: <kbd>Ctrl</kbd>-<kbd>Shift</kbd>-<kbd>Left</kbd>
  - `Windows`: <kbd>Shift</kbd>-<kbd>Alt</kbd>-<kbd>Left</kbd>

- To move a tab to its right

  - `Mac`: <kbd>Ctrl</kbd>-<kbd>Shift</kbd>-<kbd>Right</kbd>
  - `Windows`: <kbd>Shift</kbd>-<kbd>Alt</kbd>-<kbd>Right</kbd>

It's as simple as that. Here's how it looks like: [https://www.youtube.com/watch?v=A1X3geKtF8A](https://www.youtube.com/watch?v=A1X3geKtF8A)

Here's the introduction blog post: [http://mohni.sh/posts/rearrange-tabs](http://mohni.sh/posts/rearrange-tabs)

Shortcuts are configurable via `chrome://extensions` page.

## Installation

Install the extension by visiting this Chrome Web Store link: **[Chrome Web Store](https://chrome.google.com/webstore/detail/rearrange-tabs/ccnnhhnmpoffieppjjkhdakcoejcpbga)**

## Configuration

1. Go to `chrome://extensions` and scroll to the bottom of the page.
3. Click on `Keyboard shortcuts` to open `Keyboard Shortcuts for Extensions and Apps`.
4. Scroll down to locate `Rearrange Tabs`.
5. Click in the greyed out fields for `Not set`.
6. Press the desired key combination to create a new shortcut.

![image](https://cloud.githubusercontent.com/assets/6026454/20899726/9eec1d9c-baf9-11e6-9aee-3092bdb34d2b.png)

## Features:

- Move regular tabs around in a window
- Move pinned tabs around in a window
- Move multiple highlighted tabs around in a window

## Development

- Once the changes have been made to the the extension, run `make dist`. This will update the `dist` directory with the new files
- If for some reason you want to remove the `dist` directory, run `make clean`
- It might be necessary to install `make` before you can use it. If you encounter an error, open the terminal and run `sudo apt-get install zip make`

## Contributors

- Mohinsh Thallavajhula (@mohnish)
- Anže Videnič (@avidenic)

## License

(The MIT License)

Copyright (c) 2016 Mohnish Thallavajhula &lt;i@mohni.sh&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

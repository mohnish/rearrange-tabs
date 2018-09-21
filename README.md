# Rearrange Tabs

![](http://i.imgur.com/BFar404.png)

Rearrange Tabs is a tiny Google Chrome Extension that allows users
to rearrange the position of the tabs in a window by moving them
around using keyboard shortcuts.

Rearrange Tabs has been featured on [LifeHacker](http://lifehacker.com/this-extension-rearranges-chrome-tabs-with-keyboard-sho-1791622486) and [Changelog](http://email.changelog.com/t/t-9A7FDF4C536D63BF) :smile:

- To move selected tab(s) left

  - `Mac`: <kbd>Ctrl</kbd>-<kbd>Shift</kbd>-<kbd>Left</kbd>
  - `Windows`: <kbd>Shift</kbd>-<kbd>Alt</kbd>-<kbd>Left</kbd>

- To move selected tab(s) right

  - `Mac`: <kbd>Ctrl</kbd>-<kbd>Shift</kbd>-<kbd>Right</kbd>
  - `Windows`: <kbd>Shift</kbd>-<kbd>Alt</kbd>-<kbd>Right</kbd>

- To move selected tab(s) to the front (leftmost position)

  - `Mac`: <kbd>Ctrl</kbd>-<kbd>Shift</kbd>-<kbd>Down</kbd>
  - `Windows`: <kbd>Shift</kbd>-<kbd>Alt</kbd>-<kbd>Down</kbd>

- To move selected tab(s) to the end (rightmost position)

  - `Mac`: <kbd>Ctrl</kbd>-<kbd>Shift</kbd>-<kbd>Up</kbd>
  - `Windows`: <kbd>Shift</kbd>-<kbd>Alt</kbd>-<kbd>Up</kbd>

It's as simple as that. Here's how it looks like: [https://www.youtube.com/watch?v=A1X3geKtF8A](https://www.youtube.com/watch?v=A1X3geKtF8A)

Here's the introduction blog post: [https://iam.mt/rearrange-tabs](https://iam.mt/rearrange-tabs)

Shortcuts are configurable via `chrome://extensions` page.

## Installation

Install the extension by visiting this Chrome Web Store link: **[Chrome Web Store](https://chrome.google.com/webstore/detail/rearrange-tabs/ccnnhhnmpoffieppjjkhdakcoejcpbga)**

## Customize Shortcut

1. Go to `chrome://extensions/shortcuts`.
2. Scroll down to locate `Rearrange Tabs`.
3. Click in the greyed fields.
6. Press the desired key combination to create a new shortcut.

![image](https://user-images.githubusercontent.com/7259107/45467127-e57d4f80-b758-11e8-9976-fd62e20246f1.png)

## Features:

- Move regular tabs around in a window
- Move pinned tabs around in a window
- Move multiple selected tabs around in a window
- Move selected tabs to the leftmost or the rightmost positions

## Development

- Once the changes have been made to the the extension, run `make dist`. This will update the `dist` directory with the new files
- If for some reason you want to remove the `dist` directory, run `make clean`
- It might be necessary to install `make` before you can use it. If you encounter an error, open the terminal and run `sudo apt-get install zip make`

## Contributors

- Mohinsh Thallavajhula (@mohnish)
- Anže Videnič (@avidenic)
- Sandeep Appikonda (@appikonda)
- Rob Yang (@unknownbreaker)
- Roland Synnestvedt (@rsynnest)
- Tomas Juočepis (@TomasJuocepis)
- Junho Park (@cnaa97)

## License

(The MIT License)

Copyright (c) 2018 Mohnish Thallavajhula &lt;hi@iam.mt&gt;

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

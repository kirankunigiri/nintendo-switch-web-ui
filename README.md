# Nintendo Switch - Web UI
A remake of the Nintendo Switch UI in react and tailwind. This project was mostly a fun practice exercise so I could get used to tailwind class names.

![Screenshot of the Nintendo Switch UI](https://i.imgur.com/9uPoUGf.png)

### Try it out!
Go to [kirankunigiri.com/nintendo-switch-web-ui](https://kirankunigiri.com/nintendo-switch-web-ui) to see it in action. If you're on a phone, you'll want to double-tap to open it in full screen and rotate your device. Then swipe left and right to move around the game carousel. You might even be able to trick people into thinking you're emulating the Switch OS on your phone!

If you're on PC, try clicking on a game tile and using your arrow keys or scroll wheel to move around.

### Features
- Rotate your phone and double tab to go into full-screen mode
- Fully touch-compatible gallery (swipe through it!)
- Click on a game tile to select, and use arrow keys to move
- Uses the actual time and battery percent (although the battery icon doesn't update)

This was made in just a few hours, and has a few bugs. Check the todo list below to see what was left out.

---

### Todos
These are some cool things I had planned, but I'm ending the practice project here for myself. Any contributions to improve this are welcome.
- Update game name on selection
- Update battery icon and color to match real status
- Allow proper movement with arrow keys (it currently will not move the selected tile on the edges of the carousel)
- Add Options and Start button on bottom right corner
- Move images to github/imgur
- Dark/light theme
- Add physical device from figma (accessible by clicking the settings icon)
- Dev tools to switch faster between normal, fade, and slider view

---

### Development

Just run bun and get started!
```bash
bun install
bun run dev
```

**Tools**
- In App.tsx, you can change from the `Console` component to the `Slider` or `Fade` component for assisted UI development
- `Slider` - this component gives you a slider to drag to compare the `Console` component with a screenshot of the actual Switch UI
- `Fade` - this component directly overlays the `Console` component over a UI screenshot with an opacity fade to see both at the same time

---

### Layout
Why does this project use `em` instead of `rem` or `px`? In this project, I wanted to create an exact replica of the UI, and not focus too much on making things responsive. I scaled the `Console` component to be exactly 16:9 so I could focus on actually building the UI, and have it scale exactly along with the root 16:9 div. You'll notice that it is technically still "responsive" as the game tile carousel stretches to fit any width. That was a fix I added so it would look like a console on mobile devices.

It would have been even better if the items on the left and right scaled nicely, and there are lots of room for improvement here.



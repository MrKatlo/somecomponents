````md
# PoleComponents — Reusable React Native UI Components

A set of customizable, easy-to-use React Native components designed and built by **Katlo Pole** to help you build apps faster. Perfect for hackathons, prototypes, or any React Native project.

Published as [polecomponents on npm](https://www.npmjs.com/package/polecomponents)

---

## Installation

```bash
npm install polecomponents
# or
yarn add polecomponents
````

---

## Usage

Import components from the package like this:

```js
import {
  Button,
  Input,
  Checkbox,
  Select,
  LoadingSpinner,
  CustomModal
} from 'polecomponents';
```

Use them in your React Native app:

```jsx
<Button
  title="Submit"
  onPress={() => alert("Pressed!")}
  width={200}
  height={50}
  backgroundColor="#F3971D"
  pressedColor="#FFD700"
  textColor="white"
/>
```

---

## Component Guide

### Button

A pressable button with customizable dimensions, colors, and text.

```jsx
<Button
  title="Submit"
  onPress={() => {}}
  width={200}
  height={50}
  backgroundColor="#F3971D"
  pressedColor="#FFD700"
  textColor="white"
/>
```

| Prop              | Type   | Description                  |
| ----------------- | ------ | ---------------------------- |
| `title`           | string | Button label text            |
| `onPress`         | func   | Callback when button pressed |
| `width`           | number | Button width (default 200)   |
| `height`          | number | Button height (default 44)   |
| `backgroundColor` | string | Background color             |
| `pressedColor`    | string | Color on press               |
| `textColor`       | string | Text color                   |

---

### Input

Styled text input with label and placeholder.

```jsx
<Input
  label="Email"
  placeholder="Enter your email"
  value={email}
  onChangeText={setEmail}
  secureTextEntry={false}
/>
```

| Prop              | Type   | Description                |
| ----------------- | ------ | -------------------------- |
| `label`           | string | Label above input          |
| `placeholder`     | string | Placeholder text           |
| `value`           | string | Input value                |
| `onChangeText`    | func   | Callback on text change    |
| `secureTextEntry` | bool   | Hide text input (password) |

---

### Checkbox

Simple checkbox with label.

```jsx
<Checkbox
  label="Accept Terms"
  checked={accepted}
  onChange={setAccepted}
/>
```

| Prop       | Type   | Description      |
| ---------- | ------ | ---------------- |
| `label`    | string | Checkbox label   |
| `checked`  | bool   | Checked state    |
| `onChange` | func   | Called on toggle |

---

### Select

Dropdown selector.

```jsx
<Select
  options={[
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" }
  ]}
  selectedValue={value}
  onValueChange={setValue}
/>
```

| Prop            | Type   | Description                |
| --------------- | ------ | -------------------------- |
| `options`       | array  | Array of `{label, value}`  |
| `selectedValue` | string | Current selected value     |
| `onValueChange` | func   | Called on selection change |

---

### LoadingSpinner

Activity indicator with customizable size and color.

```jsx
<LoadingSpinner color="#F3971D" size="large" />
```

| Prop    | Type   | Description            |
| ------- | ------ | ---------------------- |
| `color` | string | Spinner color          |
| `size`  | string | `"small"` or `"large"` |

---

### 🪟 `CustomModal`

Custom modal component with scrolling content and customizable close button.

```jsx
<CustomModal
  visible={isOpen}
  onClose={() => setOpen(false)}
  title="Notice"
  closeButtonTitle="Dismiss"
  closeButtonColor="#F3971D"
  closeButtonTextColor="white"
  closeButtonWidth={120}
  closeButtonHeight={45}
>
  <Text>This modal content can be long and will scroll if needed.</Text>
</CustomModal>

Props
Prop	Type	Description
visible	bool	Show/hide modal
onClose	func	Callback to close modal
title	string	Modal title
closeButtonTitle	string	Label for the close button (default "Close")
closeButtonColor	string	Background color of close button
closeButtonTextColor	string	Text color of close button
closeButtonWidth	number	Width of close button
closeButtonHeight	number	Height of close button
children	node	Content inside the modal

## Folder Structure

```
components/
├── Button.js
├── Input.js
├── Checkbox.js
├── Select.js
├── LoadingSpinner.js
└── CustomModal.js
```

---

## Author

**Katlo Pole**
Made with ❤️ for fast and reusable UI components.

---

## License

MIT License. Feel free to use, modify, and share.

---

Happy coding! 🚀

```

Let me know if you want me to generate or package anything else!
```

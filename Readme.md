# PoleComponents — Reusable React Native UI Components

A set of customizable, easy-to-use React Native components designed and built by **Katlo Pole** to help you build apps faster. Perfect for hackathons, prototypes, or any React Native project.

Published as [polecomponents on npm](https://www.npmjs.com/package/polecomponents)

---

## 📦 Installation

```bash
npm install polecomponents
# or
yarn add polecomponents
```

---

## 🚀 Usage

Import components from the package like this:

```js
import {
  Button,
  Input,
  Checkbox,
  Select,
  LoadingSpinner,
  CustomModal,
  PDFUploader,
  PDFDownloader,
  QRCodeScanner,
  DataTable
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

## 📘 Component Guide

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

### CustomModal

Reusable modal that adjusts to content length with a scrollable view and customizable close button.

```jsx
<CustomModal
  visible={isVisible}
  onClose={() => setVisible(false)}
  title="Important Message"
  closeButtonTitle="Dismiss"
  closeButtonColor="#F3971D"
  closeButtonTextColor="#fff"
  closeButtonWidth={120}
  closeButtonHeight={45}
>
  <Text>Put any content here. Long content will scroll properly.</Text>
</CustomModal>
```

| Prop                   | Type     | Description                              |
| ---------------------- | -------- | ---------------------------------------- |
| `visible`              | boolean  | Controls the visibility of the modal     |
| `onClose`              | function | Function called to close the modal       |
| `title`                | string   | Title text shown at the top of the modal |
| `closeButtonTitle`     | string   | Text inside the close button             |
| `closeButtonColor`     | string   | Background color of the close button     |
| `closeButtonTextColor` | string   | Text color of the close button           |
| `closeButtonWidth`     | number   | Width of the close button in pixels      |
| `closeButtonHeight`    | number   | Height of the close button in pixels     |
| `children`             | node     | Content to be rendered inside the modal  |

---

### PDFUploader

Component to select and upload PDF files from device storage.

```jsx
<PDFUploader
  onFileSelected={(file) => console.log(file)}
  buttonText="Upload PDF"
  buttonColor="#F3971D"
  textColor="#fff"
/>
```

| Prop             | Type     | Description                         |
| ---------------- | -------- | ----------------------------------- |
| `onFileSelected` | function | Callback with selected file info    |
| `buttonText`     | string   | Text displayed on the upload button |
| `buttonColor`    | string   | Background color of the button      |
| `textColor`      | string   | Color of the button text            |

---

### PDFDownloader

Component to download or view PDF files via URL.

```jsx
<PDFDownloader
  url="https://example.com/sample.pdf"
  fileName="sample.pdf"
  buttonText="Download PDF"
  buttonColor="#F3971D"
  textColor="#fff"
/>
```

| Prop          | Type   | Description                     |
| ------------- | ------ | ------------------------------- |
| `url`         | string | URL of the PDF to download/view |
| `fileName`    | string | Name of the downloaded file     |
| `buttonText`  | string | Text on the download button     |
| `buttonColor` | string | Background color of the button  |
| `textColor`   | string | Text color of the button        |

---

### QRCodeScanner

Component that uses the device camera to scan QR codes and return the scanned data.

```jsx
<QRCodeScanner
  onRead={(data) => console.log(data)}
  cameraType="back"
  showMarker={true}
/>
```

| Prop         | Type     | Description                          |
| ------------ | -------- | ------------------------------------ |
| `onRead`     | function | Callback called with scanned data    |
| `cameraType` | string   | Camera to use: `"front"` or `"back"` |
| `showMarker` | boolean  | Whether to show a scanning marker    |

---

### DataTable

A simple customizable table component for displaying tabular data.

```jsx
<DataTable
  columns={['Name', 'Amount', 'Date']}
  data={[
    { Name: 'Bradley', Amount: 500, Date: '2025-06-11' },
    { Name: 'Katlo', Amount: 300, Date: '2025-06-10' }
  ]}
  headerBackgroundColor="#F3971D"
  rowBackgroundColor="#fff"
  headerTextColor="#fff"
  rowTextColor="#000"
/>
```

| Prop                    | Type   | Description                    |
| ----------------------- | ------ | ------------------------------ |
| `columns`               | array  | Array of column header strings |
| `data`                  | array  | Array of objects with row data |
| `headerBackgroundColor` | string | Background color of header row |
| `rowBackgroundColor`    | string | Background color of rows       |
| `headerTextColor`       | string | Text color for header text     |
| `rowTextColor`          | string | Text color for row text        |

---

## 📁 Folder Structure

```
components/
├── Button.js
├── Input.js
├── Checkbox.js
├── Select.js
├── LoadingSpinner.js
├── CustomModal.js
├── PDFUploader.js
├── PDFDownloader.js
├── QRCodeScanner.js
└── DataTable.js
```

---

## 👨‍💻 Author

**Katlo Pole**
Made with ❤️ for fast and reusable UI components.

---

## 📝 License

MIT License. Feel free to use, modify, and share.

---

Happy coding! 🚀

---

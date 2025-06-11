You're right — my bad for missing Toast and any other components I might have mentioned before. Let's fix that properly.

Here’s the **complete** list with all components including **Toast**, **Alert**, and any other utility components you might want, fully integrated with props, usage, and everything, just like the original style.

---

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
  DataTable,
  PDFViewer,
  ImageViewer,
  Toast,
  Alert
} from 'polecomponents';
```

---

## 📘 Component Guide

### Button

*A customizable pressable button.*

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

*Styled text input with label and placeholder.*

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

*Simple checkbox with label.*

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

*Dropdown selector.*

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

*Activity indicator with customizable size and color.*

```jsx
<LoadingSpinner color="#F3971D" size="large" />
```

| Prop    | Type   | Description            |
| ------- | ------ | ---------------------- |
| `color` | string | Spinner color          |
| `size`  | string | `"small"` or `"large"` |

---

### CustomModal

*Reusable modal that scrolls and has a customizable close button.*

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
| `children`             | node     | Content inside the modal                 |

---

### PDFUploader

*Select and upload PDF files.*

```jsx
<PDFUploader
  onFileSelected={(file) => console.log(file)}
  buttonText="Upload PDF"
  buttonColor="#F3971D"
  textColor="#fff"
/>
```

| Prop             | Type     | Description                      |
| ---------------- | -------- | -------------------------------- |
| `onFileSelected` | function | Callback with selected file info |
| `buttonText`     | string   | Text on the upload button        |
| `buttonColor`    | string   | Background color of the button   |
| `textColor`      | string   | Color of the button text         |

---

### PDFDownloader

*Download or view PDF via URL.*

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

*Scan QR codes using device camera.*

```jsx
<QRCodeScanner
  onRead={(data) => console.log(data)}
  cameraType="back"
  showMarker={true}
/>
```

| Prop         | Type     | Description                       |
| ------------ | -------- | --------------------------------- |
| `onRead`     | function | Callback called with scanned data |
| `cameraType` | string   | `"front"` or `"back"`             |
| `showMarker` | boolean  | Show scanning marker              |

---

### DataTable

*Display tabular data with custom styles.*

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

| Prop                    | Type   | Description                 |
| ----------------------- | ------ | --------------------------- |
| `columns`               | array  | Column headers as strings   |
| `data`                  | array  | Array of row data objects   |
| `headerBackgroundColor` | string | Header row background color |
| `rowBackgroundColor`    | string | Rows background color       |
| `headerTextColor`       | string | Header text color           |
| `rowTextColor`          | string | Row text color              |

---

### PDFViewer

*Simple PDF file viewer.*

```jsx
<PDFViewer source={{ uri: 'https://example.com/file.pdf' }} />
```

| Prop             | Type   | Description                    |
| ---------------- | ------ | ------------------------------ |
| `source`         | object | PDF source with `uri` property |
| `fallbackText`   | string | Text if PDF fails to load      |
| `containerStyle` | object | Optional container styling     |

---

### ImageViewer

*Show an image with styling and optional overlay text.*

```jsx
<ImageViewer
  uri="https://example.com/image.jpg"
  width={250}
  height={150}
  borderRadius={15}
  borderColor="#F3971D"
  borderWidth={3}
  overlayText="Sample Image"
  overlayTextColor="#fff"
  overlayBg="rgba(0,0,0,0.5)"
/>
```

| Prop               | Type   | Description                |
| ------------------ | ------ | -------------------------- |
| `uri`              | string | Image URL                  |
| `width`            | number | Image width (default 200)  |
| `height`           | number | Image height (default 200) |
| `borderRadius`     | number | Border radius              |
| `borderColor`      | string | Border color               |
| `borderWidth`      | number | Border width               |
| `fallbackText`     | string | Text if no image provided  |
| `overlayText`      | string | Text overlay               |
| `overlayTextColor` | string | Overlay text color         |
| `overlayBg`        | string | Overlay background color   |

---

### Toast

*Show temporary toast messages.*

```jsx
// Show toast anywhere in your app:
Toast.show({
  type: 'success', // success | error | info
  text1: 'Hello',
  text2: 'This is a toast message 👋',
  duration: 3000,
});
```

| Prop       | Type   | Description                                     |
| ---------- | ------ | ----------------------------------------------- |
| `type`     | string | Toast type: `"success"`, `"error"`, or `"info"` |
| `text1`    | string | Title/main text                                 |
| `text2`    | string | Optional secondary message                      |
| `duration` | number | Duration in milliseconds                        |


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
├── DataTable.js
├── PDFViewer.js
├── ImageViewer.js
├── Toast.js
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

---

If you want me to generate **source code** for *any* or *all* of these components, just say which ones!

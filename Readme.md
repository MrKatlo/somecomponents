
---

````md
# utility-custom-ui — Reusable React Native UI Components

A set of customizable, easy-to-use React Native components designed and built by **Katlo Pole** to help you build apps faster. Perfect for hackathons, prototypes, or any React Native project.

Published as [utility-custom-ui on npm](https://www.npmjs.com/package/utility-custom-ui)

---

## 📦 Installation

```bash
npm install utility-custom-ui
# or
yarn add utility-custom-ui
````

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
  Alert,
  FileUploader,
  FileDownloader
} from "utility-custom-ui";
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

### FileUploader

*Advanced file picker with progress tracking, file validation, and preview.*

```jsx
<FileUploader
  allowedTypes={['application/pdf', 'image/*']}
  maxSize={15}
  onUpload={(file) => console.log(file)}
  buttonText="Select File"
  buttonColor="#F3971D"
  textColor="white"
  showFileInfo={true}
  multiple={false}
/>
```

| Prop           | Type     | Description                                |
| -------------- | -------- | ------------------------------------------ |
| `allowedTypes` | array    | Allowed MIME types (default: PDF/images)   |
| `maxSize`      | number   | Maximum file size in MB (default: 10)      |
| `onUpload`     | function | Callback with file object                  |
| `buttonText`   | string   | Upload button text                         |
| `buttonColor`  | string   | Button background color                    |
| `textColor`    | string   | Button text color                          |
| `showFileInfo` | boolean  | Show selected file details (default: true) |
| `multiple`     | boolean  | Allow multiple files (default: false)      |

---

### FileDownloader

*File downloader with progress tracking and automatic file opening.*

```jsx
<FileDownloader
  url="https://example.com/report.pdf"
  fileName="annual-report.pdf"
  buttonText="Download Report"
  buttonColor="#F3971D"
  textColor="white"
  showProgress={true}
  onDownloadStart={() => console.log('Download started')}
  onDownloadComplete={(uri) => console.log('Download complete', uri)}
/>
```

| Prop                 | Type     | Description                              |
| -------------------- | -------- | ---------------------------------------- |
| `url`                | string   | URL of file to download                  |
| `fileName`           | string   | Name for downloaded file                 |
| `buttonText`         | string   | Download button text                     |
| `buttonColor`        | string   | Button background color                  |
| `textColor`          | string   | Button text color                        |
| `showProgress`       | boolean  | Show progress bar (default: true)        |
| `onDownloadStart`    | function | Called when download begins              |
| `onDownloadComplete` | function | Called with local file URI when complete |
| `onError`            | function | Called if download fails                 |

---

### QRCodeScanner

# QR Scanner Component for React Native (Expo)

![QR Scanner Preview](https://i.imgur.com/example.png) <!-- Replace with actual image -->

A highly customizable QR scanner component for React Native using Expo's camera with control over height, text, width, and other properties.

## Features

- 📱 Fully customizable dimensions (height, width, scanning rectangle)
- 🎨 Customizable colors for corners, borders, and mask
- 🔦 Torch/flashlight toggle with customizable UI
- 📝 Customizable instruction text
- ⚡ Adjustable scan interval to prevent rapid re-scans
- 🔄 Camera permission handling built-in
- 🖌️ Extensive styling options for all elements

## Installation

1. First, install the required Expo package:

```bash
npx expo install expo-camera
```

2. Copy the `QrScanner.js` component file into your project.

## Usage

```jsx
import QrScanner from './components/QrScanner';

function App() {
  const handleScan = ({ data }) => {
    console.log('Scanned data:', data);
    alert(`Scanned QR code: ${data}`);
  };

  return (
    <QrScanner 
      onScan={handleScan}
      height={500}
      width={350}
      cornerColor="#00FF00"
      instructionText="Align QR code within frame"
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `height` | number | 70% of window height | Total height of scanner component |
| `width` | number | 90% of window width | Total width of scanner component |
| `cornerColor` | string | '#FF0000' | Color of scanner frame corners |
| `cornerWidth` | number | 2 | Thickness of corner lines |
| `cornerLength` | number | 30 | Length of each corner line |
| `rectDimensions` | object | {width: 250, height: 250} | Size of scanning rectangle |
| `maskOpacity` | number | 0.5 | Opacity of surrounding mask |
| `maskColor` | string | '#000' | Color of surrounding mask |
| `borderColor` | string | '#FFF' | Color of scanning rectangle border |
| `borderWidth` | number | 1 | Width of scanning rectangle border |
| `scanInterval` | number | 2000 | Minimum time between scans (ms) |
| `onScan` | function | required | Callback when QR is scanned |
| `instructionText` | string | 'Align the QR code within the frame' | Help text |
| `instructionTextStyle` | object | {} | Style for instruction text |
| `instructionContainerStyle` | object | {} | Style for instruction container |
| `showInstruction` | boolean | true | Whether to show instructions |
| `torchEnabled` | boolean | false | Initial torch state |
| `torchButton` | boolean | true | Whether to show torch toggle |
| `torchButtonStyle` | object | {} | Style for torch button |
| `torchButtonTextStyle` | object | {} | Style for torch button text |
| `torchOnText` | string | '🔦 On' | Text for torch on state |
| `torchOffText` | string | '🔦 Off' | Text for torch off state |
| `containerStyle` | object | {} | Additional container styles |
| `cameraStyle` | object | {} | Additional camera view styles |

## Example Customization

```jsx
<QrScanner 
  height={600}
  width={300}
  cornerColor="#4287f5"
  cornerWidth={3}
  cornerLength={40}
  rectDimensions={{ width: 200, height: 200 }}
  maskOpacity={0.7}
  instructionText="Scan your ticket QR code"
  instructionTextStyle={{ 
    fontSize: 18, 
    fontWeight: 'bold',
    color: 'white'
  }}
  onScan={handleScan}
  torchButton={true}
  torchButtonStyle={{ 
    backgroundColor: 'rgba(255,255,255,0.3)',
    padding: 12,
    borderRadius: 20
  }}
  torchOnText="🔦 Light On"
  torchOffText="🔦 Light Off"
/>
```

## Permissions

The component handles camera permissions automatically, but make sure you have the following in your `app.json`:

```json
{
  "expo": {
    "plugins": [
      [
        "expo-camera",
        {
          "cameraPermission": "Allow $(PRODUCT_NAME) to access your camera for QR scanning"
        }
      ]
    ]
  }
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)# QR Scanner Component for React Native (Expo)

![QR Scanner Preview](https://i.imgur.com/example.png) <!-- Replace with actual image -->

A highly customizable QR scanner component for React Native using Expo's camera with control over height, text, width, and other properties.

## Features

- 📱 Fully customizable dimensions (height, width, scanning rectangle)
- 🎨 Customizable colors for corners, borders, and mask
- 🔦 Torch/flashlight toggle with customizable UI
- 📝 Customizable instruction text
- ⚡ Adjustable scan interval to prevent rapid re-scans
- 🔄 Camera permission handling built-in
- 🖌️ Extensive styling options for all elements

## Installation

1. First, install the required Expo package:

```bash
npx expo install expo-camera
```

2. Copy the `QrScanner.js` component file into your project.

## Usage

```jsx
import QrScanner from './components/QrScanner';

function App() {
  const handleScan = ({ data }) => {
    console.log('Scanned data:', data);
    alert(`Scanned QR code: ${data}`);
  };

  return (
    <QrScanner 
      onScan={handleScan}
      height={500}
      width={350}
      cornerColor="#00FF00"
      instructionText="Align QR code within frame"
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `height` | number | 70% of window height | Total height of scanner component |
| `width` | number | 90% of window width | Total width of scanner component |
| `cornerColor` | string | '#FF0000' | Color of scanner frame corners |
| `cornerWidth` | number | 2 | Thickness of corner lines |
| `cornerLength` | number | 30 | Length of each corner line |
| `rectDimensions` | object | {width: 250, height: 250} | Size of scanning rectangle |
| `maskOpacity` | number | 0.5 | Opacity of surrounding mask |
| `maskColor` | string | '#000' | Color of surrounding mask |
| `borderColor` | string | '#FFF' | Color of scanning rectangle border |
| `borderWidth` | number | 1 | Width of scanning rectangle border |
| `scanInterval` | number | 2000 | Minimum time between scans (ms) |
| `onScan` | function | required | Callback when QR is scanned |
| `instructionText` | string | 'Align the QR code within the frame' | Help text |
| `instructionTextStyle` | object | {} | Style for instruction text |
| `instructionContainerStyle` | object | {} | Style for instruction container |
| `showInstruction` | boolean | true | Whether to show instructions |
| `torchEnabled` | boolean | false | Initial torch state |
| `torchButton` | boolean | true | Whether to show torch toggle |
| `torchButtonStyle` | object | {} | Style for torch button |
| `torchButtonTextStyle` | object | {} | Style for torch button text |
| `torchOnText` | string | '🔦 On' | Text for torch on state |
| `torchOffText` | string | '🔦 Off' | Text for torch off state |
| `containerStyle` | object | {} | Additional container styles |
| `cameraStyle` | object | {} | Additional camera view styles |

## Example Customization

```jsx
<QrScanner 
  height={600}
  width={300}
  cornerColor="#4287f5"
  cornerWidth={3}
  cornerLength={40}
  rectDimensions={{ width: 200, height: 200 }}
  maskOpacity={0.7}
  instructionText="Scan your ticket QR code"
  instructionTextStyle={{ 
    fontSize: 18, 
    fontWeight: 'bold',
    color: 'white'
  }}
  onScan={handleScan}
  torchButton={true}
  torchButtonStyle={{ 
    backgroundColor: 'rgba(255,255,255,0.3)',
    padding: 12,
    borderRadius: 20
  }}
  torchOnText="🔦 Light On"
  torchOffText="🔦 Light Off"
/>
```

## Permissions

The component handles camera permissions automatically, but make sure you have the following in your `app.json`:

```json
{
  "expo": {
    "plugins": [
      [
        "expo-camera",
        {
          "cameraPermission": "Allow $(PRODUCT_NAME) to access your camera for QR scanning"
        }
      ]
    ]
  }
}
```
---

### DataTable

*Feature-rich table with sorting, scrolling, and customization.*

```jsx
<DataTable
  columns={['Name', 'Age', 'Department']}
  data={[
    { Name: 'John Doe', Age: 32, Department: 'Marketing' },
    { Name: 'Jane Smith', Age: 28, Department: 'Engineering' }
  ]}
  headerBackgroundColor="#F3971D"
  rowBackgroundColor="#fff"
  headerTextColor="#fff"
  rowTextColor="#000"
  sortable={true}
  onSort={(key, direction) => console.log(`Sorted by ${key} ${direction}`)}
  stickyHeader={true}
  height={400}
/>
```

| Prop                    | Type          | Description                            |
| ----------------------- | ------------- | -------------------------------------- |
| `columns`               | array         | Column headers                         |
| `data`                  | array         | Row data objects                       |
| `headerBackgroundColor` | string        | Header background color                |
| `rowBackgroundColor`    | string        | Row background color                   |
| `headerTextColor`       | string        | Header text color                      |
| `rowTextColor`          | string        | Row text color                         |
| `borderColor`           | string        | Border color (default: #e0e0e0)        |
| `sortable`              | boolean       | Enable column sorting (default: false) |
| `onSort`                | function      | Callback when column is sorted         |
| `stickyHeader`          | boolean       | Keep header visible when scrolling     |
| `height`                | number        | Table height in pixels                 |
| `width`                 | number/string | Table width (default: '100%')          |

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

```js
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
├── FileUploader.js
├── FileDownloader.js
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

```
I'm happy to assist!
```

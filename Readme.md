

````md
# utility-custom-ui — Reusable React Native UI Components

A set of customizable, easy-to-use React Native components built by **Katlo Pole** to help you build apps faster. Perfect for hackathons, prototypes, or production React Native apps.

📦 **Published on npm**: [utility-custom-ui](https://www.npmjs.com/package/utility-custom-ui)

---

## 📦 Installation

```bash
npm install utility-custom-ui
# or
yarn add utility-custom-ui
````

---

## 🚀 Quick Usage

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

### ✅ Button

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

### ✏️ Input

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
| `secureTextEntry` | bool   | Hide input text (password) |

---

### ☑️ Checkbox

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

### 🔽 Select

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

### 🔄 LoadingSpinner

```jsx
<LoadingSpinner color="#F3971D" size="large" />
```

| Prop    | Type   | Description            |
| ------- | ------ | ---------------------- |
| `color` | string | Spinner color          |
| `size`  | string | `"small"` or `"large"` |

---

### 📦 CustomModal

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
  <Text>Put any content here.</Text>
</CustomModal>
```

| Prop                   | Type     | Description                    |
| ---------------------- | -------- | ------------------------------ |
| `visible`              | boolean  | Show/hide modal                |
| `onClose`              | function | Triggered when modal is closed |
| `title`                | string   | Modal title                    |
| `closeButtonTitle`     | string   | Button text                    |
| `closeButtonColor`     | string   | Close button background        |
| `closeButtonTextColor` | string   | Close button text color        |
| `closeButtonWidth`     | number   | Width of close button          |
| `closeButtonHeight`    | number   | Height of close button         |
| `children`             | node     | Modal content                  |

---

### 📤 PDFUploader

```jsx
<PDFUploader
  onFileSelected={(file) => console.log(file)}
  buttonText="Upload PDF"
  buttonColor="#F3971D"
  textColor="#fff"
/>
```

---

### 📥 PDFDownloader

```jsx
<PDFDownloader
  url="https://example.com/sample.pdf"
  fileName="sample.pdf"
  buttonText="Download PDF"
  buttonColor="#F3971D"
  textColor="#fff"
/>
```

---

### 📁 FileUploader

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

---

### ⬇️ FileDownloader

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

---

### 📷 QRCodeScanner

A highly customizable QR scanner built with Expo Camera.

```bash
npx expo install expo-camera
```

```jsx
import QrScanner from './components/QrScanner';

<QrScanner 
  onScan={({ data }) => alert(data)}
  height={500}
  width={350}
  cornerColor="#00FF00"
  instructionText="Align QR code within frame"
/>
```

| Prop              | Type     | Default                      | Description                    |
| ----------------- | -------- | ---------------------------- | ------------------------------ |
| `onScan`          | function | required                     | Callback on successful scan    |
| `height`          | number   | 70% of screen height         | Scanner height                 |
| `width`           | number   | 90% of screen width          | Scanner width                  |
| `cornerColor`     | string   | '#FF0000'                    | Color of corner frames         |
| `cornerWidth`     | number   | 2                            | Thickness of corner lines      |
| `cornerLength`    | number   | 30                           | Length of corner lines         |
| `rectDimensions`  | object   | `{ width: 250, height: 250}` | Size of the scanning rectangle |
| `maskOpacity`     | number   | 0.5                          | Mask opacity                   |
| `maskColor`       | string   | '#000'                       | Mask color                     |
| `scanInterval`    | number   | 2000                         | Time between scans in ms       |
| `torchButton`     | boolean  | true                         | Show flashlight toggle         |
| `torchEnabled`    | boolean  | false                        | Initial flashlight state       |
| `instructionText` | string   | 'Align the QR code…'         | Instructional message          |

🔐 **Permissions** (in `app.json`):

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

### 📊 DataTable

```jsx
<DataTable
  columns={['Name', 'Age']}
  data={[{ Name: 'John', Age: 30 }]}
  headerBackgroundColor="#F3971D"
  rowBackgroundColor="#fff"
  sortable={true}
  stickyHeader={true}
/>
```

---

### 📄 PDFViewer

```jsx
<PDFViewer source={{ uri: 'https://example.com/file.pdf' }} />
```

---

## 📬 Feedback & Contributing

Pull requests are welcome! Open an issue to suggest improvements or request new components.

---

## 📄 License

[MIT](https://choosealicense.com/licenses/mit/)

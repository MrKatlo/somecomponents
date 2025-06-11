# Universal Components

A customizable set of reusable React Native UI components — designed for speed, consistency, and flexibility. Ideal for business apps, prototypes, and hackathons.

---

## 📦 Components

### 🔘 Button

A customizable pressable button with optional styles.

```jsx
<Button
  title="Click Me"
  onPress={() => console.log('Pressed')}
  width={250}
  height={50}
  backgroundColor="#F3971D"
  pressedColor="#FFD700"
  textColor="white"
  borderRadius={10}
  disabled={false}
  style={{ marginTop: 10 }}
/>

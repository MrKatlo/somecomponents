import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

export default function Input({
  value,
  onChangeText,
  placeholder = '',
  width = '100%',
  height = 44,
  borderColor = '#ccc',
  borderWidth = 1,
  borderRadius = 8,
  paddingHorizontal = 10,
  keyboardType = 'default',
  secureTextEntry = false,
  label = '',
  error = '',
  style,
}) {
  return (
    <View style={{ width, marginVertical: 8 }}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={[
          styles.input,
          {
            height,
            borderColor,
            borderWidth,
            borderRadius,
            paddingHorizontal,
          },
          style,
        ]}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
  },
  label: {
    marginBottom: 4,
    fontWeight: '600',
  },
  error: {
    marginTop: 4,
    color: 'red',
    fontSize: 12,
  },
});
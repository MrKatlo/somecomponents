import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Checkbox({
  label,
  checked,
  onChange,
  size = 24,
  color = '#F3971D',
  labelColor = 'black',
  style,
}) {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => onChange(!checked)}
      activeOpacity={0.8}
    >
      <View
        style={[
          styles.checkbox,
          { width: size, height: size, borderColor: color },
          checked && { backgroundColor: color },
        ]}
      />
      {label ? <Text style={[styles.label, { color: labelColor }]}>{label}</Text> : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    borderWidth: 2,
    borderRadius: 4,
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
  },
});
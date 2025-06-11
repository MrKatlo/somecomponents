import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

export default function Button({
  title,
  onPress,
  width = 200,
  height = 44,
  backgroundColor = '#F3971D',
  pressedColor = '#FFD700',
  textColor = 'white',
  borderRadius = 9,
  disabled = false,
  style,
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.btn,
        {
          width,
          height,
          borderRadius,
          backgroundColor: pressed ? pressedColor : backgroundColor,
          opacity: disabled ? 0.6 : 1,
        },
        style,
      ]}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
  },
});
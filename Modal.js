import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CustomModal({
  visible,
  onClose,
  title,
  children,
  width = '80%',
  height = 'auto',
  backgroundColor = 'white',
  titleColor = 'black',
  style,
}) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.backdrop}>
        <View style={[styles.modal, { width, backgroundColor }, style]}>
          {title ? <Text style={[styles.title, { color: titleColor }]}>{title}</Text> : null}
          <View style={{ flex: 1 }}>{children}</View>
          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            <Text style={{ color: 'white' }}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    padding: 20,
    borderRadius: 10,
    maxHeight: '80%',
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 12,
  },
  closeBtn: {
    backgroundColor: '#F3971D',
    padding: 12,
    borderRadius: 8,
    marginTop: 15,
    alignItems: 'center',
  },
});
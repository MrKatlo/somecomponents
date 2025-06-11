import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, Modal } from 'react-native';

export default function Select({
  options = [],
  selectedValue,
  onValueChange,
  width = 200,
  height = 44,
  placeholder = 'Select...',
  borderColor = '#ccc',
  borderRadius = 8,
  backgroundColor = 'white',
  textColor = 'black',
  style,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  const selectedLabel = options.find(opt => opt.value === selectedValue)?.label;

  return (
    <>
      <TouchableOpacity
        style={[
          styles.select,
          {
            width,
            height,
            borderColor,
            borderRadius,
            backgroundColor,
          },
          style,
        ]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{ color: selectedLabel ? textColor : '#888' }}>
          {selectedLabel || placeholder}
        </Text>
      </TouchableOpacity>

      <Modal transparent visible={modalVisible} animationType="slide">
        <TouchableOpacity
          style={styles.modalBackground}
          onPress={() => setModalVisible(false)}
          activeOpacity={1}
        >
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              keyExtractor={item => item.value.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => {
                    onValueChange(item.value);
                    setModalVisible(false);
                  }}
                >
                  <Text>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  select: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    marginHorizontal: 40,
    borderRadius: 8,
    maxHeight: '50%',
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
});
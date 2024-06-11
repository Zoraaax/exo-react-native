import { useState } from "react";
import { Text, Modal, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

const TodoModal = ({ isVisible, onClose, onAddItem }) => {
    const [inputValue, setInputValue] = useState('');

    const handleAddItem = () => {
        onAddItem(inputValue);
        setInputValue('');
    };

    return (
        <>
            <Modal visible={isVisible} animationType="slide">
                <View style={styles.container}>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Ajouter un article" 
                        value={inputValue} 
                        onChangeText={setInputValue} 
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={handleAddItem}>
                            <Text style={styles.buttonText}>Ajouter Article</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.closeButton]} onPress={onClose}>
                            <Text style={styles.buttonText}>Fermer</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 20,
    },
    button: {
        flex: 1,
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    closeButton: {
        backgroundColor: 'red',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    input: {
        fontSize: 20,
        padding: 10,
        borderWidth: 0.5,
        borderColor: '#4C4C4C',
        marginBottom: 10,
        borderRadius: 15,
        width: '80%'
    }
});

export default TodoModal;

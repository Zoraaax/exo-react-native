import { Button, FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import TodoModal from "./TodoModal";
import Ionicons from 'react-native-vector-icons/Ionicons';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    const deleteTodo = (indexToDelete) => {
        setTodos(todos.filter((_, index) => index !== indexToDelete));
    };

    const toggleModalVisibility = () => {
        setIsVisible(!isVisible);
    };

    const addItem = (item) => {
        if (item.trim().length > 0) {
            setTodos([...todos, item]);
        }
        toggleModalVisibility();
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.typography.title}>Ma liste de course :</Text>
            {todos.length > 0 ? (
                <FlatList
                    data={todos}
                    renderItem={({ item, index }) => (
                        <View style={styles.listItem}>
                            <Text style={styles.typography.text}>{item}</Text>
                            <Ionicons name="trash-outline" size={24} color="red" onPress={() => deleteTodo(index)} />
                        </View>
                    )}
                    keyExtractor={(_, index) => index.toString()}
                    style={{ marginVertical: 10 }}
                    showsVerticalScrollIndicator={false}
                />
            ) : (
                <Text style={styles.typography.error}>Aucun article dans la liste de course</Text>
            )}
            <Button title="Ajouter un article" onPress={toggleModalVisibility} />
            <TodoModal isVisible={isVisible} onAddItem={addItem} onClose={toggleModalVisibility} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 6,
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        width: '100%',
        marginVertical: 5,
    },
    typography: {
        title: {
            fontSize: 40,
            fontWeight: 'bold',
            color: '#4C4C4C',
        },
        text: {
            fontSize: 24,
            color: '#4C4C4C',
        },
        error: {
            fontSize: 24,
            fontWeight: '500',
            color: '#CC0000',
        },
    },
});

export default TodoList;

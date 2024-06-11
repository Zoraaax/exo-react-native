// import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';

// const Contact = () => {
//     return (
//         <SafeAreaView style={styles.container}>
//             <Image 
//                 source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
//                 style={styles.image}
//             />
//         <View>
//             <View style={styles.container.infos}>
//                 <Text style={styles.text}>Nom :</Text>
//                 <Text style={styles.text.bolded}>Capitaine</Text>
//             </View>
//             <View style={styles.container.infos}>
//                 <Text style={styles.text}>Prénom :</Text>
//                 <Text style={styles.text.bolded}>Haddock</Text>
//             </View>
//             <View style={styles.container.infos}>
//                 <Text style={styles.text}>Téléphone :</Text>
//                 <Text style={styles.text.bolded}>01.23.45.67.89</Text>
//             </View>
//             <View style={styles.container.infos}>
//                 <Text style={styles.text}>Adresse :</Text>
//                 <Text style={styles.text.bolded}>35 Rue des Pias 59200 Tourcoing</Text>
//             </View>
//             </View>
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#FEEAE1',
//         paddingHorizontal: 20,
//         infos: {
//             flexDirection: 'row',
//             flexWrap: 'wrap',
//             gap: 10,
//             alignItems: 'center',
//             marginVertical: 10,
//         }
//     },
//     image: {
//         width: 80,
//         height: 80,
//         borderRadius: 40,
//         marginBottom: 20
//     },
//     text: {
//         fontSize: 20,
//         color: '#1E1E1E',
//         bolded: {
//             color: '#1E1E1E',
//             fontWeight: 'bold'
//         }
//     }
// })

// export default Contact;
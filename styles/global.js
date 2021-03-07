import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
  },
  titleText:{
    fontWeight: 'bold',
    fontSize: 23,
    textAlign: 'center',
    color: '#222',
  }, 
  titleAuth:{   
    fontSize: 14,
    color: '#333',
  },
  paragraph:{
    marginVertical: 8,
    lineHeight: 16,
  },
  input:{
    borderColor: 'skyblue',
    borderWidth: 1,
    padding: 8,
    fontSize: 18,
    borderRadius: 6,
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
    textAlign: 'center',
  },
});

export const images ={
  ratings:{
    '1': require('../assets/rat-1.png'),
    '2': require('../assets/rat-2.png'),
    '3': require('../assets/rat-3.png'),
    '4': require('../assets/rat-4.png'),
    '5': require('../assets/rat-5.png'),
  }
}
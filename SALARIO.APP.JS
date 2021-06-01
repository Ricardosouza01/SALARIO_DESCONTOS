import React, {Component} from "react";
import { ImageBackground, StyleSheet, ViewStyleSheet, View, SafeAreaView, Text, TextInput,Imagem, Button, Alert, TouchableOpacity, Platfor } from "react-native";


export default class App extends Component <props>{


constructor(props){
  super(props)
  this.state={hrtrabalhadas: 0, ganha: 0, sbruto: 0, result: 0, resultimposto: 0,resultsliq:0, resultTexto:"",resultsindicato:0, resultinss: 0}
  this.calcular=this.calcular.bind(this)
 
}



calcular(){

    let sbruto = this.state.ganha*this.state.hrtrabalhadas
    let s = this.state
    s.result = sbruto
    this.setState(s)

    let imposto = (sbruto*(11/100))
    let s1 = this.state
    s1.resultimposto = imposto
    this.setState(s1)

    let inss = (sbruto*(8/100))
    let s2 = this.state
    s2.resultinss = inss
    this.setState(s2)

    let sindicato = (sbruto*(5/100))
    let s3 = this.state
    s3.resultsindicato = sindicato
    this.setState(s3)

    let liquido =  sbruto - (((this.state.resultimposto) + (this.state.resultsindicato) +
    (this.state.resultinss))) 
    let s4 = this.state 
    s4.resultsliq = liquido
    this.setState(s4)


   


 if(s.result <= 2380 ){
        s.resultTexto = "Você não precisa declarar imposto de renda!"
      } else if(s.result >= 2381){
      s.resultTexto = "Você precisa declarar imposto de renda!"
} 
};




 render(){
   return (
    <View style={styles.principal}>
      <TextInput style={styles.form} placeholder="Quanto você ganha por horas trabalhadas?" keyboardType="numbers-and-punctuation" onChangeText={(hrtrabalhadas)=>{this.setState({hrtrabalhadas})}}/>
      <TextInput style={styles.form} placeholder="Quantas horas trabalhadas no mês?" keyboardType="numbers-and-punctuation" onChangeText={(ganha)=>{this.setState({ganha})}}/>
      <TouchableOpacity style= {styles.bt} onPress={this.calcular}><Text>Calcular</Text></TouchableOpacity>

      <Text style={styles.result}>{this.state.resultsliq.toFixed(2)} </Text>
      <Text style={styles.result2}>{this.state.nome}{this.state.resultTexto} </Text>
      
    </View>
  )

}
};

const styles = StyleSheet.create({
   input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },


  principal:{
    width: 390,
    height: 450,
    alignItems:"center",
    justifyContent:"center",
    padding:30,
    marginBottom: 150,
    

  },

  form:{
    height: 50,
    widht: 330,
    padding: 10,
    fontSize: 15,
    color: "#333",
    backgroundColor: "rgba(250,250,250,0)",
    borderColor: "#fff",
    borderBottomWidth: 1,
    marginTop: 30,

  },

  bt:{
    width: 320,
    padding: 1,
    fontSize: 25,
    backgroundColor: "rgba(250,250,250,)",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,

  },

  result:{
  fontSize: 20,
  fontWeight: "bold",
  marginTop: 30,
  color: "#2C3A47",
  backgroundColor: "rgba(250,250,250,0)",
  borderColor: "#fff",
  borderBottomWidth: 1,
  marginTop: 20,
  },

  


});

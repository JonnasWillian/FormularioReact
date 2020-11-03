import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default ({route, navigaton}) => {
    const [user, setUser] = useState(route.params ? route.params : {} )
    const {dispatch} = useContext(UsersContext)

    return(
        <View style={style.form}>
            <Text>Name</Text>
            <TextInput
            style ={style.input}
            onChangeText = {name => setUser({...user, name})}
            placeholder = "Informe o Nome"
            value = {user.name}
            />

            <Text>Email</Text>
            <TextInput
            style ={style.input}
            onChangeText = {email=> setUser({...user, name})}
            placeholder = "Informe o E-mail"
            value = {user.email}
            />

            <Text>Url do avatar</Text>
            <TextInput
            style ={style.input}
            onChangeText = {avatarUrl=> setUser({...user, name})}
            placeholder = "Informe o Url do avatar"
            value = {user.avatarUrl}
            />

            <Button
                title = 'Salvar'
                onPress = {() => {
                    dispatch ({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    })
                    navigaton.goBack()
                }}
            />

        </View>

        
        
    )
}

const style =  StyleSheet.create({
    form:{
        padding: 12
    },

    input:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
    }
    
})
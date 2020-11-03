import { getActionFromState } from '@react-navigation/core'
import { func } from 'prop-types'
import React, { useContext } from 'react'
import { Alert, FlatList, View } from 'react-native'
import { Button, ListItem } from 'react-native-elements'
import UsersContext from './context/UsersContext'
import users from './data/users'

export default props => {

    const [state, dispatch] = useContext(UsersContext)

    function confirmUserDeletion (user) {
        Alert.alert('Exluir Usuário', 'Deseja excluir o usuário ?', [
            text = 'Sim',
            onPress () (
                dispatch({
                    type: "deleteUser",
                    payload: user,
                })
            )
        ],
        [
            text = 'Não'
        ])
    }

    function getAction (user) {
        return (
            <>
                <Button
                    onPress = {() => props.navigation.navigate('UserForm'), user}
                    type = 'clear'
                    icon={<icon name="edit" size={25} color = "orange"/>}
                />

                <Button
                    onPress = {() => confirmUserDeletion (user)}
                    type = 'clear'
                    icon={<icon name="delete" size={25} color = "red"/>}
                />
            </>
        )
    }

    function getUserItem({item: user}) {
    return (
        <ListItem
        leftAvatar = {{source: {uri: user.avatarUrl}}}
        key = {user.id}
        title = {user.name}
        subtitle={user.email}
        bottomDivider
        rightElement={getAction(user)}
        onPress = {() => props.navigation.navigate('UserForm')}
        >   
        </ListItem>
    )
    }
    return(

        <View>
            <FlatList>
                KeyExtractor = {users => user.id.toString()}
                data = {state.users}
                renderIten = {getUserItem}
            </FlatList>
        </View>

    )
}